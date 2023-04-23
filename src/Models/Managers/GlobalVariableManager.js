export function GlobalVariableManager() {
    this.globalVariables = {};

    this.addVariable = (name , value) => {
        if (this.globalVariables[name] != null || this.globalVariables[name] != undefined) {
            console.warn("the variable exists")
            return
        } 
        this.globalVariables[name] = {
            isReferenced: false,
            value: value
        };
    };

    this.hasReferences = (name) => {
        return this.globalVariables[name].isReferenced;
    }

    this.removeVariable = (name) => {
       if(this.globalVariables[name].isReferenced == true) {
        console.warn("the variable" + name + "is currently being used")
        return
       }
       delete this.globalVariables[name];
    };

    this.getVariable = (name) => {
        this.globalVariables[name].isReferenced = true;
        return this.globalVariables[name].value;
    }
}