import { SceneEditor } from "./SceneEditor";

export function Editor() {
  this._editorScenes = {};
  this._currentSceneEditor = null;

  this.listScenes = () => Object.keys(this._editorScenes);

  this.currentSceneEditor = () => this._currentSceneEditor;

  this.setCurrentScene = (id) => {
    console.log(this._editorScenes[id]);
    if (this._editorScenes[id] == undefined) {
      console.warn("the scene " + id + "doesnt exists");
      return;
    }
    this._currentSceneEditor = this._editorScenes[id];
  };

  this.addScene = (id) => {
    this._editorScenes[id] = new SceneEditor();
  };

  this.removeScene = (id) => {
    if (this._editorScenes[id] != undefined) {
      return;
    }
    delete this._editorScenes[id];
  };

  this.loadProject = () => {};
  this.saveProject = () => {};
  this.execute = () => {};
  this.undo = () => {};
  this.redo = () => {};
}
