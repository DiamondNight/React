import Tabla from "./components/Tabla";
import React, { useState } from "react";
import DataContext, { data } from "./data/DataContext";
import Card from "./components/Card";
import Access from "./components/Access";
import Level from "./components/Level";

function App() {
  const [state, setState] = useState(data);
  return (
    <DataContext.Provider value={{ state, setState }}>
      <div className="container">
        <div className="container text-center">
          <div className="row d-flex justify-content-evenly">
            <div className="col">
              <Tabla />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Access>
                <Level level = {1}/>
                <Level level = {3}/>
                <Level level = {5}/>
              </Access>
            </div>
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
