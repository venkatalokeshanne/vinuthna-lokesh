import { Grid } from "@mui/material"
import ReactPlayer from "react-player"


const Live = () => {
    return (
        <><Grid container justifyContent="center" style={{ marginTop: "25px" }}>
            <Grid item xl={2} xs={3} textAlign="center">
                <svg width="80px" height="80px" viewBox="0 0 100 100" y="0px" x="0px" class="position-absolute start-50 top-50 translate-middle">
                    <g>
                        <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#6B4C90"></path>
                        <path className="path-heart-sm" d="M89.63,70.9c-3.57,10.15-22.21,12.84-22.21,12.84s-12.84-13.77-9.26-23.92c4.14-11.76,19.75-5.86,15.74,5.54 C77.78,54.33,93.78,59.13,89.63,70.9z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#f6dce9"></path>
                    </g>
                </svg>
            </Grid>
            <Grid item xl={2} display={{ xs: "none", lg: "block" }} textAlign="center">
                <svg width="80px" height="80px" viewBox="0 0 100 100" y="0px" x="0px" class="position-absolute start-50 top-50 translate-middle">
                    <g>
                        <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#e8ede6"></path>
                        <path className="path-heart-sm" d="M89.63,70.9c-3.57,10.15-22.21,12.84-22.21,12.84s-12.84-13.77-9.26-23.92c4.14-11.76,19.75-5.86,15.74,5.54 C77.78,54.33,93.78,59.13,89.63,70.9z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#6d8a91"></path>
                    </g>
                </svg>
            </Grid>
            <Grid item xl={2} xs={6} textAlign="center">
                <h2 style={{ fontFamily: "cursive" }}>Watch Live</h2>
            </Grid>
            <Grid item xl={2} xs={3} textAlign="center">
                <svg width="80px" height="80px" viewBox="0 0 100 100" y="0px" x="0px" class="position-absolute start-50 top-50 translate-middle">
                    <g>
                        <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#f6dce9"></path>
                        <path className="path-heart-sm" d="M89.63,70.9c-3.57,10.15-22.21,12.84-22.21,12.84s-12.84-13.77-9.26-23.92c4.14-11.76,19.75-5.86,15.74,5.54 C77.78,54.33,93.78,59.13,89.63,70.9z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#6B4C90"></path>
                    </g>
                </svg>
            </Grid>
            <Grid item xl={2} display={{ xs: "none", lg: "block" }} textAlign="center">
                <svg width="80px" height="80px" viewBox="0 0 100 100" y="0px" x="0px" class="position-absolute start-50 top-50 translate-middle">
                    <g>
                        <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#e8ede6"></path>
                        <path className="path-heart-sm" d="M89.63,70.9c-3.57,10.15-22.21,12.84-22.21,12.84s-12.84-13.77-9.26-23.92c4.14-11.76,19.75-5.86,15.74,5.54 C77.78,54.33,93.78,59.13,89.63,70.9z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3.5" stroke="#000000" fill="#6d8a91"></path>
                    </g>
                </svg>
            </Grid>
        </Grid><Grid container justifyContent="center" style={{ marginTop: "25px" }}>
                <ReactPlayer url="https://youtu.be/hYFzyK9ExuM?si=kJbHWhovuzSv_X55" playing={true} height="75vh" width="75vw" controls />
            </Grid></>

    )
}

export default Live