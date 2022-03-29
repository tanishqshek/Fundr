import React from 'react'
import { Button, Stack, Typography} from '@mui/material'
import { Link } from "react-router-dom";


export default function ErrorPage(){
    return(
        <Stack>
            <Typography 
                color={"black"}
                variant="h3"
                align="center"
            >
                ERROR 404! PAGE NOT FOUND!
            </Typography> <br></br>
            <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                <Button
                    variant="contained"
                    size="large"
                    color="error"
                    sx={{
                        ml: {
                            xs:"100px",
                            sm:"260px",
                            md: "560px",
                        }
                    }}>
                    Return to Home Page
                </Button>  
            </Link>
        </Stack>
    );
}