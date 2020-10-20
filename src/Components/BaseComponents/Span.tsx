import React from "react";
import { v4 } from "uuid";

export const Span: React.FC<{ text: string }> = ({ text }) => <span key={v4()}>{` ${text}`}</span>;
