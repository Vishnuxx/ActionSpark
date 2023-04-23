import {
  Button,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  IconButton,
  SimpleGrid,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Heading,
  Container,
  DrawerCloseButton,
  Stack,
  Flex,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { EditorContext } from "../EditorContext";
import { EditorState, transformMode } from "../State";

export function ScriptsButton() {
  const { editor } = useContext(EditorContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button size={"sm"} margin={"3px"} onClick={onOpen}>
        <p>Scripts</p>
      </Button>
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader> */}

          <DrawerContents editor={editor}></DrawerContents>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function DrawerContents({ editor }) {
  const snap = useSnapshot(EditorState.transformMode);
  const scripts = editor.scripts[snap.currentObjectUUID];
  const [event, setEvent] = useState("df");
  let currentScript;
  const [script, setscript] = useState(currentScript);

  useEffect(() => {
    currentScript = editor.scripts[snap.currentObjectUUID][event];
    setscript(currentScript);
  }, [event]);

  const updateScript = (scrip) => {
    setscript(scrip);
    console.log(scrip);
    editor.scripts[snap.currentObjectUUID][event] = scrip;
  };

  return (
    <DrawerBody bg={"#262626"}>
      <Flex direction={"column"} h={"85vh"}>
        <Heading color={"grey"} size="md" w={"fit-content"}>
          Scripts
        </Heading>
        <DrawerCloseButton color={"grey"}></DrawerCloseButton>
        <Box h="20px"></Box>
        <Stack direction="row" spacing={3} h="100%">
          <Stack direction={"column"}>
            {Object.keys(scripts).map((key, index) => {
              return (
                <Button
                  key={index}
                  background="#e8f5fc"
                  borderRadius="lg"
                  m="5px"
                  onClick={() => setEvent(key)}
                >
                  {key}
                </Button>
              );
            })}
          </Stack>
          <Stack bg={"#263238"} w="100%" h="100%">
            <pre>
              <code>
                <Textarea
                  color={"white"}
                  value={script}
                  onChange={(e) => {
                    updateScript(e.target.value);
                  }}
                ></Textarea>
              </code>
            </pre>
          </Stack>
        </Stack>
      </Flex>
    </DrawerBody>
  );
}
