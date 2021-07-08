import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ReceitasLista } from "../../components/ReceitasLista";
import { CATEGORIAS, RECEITAS } from "../../data";
import { ERotas } from "../../enums";
import { Categoria, Receita } from "../../types";

type Props = {
    categoriaId: string;
};

export const Receitas: React.FC = () => {
    const { params } = useRoute();
    const { categoriaId } = params as Props;
    const { setOptions, navigate } = useNavigation();

    const categoriaSelecionada = CATEGORIAS.find(c => c.id === categoriaId) as Categoria;
    const receitasDaCategoria: Receita[] = RECEITAS.filter(r => r.categoriasId.includes(categoriaId));

    const [receitas] = React.useState<Receita[]>(receitasDaCategoria);
    const [categoria] = React.useState<Categoria>(categoriaSelecionada);

    React.useEffect(() => {
        setOptions({ title: `Receitas ${categoria.titulo}` });
    }, [categoria]);

    const handleReceitaSelecinada = (receitaId: string) => {
        navigate(ERotas.detalhes, { receitaId });
    };

    return <ReceitasLista receitaSelecinada={handleReceitaSelecinada} receitas={receitas} />;
};