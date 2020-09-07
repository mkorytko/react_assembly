import React from "react";
import * as PropTypes from "prop-types";
import {Box, Typography} from "@material-ui/core";

const Text = (props) => {
  const {
    children, color = "inherit", paragraph = false, component = "div", bgcolor = "inherit",
    noWrap = false, textAlign = "left", variant = "body1", display = "block", ...otherStyles
  } = props;

  return (
    <Box
      {...otherStyles}
      bgcolor={bgcolor}
      textAlign={textAlign}
      component={component}
      display={display}
      color={color}>
      <Typography
        variant={variant}
        align="inherit"
        color="inherit"
        noWrap={noWrap}
        paragraph={paragraph}>
        {children}
      </Typography>
    </Box>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  paragraph: PropTypes.bool,
  noWrap: PropTypes.bool,
  align: PropTypes.string,
  variant: PropTypes.string,
  display: PropTypes.string,
  color: PropTypes.string,
  component: PropTypes.string,
  textAlign: PropTypes.string,
  bgcolor: PropTypes.string,
};

export default React.memo(Text);
