import React from "react";
import { Card } from "react-bootstrap";
import { v4 } from "uuid";

import { PlayableCharacter } from "../../@types/PlayableCharacters/PlayableCharacter";

export const DisplayPC: React.FC<PlayableCharacter> = (character: PlayableCharacter, ) => {
  return (
    <Card>
      <p key={v4()}>{ JSON.stringify(character) }</p>
    </Card>
  );
};
