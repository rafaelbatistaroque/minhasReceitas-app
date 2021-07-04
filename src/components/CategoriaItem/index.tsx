import React from "react";
import { Text, TouchableOpacity, View, Platform, TouchableNativeFeedback } from "react-native";
import { CategoriaProps } from "../../types";
import { styles } from "./styles";

type Props = CategoriaProps & {
    onSelect: () => void;
};

export const CategoriaItem: React.FC<Props> = ({ titulo, cor, onSelect }) => {
    let TouchableNative: any = TouchableOpacity;

    if(Platform.OS === "android" && Platform.Version >= 21)
        TouchableNative = TouchableNativeFeedback;

    return <View style={styles.container}>
        <TouchableNative onPress={onSelect}>
            <View style={[styles.containerTitulo, { backgroundColor: cor }]}>
                <Text numberOfLines={2} style={styles.estiloTitulo}>{titulo}</Text>
            </View>
        </TouchableNative>
    </View>;
};
