import React from "react";
import { v4 } from "uuid";

import { Func } from "../../@types/Functions/Func";

interface TButton {
  id: string;
  onClick: Func<unknown, void>;
  disabled: boolean;
}

export const LinkButton: React.FC<TButton> = ({ disabled, onClick, id }) => <button type="button" className="btn btn-link btn-link-panel" disabled={disabled} key={v4()} onClick={onClick}>{id}</button>;
