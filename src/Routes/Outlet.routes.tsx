import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackEscolher, StackFavoritos, Tabs } from "./index";

export const Outlet: React.FC = () => {
    return (
        <NavigationContainer>
            <Tabs stackEscolher={StackEscolher} stackFavoritos={StackFavoritos} />
        </NavigationContainer>
    );
};