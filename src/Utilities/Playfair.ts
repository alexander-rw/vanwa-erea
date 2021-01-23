import Playfair from "crypto-classic-playfair";

// const cypherKey = "In the name of Dhaksha The Creator The Fallen";
export const cypherKeyCaesared23 = "Fk qeb kxjb lc Aexhpex Qeb Zobxqlo Qeb Cxiibk";

export const playfair = (text: string): string => Playfair.encipher(text, cypherKeyCaesared23);