import * as React from "react";

export const CardContext = React.createContext(null);

export function useCardContext() {
    const context = React.useContext(CardContext);
    if (!context) {
        throw new Error("useCardContext must be used within a CardProvider");
    }
    return context;
}