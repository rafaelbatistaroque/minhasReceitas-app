import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { CATEGORIAS } from "../../data/categorias-dummy";
import { Categoria } from "../../types";
import { styles } from "./styles";

type Props = {
    categoriaId: string;
};

export const Receitas: React.FC = () => {
    const { params } = useRoute();
    const { categoriaId } = params as Props;
    const { setOptions } = useNavigation();

    const [receita, setReceita] = React.useState<Categoria>(CATEGORIAS.find(c => c.id === categoriaId) as Categoria);

    React.useEffect(() => {
        setOptions({ title: `Receitas ${receita.titulo}` });
    }, [receita]);

    return (
        <View style={styles.container}>
            <Text>{receita.titulo}</Text>
        </View>
    );
};