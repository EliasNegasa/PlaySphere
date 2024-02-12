import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import { Platform } from '../hooks/useGames';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatforms();
  return (
    <Stack pb={3} width="300px">
      <Menu>
        <MenuButton as={Button} rightIcon={<BiChevronDown />} textAlign="left">
          {selectedPlatform ? selectedPlatform?.name : 'Platforms'}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default PlatformSelector;
