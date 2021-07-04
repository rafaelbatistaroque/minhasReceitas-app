import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ROTAS } from "../../constants";
import { CategoriaProps } from "../../types";
import { styles } from "./styles";

export const CategoriaItem: React.FC<CategoriaProps> = ({ titulo, id }) => {
    const { navigate } = useNavigation();

    return <TouchableOpacity style={styles.container} onPress={() => navigate(ROTAS.RECEITAS, { categoriaId: id })}>
        <View >
            <Text>{titulo}</Text>
        </View>
    </TouchableOpacity>;
};
