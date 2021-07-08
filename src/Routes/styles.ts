import { StackNavigationOptions, TransitionPresets } from "@react-navigation/stack";
import { ECores } from "../enums";

const { cardStyleInterpolator } = TransitionPresets.SlideFromRightIOS;
export const estiloCabecalho: StackNavigationOptions = {
    cardStyleInterpolator,
    headerTintColor: ECores.preto,
    headerTitleAlign: "center",
    headerStyle: {
        backgroundColor: ECores.branco
    }
};
