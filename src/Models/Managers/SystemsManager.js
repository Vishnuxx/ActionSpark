export function SystemsManager() {
  this.systems = {};

  this.registerSystem = (systemId, system) => {
    if (this.systems[systemId] != null || this.systems[systemId] != undefined) {
      console.warn("The systemId" + systemId + "already exists");
      return;
    }
    this.systems[systemId] = system;
  };


  this.unregisterSystem = (systemId) => {
    delete this.systems[systemId];
  };

  
  this.runSystems = (...params) => {
    Object.keys(this.systems).map((key , index) => {
        this.systems[key](...params);
    })
  }
}
