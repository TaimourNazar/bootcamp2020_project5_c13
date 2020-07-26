import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import light from '../../images/hanging-light.svg';
import useWebAnimations, {swing} from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        background: "linear-gradient(to right, rgb(23, 25, 48), rgb(23, 25, 48))",
        height: "100%",
    },
    heading:{
        color:'white',
        padding: "10px",
        marginRight: "30px",
        textAlign:'center'
    },
    light_img: {
        margin: "25px",
        width: "250px",
        marginLeft:'15rem'
    }
  }));

export default function SectionC() {
    const classes = useStyles();
    
    const { keyframes, timing } = swing;
    const lightanim=useWebAnimations({
        keyframes,
        timing:{
            ...timing,
            delay: 250,
            duration: 2000,
            iterations: Infinity,
           }
        });

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1 className={classes.heading}>Text & Hanging Light</h1>
                </Grid>
                <Grid item xs={6}>
                    <h3 className={classes.heading}>
                    This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you! 
                    </h3>
                    <br/><br/><br/>
                    <h3 className={classes.heading}>
                    This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you. This is just a random text. It is being used as a placeholder to cover the space, Thank you! 
                    </h3>                    
                </Grid>
                <Grid item xs={6}>
                    <img src={light} ref={lightanim.ref} alt="tech" className={classes.light_img} />
                </Grid>
            </Grid>
            
        </div>
    )
}
