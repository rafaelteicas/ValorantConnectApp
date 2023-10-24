import {useDimensions} from '../hooks/useDimensions';
import {StreamType} from '../streamTypes';

export function formatStreamThumb(data?: StreamType[]) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {height, width} = useDimensions();

  if (data) {
    for (var i = 0; i < data.length; i++) {
      data[i].thumbnailUrl = data[i].thumbnailUrl
        .replace('{width}', width.toString())
        .replace('{height}', height.toString());
    }
    return data;
  }
}
