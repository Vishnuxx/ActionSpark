

function History() {

  this.undos = [];
  this.redos = [];
  this.lastCmdTime = new Date();
  this.idCounter = 0;

  this.historyDisabled = false;
  

  // signals

  var scope = this;
}

History.prototype = {
  execute: function (cmd, optionalName) {
    var lastCmd = this.undos[this.undos.length - 1];
    var timeDifference = new Date().getTime() - this.lastCmdTime.getTime();

    var isUpdatableCmd =
      lastCmd &&
      lastCmd.updatable &&
      cmd.updatable &&
      lastCmd.object === cmd.object &&
      lastCmd.type === cmd.type &&
      lastCmd.script === cmd.script &&
      lastCmd.attributeName === cmd.attributeName;

    if (isUpdatableCmd && cmd.type === "SetScriptValueCommand") {
      // When the cmd.type is "SetScriptValueCommand" the timeDifference is ignored

      lastCmd.update(cmd);
      cmd = lastCmd;
    } else if (isUpdatableCmd && timeDifference < 500) {
      lastCmd.update(cmd);
      cmd = lastCmd;
    } else {
      // the command is not updatable and is added as a new part of the history

      this.undos.push(cmd);
      cmd.id = ++this.idCounter;
    }

    cmd.name = optionalName !== undefined ? optionalName : cmd.name;
    cmd.execute();
    cmd.inMemory = true;

  
    this.lastCmdTime = new Date();

    // clearing all the redo-commands

    this.redos = [];
   
  },

  undo: function () {
    if (this.historyDisabled) {
      alert("Undo/Redo disabled while scene is playing.");
      return;
    }

    var cmd = undefined;

    if (this.undos.length > 0) {
      cmd = this.undos.pop();

      if (cmd.inMemory === false) {
        cmd.fromJSON(cmd.json);
      }
    }

    if (cmd !== undefined) {
      cmd.undo();
      this.redos.push(cmd);
      
    }

    return cmd;
  },

  redo: function () {
    if (this.historyDisabled) {
      alert("Undo/Redo disabled while scene is playing.");
      return;
    }

    var cmd = undefined;

    if (this.redos.length > 0) {
      cmd = this.redos.pop();

      if (cmd.inMemory === false) {
        cmd.fromJSON(cmd.json);
      }
    }

    if (cmd !== undefined) {
      cmd.execute();
      this.undos.push(cmd);
     
    }

    return cmd;
  },

  
};

export { History };
