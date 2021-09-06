import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import TotalSentiment from './grids/totalSentiment';
import SentimentTrends from './grids/sentimentTrends';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        position: 'relative',
        top:0, 
        backgroundColor: 'white',
    },

      dataButton: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '32px',
        textTransform: 'capitalize',
        textDecoration: 'none',
        color: 'white',
        background: '#3D6B45',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
        padding: '5px',
        width: '225px',
        height: '60px',
        borderRadius: '50px',
        '&:hover': {
            backgroundColor: '#889F8C',
        },
      },

      heroText: {
        opacity: '1',
        zIndex: 2,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '64px',
        lineHeight: '81px',
        color:'black',
      },
      
      heroSecondText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        letterSpacing: '0.05em',
        color: 'black',
      },

      sentimentText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '36px',
        letterSpacing: '0.05em',
        color: 'black',
      },
  }));

export default function Home() {
    const classes = useStyles();   


    return (
        <div className={classes.root}>
            <div style={{height: '150px'}} />

            <Grid container spacing={6}   
                direction="row"
                justifyContent="space-around"
                alignItems="center">

                <Grid item lg={4} md={6} sm={11} xs={11} align="left"  style={{ maxHeight:'800px', padding: '25px'}}>
                    <div>
                        <h1 className={classes.heroText}>
                            Making Stock Analysis Easy
                        </h1>
                        <p className={classes.heroSecondText}>
                            By using machine learning to determine the sentiment of recent financial articles, we can display recent stock trends in plain English. 
                        </p>
                        <Link to="/datatable" style={{textDecoration: 'none'}} >       
                            <Button className={classes.dataButton}>
                                View Data
                            </Button>
                        </Link>
                    </div>  
                </Grid>

                <Hidden only={['md','lg','xl']}>
                    <Grid item sm={11} xs={11} style={{ height:'100px', padding: '25px'}}>
                    </Grid>
                </Hidden>

                <Grid item md={4} sm={11} xs={11} style={{ maxHeight:'800px', padding: '25px', display:'flex', flexDirection:'column', justifyContent:"space-evenly", alignItems: "center"}}>
                    <TotalSentiment />
                </Grid>
            </Grid>

            <div style={{height: '150px'}} />


            <Grid container spacing={6}   
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                style={{backgroundColor:'#F5F5F5'}}>
                
                <SentimentTrends />
        
            </Grid>

        <div style={{height: '50px'}} />
    
        </div>
    )
}
