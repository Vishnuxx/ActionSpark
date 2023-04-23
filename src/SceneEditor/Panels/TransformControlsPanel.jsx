import { Flex, IconButton, SlideFade, Box } from "@chakra-ui/react";
import { AddIcon, ExternalLinkIcon, SpinnerIcon } from "@chakra-ui/icons";
import { useSnapshot } from "valtio";
import { EditorState, transformMode } from "../State";

export function TransformControlsPanel(props) {
  
  const snap = useSnapshot(EditorState.transformMode);

  const click = (type) => {
    EditorState.transformMode.mode = type;
  };

  const color = (type) => (type != snap.mode ? "white" : "orange");

  return (
    <Box position="absolute" top="calc(100vh/3)" left={"20px"}>
      <SlideFade in={snap.currentObjectID !== null} offsetX="-20px">
        <Flex direction="column" alignItems="center" h="fit-content">
          <IconButton
            bg="#262626"
            margin={2}
            color={() => color("translate")}
            icon={<AddIcon />}
            onClick={() => click("translate")}
          />

          <IconButton
            bg="#262626"
            margin={2}
            color={() => color("rotate")}
            icon={<SpinnerIcon />}
            onClick={() => click("rotate")}
          />

          <IconButton
            bg="#262626"
            margin={2}
            icon={<ExternalLinkIcon />}
            color={() => color("scale")}
            onClick={() => click("scale")}
          />
        </Flex>
      </SlideFade>
    </Box>
  );
}
