import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";

const theme = createTheme();

export default function BusinessIdea() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      companyname: data.get("companyname"),
      idea: data.get("idea"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh"}} id={styles["root"]}
  spacing={0}
  direction="row"
  alignItems="center"
  justifyContent="center" style=  {{textAlign: "center", display: "flex", alignItems: "center" }} >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Typography component="h1" variant="h5" color={"black"}>
              Business Idea
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '60ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField 
                margin="normal"
                required
                fullWidth
                id="email"
                label="Company Name"
                name="companyname"
                autoComplete="companyname"
                placeholder="Enter your company name"
                autoFocus
              />
              <TextField
                required
                name="idea"
                fullWidth
                label="Business Idea"
                id="idea"
                rows = {10}
                maxRows={10}
                placeholder="Enter your business idea in not more than 10 lines"
                multiline              
                />

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={routeChange}
              >
                Submit
              </Button>
              <Grid container justifyContent="center">
              </Grid>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}