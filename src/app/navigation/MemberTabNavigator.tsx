import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../../features/member/HomeScreen';
import MyQRScreen from '../../features/member/MyQRScreen';
import FitnessScreen from '../../features/member/FitnessScreen';
import SpaceScreen from '../../features/member/SpaceScreen';
import ProfileScreen from '../../features/member/ProfileScreen';
import { MemberTabParamList } from '../../types';
import { colors } from '../../theme';

const Tab = createBottomTabNavigator<MemberTabParamList>();

const TAB_ICONS: Record<keyof MemberTabParamList, string> = {
  Home: '⌂',
  MyQR: '▣',
  Fitness: '◍',
  Space: '⊞',
  Profile: '◉',
};

export function MemberTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.Surface,
          borderTopColor: colors.Border,
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: colors.Accent,
        tabBarInactiveTintColor: colors.TextSecondary,
        tabBarLabelStyle: {
          fontFamily: 'DMSans_500Medium',
          fontSize: 10,
          marginTop: -2,
        },
        tabBarIcon: ({ color }) => (
          <Text style={{ color, fontSize: 20 }}>
            {TAB_ICONS[route.name as keyof MemberTabParamList]}
          </Text>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyQR" component={MyQRScreen} options={{ title: 'My QR' }} />
      <Tab.Screen name="Fitness" component={FitnessScreen} />
      <Tab.Screen name="Space" component={SpaceScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
