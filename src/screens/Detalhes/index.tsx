import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    receitaId: string;
};

export const Detalhes: React.FC = () => {
    const { params } = useRoute();
    const { receitaId } = params as Props;

    return (
        <View style={styles.container}>
            <Text>{receitaId}</Text>
        </View>
    );
};