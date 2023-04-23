import { createContext } from "react";
import { Editor } from "../Models/Editor";

import { EditorActions } from "../Models/EditorActions";

const editor = new Editor();
editor.addScene("scene1");
editor.setCurrentScene("scene1");

const actions = new EditorActions(editor.currentSceneEditor());
console.log(editor.currentSceneEditor());
export const EditorContext = createContext({
  editor: editor.currentSceneEditor(),
  actions: actions,
});

window.editor = editor;
