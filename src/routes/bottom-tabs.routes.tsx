import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SkillsScreen from "../screens/SkillsScreen";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                headerStatusBarHeight: 50,
                tabBarStyle: { position: 'absolute' },
                tabBarBackground: () => (
                    <BlurView tint="light" intensity={40} style={StyleSheet.absoluteFill} />
                ),
                tabBarLabelStyle: {
                    height: 150
                }
            }}
        >
            <Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: 'Minhas Redes',
                    tabBarLabelStyle: {
                        fontSize: 16,
                        color: 'white'
                    },
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="link"
                            color={'white'}
                            size={25}
                        />
                    )
                }}
            />
            <Screen
                name="skills"
                component={SkillsScreen}
                options={{
                    title: 'Minhas Habilidades',
                    tabBarLabelStyle: {
                        fontSize: 16,
                        color: 'white'
                    },
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="rocket-launch"
                            color={'white'}
                            size={25}
                        />
                    )
                }}
            />
        </Navigator>
    )
}