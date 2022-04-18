import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import icon from '../assets/icon.png';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "2",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "grey",
      borderBottom: "2px solid white",
    },
  },
}));

function Navbar({isSignedIn, setIsSignedIn}) {

  isSignedIn = localStorage.getItem("isSignedIn") ? true : false
  
  console.log(isSignedIn)
  console.log(setIsSignedIn)
  let navigate = useNavigate();
  const routeChange = (url) => {
    let path = `/` + url;
    navigate(path);
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" style={{ background: "#000" }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo} align="left" onClick={() => routeChange('')}>
          Fundr
        </Typography>
        <div className={classes.navlinks}> 
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{width: 32, height: 32, color:"#5781DB"}}></Avatar>
          </IconButton>
        </Tooltip>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              color: "#5781DB"
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
              color: "#5781DB"
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {isSignedIn?<div><MenuItem onClick={() => routeChange('settings')}>
          <Avatar /> My account
        </MenuItem>
        <Divider /> 
        <div onClick={() => routeChange('privacy')}>
        <MenuItem>
          <ListItemIcon>
            
            <Settings fontSize="small" />
            
          </ListItemIcon>
          Privacy Settings
        </MenuItem>
        </div>
        </div>:<div> </div>}
        <MenuItem  onClick= {() => {
          if (isSignedIn) {
            routeChange('')
            setIsSignedIn(false)
          } else {
            routeChange('signin')
          }
        }}>
          <ListItemIcon>
            {isSignedIn?<Logout fontSize="small" />:<LoginIcon fontSize="small" />}
          </ListItemIcon>
          {isSignedIn? "Logout": "Login"}
        </MenuItem>
      </Menu>
        </div>
      </Toolbar>
    </AppBar>
    
  );
}
export default Navbar;