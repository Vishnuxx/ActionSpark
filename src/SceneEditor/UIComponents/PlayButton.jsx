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
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useContext } from "react";
import { EditorContext } from "../EditorContext";
import { PreviewPlayer } from "../Panels/PreviewPlayer/PreviewPlayer";

export function PlayButton() {
  const { editor } = useContext(EditorContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg="green"
        color="white"
        size={"sm"}
        padding={0}
        margin={0}
        onClick={onOpen}
      >
        <p>Play</p>
      </Button>

      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerBody p={0}>
            <PreviewPlayer editor={editor}></PreviewPlayer>
          </DrawerBody>
          <DrawerCloseButton color={"white"}></DrawerCloseButton>
        </DrawerContent>
      </Drawer>
    </>
  );
}
