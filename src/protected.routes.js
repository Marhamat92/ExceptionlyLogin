import React from "react";
import { useHistory, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthStore } from "store/AuthStore";

export const ProtectedRoute = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  const [isLoggin] = useAuthStore((state) => [state.isLoggin]);
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggin) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        } else {
          history.push("/login");
        }
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  layout: PropTypes.any,
  location: PropTypes.any,
};
