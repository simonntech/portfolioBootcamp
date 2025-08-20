import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ImageBackground, Button, Linking } from "react-native";
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
                        onPress={()=>{
                            Linking.openURL('https://github.com/simonntech')
                        }}
                    />
                    <Button
                        title="Linkedin"
                        color={'#14434bff'}
                        onPress={()=>{
                            Linking.openURL('https://www.linkedin.com/in/brunosimonferreira/')
                        }}
                    />
                    <Button
                        title="Portfólio"
                        color={'rgba(118, 58, 187, 1)'}
                        onPress={()=>{
                            Linking.openURL('https://simonntech.github.io/portfolio/')
                        }}
                    />
                </View>
                <StatusBar style="light"></StatusBar>
            </ImageBackground>
        </View>
    )
}