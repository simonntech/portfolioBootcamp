import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SkillsScreen from "../screens/SkillsScreen";

const {Navigator, Screen} = createBottomTabNavigator();

export function BottomTabsRoutes() {
    return (
        <Navigator>
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