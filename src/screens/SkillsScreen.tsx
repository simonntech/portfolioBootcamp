import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import profileImg from '../../assets/perfiltech.jpg'

export default function SkillsScreen() {
    return (
        <View>
            <Image
                source={profileImg}
                width={100}
            />
            <Text>Habilidades</Text>
            <StatusBar></StatusBar>
        </View>
    )
}