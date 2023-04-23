import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Heading,
  Accordions,
  Container,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Draggable } from "drag-react";

export function JoystickController({ editor,object }) {
  const start = (e) => {

    console.log("sd");
  };

  
  const onEnd = (e) => {
 
    object.x = e.x 
    object.y = e.y
    
  };
  return (
    <Draggable style={{top: object.y , left: object.x , width: object.w , height: object.h}} onDragStart={start} onDragEnd={onEnd}>
      <Box
        borderRadius={100}
        w={200}
        h={200}
        opacity={0.4}
        bg={"#e0e0e0"}
        display="flex"
        justifyContent="center"
        alignItems={"center"}
      >
        <Box
          borderRadius={100}
          w={59}
          h={59}
          bg={"white"}
          boxShadow={"1px 1px 10px 5px grey inset"}
        ></Box>
      </Box>
    </Draggable>
  );
}
