import { Scene } from "three";

export function SceneManager() {

    this.scenes = {};

    this.addScene = (sceneId) => {
         if (
           this.globalVariables[sceneId] != null ||
           this.globalVariables[sceneId] != undefined
         ) {
            console.warn("sceneid is already exist")
            return;
         }
        this.scenes[sceneId] = new Scene();
    }

    this.removeScene = (sceneId) => {
        delete this.scenes[sceneId]
    }

    this.listAllScenes = () => [...Object.keys(this.scenes)];

}