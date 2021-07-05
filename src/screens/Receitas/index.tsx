import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";
import { ReceitaItem } from "../../components";
import { CATEGORIAS, RECEITAS } from "../../data";
import { Categoria, Receita } from "../../types";
import { styles } from "./styles";

type Props = {
    categoriaId: string;
};

export const Receitas: React.FC = () => {
    const { params } = useRoute();
    const { categoriaId } = params as Props;
    const { setOptions } = useNavigation();

    const categoriaSelecionada = CATEGORIAS.find(c => c.id === categoriaId) as Categoria;
    const receitasDaCategoria: Receita[] = RECEITAS.filter(r => r.categoriasId.includes(categoriaId));

    const [receitas, setReceitas] = React.useState<Receita[]>(receitasDaCategoria);
    const [categoria, setCategoria] = React.useState<Categoria>(categoriaSelecionada);

    React.useEffect(() => {
        setOptions({ title: `Receitas ${categoria.titulo}` });
    }, [categoria]);

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                data={receitas}
                renderItem={({ item }) => <ReceitaItem {...item} onSelect={() => { }} />}
            />
        </View>
    );
};