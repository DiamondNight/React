import { Link } from "react-router-dom";

import travel from "../../data/ArrayList";
const arrayLista = travel;
const createLiTravel = (arrayObjectList) => {
  let liTravel = "";
  liTravel = arrayObjectList.map((element, indice) => {
    return (
      <li key={indice} className="nav-item">
        <Link to={element.link} className={"nav-link"}>
          {element.pais}
        </Link>
      </li>
    );
  });
  return liTravel;
};

const Menu = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/'} className={"nav-link"}>
                Home
              </Link>
            </li>
            {createLiTravel(arrayLista)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
