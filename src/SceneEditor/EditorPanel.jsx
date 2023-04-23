import { Grid, GridItem, Flex, Container, Box } from "@chakra-ui/react";
import { EditPropertiesButton } from "./UIComponents/BehavioursButton";
import { ObjectPropertiesPanel } from "./Panels/ObjectPropertiesPanel";
import { ScriptsButton } from "./UIComponents/ScriptsButton";
import { TransformControlsPanel } from "./Panels/TransformControlsPanel";
import { Editor } from "../Extra/Editor1";
import { MenuPanel } from "./Panels/MenuPanel";
import { Viewport } from "./Panels/ViewoportPanel";
import { ObjectOptionsPanel } from "./Panels/ObjectOptionsPanel";
import { PropertiesPanel } from "./Panels/PropertiesPanel";
import { PlayButton } from "./UIComponents/PlayButton";
import { UIEditorButton } from "./UIComponents/UIEditorButton";
import { UIEditor } from "../UIEditor/UIEditor";
import { EditorActions } from "../Models/EditorActions";
import { createContext } from "react";
import { EditorContext } from "./EditorContext";

export function EditorPanel(props) {
  return (
    <Box h="100vh">
      <Viewport></Viewport>
      <MenuPanel></MenuPanel>
      <TransformControlsPanel></TransformControlsPanel>
      <ObjectPropertiesPanel></ObjectPropertiesPanel>
      <ObjectOptionsPanel></ObjectOptionsPanel>
      <UIEditorButton></UIEditorButton>
      <UIEditor></UIEditor>
    </Box>
  );
}
