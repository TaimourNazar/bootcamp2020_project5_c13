import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Ecommerce from '../../images/Ecommerce.png';
import Startup from '../../images/Startup.png';
import Speed from '../../images/Speed.png';
import Saas from '../../images/SaaS.png';

import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        background: "linear-gradient(to right, rgb(23, 25, 48), rgb(23, 25, 48))",
        height: "100%",
    },
    heading:{
        marginTop:"60px",
        marginLeft: "20px",
        color:'white',
    },
    img1: {
        width: "76px",
        marginLeft: "2rem"
    },
    img2: {
        width: "76px",
        marginLeft: "20rem"
    },
    img3: {
        width: "76px",
        marginLeft: "2rem"
    },
    img4: {
        width: "76px",
        marginLeft: "20rem"
    }
  }));

export default function SectionD() {
    const classes = useStyles();

    const img1 = useWebAnimations({
        keyframes: {
          transform: "rotate(90deg)",
        },
        timing: {
          duration: 2500, 
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out"
        },
    });

    const img2 = useWebAnimations({
        keyframes: {
          transform: "translateY(30px)",
        },
        timing: {
          duration: 2500, 
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in"
        },
    });
    
    const img3 = useWebAnimations({
        keyframes: {
          transform: "scale(2)",
        },
        timing: {
          duration: 2500, 
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in"
        },
    });

    const img4 = useWebAnimations({
        keyframes: {
          transform: "skew(20deg)",
        },
        timing: {
          duration: 2500, 
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in"
        },
    });

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
            <Grid item xs={6}>
                    <img src={Speed} ref={img1.ref} className={classes.img1} alt="workflow"/>
                    <img src={Ecommerce} ref={img2.ref} className={classes.img2} alt="workflow"/>
                </Grid>
                <Grid item xs={6}>
                    <img src={Saas} ref={img3.ref} className={classes.img3} alt="workflow"/>
                    <img src={Startup} ref={img4.ref} className={classes.img4} alt="workflow"/>
                </Grid>
            </Grid>
        </div>
    )
}
