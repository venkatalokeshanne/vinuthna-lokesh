import { Grid } from "@mui/material"
import vlweds from "../../images/vlweds.png"

const VLlogo = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: "250px" }}>
            <Grid item xl={12} xs={12} spacing={0} textAlign="center">
                <img src={vlweds} style={{ width: "23rem", height: "14rem" }} />
            </Grid>
        </Grid>

    )
}

export default VLlogo