import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type AntDesignIconName = "home" | "search1" | "plussquareo" | "playcircleo" | "user";

interface Tab {
  icon: AntDesignIconName;
  name: string;
}

const TabIcon: React.FC<Tab> = ({ icon, name }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", gap: 8 }}>
      <AntDesign name={icon} size={24} color="white" />
    </View>
  );
};

const TabLayout: React.FC = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#000",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 48,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon icon="home" name="Home" />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon icon="search1" name="Search" />,
          }}
        />
        <Tabs.Screen
          name="posting"
          options={{
            title: "Post",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon icon="plussquareo" name="Post" />,
          }}
        />
        <Tabs.Screen
          name="reels"
          options={{
            title: "Reels",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon icon="playcircleo" name="Reels" />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon icon="user" name="Profile" />,
          }}
        />
      </Tabs>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;
