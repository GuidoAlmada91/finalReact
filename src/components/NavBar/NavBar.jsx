import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around">
      <h4>Compu House</h4>
      <div>
        <Link to="/">
          <button className="btn btn-outline-dark mx-2">Home</button>
        </Link>
        <Link to="/category/mouses">
          <button className="btn btn-outline-dark mx-2">Mouses</button>
        </Link>
        <Link to="/category/teclados">
          <button className="btn btn-outline-dark mx-2">Teclados</button>
        </Link>
        <Link to="/category/monitores">
          <button className="btn btn-outline-dark mx-2">Monitores</button>
        </Link>
        <Link to="/category/auriculares">
          <button className="btn btn-outline-dark mx-2">Auriculares</button>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};
