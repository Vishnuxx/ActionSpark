


// export function EditorActions(editor ) {

import { EditorState } from "../SceneEditor/State";

//     this.selectObjectByUUID = (uuid) => {
//       // editor.selectObjectByUUID(uuid);
//       // EditorState.transformMode.currentObjectID = object.id;
//       // EditorState.transformMode.currentObjectUUID = object.uuid;
//       // console.log("editor actions selected")
//     }

//     this.addObject = (object , parent, index) => {
//       editor.addObject(object, parent, index);
//      EditorState.onObjectAdded.obj = [...editor.objects];
//     }

//     this.removeObject = (object) => {
//       editor.removeObject(object);
//       EditorState.onObjectAdded.obj = [...editor.objects];
//     };

//     this.addModel= (gltf) => {
//       editor.addModel(gltf);
//      EditorState.onModelAdded.obj = { ...editor.models };
//     }

//     this.loadProject= (data) => {
//       editor.loadProject(data);
//      EditorState.onProjectedLoaded.state = !EditorState.onProjectedLoaded.state;
//     }

//     this.saveProject= () => {
//       console.log(JSON.stringify(editor.saveProject(), null, 4));
//      EditorState.onProjectSaved.state = !EditorState.onProjectSaved.state;
//     }

//     this.setCurrentCamera=(uuid) => {
//       editor.setCurrentCamera(uuid);
//      EditorState.onCameraChanged.state = !EditorState.onCameraChanged.state;
//     }
// }


export function EditorActions(editor) {



  this.selectObjectByID = (id) => {
    editor.selectObjectByID(id);
    const object = editor.getSelectedObject();
    
    EditorState.transformMode.currentObjectID = object.id;
    EditorState.transformMode.currentObjectUUID = object.uuid;
    // console.log("editor actions selected")
  };

  this.addObject = (object, parent, index) => {
    editor.addObject(object, parent, index);
    EditorState.onObjectAdded.obj = [...editor.objects];
  };

  this.removeObject = (object) => {
    editor.removeObject(object);
    EditorState.onObjectAdded.obj = [...editor.objects];
  };

  this.addModel = (gltf) => {
    editor.addModel(gltf);
    EditorState.onModelAdded.obj = { ...editor.models };
  };

  this.loadProject = (data) => {
    editor.loadProject(data);
    EditorState.onProjectedLoaded.state = !EditorState.onProjectedLoaded.state;
  };

  this.saveProject = () => {
    console.log(JSON.stringify(editor.saveProject(), null, 4));
    EditorState.onProjectSaved.state = !EditorState.onProjectSaved.state;
  };

  this.setCurrentCamera = (uuid) => {
    editor.setCurrentCamera(uuid);
    EditorState.onCameraChanged.state = !EditorState.onCameraChanged.state;
  };

}