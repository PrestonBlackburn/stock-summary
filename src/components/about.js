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
                    into an easily interperatable web page and open dataset. The dataset can be downloaded and incorporated into predictive models. 
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
                          You can use the data to quickly determine the overall financial sentiment of the oil and gas industry. However, the intended use of this website is
                           to collect financial article sentiment data to be used with other datasets.
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
                    <Typography className={classes.heading}> Why did you only chose to look at 7 oil and gas companies?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        The 7 companies I chose to evaluate make up around 90% of the total value for the energy sector on the S &amp P 500. 
                        The total market cap of the energy sector is estimated to be around $700 billion and the total market cap of the 7 companies is around $650 billion as of 9/1/21.
                        
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
                            The downloadable dataset includes the raw sentiment scores, and the sentences that they are based on. Feel free to creat your own models to re-calculate the sentiment of each article. 
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
                    <Typography className={classes.heading}>What does the date column refer to?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        The dates are related to when the data was first scraped and analyzed. Every three days I scrape and process new articles and record the date. 
                        <br />
                        <br />
                        If I switch my scraper to Selenium I might add the actual article publication date. Being able to interact with the DOM would make it easier to pull the date.   
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
                    <Typography className={classes.heading}>Where can I learn more about the project and get the code?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        You can find out more about the project on my portfolio website:
                        <a href="https://www.prestonblackburn.com/projects" target="_blank" style={{textDecoration:"none", color:'#3D6B45', fontWeight:'bold'}}> prestonblackburn.com </a> 
                    </Typography>
                    </AccordionDetails>
                </Accordion>     
                </Grid>

            </Grid>
            </Grid>

            
        </div>
    )
}
