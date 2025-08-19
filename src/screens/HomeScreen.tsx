import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ImageBackground, Button } from "react-native";
import profileImg from '../../assets/perfiltech.jpg';
import bgImg from '../../assets/background.jpg'
import styles from "./Styles";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={bgImg}
                style={styles.container}
            >
                <Image
                    source={profileImg}
                    style={styles.imgSize}
                />
                <Text style={styles.title}>Bruno Simon Ferreira</Text>
                <View style={styles.btnCont}>
                    <Button
                        title="Github"
                        color={'#161616ff'}
                    />
                    <Button
                        title="Linkedin"
                        color={'#14434bff'}
                    />
                    <Button
                        title="E-mail"
                        color={'#aa1616ff'}
                    />
                    <Button
                        title="Portfólio"
                        color={'rgba(118, 58, 187, 1)'}
                    />
                </View>
                <StatusBar></StatusBar>
            </ImageBackground>

        </View>
    )
}