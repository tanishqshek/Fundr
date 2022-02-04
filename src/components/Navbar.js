import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

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

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: '#000' }}>
      <CssBaseline />
      <Toolbar >
        <Typography variant="h4" className={classes.logo} align="left">
          Fundr
        </Typography>
        <LogoutIcon onClick={routeChange}/>     
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;