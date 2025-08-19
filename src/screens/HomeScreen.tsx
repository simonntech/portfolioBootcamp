import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import profileImg from '../../assets/perfiltech.jpg'

export default function HomeScreen() {
    return (
        <View>
            <Image
                source={profileImg}
                width={200}
            />
            <Text>Bruno Simon Ferreira</Text>
            <StatusBar></StatusBar>
        </View>
    )
}