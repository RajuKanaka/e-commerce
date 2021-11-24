import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import styles from "./styles.js";
import logo from "../../Assets/Images/shopping cart logo.png";
const Navbar = ({ totalItems }) => {
  const classes = styles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            varaint="h6"
            className="classes.title"
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />
            E-COMMERCE
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button} />
          <IconButton
            component={Link}
            to="/cart"
            aria-label="show card items"
            color="inherit"
          >
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
