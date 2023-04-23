import { useSnapshot } from "valtio";
import { EditorState, transformMode } from "../State";
import { Flex, IconButton, SlideFade } from "@chakra-ui/react";

export function PropertiesPanel({ editor }) {
  const snap = useSnapshot(EditorState.transformMode);

  const click = (type) => {
    EditorState.transformMode.mode = type;
  };

  const color = (type) => (type != snap.mode ? "" : "orange");

  return (
    <SlideFade
      position="absolute"
      in={snap.currentObjectID !== null}
      offsetX="150px"
    >
      <Flex
        direction="column"
        w="150px"
        h="calc(100vh/3)"
        background={"white"}
        alignItems="center"
        color={"white"}
      >
        fdf
      </Flex>
    </SlideFade>
  );
}
