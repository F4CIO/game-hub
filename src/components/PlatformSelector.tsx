import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = (props: Props) => {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  } else {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {props.selectedPlatform === null
            ? "Platform"
            : props.selectedPlatform.name}
        </MenuButton>
        <MenuList>
          {data.map((p) => (
            <MenuItem key={p.id} onClick={() => props.onSelectPlatform(p)}>
              {p.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }
};

export default PlatformSelector;
