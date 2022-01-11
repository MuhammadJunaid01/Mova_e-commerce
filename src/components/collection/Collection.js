import "./collection.css";
import { Card } from "antd";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AllProducts from "./../allProducts/AllProducts";
import WinterCollection from "../winterCollection/WinterCollection";

const Collection = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div>
        <div className="collecrtionTitle">
          <h3>COLLECTIONS</h3>
        </div>
        <div className="collectionBtnGroup">
          <Link to={`${url}/allProducts`}>
            <button>All</button>
          </Link>
          <Link to={`${url}/winter`}>
            <button>Winter2020</button>
          </Link>
          <Link to="/allProducts">
            <button>Extreme Sports</button>
          </Link>
          <Link to="/allProducts">
            <button>Summer2020</button>
          </Link>
        </div>
        <div className="collectionItem">
          <Switch>
            <Route exact path={`${path}`}>
              <AllProducts />
            </Route>
            <Route exact path={`${path}/allProducts`}>
              <AllProducts />
            </Route>
            <Route path={`${path}/winter`}>
              <WinterCollection />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Collection;
