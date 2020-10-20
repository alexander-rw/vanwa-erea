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
  faUserShield,
  faClock,
  faShieldAlt,
  faShip,
} from "@fortawesome/free-solid-svg-icons";

import { Dictionary } from "lodash";

import { AppRoutes } from "./AppRoutes";

interface IconMapDefinition {
  icon: IconDefinition;
  color: string;
}

export const appIcons: Dictionary<IconMapDefinition> = {
  [AppRoutes.Deities]: { icon: faJournalWhills, color: "#BCAC80" },
  [AppRoutes.Map]: { icon: faGlobeAfrica, color: "skyblue" },
  [AppRoutes.Npcs]: { icon: faUserSecret, color: "palevioletred" },
  [AppRoutes.Rules]: { icon: faPenFancy, color: "lightblue" },
  [AppRoutes.Api]: { icon: faEthernet, color: "white" },
  [AppRoutes.Items]: { icon: faShieldAlt, color: "green" },
  [AppRoutes.Races]: { icon: faUserShield, color: "lightblue" },
  [AppRoutes.Timeline]: { icon: faClock, color: "purple" },
  [AppRoutes.ShipCalc]: { icon: faShip, color: "lightblue" },
  openPanel: { icon: faDungeon, color: "white" },
  closePanel: { icon: faSkullCrossbones, color: "white" },
  download: { icon: faDownload, color: "white" },
};
