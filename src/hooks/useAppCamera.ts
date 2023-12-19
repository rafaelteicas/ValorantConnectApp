import {useState} from 'react';
import {Alert} from 'react-native';

import {
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

export function useAppCamera() {
  const [image, setImage] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  function imagePicker() {
    Alert.alert(
      'Selecione',
      'Informe de onde voce quer pegar a foto',
      [
        {
          text: 'Galeria',
          onPress: () => galleryPicker(),
        },
        {
          text: 'Camera',
          onPress: () => cameraPicker(),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('tratar depois'),
      },
    );
  }

  async function galleryPicker() {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    try {
      setLoading(true);
      await launchImageLibrary(options).then((imageData: any) => {
        setImage(imageData.assets[0].uri);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function cameraPicker() {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    try {
      setLoading(true);
      await launchCamera(options).then((imageData: any) => {
        setImage(imageData.assets[0].uri);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  return {
    image,
    loading,
    imagePicker,
  };
}
