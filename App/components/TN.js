import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

// 탭별 타이틀 및 아이콘 설정
const TAB_TITLES = {
  홈: "홈",
  커뮤니티: "커뮤니티",
  "동네 지도": "동네 지도",
  채팅: "채팅",
  "내 게시판": "내 게시판",
};

const ICONS = {
  홈: { focused: "home", unfocused: "home-outline" },
  커뮤니티: { focused: "people", unfocused: "people-outline" },
  "동네 지도": { focused: "map", unfocused: "map-outline" },
  채팅: { focused: "chatbubble", unfocused: "chatbubble-outline" },
  "내 게시판": { focused: "clipboard", unfocused: "clipboard-outline" },
};

const TN = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // 탭 스타일 설정
        headerShown: true, // 헤더 표시 여부
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = focused
            ? ICONS[route.name]?.focused || "help-circle"
            : ICONS[route.name]?.unfocused || "help-circle-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green", // 활성화 탭 색상
        tabBarInactiveTintColor: "gray", // 비활성화 탭 색상
      })}
    >
      {/* 각 탭 (화면 연결 없음) */}
      <Tab.Screen
        name="홈"
        component={() => null} // 연결된 화면 없음
        options={{
          tabBarLabel: TAB_TITLES["홈"], // 탭 타이틀
        }}
      />
      <Tab.Screen
        name="커뮤니티"
        component={() => null}
        options={{
          tabBarLabel: TAB_TITLES["커뮤니티"],
        }}
      />
      <Tab.Screen
        name="동네 지도"
        component={() => null}
        options={{
          tabBarLabel: TAB_TITLES["동네 지도"],
        }}
      />
      <Tab.Screen
        name="채팅"
        component={() => null}
        options={{
          tabBarLabel: TAB_TITLES["채팅"],
        }}
      />
      <Tab.Screen
        name="내 게시판"
        component={() => null}
        options={{
          tabBarLabel: TAB_TITLES["내 게시판"],
        }}
      />
    </Tab.Navigator>
  );
};

export default TN;
