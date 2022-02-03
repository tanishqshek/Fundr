import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  navlinks: {
    marginLeft: theme.spacing(10),
  },
 logo: {
    flexGrow: "2",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "black",
      borderBottom: "1px solid white",
      
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: '#000' }}>
      <CssBaseline />
      <Toolbar >
        <Typography variant="h4" className={classes.logo} align="left">
          Fundr
        </Typography>     
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;