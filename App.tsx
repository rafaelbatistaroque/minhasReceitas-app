import React from 'react';
import { Fraunces_300Light, Fraunces_400Regular, Fraunces_700Bold } from "@expo-google-fonts/fraunces";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { enableScreens } from "react-native-screens";
import { Outlet } from "./src/Routes/Outlet.routes";

enableScreens();
export default function App() {

    const [fontsCarregadas] = useFonts({
        Fraunces_300Light,
        Fraunces_400Regular,
        Fraunces_700Bold
    });

    if(fontsCarregadas === false)
        return <AppLoading />;

    return (
        <>
            <StatusBar style="auto" />
            <Outlet />
        </>
    );
}
