export function EditorBase() {
  this.components = [];

  

  this.addComponent = (type) => {
    this.components = [
      ...this.components,
      {
        type: type,
        x: 40,
        y: 40,
        w: 10,
        h: 10,
      },
    ];
  };

 this.save = () => {
   const obj = {
     components: [...this.components],
   };

   return JSON.stringify(obj);
 };

 this.load = (data) => {
   const obj = JSON.parse(data);

   this.components = [...obj.components];
 };
}
