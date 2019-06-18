import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing(2)
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: red[800]
    }
  }
});

class FontAwesome extends React.Component {
  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }

  render() {
    const { classes } = this.props;
    const { icon } = this.props;

    return <Icon className={classNames(classes.icon, { icon })} />;
  }
}

FontAwesome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FontAwesome);
