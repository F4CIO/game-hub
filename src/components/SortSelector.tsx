import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Ordering, Platform } from "../hooks/useGames";

interface Props {
  onSelectOrdering: (ordering: Ordering) => void;
  selectedOrdering: Ordering | null;
}

const SortSelector = (props: Props) => {
  const sortOrders: Ordering[] = [
    { slug: "", name: "Relevance" },
    { slug: "-added", name: "Date Added" },
    { slug: "name", name: "Name" },
    { slug: "-released", name: "Release date" },
    { slug: "-metacritic", name: "Popularity" },
    { slug: "-rating", name: "Average rating" },
  ];

  // const currentSortOrder = sortOrders.find(
  //   (o) => o.slug === props.selectedOrdering?.slug
  // );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {props.selectedOrdering?.name || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((so) => (
          <MenuItem onClick={() => props.onSelectOrdering(so)} key={so.slug}>
            {so.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
