import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Alice',
      status: 'Working remotely',
      imageUrl: 'https://randomuser.me/api/portraits/women/72.jpg',
    },
    {
      uid: 2,
      name: 'Bob',
      status: 'In a meeting',
      imageUrl: 'https://randomuser.me/api/portraits/men/39.jpg',
    },
    {
      uid: 3,
      name: 'Charlie',
      status: 'On vacation',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      uid: 4,
      name: 'David',
      status: 'Available',
      imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    {
      uid: 5,
      name: 'Eva',
      status: 'Busy',
      imageUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
    },
    {
      uid: 6,
      name: 'Frank',
      status: 'Offline',
      imageUrl: 'https://randomuser.me/api/portraits/men/0.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#C0C0C0',
    padding: 4,
    borderRadius: 6,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#36454F',
  },
  userStatus: {
    fontSize: 12,
    color: '#818589',
  },
});
