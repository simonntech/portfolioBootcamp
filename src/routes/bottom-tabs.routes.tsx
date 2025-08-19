import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SkillsScreen from "../screens/SkillsScreen";
import { BlurView } from "expo-blur";

const {Navigator, Screen} = createBottomTabNavigator();

export function BottomTabsRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown:false,
                headerStatusBarHeight: 50,
                tabBarStyle: {position: 'absolute'},
                tabBarBackground: () => (
                    <BlurView tint="light" intensity={50} style={StyleSheet.absoluteFill} />
                ),
            }}
        >
            <Screen 
                name="home"
                component={HomeScreen}
            />
            <Screen 
                name="skills"
                component={SkillsScreen}
            />
        </Navigator>
    )
}