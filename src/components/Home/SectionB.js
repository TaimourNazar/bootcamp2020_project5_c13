import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import laptop from '../../images/laptop-2.svg';
import useWebAnimations, {tada} from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        height: "100%",
    },
    heading:{
        color:'',
        padding: "10px",
        textAlign:'center'
    },
    worker_img: {
        margin: "5px",
    }
  }));

export default function SectionB() {
    const classes = useStyles();
    const { keyframes, timing } = tada;
    const laptopanim=useWebAnimations({
        keyframes,
        timing:{
            ...timing,
            delay: 250,
            duration: 4000,
            iterations: Infinity,
           }
        });

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1 className={classes.heading}>React Website Demonstration</h1>
                </Grid>
                <Grid item xs={6}>
                    <img src={laptop} ref={laptopanim.ref} width="400px" alt="tech" className={classes.worker_img} />
                </Grid>
                <Grid item xs={6}>
                    <h3 className={classes.heading}>
                    This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you! 
                    </h3>                    
                </Grid>
            </Grid>
            
        </div>
    )
}
