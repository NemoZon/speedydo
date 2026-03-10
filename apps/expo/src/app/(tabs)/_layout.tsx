import { fonts, Theme } from '@/src/shared/config';
import { AccountIcon, CrownIcon, HomeIcon } from '@/src/shared/ui';
import { HeaderTitle } from '@/src/widgets/navigation';
import { useTheme } from '@shopify/restyle';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  const theme = useTheme<Theme>();

  return (
    <Tabs
      screenOptions={{
        sceneStyle: { backgroundColor: theme.colors.secondary },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: theme.colors.primary,
          borderBottomColor: theme.colors.onPrimary10,
          borderBottomWidth: 1,
        },
        headerTintColor: theme.colors.onSecondary,
        headerTitleStyle: {
          color: theme.colors.onSecondary,
          fontFamily: fonts.Inter_600SemiBold,
        },
        headerTitle: HeaderTitle,
        headerShadowVisible: false,
        tabBarActiveTintColor: theme.colors.onSecondary,
        tabBarInactiveTintColor: theme.colors.onSecondary50,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          borderTopColor: theme.colors.primary30,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.Inter_400Regular,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          tabBarIcon: ({ focused, size }) => (
            <HomeIcon
              size={size}
              color={focused ? 'onSecondary' : 'onSecondary50'}
              isOutline={!focused}
              isCircle={true}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Аккаунт',
          tabBarIcon: ({ focused, size }) => (
            <AccountIcon
              size={size}
              color={focused ? 'onSecondary' : 'onSecondary50'}
              isOutline={!focused}
              isCircle={true}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="rating"
        options={{
          title: 'Рейтинг',
          tabBarIcon: ({ focused, size }) => (
            <CrownIcon
              size={size}
              color={focused ? 'onSecondary' : 'onSecondary50'}
              isOutline={!focused}
              isCircle={true}
            />
          ),
        }}
      />
    </Tabs>
  );
}
