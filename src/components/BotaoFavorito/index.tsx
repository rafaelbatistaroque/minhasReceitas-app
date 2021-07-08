import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ECores } from "../../enums";

type Props = {
    action: () => void;
    ehSolido?: boolean;
    cor?: string;
};

export const BotaoFavorito: React.FC<Props> = ({ action, ehSolido, cor = ECores.preto }) => {
    return (
        <TouchableOpacity
            activeOpacity={.7}
            style={{ padding: 10 }}
            onPress={action}>
            <FontAwesome5 name="star" size={24} solid={ehSolido} color={cor} />
        </TouchableOpacity>
    );
};