import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useGetProductList } from '../services/bbl-hook'
import type { Product } from '../services/bbl-service'


export const HomeScreen = () => {

  const {
    data: productList,
  }= useGetProductList();

  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('productFavorite')
      .then(stored => setFavoriteIds(stored ? JSON.parse(stored) : []))
      .catch(() => setFavoriteIds([]));
  }, []);

  const saveFavorite = async (item: Product) => {
    try {
      const favList = favoriteIds.includes(item.id)
        ? favoriteIds.filter(id => id !== item.id)
        : [...favoriteIds, item.id];
      setFavoriteIds(favList);
      await AsyncStorage.setItem('productFavorite', JSON.stringify(favList));
    } catch (e) {
      console.error('Failed to save the data to the storage');
    }
  };


  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.productContainer}>
      <TouchableOpacity onPress={() => saveFavorite(item)}>
        {/* {item.image  && <Image
          source={require(item.image)}
        />} */}
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>number of Favorite {favoriteIds.length}</Text>
      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  productContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 8
  },
});

export default HomeScreen;
