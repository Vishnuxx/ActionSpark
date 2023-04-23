import { useEffect, useRef } from "react";

import { render, useFrame } from "@react-three/fiber";

export function GameObject({object, script , editor}) {
  const mesh = useRef();
console.log(script)
  // /const onInitFn = new Function("editor" , "object", script["onInit"]);
  const renderFn = new Function("object" , script["onRender"]);
 
  useEffect(()=>{
    // onInitFn(editor , object);
  },[]);

  useFrame((delta)=>{
    
    renderFn(object , delta);
    
  })


  return (
    <primitive
      ref={mesh}
      dispose={null}
      object={object}
      name={object.name}
    >
      {
        object.children.map((object , index)=>{
          <GameObject key={index} object={object}></GameObject>
        })
      }
    </primitive>
  );
}
