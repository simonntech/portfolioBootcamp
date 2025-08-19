import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    imgSize: {
        width: 250,
        height: 250,
        borderRadius: 200
    },
    title: {
        color: '#ffffffff',
        fontSize: 27,
        fontWeight: 'bold'
    },
    btnCont: {
        marginVertical: 40,
        width: '60%',
        gap: 10
    }
});

export default styles;