import { Flex, IconButton, Box, SlideFade } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import { EditPropertiesButton } from "../UIComponents/BehavioursButton";
import { ScriptsButton } from "../UIComponents/ScriptsButton";
import { EditorState, transformMode } from "../State";

export function ObjectOptionsPanel({ editor }) {
  const snap = useSnapshot(EditorState.transformMode);
  return (
    <Box position="absolute" bottom="20px" right={"20px"}>
      <SlideFade in={snap.currentObjectID !== null} offsetY="30px">
        <Flex direction={"row"} alignItems={"center"}>
          <ScriptsButton editor={editor}></ScriptsButton>
          <EditPropertiesButton editor={editor}></EditPropertiesButton>
        </Flex>
      </SlideFade>
    </Box>
  );
}
