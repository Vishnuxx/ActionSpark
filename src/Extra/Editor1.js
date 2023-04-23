import {
  BoxHelper,
  CameraHelper,
  DirectionalLightHelper,
  HemisphereLightHelper,
  Mesh,
  MeshBasicMaterial,
  ObjectLoader,
  PointLightHelper,
  Scene,
  SkeletonHelper,
  SphereGeometry,
  SpotLightHelper,
  Sprite,
  SpriteMaterial,
  TextureLoader,
} from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { proxy, snapshot } from "valtio";
import {
  onCameraChanged,
  onModelAdded,
  onObjectAdded,
  onProjectedLoaded,
  onProjectSaved,
} from "../SceneEditor/State";
import { EditorBase } from "../Models/EditorBase";
import { History } from "../Models/History";
import { PrimitiveShapes } from "../Models/PrimitiveShapes";

export class Editor extends EditorBase {
  constructor() {
    super();
    this.showSceneHelpers = true;
    this._history = new History();
    //  this._initActions()
    this._scope = this;
  }

  // METHODS

  //attaches the imported scene to editor scene
  attachScene = (editorScene) => {
    editorScene = this.scene;
  };

  getHelperById = (id) => {
    return this.helpers[id];
  };

  selectObjectByID = (id) => {};

  getSelectedObject = () => {
    return this.currentObject;
  };

  setDefaultCamera = (camera) => {
    this.currentCamera = camera;
    this.cameras["default"] = camera;
  };
  //sets the scene from scene data
  setScene = (sceneData) => {
    this.scene = new Scene();
    this.scene.uuid = sceneData.uuid;
    this.scene.name = sceneData.name;
    this.scene.background = sceneData.background;
    this.scene.environment = sceneData.environment;
    this.scene.fog = sceneData.fog;
    this.scene.userData = JSON.parse(JSON.stringify(sceneData.userData));

    while (sceneData.children.length > 0) {
      this.addObject(sceneData.children[0]);
    }
  };

  setCurrentCamera = (uuid) => {
    if (this.cameras[uuid].isCamera !== undefined) {
      this.currentCamera = this.cameras[uuid];
    }
  };

  addObject = (object, parent, index) => {
    this._scope.addGeometry(object.geometry);
    this._scope.addMaterial(object.material);

    this._scope.addCamera(object);
    this._scope.addLight(object);
    this._scope.addAnimations(object);
    this._scope.addHelper(object);
    this._scope.addScripts(object);

    object.children.map((child, index) => {
      this._scope.addObject(child, object, index);
      console.log("adding");
    });

    if (parent === undefined) {
      //this.scene.add(object);
      this.objects = [...this.objects, object];
      console.log("adding");
    } else {
      parent.children.splice(index, 0, object);
      object.parent = parent;
    }
  };

  removeObject = (object) => {
    this._scope.removeGeometry(object.geometry);
    this._scope.removeMaterial(object.material);

    this._scope.removeCamera(object);
    this._scope.removeLight(object);
    this._scope.removeAnimations(object);
    this._scope.removeHelper(object);
    this._scope.removeScripts(object);

    object.children.map((child, index) => {
      this._scope.removeObject(child);
      console.log("removed");
    });

    this._scope.objects.splice(this._scope.objects.indexOf(object), 1);
  };

  addModel = (gltf) => {
    this.models[gltf.scene.uuid] = gltf;

    gltf.scene.traverse((object) => {
      console.log(object);
    });
  };

  addGeometry = (geometry) => {
    if (geometry !== undefined) this.geometries[geometry.uuid] = geometry;
  };

  removeGeometry = (geometry) => {
    delete this.geometries[geometry.uuid];
  };

  addMaterial = (material) => {
    if (material !== undefined) this.materials[material.uuid] = material;
  };

  removeMaterial = (material) => {
    delete this.materials[material.uuid];
  };

  addTexture = (texture) => {
    if (texture !== undefined) this.textures[texture.uuid] = texture;
  };

  removeTexture = (texture) => {
    delete this.textures[texture.uuid];
  };

  addCamera = (camera) => {
    if (camera.isCamera !== undefined) {
      this.cameras[camera.uuid] = camera;
    }
  };

  removeCamera = (camera) => {
    delete this.cameras[camera.uuid];
  };

  addLight = (light) => {
    if (light.isLight !== undefined) {
      this.lights[light.uuid] = light;
    }
  };

  removeLight = (light) => {
    delete this.lights[light.uuid];
  };

  addAnimations = (object) => {
    this.animations[object.uuid] = [object.animations];
  };

  removeAnimations = (object) => {
    delete this.animations[object.uuid];
  };

  addScripts = (object) => {
    const script = {
      onGameLoaded: "function onGameLoaded() {}",
      onInit: "function onInit() {}",
      onPreRender: "function onPreRender() {}",
      onRender: "", // "function onRender(object , delta) {}",
      onFinish: "function onFinish() {}",
    };
    this.scripts[object.uuid] = { ...script };
  };

  removeScripts = (object) => {
    delete this.scripts[object.uuid];
  };

  addHelper = (object) => {
    let helper;

    if (object.isMesh) {
      helper = new BoxHelper(object);
      helper.material.linewidth = 3;
    } else if (object.isCamera) {
      helper = new CameraHelper(object);
      helper.material.linewidth = 3;
      const map = new TextureLoader().load("camera.png");
      const material = new SpriteMaterial({
        map: map,
        //color: 0xffffff,
        sizeAttenuation: true,
      });
      material.needsUpdate = true;

      const sprite = new Sprite(material);

      helper.add(sprite);
    } else if (object.isPointLight) {
      helper = new PointLightHelper(object, 1);
      helper.material.linewidth = 3;
      const map = new TextureLoader().load("light.png");
      const material = new SpriteMaterial({ map: map });

      const sprite = new Sprite(material);
      helper.add(sprite);
    } else if (object.isDirectionalLight) {
      helper = new DirectionalLightHelper(object, 1);
      console.log("directional");
    } else if (object.isSpotLight) {
      helper = new SpotLightHelper(object);
      helper.type = "SpotLightHelper";
      //helper.material.linewidth = 3;
    } else if (object.isHemisphereLight) {
      helper = new HemisphereLightHelper(object, 1);
    } else if (object.isSkinnedMesh) {
      helper = new SkeletonHelper(object.skeleton.bones[0]);
      helper.material.linewidth = 3;
    } else if (object.isBone === true && object.parent?.isBone !== true) {
      helper = new SkeletonHelper(object);
      helper.material.linewidth = 3;
    } else {
      return;
    }

    // console.log(helper)

    helper.userData.objectId = object.id;
    helper.userData.objectUUID = object.uuid;

    this.helpers[object.uuid] = helper;
    this.sceneHelpers.add(helper);
  };

  removeHelper = (object) => {
    if (this.helpers[object.id] !== undefined) {
      var helper = this.helpers[object.id];
      helper.remove();

      this.sceneHelpers.remove(helper);
      delete this.helpers[object.id];
    }
  };

  updateHelper = (objectId) => {
    const helper = this.helpers[objectId];

    if (helper !== undefined && helper.isSkeletonHelper !== true) {
      helper.update();
    }
  };

  saveProject = () => {
    const scene = this.scene;

    const scripts = this.scripts;

    return {
      metadata: {},
      project: {},
      scene: scene.toJSON(),
      scripts: scripts,
      history: {},
    };
  };

  loadProject = (data) => {
    const loader = new ObjectLoader();

    this.scripts = data.scripts;
    const scene = loader.parse(data.scene);

    for (let i = 0; i < scene.children.length; i++) {
      this.addObject(scene.children[i]);
      console.log("s");
    }
    // this.setScene();
    console.log("project loaded");
  };

  execute = (command) => {
    this._history.execute(command);
  };

  undo = () => this._history.undo();

  redo = () => this._history.redo();
}
