import { CommandInterface } from "../CommandInterface";

class AddObjectCommand extends CommandInterface {
    constructor(editor , actions , object , parent , index){
        super();
        this._editor = editor;
        this._actions = actions
        this._object = object;
        this._parent = parent;
        this._index = index;
        this._uuid = object.uuid;
    }

    execute() {
        this._actions.addObject(this._object , this._parent , this._index);
    }

    undo() {
        this._actions.removeObject(this._object);
    }

    redo() {
       this._actions.addObject(this._object, this._parent, this._index);
    }
}

export default AddObjectCommand;