import { Platform, StyleSheet } from "react-native";
import { ECores, EFonts } from "../../enums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        height: 150,
        elevation: 4,
        borderRadius: 8,
        overflow: Platform.OS === "android" && Platform.Version >= 21
            ? "hidden"
            : "visible"
    },
    containerTitulo: {
        flex: 1,
        shadowColor: ECores.overlay,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
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
