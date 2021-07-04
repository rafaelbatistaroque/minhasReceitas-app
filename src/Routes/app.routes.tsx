import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { ROTAS, TEMA } from "../constants";
import { Categorias, Detalhes, Receitas } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const Routes: React.FC = () => {
    const { cardStyleInterpolator } = TransitionPresets.SlideFromRightIOS;
    const estiloCabecalho: StackNavigationOptions = {
        cardStyleInterpolator,
        headerTintColor: TEMA.CORES.BRANCO,
        headerStyle: {
            backgroundColor: TEMA.CORES.PRIMARY
        }
    };

    return (
        <NavigationContainer>
            <Navigator initialRouteName={ROTAS.CATEGORIAS} screenOptions={estiloCabecalho}>
                <Screen name={ROTAS.CATEGORIAS} component={Categorias} options={{ title: "Categorias" }} />
                <Screen name={ROTAS.RECEITAS} component={Receitas} options={{ title: "Receitas" }} />
                <Screen name={ROTAS.DETALHES} component={Detalhes} options={{ title: "Detalhes" }} />
            </Navigator>
        </NavigationContainer>
    );
};