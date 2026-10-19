import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type SubjectDetailRouteProp = RouteProp<RootStackParamList, 'SubjectDetail'>;

export default function SubjectDetailScreen() {
  const route = useRoute<SubjectDetailRouteProp>();
  const { subject } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <Ionicons name="book" size={40} color="#fff" />
        </View>
        <Text style={styles.title}>{subject.name}</Text>
        <Text style={styles.code}>{subject.code}</Text>
      </View>

      <View style={styles.card}>
        <DetailRow icon="person" label="Giảng viên" value={subject.teacher} />
        <DetailRow icon="ribbon" label="Số tín chỉ" value={`${subject.credits} tín chỉ`} />
        <DetailRow icon="school" label="Khoa/Viện" value="Công nghệ thông tin" />
      </View>
    </View>
  );
}

const DetailRow = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <View style={styles.row}>
    <Ionicons name={icon} size={24} color="#0066cc" />
    <View style={styles.rowInfo}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f8' },
  header: { backgroundColor: '#0066cc', padding: 30, alignItems: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  iconWrapper: { width: 80, height: 80, borderRadius: 40, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  code: { fontSize: 16, color: '#e0e0e0', marginTop: 8 },
  card: { backgroundColor: '#fff', margin: 20, borderRadius: 12, padding: 16, elevation: 4 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  rowInfo: { marginLeft: 16 },
  label: { fontSize: 14, color: '#888' },
  value: { fontSize: 16, color: '#333', fontWeight: '500', marginTop: 2 }
});