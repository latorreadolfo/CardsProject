import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/notre-dame-montreal-quebec-brendan-reals.jpg',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    marginTop: 20,
    alignItems: 'center',
  },
  cardElevated: {
    elevation: 4,
  },
  cardImage: {
    height: 300,
    width: 380,
    borderRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
