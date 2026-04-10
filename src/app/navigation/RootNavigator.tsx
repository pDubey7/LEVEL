import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../../store/useAuthStore';
import { AuthStack } from './AuthStack';
import { OwnerTabNavigator } from './OwnerTabNavigator';
import { MemberTabNavigator } from './MemberTabNavigator';
import { colors } from '../../theme';

const Root = createNativeStackNavigator();

function LoadingScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.Background, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator color={colors.Primary} size="large" />
    </View>
  );
}

export function RootNavigator() {
  const { user, role, isLoading } = useAuthStore();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Root.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      {user === null ? (
        <Root.Screen name="AuthStack" component={AuthStack} />
      ) : role === 'owner' ? (
        <Root.Screen name="OwnerApp" component={OwnerTabNavigator} />
      ) : (
        <Root.Screen name="MemberApp" component={MemberTabNavigator} />
      )}
    </Root.Navigator>
  );
}
