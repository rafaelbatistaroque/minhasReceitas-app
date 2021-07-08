import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarOptions, BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ECores, ERotas } from "../enums";

const { Navigator, Screen } = createBottomTabNavigator();

type Props = {
    stackEscolher: React.FC;
    stackFavoritos: React.FC;
};

type PropsIcon = {
    color: string;
};

export const Tabs: React.FC<Props> = ({ stackEscolher, stackFavoritos }) => {
    const opcaoNavigator: BottomTabBarOptions = {
        activeTintColor: ECores.accent
    };

    const opcoesTabs = (label: string, icone: any): BottomTabNavigationOptions => {
        return {
            tabBarLabel: label,
            tabBarIcon: ({ color }: PropsIcon) => <Ionicons name={icone} size={24} color={color} />
        };
    };

    return (
        <Navigator initialRouteName={ERotas.escolher} tabBarOptions={opcaoNavigator}>
            <Screen name={ERotas.escolher} component={stackEscolher} options={opcoesTabs("Escolher", "ios-restaurant")} />
            <Screen name={ERotas.favoritas} component={stackFavoritos} options={opcoesTabs("Favoritas", "ios-star")} />
        </Navigator>
    );
};