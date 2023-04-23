
import { GameObject } from "./GameObject";
import { JSONLoader, ObjectLoader } from "three";

import { useEffect } from "react";
import { Suspense } from "react";



export  function SceneObjects({ editor  }) {
   

    const data = editor.saveProject();
    const loader = new ObjectLoader();
    console.log(data.scene);

    const scene =  loader.parse(data.scene);
  
   
  
    
  return scene.children.map((object, index) => {
    console.log(data.scripts , object.uuid);
    switch (object.type) {
      default:
        
        return (
          <GameObject
            editor = {editor}
            script={data.scripts[object.uuid]}
            key={index}
            object={object}
            index={index}
          ></GameObject>
        );
    }
  })

  

  
}
