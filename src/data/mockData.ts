import { Subject, Session, Assignment } from '../types';

export const STUDENT_INFO = {
  id: 'B23DCCC162',
  name: 'Nguyễn Phú Trọng',
  class: 'D23CQCC01-B',
  major: 'Công nghệ thông tin - Định hướng ứng dụng',
  email: 'trongokeconde@gmail.com',
  phone: '0000000000',
};

export const SUBJECTS: Subject[] = [
  { id: '1', code: 'IT001', name: 'Kiến trúc phần mềm', credits: 3, teacher: 'TS. Nguyễn Văn A' },
  { id: '2', code: 'IT002', name: 'Lập trình di động', credits: 3, teacher: 'ThS. Trần Thị B' },
  { id: '3', code: 'IT003', name: 'Phân tích nghiệp vụ', credits: 2, teacher: 'TS. Lê Văn C' },
  { id: '4', code: 'IT004', name: 'Mạng máy tính', credits: 3, teacher: 'ThS. Phạm Văn D' },
];

export const SCHEDULE: Session[] = [
  { id: '1', subjectName: 'Kiến trúc phần mềm', time: '07:00 - 09:30', room: 'Phòng 301 - Tòa A', date: 'Thứ 2', capacity: 65, teacher: 'TS. Nguyễn Văn A' },
  { id: '2', subjectName: 'Lập trình di động', time: '09:45 - 12:15', room: 'Phòng Lab 2 - Tòa B', date: 'Thứ 3', capacity: 40, teacher: 'ThS. Trần Thị B' },
  { id: '3', subjectName: 'Mạng máy tính', time: '13:00 - 15:30', room: 'Phòng 405 - Tòa A', date: 'Thứ 4', capacity: 55, teacher: 'ThS. Phạm Văn D' },
];

export const ASSIGNMENTS: Assignment[] = [
  { id: '1', title: 'Báo cáo giữa kỳ', subjectName: 'Kiến trúc phần mềm', dueDate: '25/10/2026', isCompleted: false },
  { id: '2', title: 'Đồ án React Native', subjectName: 'Lập trình di động', dueDate: '30/10/2026', isCompleted: false },
  { id: '3', title: 'Cấu hình Router OSPF', subjectName: 'Mạng máy tính', dueDate: '20/10/2026', isCompleted: true },
];