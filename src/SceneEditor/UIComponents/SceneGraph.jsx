import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Button,
  Heading,
  Text,
  HStack,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";

import { TriangleDownIcon, MinusIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { EditorContext } from "../EditorContext";

export function SceneGraph() {
  const { editor } = useContext(EditorContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg="#262626"
        color={"white"}
        m={"3px 3px"}
        size={"sm"}
        onClick={onOpen}
      >
        Tree
      </Button>
      <Drawer placement={"right"} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          padding={3}
          bg={"#262626"}
          color={"#e0e0e0"}
          userSelect={"none"}
        >
          {/* <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader> */}
          <DrawerBody padding={0}>
            <Heading size="md" m={"3px 0px"}>
              SceneGraph
            </Heading>
            <GraphNode object={editor.scene}></GraphNode>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}


function GraphNode({object}) {
    const [isOpened, setOpen] = useState(false);
    const click = () => {
        setOpen(!isOpened);
    }
    console.log(object)

    const showIcon = () => {
        
         return isOpened ? <MinusIcon /> : <TriangleDownIcon />;
        
    }
    return (
      <Flex
        w={"100%"}
        m={"0px 4px"}
        direction={"column"}
        alignItems="start"
        overflow={"hidden"}
        
      >
        <HStack p={1} borderRadius={4} bg={isOpened ? "#263238" : "none"}>
          <Text>{object.type}</Text>
          <Box w={10} onClick={click}>
            {showIcon()}
          </Box>
        </HStack>
        {isOpened &&
          object.children.map((obj, index) => {
            return <GraphNode key={index} object={obj}></GraphNode>;
          })}
      </Flex>
    );
}