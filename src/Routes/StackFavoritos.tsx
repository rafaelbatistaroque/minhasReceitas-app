import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ERotas } from "../enums";
import { Detalhes, Favoritas } from "../screens";
import { estiloCabecalho } from "./styles";

const { Navigator, Screen } = createStackNavigator();

export const StackFavoritos: React.FC = () => {

    return (
        <Navigator initialRouteName={ERotas.detalhes} screenOptions={estiloCabecalho}>
            <Screen name={ERotas.favoritas} component={Favoritas} options={{ title: "Detalhes" }} />
            <Screen name={ERotas.detalhes} component={Detalhes} options={{ title: "Detalhes" }} />
        </Navigator>
    );
};