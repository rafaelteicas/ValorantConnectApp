// import React from 'react';

// import {FlatList} from 'react-native';

// import {useGetStreams} from '@domain';

// import {Box} from '../Box/Box';
// import {Text} from '../Text/Text';

// import {StreamSlideComponent} from './components/StreamSlideComponent';

// export function StreamSlide() {
//   const {item} = useGetStreams();

//   return (
//     <Box alignItems="center">
//       <Text preset="title" color="primary">
//         AO VIVO
//       </Text>
//       <FlatList
//         horizontal
//         keyExtractor={item => item.id}
//         data={item.data}
//         renderItem={items => <StreamSlideComponent {...items} />}
//       />
//     </Box>
//   );
// }
