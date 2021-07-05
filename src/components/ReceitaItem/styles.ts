import { StyleSheet } from "react-native";
import { ECores, EFonts } from "../../enums";

export const styles = StyleSheet.create({
    container: {
        height: 200,
        marginBottom: 16,
        backgroundColor: ECores.branco,
        borderRadius: 8,
        overflow: "hidden"
    },
    cabecalho: {
        height: "85%",
    },
    tituloContainer: {
        backgroundColor: ECores.overlay,
        paddingVertical: 4,
    },
    titulo: {
        fontFamily: EFonts.Fraunces_Bold,
        fontSize: 22,
        color: ECores.branco,
        textAlign: "center"
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "flex-end"
    },
    receitaLinha: {
        flexDirection: "row"
    },
    detalhesContainer: {
        height: "15%",
        paddingHorizontal: 12,
        justifyContent: "space-between",
        alignItems: "center"
    },
    detalhes: {
        fontFamily: EFonts.Fraunces_Light
    }
});
