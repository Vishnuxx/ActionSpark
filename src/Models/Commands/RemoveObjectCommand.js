import { CommandInterface } from "../CommandInterface";

class RemoveObjectCommand extends CommandInterface {
  constructor(editor, actions, object) {
    this._editor = editor;
    this._actions = actions;
    this._object = object;
    this._parent = object.parent;
    this._index = object.parent.children.indexOf(object);
  }

  execute() {
    this._actions.removeObject(this._object);
  }

  undo() {
    this._actions.addObject(this._object, this._parent, this._index);
  }

  redo() {
    this._actions.removeObject(this._object);
  }
}


export default RemoveObjectCommand;