import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import DBSummary from './grids/dbSummary.js';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        position: 'relative',
        top:0, 
        backgroundColor: '#E5E5E5',
    },


    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
      },
      cardContent: {
        flexGrow: 1,
      },
      cardMedia: {
        paddingTop: '80%',
      },

      donate: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '32px',
        textTransform: 'capitalize',
        textDecoration: 'none',
        background: '#EC407A',
        color: 'white',
        borderRadius: '24px',
        padding: '5px',
        width: '225px',
        height: '60px',
        borderRadius: '50px',
        '&:hover': {
            backgroundColor: '#E9C7D2',
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
        textTransform: 'capitalize',
        color: 'black',
      },
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.backgroundClass} />
            <div style={{height: '150px'}} />

            <Grid container spacing={6}   
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item md={6} sm={12} xs={12}   style={{ maxHeight:'800px', paddingLeft: '10vw'}}>
                    <div>
                        <h1 className={classes.heroText}>
                            Making Stock Analysis Easy
                        </h1>
                        <p className={classes.heroSecondText}>
                            By explaining stock trends in plain English we make it easy to invest
                        </p>
                    </div>  
                </Grid>
                <Grid item md={6} sm={12} xs={12}  style={{ maxHeight:'800px', paddingLeft: '10vw'}}>

                    <DBSummary />

                </Grid>
            </Grid>
            

        </div>
    )
}
