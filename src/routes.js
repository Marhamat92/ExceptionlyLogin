import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { ProtectedRoute } from "./protected.routes";
import { createBrowserHistory } from "history";
import Login from "pages/Login/Login";
import Loading from "pages/Loading/Loading";
import Layout from "layout/Layout";
import Homepage from "pages/Homepage/Homepage";

const browserHistory = createBrowserHistory();

const Routes = () => {
  const [authTokens, setAuthTokens] = useState();
  const setTokens = (data) => setAuthTokens(data);
  const history = useHistory();
  const location = useLocation();

  //   const [isLoggin, setIsLoggin] = useAuthStore((state) => [
  //     state.isLoggin,
  //     state.setIsLoggin,
  //   ]);

  //   const checkAuth = async () => {
  //     if (localStorage.getItem("__mp_tk") !== null) {
  //       tokenCheck(localStorage.getItem("__mp_tk"))
  //         .then((res) => {
  //           console.log(res);
  //           if (!res.status) {
  //             setIsLoggin(false);
  //             history.push("/login");
  //           }
  //         })
  //         .catch((err) => {
  //           setIsLoggin(false);
  //           history.push("/login");
  //         });
  //     }
  //   };

  //   useEffect(() => {
  //     checkAuth();
  //   }, []);

  return (
    <Router history={browserHistory}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Login {...props} />;
            }}
          />

          <ProtectedRoute
            component={Homepage}
            exact
            layout={Layout}
            path={"/"}
          />

    
        </Switch>
      </Suspense>
    </Router>
  );
};
export default Routes;
