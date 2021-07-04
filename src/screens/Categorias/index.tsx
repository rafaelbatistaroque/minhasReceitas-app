import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";
import { CategoriaItem } from "../../components";
import { CATEGORIAS } from "../../data/categorias-dummy";
import { ERotas } from "../../enums";
import { CategoriaProps } from "../../types";
import { styles } from "./styles";

export const Categorias: React.FC = () => {
    const { navigate } = useNavigation();
    const [categorias, setCategorias] = React.useState<CategoriaProps[]>(CATEGORIAS);

    const handleNavigation = (categoriaId: string) => {
        navigate(ERotas.receitas, { categoriaId });
    };

    return (
        <FlatList
            style={styles.container}
            numColumns={2}
            data={categorias}
            keyExtractor={i => i.id}
            renderItem={({ item }) => <CategoriaItem  {...item} onSelect={() => handleNavigation(item.id)} />}
        />
    );
};