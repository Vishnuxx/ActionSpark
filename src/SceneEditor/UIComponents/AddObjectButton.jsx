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
} from "@chakra-ui/react";
import { useLoader } from "@react-three/fiber";
import { useContext } from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSnapshot } from "valtio";
import AddObjectCommand from "../../Models/Commands/AddObjectCommand";
import { PrimitiveShapes } from "../../Models/PrimitiveShapes";
import { EditorContext } from "../EditorContext";
import { onObjectAdded } from "../State";

const basicModels = [
  {
    label: "boombox",
    type: "BoomBox.glb",
    icon: "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-blocks-education-smashingstocks-circular-smashing-stocks.png",
  },
  {
    label: "coffeemat",
    type: "coffeemat.glb",
    icon: "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-blocks-education-smashingstocks-circular-smashing-stocks.png",
  },
  {
    label: "ferrari",
    type: "ferrari.glb",
    icon: "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-blocks-education-smashingstocks-circular-smashing-stocks.png",
  },
  {
    label: "horse",
    type: "Horse.glb",
    icon: "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-blocks-education-smashingstocks-circular-smashing-stocks.png",
  },
  {
    label: "parrot",
    type: "Parrot.glb",
    icon: "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-blocks-education-smashingstocks-circular-smashing-stocks.png",
  },
  {
    label: "City",
    type: "littlestTokyo.glb",
    icon: "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-blocks-education-smashingstocks-circular-smashing-stocks.png",
  },
];

const basicShapes = [
  {
    label: "box",
    type: "box",
    icon: "https://img.icons8.com/color/48/000000/sugar-cube.png",
  },
  {
    label: "torus",
    type: "torus",
    icon: "https://cdn-icons-png.flaticon.com/512/5853/5853767.png",
  },
  {
    label: "cylinder",
    type: "cylinder",
    icon: "https://cdn-icons-png.flaticon.com/512/401/401053.png",
  },
  {
    label: "capsule",
    type: "capsule",
    icon: "https://cdn-icons-png.flaticon.com/512/401/401053.png",
  },
  {
    label: "ambientlight",
    type: "ambientlight",
    icon: "https://cdn2.iconfinder.com/data/icons/mobile-app-development-coral-vol-1/256/Ambient_Light_Sensor-512.png",
  },
  {
    label: "pointlight",
    type: "pointlight",
    icon: "https://cdn-icons-png.flaticon.com/512/217/217871.png",
  },
  {
    label: "spotlight",
    type: "spotlight",
    icon: "https://cdn-icons-png.flaticon.com/512/217/217871.png",
  },
  {
    label: "directionalLight",
    type: "directionalLight",
    icon: "https://cdn-icons-png.flaticon.com/512/217/217871.png",
  },
  {
    label: "perspective",
    type: "perspectiveCamera",
    icon: "https://img.freepik.com/free-psd/digital-camera-icon-isolated-3d-render-illustration_439185-11792.jpg?w=2000",
  },
  {
    label: "orthographic",
    type: "orthographicCamera",
    icon: "https://img.freepik.com/free-psd/digital-camera-icon-isolated-3d-render-illustration_439185-11792.jpg?w=2000",
  },
];

export function AddObjectButton() {
  const { editor } = useContext(EditorContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg="#262626"
        color={"white"}
        size={"sm"}
        margin={0}
        onClick={onOpen}
      >
        <p>Add</p>
      </Button>
      <ObjectsDrawer onClose={onClose} isOpen={isOpen}></ObjectsDrawer>
    </>
  );
}

function ObjectsDrawer({ onClose, isOpen }) {
  const { editor } = useContext(EditorContext);

  return (
    <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg="#262626" color={"white"}>
        <DrawerBody>
          <Tabs variant="soft-rounded" colorScheme="whiteAlpha">
            <TabList>
              <Tab>Basic</Tab>
              <Tab>Models</Tab>
            </TabList>
            <TabPanels>
              <TabPanel overflow={"scroll"}>
                <BasicObjects editor={editor}></BasicObjects>
              </TabPanel>
              <TabPanel height="fitContent">
                <BasicModels editor={editor}></BasicModels>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

function BasicObjects({ editor }) {
  return (
    <SimpleGrid minChildWidth={50} spacing={10}>
      {basicShapes.map((object, index) => {
        return (
          <BasicObjectButton
            key={index}
            editor={editor}
            type={object.type}
            label={object.label}
            iconSrc={object.icon}
          />
        );
      })}
    </SimpleGrid>
  );
}

function BasicObjectButton({ label, iconSrc, type }) {
  const { editor, actions } = useContext(EditorContext);
  const addObject = () => {
    editor.execute(
      new AddObjectCommand(editor, actions, PrimitiveShapes.getNewObject(type))
    );
   // actions.addObject(PrimitiveShapes.getNewObject(type));
  };
  return (
    <Center flexDirection="column">
      <IconButton
        w={30}
        aria-label={label}
        icon={<img src={iconSrc} />}
        onClick={addObject}
      ></IconButton>
      {label}
    </Center>
  );
}

function BasicModels({ editor }) {
   
  return (
    <SimpleGrid minChildWidth={50} spacing={10}>
      {basicModels.map((object, index) => {
        return (
          <BasicModelButton
            key={index}
            editor={editor}
            type={object.type}
            label={object.label}
            iconSrc={object.icon}
          />
        );
      })}
    </SimpleGrid>
  );
}

function BasicModelButton({ editor, label, iconSrc, type }) {
  const addModel = () => {
    const loader = new GLTFLoader();
    const draco = new DRACOLoader();

    loader.setDRACOLoader(draco);

    const gltf = loader.load(type, function (gltf) {
      console.log(gltf.scene);
      // editor.actions.addModel(gltf.scene);
    });
  };
  return (
    <Center flexDirection="column">
      <IconButton
        w={30}
        aria-label={label}
        icon={<img src={iconSrc} />}
        onClick={addModel}
      ></IconButton>
      {label}
    </Center>
  );
}
