import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ImageBackground, Button } from "react-native";
import profileImg from '../../assets/perfiltech.jpg';
import bgImg from '../../assets/background.jpg'
import styles from "./Styles";

export default function SkillsScreen() {
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
                <Text style={styles.title}>Habilidades</Text>
                <View style={styles.lvlMainCont}>
                    <View style={styles.lvlCont}>
                        <Text style={styles.skillTittle}>Frontend Básico - HTML, CSS e JS</Text>
                        <Text style={styles.lvl}>🚀🚀🚀🚀</Text>
                    </View>
                    <View style={styles.lvlCont}>
                        <Text style={styles.skillTittle}>Frontend Avançado - React e React Native</Text>
                        <Text style={styles.lvl}>🚀🚀</Text>
                    </View>
                    <View style={styles.lvlCont}>
                        <Text style={styles.skillTittle}>Backend - Node JS</Text>
                        <Text style={styles.lvl}>🚀🚀</Text>
                    </View>
                </View>
                <StatusBar></StatusBar>
            </ImageBackground>
        </View>
    )
}