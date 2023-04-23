export function UIControllersManager() {
    this.controllers = {};



    this.addUIController = (controllerId , controller) => {
        if (this.controllers[controllerId] != null || this.controllers[controllerId] != undefined) {
            console.warn("the controllerId" + controllerId + "already exists")
            return;
        }

        this.controllers[controllerId] = controller;
    }


    this.removeController = (controllerId) => {
        delete this.controllers[controllerId];
    }

    this.getControllerById = (controllerId) => {
        return this.controllers[controllerId];
    }
}