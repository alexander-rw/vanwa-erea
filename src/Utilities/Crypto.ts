import { encrypt } from "vigenere-cipher";

const cypherKey = "Dhaksha";

export const vignere = (text: string): string => encrypt(text, cypherKey);