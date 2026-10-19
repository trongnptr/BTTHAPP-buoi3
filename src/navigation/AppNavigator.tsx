import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types';

// Tabs
import HomeScreen from '../screens/tabs/HomeScreen';
import SubjectsScreen from '../screens/tabs/SubjectsScreen';
import ScheduleScreen from '../screens/tabs/ScheduleScreen';
import AssignmentsScreen from '../screens/tabs/AssignmentsScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';

// Details
import SubjectDetailScreen from '../screens/details/SubjectDetailScreen';
import SessionDetailScreen from '../screens/details/SessionDetailScreen'; // IMPORT MÀN HÌNH MỚI

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: { backgroundColor: '#0066cc' },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#0066cc',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any = 'home';
          if (route.name === 'Tổng quan') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Môn học') iconName = focused ? 'book' : 'book-outline';
          else if (route.name === 'Lịch học') iconName = focused ? 'calendar' : 'calendar-outline';
          else if (route.name === 'Bài tập') iconName = focused ? 'document-text' : 'document-text-outline';
          else if (route.name === 'Cá nhân') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Tổng quan" component={HomeScreen} />
      <Tab.Screen name="Môn học" component={SubjectsScreen} />
      <Tab.Screen name="Lịch học" component={ScheduleScreen} />
      <Tab.Screen name="Bài tập" component={AssignmentsScreen} />
      <Tab.Screen name="Cá nhân" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0066cc' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        
        {}
        <Stack.Screen 
          name="SubjectDetail" 
          component={SubjectDetailScreen} 
          options={{ 
            title: 'Chi tiết môn học',
            headerBackTitle: 'Back' 
          }} 
        />
        
        <Stack.Screen 
          name="SessionDetail" 
          component={SessionDetailScreen} 
          options={{ 
            title: 'Chi tiết buổi học',
            headerBackTitle: 'Back' 
          }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}