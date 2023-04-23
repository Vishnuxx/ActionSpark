import { Flex, Button, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { EditorContext } from "../EditorContext";
import { AddObjectButton } from "../UIComponents/AddObjectButton";
import { AssetManagerButton } from "../UIComponents/AssetManagerButton";
import { CameraSelector } from "../UIComponents/CameraSelector";
import { EditPropertiesButton } from "../UIComponents/BehavioursButton";
import { PlayButton } from "../UIComponents/PlayButton";
import { SaveAndLoadButtons } from "../UIComponents/SaveAndLoadProjectButtons";
import { SceneGraph } from "../UIComponents/SceneGraph";
import { ScriptsButton } from "../UIComponents/ScriptsButton";
import { UndoRedoButton } from "../UIComponents/UndoRedoButtons";
import { RemoveObjectButton } from "../UIComponents/RemoveObjectButton.jsx";

export function MenuPanel() {
  const { editor } = useContext(EditorContext);
  return (
    <HStack
      m="1"
      spacing="10px"
      alignItems="center"
      h={50}
      position="absolute"
      top={1}
    >
      <SaveAndLoadButtons></SaveAndLoadButtons>
      <AddObjectButton></AddObjectButton>
      <RemoveObjectButton></RemoveObjectButton>
      <AssetManagerButton></AssetManagerButton>
      <SceneGraph></SceneGraph>
      <CameraSelector></CameraSelector>
      <PlayButton></PlayButton>
      <UndoRedoButton></UndoRedoButton>
    </HStack>
  );
}
