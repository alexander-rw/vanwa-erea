import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGlobeAfrica,
  faJournalWhills,
  faPenFancy,
  faDungeon,
  faSkullCrossbones,
  faEthernet,
  faDownload,
  faUserSecret,
  faClock,
  faShieldAlt,
  faShip,
  faDiceD20,
} from "@fortawesome/free-solid-svg-icons";

import { Dictionary } from "lodash";

import { AppRoutes } from "./AppRoutes";

export const appIcons: Dictionary<{ icon: IconDefinition; color: string }> = {
  [AppRoutes.Deities]: { icon: faJournalWhills, color: "#BCAC80" },
  [AppRoutes.Map]: { icon: faGlobeAfrica, color: "skyblue" },
  [AppRoutes.Npcs]: { icon: faUserSecret, color: "palevioletred" },
  [AppRoutes.Rules]: { icon: faPenFancy, color: "lightblue" },
  [AppRoutes.Api]: { icon: faEthernet, color: "white" },
  [AppRoutes.Items]: { icon: faShieldAlt, color: "green" },
  [AppRoutes.Timeline]: { icon: faClock, color: "purple" },
  [AppRoutes.ShipCalc]: { icon: faShip, color: "lightblue" },
  [AppRoutes.PlayerChars]: { icon: faDiceD20, color: "lightred" },
  [AppRoutes.Fonts]: { icon: faPenFancy, color: "lightgrey" },
  openPanel: { icon: faDungeon, color: "white" },
  closePanel: { icon: faSkullCrossbones, color: "white" },
  download: { icon: faDownload, color: "white" },
};
