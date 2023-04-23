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
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { EditorContext } from "../EditorContext";


export function AssetManagerButton() {
  const { editor } = useContext(EditorContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bg="#262626"  color={"white"} m={"3px 3px"} size={"sm"} onClick={onOpen}>
        Assets
      </Button>
      <Drawer placement={"right"} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader> */}
          <DrawerBody padding={2}>
            <Heading size="md">Assets</Heading>
            <Accordions editor={editor}></Accordions>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function Accordions({ editor }) {
  return (
    <Accordion allowMultiple>
      <AccordinItem name="Materials" objects={editor.materials}></AccordinItem>
      <AccordinItem
        name="Geometries"
        objects={editor.geometries}
      ></AccordinItem>
      <AccordinItem
        name="Textures"
        objects={editor.textures}
      ></AccordinItem>
     
    </Accordion>
  );
}


function AccordinItem({ name , objects}) {
  return (
    <AccordionItem>
      <AccordionButton background="#e8f5fc" borderRadius="lg" m="5px">
        <Box flex="1" textAlign="left">
          {name}
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pb={4}>
        {Object.keys(objects).map((key, index) => {
          console.log(objects[key].type);
          return <Item key={index} name={objects[key].type}></Item>;
        })}
      </AccordionPanel>
    </AccordionItem>
  );
     
    
}

function Item({name}) {
  return <Box >{name}</Box>
}
