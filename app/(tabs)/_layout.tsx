import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home-outline" size={18} />,
          tabBarStyle: { paddingBottom: 5 },
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => <Ionicons name="compass-outline" size={18} />,
          tabBarStyle: { paddingBottom: 5 },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: () => <Ionicons name="person-outline" size={18} />,
          tabBarStyle: { paddingBottom: 5 },
        }}
      />

      {/* for this tab we dont want it to be displayed among tabs  */}
      <Tabs.Screen name="just" options={{ href: null }} />
    </Tabs>
  );
}
