import React from 'react';
import {Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        postion: 'relative',
        background: 'white',
        fontFamily: 'Poppins',
        paddingTop: '50px',
    },
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="https://www.prestonblackburn.com/">
            Preston Blackburn, 
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }



export default function Footer() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container justifyContent="center" alignItems="center" >

                <Copyright />

            </Grid>


        </div>
    )
}
