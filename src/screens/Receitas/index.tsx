import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { CATEGORIAS } from "../../data/dummy-data";
import { CategoriaProps } from "../../types";
import { styles } from "./styles";

type Props = {
    categoriaId: string;
};

export const Receitas: React.FC = () => {
    const { params } = useRoute();
    const { categoriaId } = params as Props;
    const { setOptions } = useNavigation();

    const [receita, setReceita] = React.useState<CategoriaProps>(CATEGORIAS.find(c => c.id === categoriaId) as CategoriaProps);

    React.useEffect(() => {
        setOptions({ title: `Receitas ${receita.titulo}` });
    }, [receita]);

    return (
        <View style={styles.container}>
            <Text>{receita.titulo}</Text>
        </View>
    );
};