import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Categorias: React.FC = () => {
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Categorias</Text>
            <Button title="Ir para receitas" onPress={() => navigate("receitas")} />
        </View>
    );
};