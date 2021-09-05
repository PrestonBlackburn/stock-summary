import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DBSummary from './grids/dbSummary.js';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        position: 'relative',
        top:0, 
        backgroundColor: 'white',
    },

      heroText: {
        opacity: '1',
        zIndex: 2,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '60px',
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
  }));


export default function ViewData() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.backgroundClass} />
            <div style={{height: '150px'}} />
            <Grid container spacing={6}   
                direction="column"
                justifyContent="space-around"
                alignItems="center">
                    
                    <Grid item xs={12}>
                        <p className={classes.heroText}>
                            Data Export
                        </p>
                    </Grid>

                    <Grid item xs={11}>
                        <DBSummary />
                    </Grid>
                </Grid>
            
        </div>
    )
}
