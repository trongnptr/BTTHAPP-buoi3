import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { STUDENT_INFO, SUBJECTS, ASSIGNMENTS } from '../../data/mockData';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native'; // Thêm Hook này

export default function HomeScreen() {
  const isFocused = useIsFocused(); // Hook này kích hoạt render lại mỗi khi màn hình được hiển thị

  // Do màn hình render lại, hàm filter này sẽ lấy được danh sách mới nhất
  const pendingTasks = ASSIGNMENTS.filter(a => !a.isCompleted);

  return (
    <ScrollView style={styles.container}>
      {/* Header Info */}
      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>PT</Text>
        </View>
        <View>
          <Text style={styles.studentName}>{STUDENT_INFO.name}</Text>
          <Text style={styles.studentId}>{STUDENT_INFO.id}</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{SUBJECTS.length}</Text>
          <Text style={styles.statLabel}>Môn đang học</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statValue, { color: '#e74c3c' }]}>{pendingTasks.length}</Text>
          <Text style={styles.statLabel}>Bài tập sắp hạn</Text>
        </View>
      </View>

      {/* Upcoming Assignments */}
      <Text style={styles.sectionTitle}>Bài tập cần làm gấp</Text>
      {pendingTasks.map(task => (
        <View key={task.id} style={styles.taskCard}>
          <Ionicons name="warning" size={24} color="#e74c3c" />
          <View style={styles.taskInfo}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskSub}>Hạn nộp: {task.dueDate}</Text>
          </View>
        </View>
      ))}
      {pendingTasks.length === 0 && (
        <Text style={{ textAlign: 'center', color: '#888', marginTop: 10 }}>Bạn đã hoàn thành tất cả bài tập!</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f8', padding: 16 },
  headerCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 16, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 2 } },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#0066cc', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  avatarText: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  studentName: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  studentId: { fontSize: 16, color: '#666', marginTop: 4 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  statBox: { flex: 1, backgroundColor: '#fff', padding: 16, borderRadius: 12, alignItems: 'center', marginHorizontal: 4, elevation: 2 },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#0066cc' },
  statLabel: { fontSize: 14, color: '#666', marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#333' },
  taskCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 12, borderLeftWidth: 4, borderLeftColor: '#e74c3c' },
  taskInfo: { marginLeft: 12 },
  taskTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  taskSub: { fontSize: 14, color: '#666', marginTop: 4 }
});