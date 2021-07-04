import React from "react";
import { FlatList } from "react-native";
import { CategoriaItem } from "../../components";
import { CATEGORIAS } from "../../data/dummy-data";
import { CategoriaProps } from "../../types";

export const Categorias: React.FC = () => {
    const [categorias, setCategorias] = React.useState<CategoriaProps[]>(CATEGORIAS);

    return (
        <FlatList
            numColumns={2}
            data={categorias}
            keyExtractor={i => i.id}
            renderItem={({ item }) => <CategoriaItem {...item} />}
        />
    );
};