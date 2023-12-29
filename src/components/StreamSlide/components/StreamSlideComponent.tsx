// import React from 'react';

// import {ImageBackground, ListRenderItemInfo} from 'react-native';

// import {StreamType, useDimensions} from '@domain';

// import {Box} from '../../Box/Box';
// import {Text} from '../../Text/Text';

// export function StreamSlideComponent({item}: ListRenderItemInfo<StreamType>) {
//   const {height, width} = useDimensions(300, 200);

//   return (
//     <Box padding="s12" borderRadius="b12">
//       <ImageBackground
//         source={{uri: item.thumbnailUrl}}
//         style={{
//           width,
//           height,
//           justifyContent: 'center',
//         }}>
//         <Text textAlign="center" preset="heading" color="primary">
//           {item.userLogin}
//         </Text>
//       </ImageBackground>
//     </Box>
//   );
// }
