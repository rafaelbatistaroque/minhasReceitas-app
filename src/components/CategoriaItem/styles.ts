import { StyleSheet } from "react-native";
import { ECores, EFonts } from "../../enums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        height: 150,
        borderRadius: 8,
        overflow: "hidden"
    },
    containerTitulo: {
        flex: 1,
        borderRadius: 8,
        shadowColor: ECores.overlay,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        elevation: 4,
        padding: 12,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    estiloTitulo: {
        fontFamily: EFonts.Fraunces_Bold,
        color: ECores.preto,
        fontSize: 28,
        textAlign: "right"
    }
});
