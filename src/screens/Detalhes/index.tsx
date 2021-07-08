import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { BotaoFavorito } from "../../components";
import { RECEITAS } from "../../data";
import { Receita } from "../../types";
import { styles } from "./styles";

type Props = {
    receitaId: string;
};

export const Detalhes: React.FC = () => {
    const { params } = useRoute();
    const { receitaId } = params as Props;
    const { setOptions } = useNavigation();

    const receitaSelecionada = RECEITAS.find(r => r.id === receitaId) as Receita;
    const [receita] = React.useState<Receita>(receitaSelecionada);

    React.useEffect(() => {
        setOptions({
            headerRight: () => <BotaoFavorito action={() => { }} />,
            title: receita?.titulo ?? "Receita não encontrada :(",
        });
    }, [receita]);

    return (
        <>
            {receita && <View style={styles.container}>
                <Text>{receita.titulo}</Text>
            </View>}
        </>
    );
};