import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import img1 from './img1.jpeg';
import img2 from "../assets/img2.jpeg";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme();

export default function SignUpComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      fname: data.get("fname"),
      lname: data.get("lname"),
      fname: data.get("email"),
      lname: data.get("pass"),
      fname: data.get("pass2"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${img2})`,
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
                autoComplete="fname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lname"
                label="Last Name"
                type="lname"
                id="lname"
                autoComplete="lname"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="linkedin"
                label="LinkedIn Profile Link"
                type="linkedin"
                id="linkedin"
                autoComplete="linkedin"
              />
              {/* <select id = "myList" margin= "normal" required>  
                <option margin = "normal"> Select Type</option>  
                <option> Investor </option>  
                <option> Founder</option>  
                </select> 
                 */}

              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="pass"
                label="Password"
                type="password"
                id="pass"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="pass2"
                label="Re-enter Password"
                type="password"
                id="pass2"
              />
              <Select
                margin="normal"
                required
                fullWidth
                name="type"
                label="Select Founder or investor*"
                floatingLabelText="Founder or Investor"
              >
                <MenuItem value="Founder" primaryText="Founder">
                  Founder
                </MenuItem>
                <MenuItem value="Investor" primaryText="Investor">
                  Investor
                </MenuItem>
              </Select>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Link href="/" style={{ color: "#FFF" }}>
                  Register
                </Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
