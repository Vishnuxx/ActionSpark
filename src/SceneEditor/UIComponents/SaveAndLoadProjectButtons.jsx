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
import { useContext } from "react";
import { EditorContext } from "../EditorContext";

export function SaveAndLoadButtons() {
    const { editor } = useContext(EditorContext);
    const save = () => {
        editor.actions.saveProject();
    }

    const load = () => {
        editor.actions.loadProject(
          JSON.parse(`{
    "metadata": {},
    "project": {},
    "scene": {
        "metadata": {
            "version": 4.5,
            "type": "Object",
            "generator": "Object3D.toJSON"
        },
        "geometries": [
            {
                "uuid": "d9c8ba66-61d3-4a98-848f-dd7c57710548",
                "type": "BoxGeometry",
                "width": 1,
                "height": 1,
                "depth": 1,
                "widthSegments": 1,
                "heightSegments": 1,
                "depthSegments": 1
            },
            {
                "uuid": "a26c27ae-dea4-444c-82db-e8433d1ad211",
                "type": "BoxGeometry",
                "width": 1,
                "height": 1,
                "depth": 1,
                "widthSegments": 1,
                "heightSegments": 1,
                "depthSegments": 1
            },
            {
                "uuid": "05ad7001-3fc8-4387-afe2-75feac4df5af",
                "type": "TorusGeometry",
                "radius": 1,
                "tube": 0.4,
                "radialSegments": 8,
                "tubularSegments": 6,
                "arc": 6.283185307179586
            },
            {
                "uuid": "ce84971e-2f75-4f3b-8f18-046d4f3a7171",
                "type": "CylinderGeometry",
                "radiusTop": 1,
                "radiusBottom": 1,
                "height": 1,
                "radialSegments": 8,
                "heightSegments": 1,
                "openEnded": false,
                "thetaStart": 0,
                "thetaLength": 6.283185307179586
            }
        ],
        "materials": [
            {
                "uuid": "4036eb14-79d8-4660-bdfd-2f8a281fbb7e",
                "type": "MeshPhysicalMaterial",
                "color": 16711422,
                "roughness": 1,
                "metalness": 0,
                "sheen": 0,
                "sheenColor": 0,
                "sheenRoughness": 1,
                "emissive": 0,
                "specularIntensity": 1,
                "specularColor": 16711422,
                "clearcoat": 0,
                "clearcoatRoughness": 0,
                "iridescence": 0,
                "iridescenceIOR": 1.3,
                "iridescenceThicknessRange": [
                    100,
                    400
                ],
                "envMapIntensity": 1,
                "reflectivity": 0.49999999999999983,
                "transmission": 0,
                "thickness": 0,
                "attenuationDistance": null,
                "attenuationColor": 16711422,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "colorWrite": true,
                "stencilWrite": false,
                "stencilWriteMask": 255,
                "stencilFunc": 519,
                "stencilRef": 0,
                "stencilFuncMask": 255,
                "stencilFail": 7680,
                "stencilZFail": 7680,
                "stencilZPass": 7680
            },
            {
                "uuid": "e172cc22-4191-4c93-8a14-aef4e0ac7717",
                "type": "MeshPhysicalMaterial",
                "color": 16711422,
                "roughness": 1,
                "metalness": 0,
                "sheen": 0,
                "sheenColor": 0,
                "sheenRoughness": 1,
                "emissive": 0,
                "specularIntensity": 1,
                "specularColor": 16711422,
                "clearcoat": 0,
                "clearcoatRoughness": 0,
                "iridescence": 0,
                "iridescenceIOR": 1.3,
                "iridescenceThicknessRange": [
                    100,
                    400
                ],
                "envMapIntensity": 1,
                "reflectivity": 0.49999999999999983,
                "transmission": 0,
                "thickness": 0,
                "attenuationDistance": null,
                "attenuationColor": 16711422,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "colorWrite": true,
                "stencilWrite": false,
                "stencilWriteMask": 255,
                "stencilFunc": 519,
                "stencilRef": 0,
                "stencilFuncMask": 255,
                "stencilFail": 7680,
                "stencilZFail": 7680,
                "stencilZPass": 7680
            },
            {
                "uuid": "9a5cbe1c-cee6-46d4-bba2-4bb6e7c7d796",
                "type": "MeshStandardMaterial",
                "color": 16711422,
                "roughness": 1,
                "metalness": 0,
                "emissive": 0,
                "envMapIntensity": 1,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "colorWrite": true,
                "stencilWrite": false,
                "stencilWriteMask": 255,
                "stencilFunc": 519,
                "stencilRef": 0,
                "stencilFuncMask": 255,
                "stencilFail": 7680,
                "stencilZFail": 7680,
                "stencilZPass": 7680
            },
            {
                "uuid": "acb2184a-b2f0-4d62-ba48-b87511eac11f",
                "type": "MeshStandardMaterial",
                "color": 16711422,
                "roughness": 1,
                "metalness": 0,
                "emissive": 0,
                "envMapIntensity": 1,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "colorWrite": true,
                "stencilWrite": false,
                "stencilWriteMask": 255,
                "stencilFunc": 519,
                "stencilRef": 0,
                "stencilFuncMask": 255,
                "stencilFail": 7680,
                "stencilZFail": 7680,
                "stencilZPass": 7680
            }
        ],
        "object": {
            "uuid": "63e861de-86c1-49a7-bfbe-3b06e85c64d5",
            "type": "Scene",
            "layers": 1,
            "matrix": [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ],
            "children": [
                {
                    "uuid": "043d0b76-b3b1-44d2-abc4-dcb238b86e7c",
                    "type": "Mesh",
                    "name": "Box",
                    "layers": 1,
                    "matrix": [
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        -6.274457127764769,
                        0,
                        -2.911724645609053,
                        1
                    ],
                    "geometry": "d9c8ba66-61d3-4a98-848f-dd7c57710548",
                    "material": "4036eb14-79d8-4660-bdfd-2f8a281fbb7e"
                },
                {
                    "uuid": "a4e98831-537c-480f-8fe0-301932881f0f",
                    "type": "Mesh",
                    "name": "Box",
                    "layers": 1,
                    "matrix": [
                        1.8691481265162226,
                        0,
                        0,
                        0,
                        0,
                        1.8691481265162226,
                        0,
                        0,
                        0,
                        0,
                        1.8691481265162226,
                        0,
                        5.371325483652045,
                        0,
                        -4.148128498121618,
                        1
                    ],
                    "geometry": "a26c27ae-dea4-444c-82db-e8433d1ad211",
                    "material": "e172cc22-4191-4c93-8a14-aef4e0ac7717"
                },
                {
                    "uuid": "451c6c02-f3f5-416d-912b-5dc6aeb0e3fc",
                    "type": "Mesh",
                    "name": "Torus",
                    "layers": 1,
                    "matrix": [
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        -5.664755077307894,
                        1
                    ],
                    "geometry": "05ad7001-3fc8-4387-afe2-75feac4df5af",
                    "material": "9a5cbe1c-cee6-46d4-bba2-4bb6e7c7d796"
                },
                {
                    "uuid": "043d0b76-b3b1-44d2-abc4-dcb238b86e7c",
                    "type": "Mesh",
                    "name": "Box",
                    "layers": 1,
                    "matrix": [
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        -4.578491284213941,
                        0,
                        1.7317428144091025,
                        1
                    ],
                    "geometry": "d9c8ba66-61d3-4a98-848f-dd7c57710548",
                    "material": "4036eb14-79d8-4660-bdfd-2f8a281fbb7e"
                },
                {
                    "uuid": "a4e98831-537c-480f-8fe0-301932881f0f",
                    "type": "Mesh",
                    "name": "Box",
                    "layers": 1,
                    "matrix": [
                        1.8691481265162226,
                        0,
                        0,
                        0,
                        0,
                        1.8691481265162226,
                        0,
                        0,
                        0,
                        0,
                        1.8691481265162226,
                        0,
                        5.46259120084072,
                        0,
                        1.8654329354510186,
                        1
                    ],
                    "geometry": "a26c27ae-dea4-444c-82db-e8433d1ad211",
                    "material": "e172cc22-4191-4c93-8a14-aef4e0ac7717"
                },
                {
                    "uuid": "980902a6-b5e9-4063-bfbe-01e515fe268d",
                    "type": "Mesh",
                    "name": "Cylinder",
                    "layers": 1,
                    "matrix": [
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        2.9305547903124056,
                        1
                    ],
                    "geometry": "ce84971e-2f75-4f3b-8f18-046d4f3a7171",
                    "material": "acb2184a-b2f0-4d62-ba48-b87511eac11f"
                },
                {
                    "uuid": "e4af5e91-2aab-4005-a08c-41c43ec44ede",
                    "type": "PointLight",
                    "name": "PointLight",
                    "layers": 1,
                    "matrix": [
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        -6.999167838178143,
                        2.479574462662719,
                        0,
                        1
                    ],
                    "color": 16711422,
                    "intensity": 1,
                    "distance": 10,
                    "decay": 1,
                    "shadow": {
                        "camera": {
                            "uuid": "c837e3fe-8613-49e3-9e2c-eb325b8bd97f",
                            "type": "PerspectiveCamera",
                            "layers": 1,
                            "fov": 90,
                            "zoom": 1,
                            "near": 0.5,
                            "far": 500,
                            "focus": 10,
                            "aspect": 1,
                            "filmGauge": 35,
                            "filmOffset": 0
                        }
                    }
                },
                {
                    "uuid": "9c7787be-6dd7-4112-9fe0-72fce40c7f9c",
                    "type": "PointLight",
                    "name": "PointLight",
                    "layers": 1,
                    "matrix": [
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        9.85031757919248,
                        4.117247280270848,
                        0,
                        1
                    ],
                    "color": 16711422,
                    "intensity": 1,
                    "distance": 10,
                    "decay": 1,
                    "shadow": {
                        "camera": {
                            "uuid": "c1be8a00-fb12-49e2-b0b4-85daa5e23c6b",
                            "type": "PerspectiveCamera",
                            "layers": 1,
                            "fov": 90,
                            "zoom": 1,
                            "near": 0.5,
                            "far": 500,
                            "focus": 10,
                            "aspect": 1,
                            "filmGauge": 35,
                            "filmOffset": 0
                        }
                    }
                },
                {
                    "uuid": "800e3859-e000-4044-b4bf-d1a7d4d97909",
                    "type": "PointLight",
                    "name": "PointLight",
                    "layers": 1,
                    "matrix": [
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        5.794788415532481,
                        0,
                        1
                    ],
                    "color": 16711422,
                    "intensity": 1,
                    "distance": 10,
                    "decay": 1,
                    "shadow": {
                        "camera": {
                            "uuid": "645fb01c-0eaa-4f12-8593-05cdfffba4df",
                            "type": "PerspectiveCamera",
                            "layers": 1,
                            "fov": 90,
                            "zoom": 1,
                            "near": 0.5,
                            "far": 500,
                            "focus": 10,
                            "aspect": 1,
                            "filmGauge": 35,
                            "filmOffset": 0
                        }
                    }
                }
            ]
        }
    },
    "scripts": {},
    "history": {}
}`)
        );
    }
  return (
    <Center>
      <Button
        bg="#262626"
        color={"white"}
        size={"sm"}
        m={"3px 3px"}
        onClick={load}
      >
        Load
      </Button>
      <Button
        bg="#262626"
        color={"white"}
        size={"sm"}
        m={"3px 3px"}
        onClick={save}
      >
        Save
      </Button>
    </Center>
  );
}
