import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import heart from "../../images/icon-wedding-heart-primary.svg"
import gettingmarried from "../../images/icon-wedding-vl.png"
import { Grid } from '@mui/material';

export default function AppBarVL() {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" style={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <Grid container justifyContent="center">
                        <Grid item xl={3}  display={{ xs: "none", lg: "block"}}>
                            <img src={heart} style={{ height: "60px" }}></img>
                        </Grid>
                        <Grid item xl={3} xs={12} textAlign="center">
                            <img src={gettingmarried} style={{ height: "60px" }}></img>
                        </Grid>
                        <Grid item xl={3} display={{ xs: "none", lg: "block"}} textAlign="end">
                            <img src={heart} style={{ height: "60px" }}></img>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}