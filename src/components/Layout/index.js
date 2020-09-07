import React from "react";
import * as PropTypes from "prop-types";
import "./style.scss";
import axios from "axios";
import {Button} from "@material-ui/core";
import Text from "../Text";
import {getData} from "../../../common/request";

const Layout = () => {
  return (
    <div className="Layout">
      <header className="header">
        <div className="header header__page">
          <Text
            fontFamily="Aerial"
            color="secondary.light">
            eM_!_Ka
          </Text>
        </div>
      </header>
      <main className="main" />
      <footer className="footer" />
    </div>
  );
};

Layout.propTypes = {

};

export default React.memo(Layout);
