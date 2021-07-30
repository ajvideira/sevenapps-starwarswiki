import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';
import { BarItem, BottomBarContainer } from './styles';
import { Title } from '../../atoms/Title';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../styles/theme';

const routeIcons: {
  [key: string]: React.ComponentProps<typeof Ionicons>['name'];
} = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorites: 'heart-outline',
};

export const BottomBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <BottomBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = (
          options?.tabBarLabel
            ? options?.tabBarLabel
            : options?.title || route.name
        ) as string;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BarItem
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          >
            <Ionicons
              name={routeIcons[route.name]}
              color={isFocused ? theme.colors.red : theme.colors.white}
              size={theme.metrics.px(20)}
            />
            <Title
              font="semiBold"
              size={10}
              color={isFocused ? 'red' : 'white'}
            >
              {label}
            </Title>
          </BarItem>
        );
      })}
    </BottomBarContainer>
  );
};