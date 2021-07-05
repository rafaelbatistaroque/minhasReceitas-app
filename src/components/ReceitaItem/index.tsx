import React from "react";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { Receita } from "../../types";
import { styles } from "./styles";

type Props = Receita & {
    onSelect: () => void;
};

export const ReceitaItem: React.FC<Props> = ({ titulo, duracao, complexidade, urlImagem, accessibilidade, onSelect }) => {
    return (
        <View style={styles.container} >

            <TouchableOpacity activeOpacity={.7} onPress={onSelect}>
                <View>
                    <View style={[styles.receitaLinha, styles.cabecalho]}>
                        <ImageBackground source={{ uri: urlImagem }} style={styles.imagem}>
                            <View style={styles.tituloContainer}>
                                <Text numberOfLines={2} style={styles.titulo}>{titulo}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={[styles.receitaLinha, styles.detalhesContainer]}>
                        <Text style={styles.detalhes}>{duracao}m</Text>
                        <Text style={styles.detalhes}>{complexidade.toUpperCase()}</Text>
                        <Text style={styles.detalhes}>{accessibilidade.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};