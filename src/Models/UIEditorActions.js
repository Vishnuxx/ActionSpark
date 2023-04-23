import { UIEditorState } from "../SceneEditor/State";

export function UIEditorActions(uieditor) {
  this.addComponent = (type) => {
    uieditor.addComponent(type);
    console.log(UIEditorState.uIComponentAdded.state);
    UIEditorState.uIComponentAdded.state =
      !UIEditorState.uIComponentAdded.state;
  };
}
