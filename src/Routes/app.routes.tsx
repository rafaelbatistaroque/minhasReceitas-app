import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Categorias, Detalhes, Receitas } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const Routes: React.FC = () => {

    return (
        <NavigationContainer>
            <Navigator initialRouteName="categorias" screenOptions={{ gestureDirection: "horizontal" }}>
                <Screen name="categorias" component={Categorias} />
                <Screen name="receitas" component={Receitas} />
                <Screen name="detalhes" component={Detalhes} />
            </Navigator>
        </NavigationContainer>
    );
};