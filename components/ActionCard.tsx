import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.blogCard}>Visit Paraguay</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Our Suggestion:</Text>
        </View>
        <Image
          source={{
            uri: 'https://www.visitparaguay.net/wp-content/uploads/2020/01/Attractions-in-Paraguay.jpg',
          }}
          style={styles.imageBlog}
        />
        <View>
          <Text numberOfLines={3} style={styles.descriptionText}>
            The Jesuit missions among the Guaraní were a type of settlement for
            the Guaraní people ("Indians" or "Indios") in an area straddling the
            borders of present-day Argentina, Brazil and Paraguay (the triple
            frontier). The missions were established by the Jesuit Order of the
            Catholic Church early in the 17th century and ended in the late 18th
            century after the expulsion of the Jesuit order from the Americas.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://en.m.wikipedia.org/wiki/Jesuit_missions_among_the_Guaran%C3%AD#Jesuit_reductions_by_country',
              )
            }>
            <Text style={styles.footerText}> Read More </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blogCard: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 370,
    height: 340,
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
  headingContainer: {
    padding: 8,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    color: '#000',
  },
  imageBlog: {
    height: 200,
    marginBottom: 8,
  },
  footerContainer: {
    padding: 8,
    alignItems: 'center',
  },
  descriptionText: {
    margin: 6,
    fontSize: 12,
    color: '#36454F',
  },
  footerText: {
    color: '#000',
    backgroundColor: '#E5E4E2',
    padding: 2,
    borderRadius: 4,
  },
});
