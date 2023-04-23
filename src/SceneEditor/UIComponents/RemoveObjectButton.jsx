import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import RemoveObjectCommand from "../../Models/Commands/RemoveObjectCommand";
import { EditorContext } from "../EditorContext";

export function RemoveObjectButton() {
    const {editor , actions} = useContext(EditorContext)
    const removeObject = () => {
        //editor.execute(new RemoveObjectCommand(editor , actions , ))
    }
    return (
      <Button
        bg="#262626"
        color={"white"}
        size={"sm"}
        // margin={0}
        onClick={removeObject}
      >
        Remove
      </Button>
    );
}