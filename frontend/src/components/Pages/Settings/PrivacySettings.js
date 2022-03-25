import SettingsIcons from '@mui/icons-material/Settings';
import './SettingsPage.css';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
    let navigate = useNavigate();

    const routeChange = (url) => {
        let path = `/` + url;
        navigate(path);
      };
    return (
        <div className="settings-page">
            <div className="settings-page-leftpanel">
                <div className='settings-page-leftpanel-item' onClick={() => routeChange('settings')} >
                    <p> Account Settings </p> <SettingsIcons/>
                </div>
                <div className='settings-page-leftpanel-item' style={{backgroundColor :'#64c3fa'}}>
                    <p> Privacy Settings </p> <SettingsIcons/>
                </div>
            </div>

            <div className="settings-page-rightpanel" style={{m: 1, width: '110ch', paddingLeft: '170px', textAlign: 'left'}}>
            
            <Typography component="h1" variant="h4" fontFamily= {"Garamond"} color={"black"}>
              Change Password
            </Typography>
            
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="current-password"
              />

                <TextField
                margin="normal"
                required
                fullWidth
                name="npassword"
                label="New Password"
                type="password"
                id="npassword"
              />

              <Button
                type="save"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save Changes
              </Button>
            
                </div>
        </div>
    )
}

export default SettingsPage;