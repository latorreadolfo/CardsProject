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
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Notre Dame Basilique</Text>
          <Text style={styles.cardLabel}>Montreal, QC</Text>
          <Text style={styles.cardDescription}>
            Notre-Dame Basilica (French: Basilique Notre-Dame), is a basilica in
            the historic district of Old Montreal, in Montreal, Quebec, Canada.
            The church is located at 110 Notre-Dame Street West, at the corner
            of Saint Sulpice Street. It is located next to the Saint-Sulpice
            Seminary and faces the Place d'Armes square.
          </Text>
          <Text style={styles.cardFooter}>📍 12 min away</Text>
        </View>
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
    width: 370,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#C0C0C0',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    width: 370,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#36454F',
    fontSize: 12,
    marginBottom: 6,
  },
  cardFooter: {
    color: '#000000',
  },
});
