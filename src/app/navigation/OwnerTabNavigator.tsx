import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import DashboardScreen from '../../features/owner/DashboardScreen';
import MembersScreen from '../../features/owner/MembersScreen';
import PaymentsScreen from '../../features/owner/PaymentsScreen';
import SpaceScreen from '../../features/owner/SpaceScreen';
import ProfileScreen from '../../features/owner/ProfileScreen';
import { OwnerTabParamList } from '../../types';
import { colors, typography } from '../../theme';

const Tab = createBottomTabNavigator<OwnerTabParamList>();

// Minimal icon labels rendered as text glyphs until a vector icon lib is wired up
const TAB_ICONS: Record<keyof OwnerTabParamList, string> = {
  Dashboard: '◈',
  Members: '◎',
  Payments: '₹',
  Space: '⊞',
  Profile: '◉',
};

export function OwnerTabNavigator() {
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
        tabBarActiveTintColor: colors.Primary,
        tabBarInactiveTintColor: colors.TextSecondary,
        tabBarLabelStyle: {
          fontFamily: 'DMSans_500Medium',
          fontSize: 10,
          marginTop: -2,
        },
        tabBarIcon: ({ color }) => (
          <Text style={{ color, fontSize: 20 }}>
            {TAB_ICONS[route.name as keyof OwnerTabParamList]}
          </Text>
        ),
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Members" component={MembersScreen} />
      <Tab.Screen name="Payments" component={PaymentsScreen} />
      <Tab.Screen name="Space" component={SpaceScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
