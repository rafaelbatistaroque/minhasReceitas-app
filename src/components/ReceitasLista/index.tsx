import React from "react";
import { FlatList, View } from "react-native";
import { ReceitaItem } from "..";
import { Receita } from "../../types";
import { styles } from "./styles";

type Props = {
    receitaSelecinada: (receitaId: string) => void;
    receitas: Receita[];
};

export const ReceitasLista: React.FC<Props> = ({ receitaSelecinada, receitas }) => {
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                data={receitas}
                renderItem={({ item }) => <ReceitaItem {...item} onSelect={() => receitaSelecinada(item.id)} />}
            />
        </View>
    );
};