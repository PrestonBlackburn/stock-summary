import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        position: 'relative',
        top:0, 
        backgroundColor: 'white',
    },

      heroText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '60px',
        lineHeight: '81px',
        color:'black',
      },
      heading: {
        [theme.breakpoints.down('sm')] : { 
                fontSize: theme.typography.pxToRem(14),
                fontWeight: theme.typography.fontWeightRegular,
            },
            [theme.breakpoints.up('sm')] : { 
                fontSize: theme.typography.pxToRem(20),
                fontWeight: theme.typography.fontWeightRegular,
            },
      },
      heroSecondText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        letterSpacing: '0.05em',
        color: 'black',
        [theme.breakpoints.down('sm')] : {
            fontSize: '18px',
        },
        [theme.breakpoints.up('sm')] : {
            fontSize: '24px',
        },
      },
  }));
export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{height: '150px'}} />

            <Grid container direction="column" alignItems="center" justifyContent="center">

                <Grid item xs={11} className={classes.heroText}>
                    About
                </Grid>
                <Grid item md={8} xs={11} className={classes.heroSecondText}>
                    <p>
                    With economic inequality rising, many look to the stock market as a source. Large corporations and hedge funds use
                    massive amounts of data to make investiment decisions. Individuals are investing on an unevenplaying field since they 
                    don’t have the same resources or access to data.   
                    <br/>
                    <br />
                    Stocks In English attempts to take a step towards evening the playing field by consolidating the latest financial news 
                    into an easily interperatable dashboard and open dataset. Articles are categorized as positive, negative, or mixed using machine learning.
                    </p>
                 </Grid>

            </Grid>

            <Grid container alignItems="center" justifyContent="center">
                <h1 className={classes.heroText}>
                    FAQ
                </h1>
            </Grid>

            <Grid container alignItems="center" justifyContent="center" direction="column">
                <Grid item xs={10} md={8}>
                <h1 className={classes.heroSecondText}>
                    For Investors
                </h1>
                </Grid>
            </Grid>  

            <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
                <Grid item xs={10} md={8}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>What Can This Data Be Used For?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                         You can use the dashboards to quikcly determine if a company is worth investing in. For example, for longer term investments
                          avoid companies who receive consistently mixed or negative sentiment. It is not recomended to make investing decission based 
                          soley on a few negative articles.
                          <br />
                          <br />
                          The data can also be pulled in CSV format to be use in other models alongside other datasets.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </Grid>

                <Grid item xs={10} md={8}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>Are you planning to expand the app to other industries besides oil and gas?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    Yes - eventually I would like to have all S	&amp 500 companies on this site. While my infrastructure is built to scale, web scraping 
                    and running machine learning inference can get pricey. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>     
                </Grid>

                <Grid item xs={10} md={8}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>  Common question 2?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>     
                </Grid>

                <Grid item xs={10} md={8}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>Common question 2?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>     
                </Grid>




            <Grid container alignItems="center" justifyContent="center" direction="column">
                <Grid item xs={10} md={8}>
                <h1 className={classes.heroSecondText}>
                    For Data Scientists
                </h1>
                </Grid>
            </Grid>  


            <Grid container spacing={2} alignItems="center" justifyContent="center" direction="row">
                <Grid item xs={10} md={8}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Can you provide details on your methods and model?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Model: Mobile BERT
                        <br />
                        Fine Tuned on financial dataset
                        <br />
                        Accuracy- XX entropy
                    </Typography>
                    </AccordionDetails>
                </Accordion>     
                </Grid>

                <Grid item xs={10} md={8}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>How is a positive, negative, or mixed sentiment determined</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                            I trained the model on positive and negative articles, so technically there is no "mixed" sentiment category. However
                            I determined the cut off heuristically based on a set of 50 oil and gas articles that I ran through the model.
                         <br />
                            A score greater than 0.7 is positive, a score less than 0.3 is negative, and in between is mixed.
                         <br />
                            The downloadable dataset includes the raw setneminet scores, which can be used in models instead of the categorical data. 
                    </Typography>
                    </AccordionDetails>
                </Accordion>     
                </Grid>

                <Grid item xs={10} md={8}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>Common question 2?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>     
                </Grid>

                <Grid item xs={10} md={8}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>Common question 2?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>     
                </Grid>

            </Grid>
            </Grid>

            
        </div>
    )
}
