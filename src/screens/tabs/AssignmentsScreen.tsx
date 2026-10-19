import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ASSIGNMENTS } from '../../data/mockData';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

export default function AssignmentsScreen() {
  const isFocused = useIsFocused();
  const [tasks, setTasks] = useState(ASSIGNMENTS);

  // Cập nhật lại giao diện bài tập mỗi khi quay lại tab này
  useEffect(() => {
    if (isFocused) setTasks([...ASSIGNMENTS]);
  }, [isFocused]);

  const toggleTask = (id: string) => {
    // 1. Sửa trực tiếp vào bộ nhớ toàn cục để màn Tổng quan nhận được
    const taskIndex = ASSIGNMENTS.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
      ASSIGNMENTS[taskIndex].isCompleted = !ASSIGNMENTS[taskIndex].isCompleted;
    }
    // 2. Cập nhật state nội bộ để hiển thị ngay hiệu ứng checkmark
    setTasks([...ASSIGNMENTS]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, item.isCompleted && styles.cardCompleted]}>
            <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.checkBtn}>
              <Ionicons 
                name={item.isCompleted ? "checkmark-circle" : "ellipse-outline"} 
                size={28} 
                color={item.isCompleted ? "#2ecc71" : "#ccc"} 
              />
            </TouchableOpacity>
            <View style={styles.info}>
              <Text style={[styles.title, item.isCompleted && styles.textCompleted]}>{item.title}</Text>
              <Text style={styles.sub}>{item.subjectName}</Text>
              <Text style={styles.date}>Hạn nộp: {item.dueDate}</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: item.isCompleted ? '#e8f8f5' : '#fdedec' }]}>
              <Text style={[styles.badgeText, { color: item.isCompleted ? '#2ecc71' : '#e74c3c' }]}>
                {item.isCompleted ? 'Đã nộp' : 'Chưa nộp'}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f8', padding: 16 },
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, alignItems: 'center', elevation: 2 },
  cardCompleted: { opacity: 0.7 },
  checkBtn: { marginRight: 16 },
  info: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  textCompleted: { textDecorationLine: 'line-through', color: '#888' },
  sub: { fontSize: 14, color: '#666', marginTop: 4 },
  date: { fontSize: 13, color: '#e74c3c', marginTop: 4 },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  badgeText: { fontSize: 12, fontWeight: 'bold' }
});