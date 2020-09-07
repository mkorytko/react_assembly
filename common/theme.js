import React from "react";
import * as PropTypes from "prop-types";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import {orange} from "@material-ui/core/colors";
import {
  PRIMARY_PALETTE,
  SECONDARY_PALETTE,
  ERROR_PALETTE,
  WARNING_PALETTE,
  INFO_PALETTE,
  SUCCESS_PALETTE,
  TEXT_PALETTE,
  DIVIDER,
  BACKGROUND_PALETTE,
} from "./themeConstants";

const gilroy = {
  fontFamily: "Gilroy, SSansPro, Roboto, sans-serif;",
};

const customTheme = {
  typography: {
    fontFamily: gilroy.fontFamily,
    h1: gilroy,
    h2: gilroy,
    h3: gilroy,
    h4: gilroy,
    h5: gilroy,
    h6: gilroy,
  },
  palette: {
    primary: PRIMARY_PALETTE,
    secondary: SECONDARY_PALETTE,
    error: ERROR_PALETTE,
    warning: WARNING_PALETTE,
    info: INFO_PALETTE,
    success: SUCCESS_PALETTE,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    type: "light",
    text: TEXT_PALETTE,
    divider: DIVIDER,
    background: BACKGROUND_PALETTE,
  },
  status: {
    danger: orange[500],
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // mixins: {
  //     toolbar: {
  //         minHeight: 64,
  //         "@media (min-width:0px) and (orientation: landscape)": {
  //             minHeight: 56,
  //         },
  //         "@media (min-width:600px)": {
  //             minHeight: 72,
  //         }
  //     }
  // },
  overrides: {
    //
  },
};

const useDarkMode = () => {
  const [theme, toggleTheme] = React.useState(customTheme);
  const {palette: {type}} = theme;
  const toggleDarkTheme = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "dark" ? "light" : "dark",
      },
    };
    toggleTheme(updatedTheme);
  };

  return [theme, toggleDarkTheme];
};

const CustomThemeProvider = (props) => {
  const themeConfig = createMuiTheme(customTheme);
  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomThemeProvider;
