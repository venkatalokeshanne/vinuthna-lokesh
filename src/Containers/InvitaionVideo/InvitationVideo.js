import { Grid } from "@mui/material"
import ReactPlayer from "react-player"
import bride from "../../images/bride.mp4"
import groom from "../../images/groom.mp4"
import Invitaion from '../Invitation/Invitaion';

const InvitaionVideo = ({ selectionStatus }) => {
    return (
        <>
            {selectionStatus !== "" && <Grid container justifyContent="center" alignItems="center">
                <Grid item xl={12} xs={12} spacing={0} textAlign="center">
                    <svg width="200px" height="60px" viewBox="0 0 252 66">
                        <g transform="matrix(2.00074,0,0,2.00074,-124.1,-520.86)">
                            <path d="M101.629,281.41C101.627,281.514 101.193,281.895 100.688,282.234C99.268,283.19 96.091,286.269 95.654,287.111C94.691,288.972 96.598,288.3 99.485,285.762C101.987,283.561 103.765,282.382 103.867,282.853C104.099,283.93 101.265,287.061 98.354,288.947C95.828,290.584 93.323,291.67 92.893,291.315C92.439,290.939 92.035,289.445 92.044,288.17C92.061,285.638 94.553,282.661 97.56,281.581C98.546,281.227 101.634,281.097 101.629,281.41ZM74.105,276.863C74.105,276.971 73.022,277.665 71.675,278.423C65.93,281.656 66.696,282.727 72.71,279.869C74.346,279.092 75.747,278.506 75.813,278.571C75.998,278.756 74.971,280.067 73.84,281.091C71.662,283.063 68.211,283.93 64.651,283.397C63.206,283.182 63.176,282.806 64.457,280.953C65.57,279.344 67.418,277.872 69.173,277.197C70.424,276.716 74.105,276.467 74.105,276.863ZM74.177,262.427C76.655,263.301 79.106,266.053 79.344,268.228L79.47,269.382L77.738,268.384C76.789,267.837 75.212,266.92 74.25,266.354C72.565,265.366 71.579,265.062 71.579,265.533C71.579,265.907 72.662,266.769 75.741,268.846L78.748,270.874L77.377,270.874C75.597,270.874 74.497,270.557 73.022,269.619C71.151,268.429 70.11,266.52 69.681,263.488C69.524,262.382 69.559,262.266 70.112,262.033C70.803,261.744 72.782,261.935 74.177,262.427ZM69.967,260.897C69.414,261.097 68.879,261.399 68.748,261.589C68.331,262.19 68.65,266.086 69.221,267.361C69.985,269.069 71.474,270.588 73.167,271.386C75.212,272.351 76.697,272.518 78.724,272.011C80.071,271.674 80.495,271.654 80.973,271.908C81.301,272.082 82.272,272.461 83.162,272.762L84.762,273.304L82.26,273.977C80.889,274.346 78.954,274.977 77.978,275.372C76.439,275.996 76.115,276.052 75.585,275.781C75.244,275.607 74.297,275.346 73.456,275.191C69.943,274.55 66.124,276.331 63.573,279.799C61.522,282.589 61.512,284.211 63.544,284.722C68.837,286.05 73.437,284.603 76.049,280.785C76.642,279.919 77.229,278.825 77.341,278.379C77.528,277.631 77.738,277.489 79.807,276.71C86.462,274.203 95.058,273.917 101.891,275.976C103.623,276.497 107.953,278.437 107.953,278.692C107.953,278.771 107.015,279.154 105.86,279.546C103.863,280.223 103.688,280.242 102.035,279.955C101.073,279.788 99.672,279.728 98.883,279.818C95.804,280.175 92.435,282.514 91.114,285.211C89.43,288.651 90.994,293.529 93.615,293.008C94.958,292.74 98.883,290.701 100.664,289.347C103.647,287.076 105.659,284.111 105.331,282.469C105.203,281.83 105.283,281.707 106.028,281.395C108.699,280.274 113.606,279.888 116.276,280.588C117.041,280.788 118.586,281.413 119.692,281.969C121.906,283.081 122.299,283.175 122.501,282.638C122.736,282.012 122.146,281.301 120.631,280.384C118.107,278.856 116.325,278.384 112.836,278.317C109.926,278.262 109.747,278.228 109.06,277.593C106.329,275.072 98.763,272.927 92.003,272.756C88.082,272.657 86.078,272.257 82.741,270.906L81.058,270.225L80.882,268.637C80.462,264.835 77.81,261.972 73.72,260.908C71.916,260.438 71.256,260.436 69.967,260.897Z" />
                        </g>
                        <g transform="matrix(2.00074,0,0,2.00074,-124.1,-520.86)">
                            <path d="M152.722,281.626C154.202,282.127 156.759,284.441 157.48,285.933C157.943,286.892 158.016,287.389 157.906,288.855C157.809,290.155 157.643,290.755 157.281,291.117C156.79,291.608 156.775,291.604 153.985,290.203C151.772,289.092 150.747,288.388 149.114,286.856C147.213,285.074 145.948,283.302 146.154,282.709C146.269,282.381 148.079,283.624 150.605,285.764C153.54,288.25 154.695,288.773 154.695,287.617C154.695,287.1 151.134,283.466 149.619,282.436C148.945,281.978 148.388,281.516 148.382,281.41C148.366,281.069 151.543,281.227 152.722,281.626ZM181.674,277.537C182.419,277.92 183.565,278.732 184.212,279.337C185.391,280.438 186.952,282.894 186.662,283.19C186.585,283.27 185.342,283.386 183.923,283.447C180.868,283.58 179.23,283.211 177.332,281.962C176.201,281.218 173.987,278.765 174.229,278.523C174.282,278.471 175.648,279.053 177.284,279.826C180.627,281.406 181.888,281.826 182.12,281.435C182.38,280.993 181.229,280.063 178.535,278.539C177.091,277.723 175.913,276.959 175.913,276.84C175.913,276.722 176.911,276.672 178.114,276.731C179.87,276.817 180.589,276.98 181.674,277.537ZM179.689,261.947L180.507,262.117L180.361,263.536C180.118,265.894 179.485,267.324 178.053,268.757C176.558,270.252 174.758,270.953 172.737,270.827L171.558,270.753L174.421,268.822C177.308,266.876 178.644,265.714 178.342,265.413C178.101,265.172 177.043,265.671 173.723,267.593C170.957,269.194 170.709,269.292 170.63,268.805C170.483,267.903 171.388,266.015 172.578,264.739C173.868,263.357 175.167,262.6 177.043,262.133C178.607,261.744 178.686,261.738 179.689,261.947ZM176.658,260.781C174.854,261.154 172.477,262.456 171.451,263.633C170.109,265.171 169.236,267.193 169.217,268.805L169.201,270.128L167.42,270.87C164.114,272.249 162.2,272.634 158.111,272.741C154.045,272.849 150.79,273.389 147.213,274.549C144.567,275.407 141.773,276.8 140.928,277.682C140.253,278.387 140.188,278.4 138.168,278.28C134.68,278.073 130.063,279.458 128.112,281.298C127.318,282.046 127.264,282.3 127.799,282.75C128.146,283.042 128.521,282.936 130.276,282.047C133.439,280.447 134.824,280.141 138.264,280.281C140.405,280.368 141.643,280.559 142.943,281.001L144.711,281.603L144.868,283.046C145.055,284.781 145.818,286.052 147.838,288C150.148,290.227 155.328,293.102 157.028,293.102C157.874,293.102 158.854,291.899 159.34,290.263C159.832,288.612 159.829,287.713 159.327,286.005C158.761,284.078 155.97,281.293 153.805,280.496C151.88,279.787 149.417,279.604 147.622,280.039C146.278,280.363 146.167,280.351 144.579,279.679C143.665,279.291 142.728,278.978 142.474,278.974C141.742,278.963 142.233,278.507 143.869,277.681C150.742,274.209 160.685,273.63 168.816,276.227C171.678,277.142 172.617,277.59 172.617,278.042C172.617,278.742 173.957,280.881 175.179,282.132C177.573,284.581 180.772,285.585 184.5,285.059C187.243,284.671 187.867,284.353 187.971,283.287C188.089,282.085 187.141,280.352 185.393,278.571C183.551,276.696 182.119,275.824 179.978,275.273C178.291,274.839 177.235,274.905 174.998,275.586C173.736,275.97 173.699,275.965 171.342,275.096C170.042,274.616 168.107,274.016 167.083,273.772L165.208,273.327L166.579,272.895C167.324,272.659 168.389,272.264 168.912,272.028C169.73,271.66 170.015,271.643 170.813,271.912C172.28,272.407 175.083,272.291 176.466,271.678C178.029,270.984 179.837,269.299 180.578,267.843C181.324,266.375 181.843,263.681 181.615,262.454C181.49,261.78 181.249,261.438 180.7,261.153C179.71,260.638 178.078,260.487 176.658,260.781Z" />
                        </g>
                        <g transform="matrix(2.00074,0,0,2.00074,-124.1,-520.86)">
                            <path d="M127.162,268.685C128.575,271.547 128.871,273.078 128.337,274.77C128.108,275.496 127.431,276.768 126.837,277.585L125.755,279.077L125.598,276.178C125.513,274.591 125.431,272.85 125.418,272.329C125.401,271.68 125.272,271.379 125.009,271.379C124.699,271.379 124.619,271.811 124.6,273.592C124.587,274.819 124.501,276.523 124.408,277.417L124.239,279.028L123.454,277.922C121.968,275.829 121.482,274.633 121.512,273.135C121.544,271.491 122.642,268.685 124.061,266.615L124.985,265.269L125.586,265.99C125.917,266.387 126.627,267.602 127.162,268.685ZM123.456,264.859C121.264,267.38 119.837,270.729 119.837,273.352C119.837,275.564 120.832,277.675 122.866,279.774C124.788,281.76 125.242,281.747 127.265,279.654C128.949,277.912 130.044,275.926 130.313,274.121C130.642,271.942 129.507,268.829 127.225,265.629C126.177,264.162 126.019,264.042 125.129,264.042C124.359,264.042 124.025,264.205 123.456,264.859Z" />
                        </g>
                        <g transform="matrix(2.00074,0,0,2.00074,-124.1,-520.86)">
                            <path d="M111.273,265.811C114.228,266.723 116.161,269.142 116.452,272.293L116.589,273.784L114.617,271.864C112.066,269.381 109.819,267.585 109.276,267.595C109.022,267.599 110.383,269.067 112.572,271.15C114.617,273.096 116.301,274.823 116.301,274.976C116.301,275.158 115.723,275.198 114.593,275.092C111.201,274.774 108.322,272.69 107.572,270.008C106.979,267.891 106.821,265.809 107.231,265.546C107.811,265.175 109.589,265.292 111.273,265.811ZM106.053,264.645C105.373,265.167 105.414,267.626 106.142,270.031C107.033,272.976 108.963,274.723 112.476,275.764C113.871,276.178 116.687,276.312 117.19,275.989C117.743,275.635 118.099,273.039 117.811,271.475C117.26,268.492 115.812,266.493 113.317,265.273C111.817,264.54 111.357,264.44 109.096,264.354C107.123,264.279 106.445,264.345 106.053,264.645Z" />
                        </g>
                        <g transform="matrix(2.00074,0,0,2.00074,-124.1,-520.86)">
                            <path d="M142.955,265.518C143.343,265.782 142.697,269.863 142.076,271.066C140.955,273.238 138.216,274.877 135.329,275.102C134.439,275.172 133.717,275.131 133.717,275.012C133.717,274.893 135.401,273.171 137.446,271.198C139.684,269.041 141.001,267.599 140.742,267.595C140.239,267.586 137.663,269.67 135.185,272.092C133.645,273.596 133.477,273.699 133.477,273.135C133.477,271.933 134.234,269.577 134.962,268.517C135.839,267.237 137.229,266.261 138.914,265.74C140.237,265.332 142.5,265.207 142.955,265.518ZM138.144,264.66C135.618,265.461 133.649,267.309 132.73,269.743C131.995,271.691 132.066,275.27 132.852,275.844C133.784,276.523 137.085,276.153 139.587,275.089C140.814,274.567 142.728,272.774 143.343,271.571C144.511,269.286 144.952,265.466 144.134,264.727C143.558,264.207 139.708,264.164 138.144,264.66Z" />
                        </g>
                    </svg>
                </Grid>
                {selectionStatus === "bride" ?
                    <>
                        <Grid item xl={12} xs={12} spacing={0} textAlign="center">
                            <h3 style={{ color: "#6B4C90" }}>కోగంటి వారి ఆహ్వానం</h3>
                        </Grid>
                        <Grid item spacing={0} textAlign="center">
                            <ReactPlayer url={bride} playing={true} height="75vh" width="75vw" />
                        </Grid>
                    </> :
                    <>
                        <Grid item xl={12} xs={12} spacing={0} textAlign="center">
                            <h3 style={{ color: "#6B4C90" }}>అన్నే వారి ఆహ్వానం</h3>
                        </Grid>
                        <Grid item spacing={0} textAlign="center">
                            <ReactPlayer url={groom} playing={true} height="75vh" width="75vw" />
                        </Grid>
                    </>}
            </Grid>}
        </>

    )
}

export default InvitaionVideo