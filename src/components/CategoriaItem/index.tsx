import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ERotas } from "../../enums";
import { CategoriaProps } from "../../types";
import { styles } from "./styles";

export const CategoriaItem: React.FC<CategoriaProps> = ({ titulo, id }) => {
    const { navigate } = useNavigation();

    return <TouchableOpacity style={styles.container} onPress={() => navigate(ERotas.receitas, { categoriaId: id })}>
        <View >
            <Text>{titulo}</Text>
        </View>
    </TouchableOpacity>;
};
