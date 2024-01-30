import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { BiChevronDown } from 'react-icons/bi';

const PlatformSelector = () => {
  const { data } = usePlatforms();
  return (
    <Stack pb={3} width='300px'>
      <Menu>
        <MenuButton as={Button} rightIcon={<BiChevronDown />} textAlign='left'>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default PlatformSelector;
