import Tabla from "./components/Tabla";
import React, { useState } from "react";
import DataContext, { data } from "./data/DataContext";
function App() {
  const [state, setState] = useState(data);
  return (
    <DataContext.Provider value={{ state, setState }}>
      <div className="container">
        <div className="container text-center">
          <div class="row">
            <div class="col">
              <Tabla />
            </div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
