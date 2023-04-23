import { proxy } from "valtio";

export const editorOpened = proxy({ state: false });
// export const transformMode = proxy({
//   currentObjectID: null,
//   currentObjectUUID: null,
//   mode: "translate",
// });
// export const onObjectAdded = proxy({ obj: [] });
// export const onModelAdded = proxy({ name: null, path: null });
// export const onCameraChanged = proxy({ state: false });
// export const propertiesBarOpened = proxy({ state: false });
// export const onProjectedLoaded = proxy({ state: false });
// export const onProjectSaved = proxy({ state: false });

export const EditorState = {
 
  transformMode: proxy({
    currentObjectID: null,
    currentObjectUUID: null,
    mode: "translate",
  }),
  onObjectAdded: proxy({ obj: [] }),
  onModelAdded: proxy({ name: null, path: null }),
  onCameraChanged: proxy({ state: false }),
  propertiesBarOpened: proxy({ state: false }),
  onProjectedLoaded: proxy({ state: false }),
  onProjectSaved: proxy({ state: false }),
};


export const UIEditorState = {
     editorOpened: proxy({ state: false }),
     uIComponentAdded: proxy({ state: false})
}