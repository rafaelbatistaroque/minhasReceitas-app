import { Fraunces_300Light, Fraunces_400Regular, Fraunces_700Bold } from "@expo-google-fonts/fraunces";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from 'react';
import { Categorias } from "./src/screens";

export default function App() {
    const [fontsCarregadas] = useFonts({
        Fraunces_300Light,
        Fraunces_400Regular,
        Fraunces_700Bold
    });

    if(fontsCarregadas === false)
        return <AppLoading />;

    return (
        <Categorias />
    );
}
