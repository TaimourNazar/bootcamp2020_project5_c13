import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import tech from '../../images/tech.jpg';
import direction from '../../images/Direction.png';
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        background: "linear-gradient(to top, rgb(146, 168, 231), rgb(188, 202, 247), rgb(141, 215, 226), rgb(128, 233, 221))",
        height: "100%",
    },
    heading:{
        marginTop:"60px",
        marginLeft: "20px",
        color:'black',
    },
    tech_img: {
        marginTop: "-4.6rem",
    },
    network_img: {
        width: "70px",
        marginLeft: "27rem"
    }
  }));

export default function SectionA() {
    const classes = useStyles();

    const netanim = useWebAnimations({
        keyframes: {
          transform: "rotate(360deg)",
        },
        timing: {
          duration: 3500, 
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in"
        },
    });

    const textanim = useWebAnimations({
        keyframes: {
          transform: "translateX(60px)",
        },
        timing: {
          duration: 3500, 
          iterations: Infinity,
          direction: "alternate",
          easing: "linear"
        },
    });

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <h1 className={classes.heading}>4th Industrial Revolution</h1>
                    <h3 className={classes.heading} ref={textanim.ref}>React Website Animation Demo</h3>
                </Grid>
                <Grid item xs={6}>
                    <img src={direction} ref={netanim.ref} className={classes.network_img} alt="network"/>
                    <img src={tech} alt="tech" width="100%" className={classes.tech_img} />
                </Grid>
            </Grid>
            
        </div>
    )
}
