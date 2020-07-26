import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    homeButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const Header = () => {
    const classes = useStyles();
    return (
        <div>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                    <HomeIcon />
                    <Link to="/" style={{ textDecoration: 'none', color:'white' }}>Home</Link>              
                </IconButton>  
                <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                    <TrackChangesIcon/>
                    <Link to="services" style={{ textDecoration: 'none', color:'white' }}>Services</Link>
                </IconButton>
                <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                    <BarChartIcon/>
                    <Link to="chart" style={{ textDecoration: 'none', color:'white' }}>Chart-Demo</Link>
                </IconButton>
            </Toolbar>
        </AppBar>
        </div>
    )
}