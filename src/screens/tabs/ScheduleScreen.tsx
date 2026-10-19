import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SCHEDULE } from '../../data/mockData';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

export default function ScheduleScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = (sessionItem: any) => {
    // Chuyển hướng sang màn hình Chi tiết buổi học (SessionDetail)
    navigation.navigate('SessionDetail', { session: sessionItem });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={SCHEDULE}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            activeOpacity={0.7} 
            onPress={() => handlePress(item)}
          >
            <View style={styles.dateBox}>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.subject}>{item.subjectName}</Text>
              <View style={styles.row}>
                <Ionicons name="time-outline" size={16} color="#666" style={styles.icon} />
                <Text style={styles.detail}>{item.time}</Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="location-outline" size={16} color="#666" style={styles.icon} />
                <Text style={styles.detail}>{item.room}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f8', padding: 16 },
  card: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    borderRadius: 12, 
    marginBottom: 16, 
    elevation: 3,
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 2 },
    overflow: 'hidden'
  },
  dateBox: { 
    backgroundColor: '#0066cc', 
    width: 80, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10
  },
  dateText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  info: { flex: 1, padding: 16 },
  subject: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  icon: { marginRight: 8 },
  detail: { fontSize: 14, color: '#555' }
});