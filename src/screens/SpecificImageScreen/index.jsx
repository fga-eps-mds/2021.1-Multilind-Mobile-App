import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GoBack, ImageContainer, TopBar, WordMeaning } from '../../components';
import styles from './styles';
import { ImageWordService } from '../../services';

export function SpecificImageScreen() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const word = route.params?.word;
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages() {
      const imagesResponse = await ImageWordService.getImageWords(
        word.id_palavra
      );
      setImages(imagesResponse);
    }
    getImages();
  }, []);

  const list = () =>
    images.map((image, index) => (
      <View
        key={image.url}
        style={
          word.length === 2 && index === 0
            ? styles.containerImage2
            : styles.containerImage
        }
      >
        <ImageContainer palavra={word.nome} image={image.download_url} />
      </View>
    ));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: insets.top - 15 }}>
        <GoBack />
        <TopBar>{word.nome}</TopBar>
      </View>
      <WordMeaning />
      <Text style={styles.title}>Imagens Relativas</Text>
      <SafeAreaView style={styles.container}>{list()}</SafeAreaView>
    </SafeAreaView>
  );
}
