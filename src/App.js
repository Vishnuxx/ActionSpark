import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { EditorPanel } from "./SceneEditor/EditorPanel";
import { RecoilRoot } from "recoil";
import { useRef } from "react";

function App() {
  const app = useRef();

  return (
    <RecoilRoot>
      <div className="App" ref={app}>
        <ChakraProvider>
          <EditorPanel></EditorPanel>
        </ChakraProvider>
      </div>
    </RecoilRoot>
  );
}

export default App;
