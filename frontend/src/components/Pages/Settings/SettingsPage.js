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
                <div className='settings-page-leftpanel-item' style={{backgroundColor :'#64c3fa'}}>
                    <p> Account Settings </p> <SettingsIcons/>
                </div>
                <div className='settings-page-leftpanel-item' onClick={() => routeChange('privacy')}>
                    <p> Privacy Settings </p> <SettingsIcons/>
                </div>
            </div>
            <div className="settings-page-rightpanel" style={{m: 1, width: '110ch', paddingLeft: '50px', textAlign: 'left'}}>
            
            <Typography component="h1" variant="h4" fontFamily= {"Garamond"} color={"black"} style= {{paddingLeft: '20px'}}>
              Basic Information
            </Typography>

            <div className='settings-card1' style={{m: 1, width: '110ch'}}>
                    <p style={{m: 1, width: '110ch', paddingLeft: '40px', textAlign: 'left'}}> First Name:  </p>
                    <p style={{m: 1, width: '110ch', paddingLeft: '40px', textAlign: 'left'}}> Last Name:  </p>
                    <p style={{m: 1, width: '110ch', paddingLeft: '40px', textAlign: 'left'}}> E-mail ID:  </p>
                    <p style={{m: 1, width: '110ch', paddingLeft: '40px', textAlign: 'left'}}> LinkedIn:  </p>
                    <p style={{m: 1, width: '110ch', paddingLeft: '40px', textAlign: 'left'}}> Contact Number:  </p>
            </div>
            </div>
            </div>
            // //{/* <TextField
            //     margin="normal"
            //     required
            //     fullWidth
            //     id="fname"
            //     label="First Name"
            //     name="fname"
            //     autoComplete="fname"
            //     placeholder='First Name'
            //     autoFocus
            //   />
            //   <TextField
            //     margin="normal"
            //     required
            //     fullWidth
            //     name="lname"
            //     label="Last Name"
            //     type="lname"
            //     id="lname"
            //     autoComplete="lname"
            //     placeholder='Last Name'
            //   /> */}
    )
}

export default SettingsPage;