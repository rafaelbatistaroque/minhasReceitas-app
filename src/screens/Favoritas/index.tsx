import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ReceitasLista } from "../../components/ReceitasLista";
import { RECEITAS } from "../../data";
import { ERotas } from "../../enums";
import { Receita } from "../../types";

export const Favoritas: React.FC = () => {
    const { navigate } = useNavigation();

    const receitasDaCategoria: Receita[] = RECEITAS.filter(r => ["m1", "m2"].includes(r.id));

    const [receitas] = React.useState<Receita[]>(receitasDaCategoria);

    const handleReceitaSelecinada = (receitaId: string) => {
        navigate(ERotas.detalhes, { receitaId });
    };

    return <ReceitasLista receitaSelecinada={handleReceitaSelecinada} receitas={receitas} />;
};