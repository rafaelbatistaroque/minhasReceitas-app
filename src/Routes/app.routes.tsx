import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import { ECores, ERotas } from "../enums";
import { Categorias, Detalhes, Receitas } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const Routes: React.FC = () => {
    const { cardStyleInterpolator } = TransitionPresets.SlideFromRightIOS;
    const estiloCabecalho: StackNavigationOptions = {
        cardStyleInterpolator,
        headerTintColor: ECores.branco,
        headerStyle: {
            backgroundColor: ECores.primary
        }
    };

    return (
        <NavigationContainer>
            <Navigator initialRouteName={ERotas.categorias} screenOptions={estiloCabecalho}>
                <Screen name={ERotas.categorias} component={Categorias} options={{ title: "Categorias" }} />
                <Screen name={ERotas.receitas} component={Receitas} options={{ title: "Receitas" }} />
                <Screen name={ERotas.detalhes} component={Detalhes} options={{ title: "Detalhes" }} />
            </Navigator>
        </NavigationContainer>
    );
};