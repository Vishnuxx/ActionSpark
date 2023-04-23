import { Flex, Button, HStack } from "@chakra-ui/react";

export function PlayerControls({ isPlaying }) {
  return <Flex position="absolute">
    <Button>Play</Button>
    <Button>Stop</Button>
  </Flex>;
}
