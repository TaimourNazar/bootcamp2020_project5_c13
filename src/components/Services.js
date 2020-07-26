import React from 'react';
import {makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

export default function Services() {
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            margin: 20
        },
        media: {
          height: 240,
        },
    });
    
    const classes = useStyles();

    const shoes={
        "software-development":{
            name: "Softwares Development",
            img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "2560",
        },
        "app-development":{
            name: "Apps Development",
            img: "https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "1520"
        },
        "iot":{
            name: "Internet of things",
            img: "https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "1502"
        },
        "cloud-computing":{
            name: "Cloud Computing",
            img: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "25600"
        },
        "networking":{
            name: "Networking",
            img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "1520"
        },
        "seo":{
            name: "SEO",
            img: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "980"
        }
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
            {Object.entries(shoes).map(([productID,{name,img,text}])=>
                (
                    <Grid item xs={6}>
                    <Card className={classes.root} >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img} 
                                    title={name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Projects: <CountUp start={0} end={text} duration={10} separator=","/>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                    </Card>
                    </Grid>
                )
            )}
            </Grid>
        </div>
    )
}
