import { Button, Grid } from '@mui/material';
import './App.css';
import { useState } from 'react';
import InvitaionVideo from '../InvitaionVideo/InvitationVideo';
import VLlogo from '../VLlogo/VLlogo';
import Invitaion from '../Invitation/Invitaion';
import Live from '../Live/Live';

function App() {

  const [selectionStatus, setSelectionStatus] = useState("")

  const BrideAndGroom = () => {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: "250px" }}>
        <Grid item xl={3} xs={3} spacing={0} textAlign="center">
          <Button variant="outlined" style={{ backgroundColor: "#6B4C90", color: "white" }} onClick={() => setSelectionStatus("bride")}>Bride వధువు</Button>
        </Grid>

        <Grid item xl={3} xs={3} textAlign="center">
          <svg width="100px" height="100px" viewBox="0 0 100 100" y="0px" x="0px" class="position-absolute start-50 top-50 translate-middle">
            <g>
              <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#e8ede6"></path>
              <path className="path-heart-sm" d="M89.63,70.9c-3.57,10.15-22.21,12.84-22.21,12.84s-12.84-13.77-9.26-23.92c4.14-11.76,19.75-5.86,15.74,5.54 C77.78,54.33,93.78,59.13,89.63,70.9z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#6d8a91"></path>
            </g>
          </svg>
        </Grid>

        <Grid item xl={3} xs={3} textAlign="center">
          <Button variant="contained" style={{ backgroundColor: "#f6dce9", color: "black" }} onClick={() => setSelectionStatus("groom")}>Groom వరుడు</Button>
        </Grid>
      </Grid>
    )
  }
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" >
        <Grid item xl={12} xs={12} spacing={0} textAlign="center"><VLlogo /></Grid>
        <Grid item xl={12} xs={12} spacing={0} textAlign="center"><BrideAndGroom /></Grid>
        <Grid item xl={12} xs={12} spacing={0} textAlign="center"><InvitaionVideo selectionStatus={selectionStatus} /></Grid>
        <Grid item xl={12} xs={12} spacing={0} textAlign="center"><Invitaion /></Grid>
        <Grid item xl={12} xs={12} spacing={0} textAlign="center"><Live /></Grid>
      </Grid>
    </>

  );
}

export default App;
