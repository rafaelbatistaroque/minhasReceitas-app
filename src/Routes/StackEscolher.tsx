import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ERotas } from "../enums";
import { Categorias, Detalhes, Receitas } from "../screens";
import { estiloCabecalho } from "./styles";

const { Navigator, Screen } = createStackNavigator();

export const StackEscolher: React.FC = () => {

    return (
        <Navigator initialRouteName={ERotas.categorias} screenOptions={estiloCabecalho}>
            <Screen name={ERotas.categorias} component={Categorias} options={{ title: "Categorias" }} />
            <Screen name={ERotas.receitas} component={Receitas} options={{ title: "Receitas" }} />
            <Screen name={ERotas.detalhes} component={Detalhes} options={{ title: "Detalhes" }} />
        </Navigator>
    );
};