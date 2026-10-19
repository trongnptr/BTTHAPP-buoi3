import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type SessionDetailRouteProp = RouteProp<RootStackParamList, 'SessionDetail'>;

export default function SessionDetailScreen() {
  const route = useRoute<SessionDetailRouteProp>();
  const { session } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Ionicons name="calendar" size={40} color="#fff" />
        </View>
        <Text style={styles.title}>{session.subjectName}</Text>
        <View style={styles.dateBadge}>
          <Text style={styles.dateText}>{session.date}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <DetailRow icon="time" label="Thời gian" value={session.time} />
        <DetailRow icon="location" label="Phòng học" value={session.room} />
        <DetailRow icon="person" label="Giảng viên" value={session.teacher} />
        <DetailRow icon="people" label="Sĩ số lớp" value={`${session.capacity} sinh viên`} />
      </View>
    </ScrollView>
  );
}

const DetailRow = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Ionicons name={icon} size={22} color="#0066cc" />
    </View>
    <View style={styles.rowInfo}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f8' },
  header: { 
    backgroundColor: '#0066cc', 
    padding: 30, 
    alignItems: 'center', 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30 
  },
  iconWrapper: { 
    width: 80, height: 80, 
    borderRadius: 40, 
    backgroundColor: 'rgba(255,255,255,0.2)', 
    justifyContent: 'center', alignItems: 'center', 
    marginBottom: 16 
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 12 },
  dateBadge: { 
    backgroundColor: '#fff', 
    paddingHorizontal: 16, 
    paddingVertical: 6, 
    borderRadius: 20 
  },
  dateText: { color: '#0066cc', fontWeight: 'bold', fontSize: 16 },
  card: { backgroundColor: '#fff', margin: 20, borderRadius: 12, padding: 16, elevation: 4 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  iconContainer: { 
    width: 40, height: 40, 
    borderRadius: 20, 
    backgroundColor: '#e6f0fa', 
    justifyContent: 'center', alignItems: 'center', 
    marginRight: 16 
  },
  rowInfo: { flex: 1 },
  label: { fontSize: 13, color: '#888', marginBottom: 2 },
  value: { fontSize: 16, color: '#333', fontWeight: '500' }
});