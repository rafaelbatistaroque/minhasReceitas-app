import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Categorias } from "./src/screens";

export default function App() {
    return (
        <View>
            <Categorias />
            <StatusBar style="auto" />
        </View>
    );
}
