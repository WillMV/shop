import { createContext, ReactNode, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SafePaddings = {
    paddingTop: number;
    paddingLeft: number;
    paddingRight: number;
    paddingBottom: number;
};

type SafeAreaPaddingsProviderProps = {
    children: ReactNode;
};

type SafeAreaPaddingsContextProps = {
    safePaddings: SafePaddings;
};



export const SafeAreaPaddingsContext = createContext<SafeAreaPaddingsContextProps>({ safePaddings: { paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0 } })


const SafeAreaPaddingsProvider = ({ children }: SafeAreaPaddingsProviderProps) => {

    const insets = useSafeAreaInsets();
    const [safePaddings, _] = useState<SafePaddings>({
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
    })
    return (

        <SafeAreaPaddingsContext.Provider value={{ safePaddings }}>
            {children}
        </SafeAreaPaddingsContext.Provider>

    )
};

export default SafeAreaPaddingsProvider;