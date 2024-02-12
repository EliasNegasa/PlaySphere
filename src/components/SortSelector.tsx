import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';

interface Props {
  sortOrder: string | null;
  onSelectOrder: (order: string) => void;
}

const SortSelector = ({ sortOrder, onSelectOrder }: Props) => {
  const sortOrders = [
    {
      value: '',
      label: 'Relevance',
    },
    {
      value: '-added',
      label: 'Date added',
    },
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: '-released',
      label: 'Released date',
    },
    {
      value: '-metacritic',
      label: 'Popularity',
    },
    {
      value: '-rating',
      label: 'Average rating',
    },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Stack pb={3} width="300px">
      <Menu>
        <MenuButton as={Button} rightIcon={<BiChevronDown />} textAlign="left">
          OrderBy: {currentSortOrder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.value}
              onClick={() => onSelectOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default SortSelector;
