import { ReactNode } from "react";

import { WorldData } from "../../@data/worldData";
import { BaseDataObject } from "../../@types/Data/BaseDataObject";
import { Func } from "../../@types/Functions/Func";
import { DisplayableDataObject } from "../../@types/Panel/DisplayableDataObject";
import { LinkableRegExp } from "../../Utilities/LinkableString";

import { LinkButton } from "./LinkButton";

export const LinkedElements: Func<{ invokeFunc: Func<DisplayableDataObject | BaseDataObject, void>; text: string }, ReactNode> = ({ invokeFunc, text }): ReactNode => {
  const linkablesCopy = text.substring(0);
  const elements: ReactNode[] = [" "];
  let startIndex = 0;

  const matches = (linkablesCopy.match(LinkableRegExp) || []) // To stop the undefined error
  // This will never be undefined or empty as we have run RegExp.test() to check for at least one
    .map(match => ({
      startMatchIndex: linkablesCopy.indexOf(match),
      endMatchIndex: linkablesCopy.indexOf(match) + match.length,
    }));

  for (let i = 0; i < matches.length; i += 1) {
    const { startMatchIndex, endMatchIndex } = matches[i];
    const nextIndex = i + 1 >= matches.length ? linkablesCopy.length : matches[i + 1].startMatchIndex;
    const preMatch = linkablesCopy.slice(startIndex, startMatchIndex);
    const currentMatch = linkablesCopy.slice(startMatchIndex, endMatchIndex);
    const postMatch = linkablesCopy.slice(endMatchIndex, nextIndex);
    const [objType, id] = currentMatch.replace("{@", "").replace("}", "").split("|").map(s => s.trim());
    const obj = WorldData.getByTypeAndId(objType, id);
    elements.push(
      preMatch,
      LinkButton({ id, onClick: () => invokeFunc(WorldData.toDisplayableObject(obj)), disabled: obj === undefined }),
      postMatch,
    );

    startIndex = nextIndex;
  }

  return elements;
};
