
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Tooltip, OverlayTrigger } from "react-bootstrap";

import { appIcons } from "../../Constants/Icons";
import { stringToSeparatedCapitals } from "../../Utilities/String";

interface MenuIconProps {
  iconKey: string;
  iconName: string;
}

export const MenuIcon: React.FC<MenuIconProps> = (props) => {
  const { iconKey, iconName } = props;
  const iconDefinition = appIcons[iconKey];
  return (
    <div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 100, hide: 150 }}
        overlay={
          <Tooltip style={{ zIndex: 10000 }} id={`tooltip-${iconName}`}>{stringToSeparatedCapitals(iconName)}</Tooltip>
        }
      >
        <FontAwesomeIcon icon={iconDefinition.icon} style={{ color: iconDefinition.color }} />
      </OverlayTrigger>
    </div>
  );
};
