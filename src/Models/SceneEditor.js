import {
  BoxHelper,
  CameraHelper,
  DirectionalLightHelper,
  HemisphereLightHelper,
  ObjectLoader,
  PointLightHelper,
  Scene,
  SkeletonHelper,
  SpotLightHelper,
  Sprite,
  SpriteMaterial,
  TextureLoader,
} from "three";
import { History } from "./History";

export function SceneEditor() {
  const scope = this;

  this.scene = new Scene();
  this.history = new History();
  this.sceneHelpers = new Scene();
  this.currentObject = null;
  this.currentCamera = null;
  this.objects = [];
  this.helpers = {};
  this.models = {};
  this.geometries = {};
  this.materials = {};
  this.textures = {};
  this.cameras = {};
  this.lights = {};
  this.scripts = {};
  this.animations = {};

  this.showSceneHelpers = true;
  // METHODS

  //attaches the imported scene to editor scene
  this.attachScene = (editorScene) => {
    editorScene = this.scene;
  };

  this.getHelperById = (id) => {
    return this.helpers[id];
  };

  this.selectObjectByID = (id) => {
    this.currentObject = this.scene.getObjectById(id)
  };

  this.getSelectedObject = () => {
    return this.currentObject;
  };

  this.setDefaultCamera = (camera) => {
    this.currentCamera = camera;
    this.cameras["default"] = camera;
  };
  //sets the scene from scene data
  this.setScene = (sceneData) => {
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

  this.setCurrentCamera = (uuid) => {
    if (this.cameras[uuid].isCamera !== undefined) {
      this.currentCamera = this.cameras[uuid];
    }
  };

  this.addObject = (object, parent, index) => {
    scope.addGeometry(object.geometry);
    scope.addMaterial(object.material);

    scope.addCamera(object);
    scope.addLight(object);
    scope.addAnimations(object);
    scope.addHelper(object);
    scope.addScripts(object);

    object.children.map((child, index) => {
      scope.addObject(child, object, index);
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

  this.removeObject = (object) => {
    scope.removeGeometry(object.geometry);
    scope.removeMaterial(object.material);

    scope.removeCamera(object);
    scope.removeLight(object);
    scope.removeAnimations(object);
    scope.removeHelper(object);
    scope.removeScripts(object);

    object.children.map((child, index) => {
      scope.removeObject(child);
      console.log("removed");
    });

    scope.objects.splice(scope.objects.indexOf(object), 1);
  };

  this.addModel = (gltf) => {
    this.models[gltf.scene.uuid] = gltf;
    gltf.scene.traverse((object) => {
      console.log(object);
    });
  };

  this.addGeometry = (geometry) => {
    if (geometry !== undefined) this.geometries[geometry.uuid] = geometry;
  };

  this.removeGeometry = (geometry) => {
    delete this.geometries[geometry.uuid];
  };

  this.addMaterial = (material) => {
    if (material !== undefined) this.materials[material.uuid] = material;
  };

  this.removeMaterial = (material) => {
    delete this.materials[material.uuid];
  };

  this.addTexture = (texture) => {
    if (texture !== undefined) this.textures[texture.uuid] = texture;
  };

  this.removeTexture = (texture) => {
    delete this.textures[texture.uuid];
  };

  this.addCamera = (camera) => {
    if (camera.isCamera !== undefined) {
      this.cameras[camera.uuid] = camera;
    }
  };

  this.removeCamera = (camera) => {
    delete this.cameras[camera.uuid];
  };

  this.addLight = (light) => {
    if (light.isLight !== undefined) {
      this.lights[light.uuid] = light;
    }
  };

  this.removeLight = (light) => {
    delete this.lights[light.uuid];
  };

  this.addAnimations = (object) => {
    this.animations[object.uuid] = [object.animations];
  };

  this.removeAnimations = (object) => {
    delete this.animations[object.uuid];
  };

  this.addScripts = (object) => {
    const script = {
      onGameLoaded: "function onGameLoaded() {}",
      onInit: "function onInit() {}",
      onPreRender: "function onPreRender() {}",
      onRender: "", // "function onRender(object , delta) {}",
      onFinish: "function onFinish() {}",
    };
    this.scripts[object.uuid] = { ...script };
  };

  this.removeScripts = (object) => {
    delete this.scripts[object.uuid];
  };

  this.addHelper = (object) => {
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

  this.removeHelper = (object) => {
    if (this.helpers[object.id] !== undefined) {
      var helper = this.helpers[object.id];
      helper.remove();

      this.sceneHelpers.remove(helper);
      delete this.helpers[object.id];
    }
  };

  this.updateHelper = (objectId) => {
    const helper = this.helpers[objectId];

    if (helper !== undefined && helper.isSkeletonHelper !== true) {
      helper.update();
    }
  };

  this.saveProject = () => {
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

  this.loadProject = (data) => {
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


  this.execute = (command) => {
    this.history.execute(command);
  };

  this.undo = () => this.history.undo();

  this.redo = () => this.history.redo();
}
