import { useThree } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { EditorState } from "../State";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Center,
  Icon,
  Image,
  Flex,
  Container,
  List,
  Box,
  Spacer,
  Stack,
  VStack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { EditorContext } from "../EditorContext";

export function ObjectPropertiesPanel() {
  const { editor } = useContext(EditorContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isOpened = useSnapshot(EditorState.propertiesBarOpened);
  // const transform = useSnapshot(transformMode);

  //console.log("objectproperties");

  let currentObject;

  currentObject =
    editor.scene != undefined
      ? editor.scene.getObjectById(EditorState.transformMode.currentObjectID)
      : null;

  useEffect(() => {
    if (isOpened.state) {
      onOpen();
    }
  }, [isOpened]);

  const close = () => {
    EditorState.propertiesBarOpened.state = false;
    onClose();
  };

  return (
    <Drawer
      position="absolute"
      top="calc(100vh/4)"
      placement={"right"}
      isOpen={isOpen}
      onClose={close}
    >
      <DrawerOverlay />
      <DrawerContent w={'100%'} bg="#262626" color={"white"}>
        {/* <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader> */}
        <Flex p={2} justifyContent={'space-evenly'} alignItems={"center"} w={"100%"}>
          <Text>Components</Text>
          <Button size={"m"} p={2} bg={"green"}>
            Add
          </Button>
        </Flex>
        <DrawerBody>
          <List spacing={2} overflow="scroll" w={'100%'} p={2}>
            {/* <Stack
              direction="column"
              
              w="fit-content"
              overflowX="scroll"
              padding="8px"
            > */}
              {currentObject != null
                ? Object.keys(currentObject).map((key, index) => {
                    return (
                      <PropertyItem key={index} label={key}>
                        This is {key} of index {index}
                      </PropertyItem>
                    );
                  })
                : ""}
            {/* </Stack> */}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

function PropertyItem({ items, label }) {
  return (
    <VStack borderRadius={5} padding={2}  bg={"#303030"} align={'flex-start'}>
      <Flex
        p={1}
        justifyContent={"flex-start"}
        alignItems={"center"}
        w={"fit-content"}
     
      >
        <Image
          w={5}
          h={5}
          src="https://cdn-icons-png.flaticon.com/512/200/200949.png"
        ></Image>
        {/* <Spacer h="5px"></Spacer> */}
        <p>{label}</p>
      </Flex>
    </VStack>
  );
}
