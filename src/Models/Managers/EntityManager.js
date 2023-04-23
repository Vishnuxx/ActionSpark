export function EntityManager() {
  //entity structure
  /*
    {
        uuid:"",
        name:"",
        components:{}
    }
     */

  this.entities = {};

  this.addEntity = (object) => {
    this.entities[object.uuid] = {
      uuid: object.uuid,
      components: {},
    };
  };

  this.removeEntity = (object) => {
    delete this.entities[object.uuid];
  };

  this.addComponent = (object, component) => {
    const components = this.entities[object.uuid]["components"];
    components[component.id] = component;
  };

  this.removeComponent = (object, componentId) => {
    const components = this.entities[object.uuid]["components"];
    delete components[componentId];
  };
}
