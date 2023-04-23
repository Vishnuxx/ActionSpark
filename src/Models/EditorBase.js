import { Scene, _SRGBAFormat } from "three";

export function EditorBase() {
  this.scene = null;
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
}





