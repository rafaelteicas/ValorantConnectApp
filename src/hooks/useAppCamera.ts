import {useState} from 'react';
import {Alert} from 'react-native';

import ImagePicker, {Image} from 'react-native-image-crop-picker';

export function useAppCamera() {
  const [image, setImage] = useState<string>();
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<Image>();

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
        onDismiss: () => {},
      },
    );
  }

  async function galleryPicker() {
    setLoading(true);
    try {
      ImagePicker.openPicker({mediaType: 'photo', cropping: true}).then(
        data => {
          setImage(data.path);
          setResponse(data);
        },
      );
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function cameraPicker() {
    setLoading(true);
    try {
      ImagePicker.openCamera({mediaType: 'photo', cropping: true}).then(
        data => {
          setImage(data.path);
          setResponse(data);
        },
      );
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    image,
    loading,
    response,
    error,
    imagePicker,
  };
}
