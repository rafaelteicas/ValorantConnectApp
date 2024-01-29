import React from 'react';

import {render, screen} from 'test-utils';

import {UserAvatar} from '../UserAvatar';

let profileImageUri: string | null = 'any_uri';

function renderUserAvatar() {
  render(<UserAvatar profileImage={profileImageUri!!} />);
  const imageComponent = screen.queryByTestId('image');
  const defaultAvatarComponent = screen.queryByTestId('default-avatar');
  return {
    imageComponent,
    defaultAvatarComponent,
  };
}

describe('<UserAvatar />', () => {
  it('should render Image component if user has a profileImage uri', () => {
    const {imageComponent} = renderUserAvatar();
    expect(imageComponent).toBeTruthy();
  });
  it('should render DefaultAvatar component if user has not a profileImage uri', () => {
    profileImageUri = null;
    const {defaultAvatarComponent, imageComponent} = renderUserAvatar();
    expect(imageComponent).toBeFalsy();
    expect(defaultAvatarComponent).toBeTruthy();
  });
});
