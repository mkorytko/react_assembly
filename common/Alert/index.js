import React from "react";
import * as PropTypes from "prop-types";
import {Snackbar, withStyles} from "@material-ui/core";
import Details from "@material-ui/icons/Details";
import styles from "./style";

@withStyles(styles)
class SnackBarAction extends React.PureComponent {
  render() {
    const {
      open, dismiss, classes,
    } = this.props;
    return (
      <Snackbar
        open={Boolean(open)}
        ContentProps={{
          classes: {
            root: classes[`theme_${open?.variant || "default"}`],
          },
        }}
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={dismiss}
        message={open?.message || "Default Message"}
        action={(
          <React.Fragment>
            {this.props.children || <Details />}
          </React.Fragment>
        )} />
    );
  }
}

SnackBarAction.propTypes = {
  open: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired,
  classes: PropTypes.shape({}),
  onExited: PropTypes.func,
  onEntered: PropTypes.func,
  children: PropTypes.node,
};

export default SnackBarAction;
