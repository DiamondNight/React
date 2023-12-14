import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Country from "./Country";

// import travel from "../../data/ArrayList";
// let travelList = [...travel];
// let pathList = "";
// const routeLista = () => {
//   pathList += travelList.map((element) => {
//     return <Route path={`/:${element.titulo}`} element={Country()} />;
//   });
//   return pathList;
// };
const Content = () => (
  <div>
    <Routes>
      {/* {routeLista()} */}
      <Route path={`/:portugal`} element={<Country/>} />
      <Route path={`/:espanha`} element={<Country/>} />
      <Route path={`/:franca`} element={<Country/>} />
    </Routes>
  </div>
);

export default Content;
