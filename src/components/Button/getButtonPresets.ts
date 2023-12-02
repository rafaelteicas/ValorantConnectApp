import {ButtonProps} from './Button';

export type Presets = 'primary' | 'outline';

export const getButtonPresets: Record<Presets, ButtonProps> = {
  primary: {
    backgroundColor: 'primary',
    borderRadius: 'b12',
  },
  outline: {
    borderWidth: 1,
    borderColor: 'primary',
    borderRadius: 'b12',
  },
};
