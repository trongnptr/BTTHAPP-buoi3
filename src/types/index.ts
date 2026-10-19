export interface Subject {
  id: string;
  code: string;
  name: string;
  credits: number;
  teacher: string;
}

export interface Session {
  id: string;
  subjectName: string;
  time: string;
  room: string;
  date: string;
  capacity: number;
  teacher: string;
}

export interface Assignment {
  id: string;
  title: string;
  subjectName: string;
  dueDate: string;
  isCompleted: boolean;
}

export type RootStackParamList = {
  MainTabs: undefined;
  SubjectDetail: { subject: Subject };
  SessionDetail: { session: Session };
  AssignmentDetail: { assignment: Assignment };
};