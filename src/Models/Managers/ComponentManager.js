export function ComponentsManager() {
  this.components = {};

  this.registerComponent = (componentId, properties) => {
    if (
      this.components[componentId] != null ||
      this.components[componentId] != undefined
    ) {
      console.warn("The componentId" + componentId + "already exists");
      return;
    }

    this.components[componentId] = properties;
  };

  this.unregisterComponent = (componentId) => {
    delete this.components[componentId];
  };

  this.getComponentInstance = (componentId) => {
    return Object.assign(this.components[componentId]);
  };
}