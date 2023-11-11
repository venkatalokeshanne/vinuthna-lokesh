import { Grid } from '@mui/material';
import './App.css';
import heart from "../../images/icon-wedding-heart-primary.svg"
import AppBarVL from '../../Components/AppBarVL/AppBarVL';

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: "100%" }}>

        <Grid item xl={3} textAlign="center" >
          <svg width="100px" height="100px" viewBox="0 0 100 100" y="0px" x="0px" class="position-absolute start-50 top-50 translate-middle">
            <g>
              <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#e8ede6"></path>
              <path className="path-heart-sm" d="M89.63,70.9c-3.57,10.15-22.21,12.84-22.21,12.84s-12.84-13.77-9.26-23.92c4.14-11.76,19.75-5.86,15.74,5.54 C77.78,54.33,93.78,59.13,89.63,70.9z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#6d8a91"></path>
            </g>
          </svg>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
