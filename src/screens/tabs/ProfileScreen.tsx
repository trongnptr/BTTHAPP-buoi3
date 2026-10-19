import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { STUDENT_INFO } from '../../data/mockData';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [name, setName] = useState(STUDENT_INFO.name);
  const [email, setEmail] = useState(STUDENT_INFO.email);
  const [phone, setPhone] = useState(STUDENT_INFO.phone);

  const handleUpdate = () => {
    Alert.alert("Thành công", "Đã cập nhật thông tin cá nhân!");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Khối hiển thị thông tin cố định (Mã SV, Lớp, Ngành) */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>PT</Text>
        </View>
        <Text style={styles.studentId}>{STUDENT_INFO.id}</Text>
        <Text style={styles.major}>{STUDENT_INFO.class}</Text>
        <Text style={styles.majorDetail}>{STUDENT_INFO.major}</Text>
      </View>

      {/* Form chỉnh sửa thông tin */}
      <View style={styles.form}>
        <Text style={styles.label}>Họ và tên</Text>
        <TextInput 
          style={styles.input} 
          value={name} 
          onChangeText={setName} 
        />

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input} 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address" 
        />

        <Text style={styles.label}>Số điện thoại</Text>
        <TextInput 
          style={styles.input} 
          value={phone} 
          onChangeText={setPhone} 
          keyboardType="phone-pad" 
        />

        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Ionicons name="save-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Cập nhật thông tin</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f8' },
  header: { 
    backgroundColor: '#0066cc', 
    alignItems: 'center', 
    paddingVertical: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20
  },
  avatar: { 
    width: 80, height: 80, 
    borderRadius: 40, 
    backgroundColor: '#fff', 
    justifyContent: 'center', alignItems: 'center', 
    marginBottom: 12,
    elevation: 5
  },
  avatarText: { fontSize: 28, fontWeight: 'bold', color: '#0066cc' },
  studentId: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  major: { fontSize: 16, color: '#e0e0e0', fontWeight: '500' },
  majorDetail: { fontSize: 14, color: '#e0e0e0', marginTop: 4 },
  form: { paddingHorizontal: 20 },
  label: { fontSize: 14, color: '#666', marginBottom: 6, fontWeight: '500' },
  input: { 
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 8, 
    paddingHorizontal: 12, 
    height: 48, 
    fontSize: 16, 
    marginBottom: 16 
  },
  button: { 
    flexDirection: 'row',
    backgroundColor: '#0066cc', 
    height: 50, 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});