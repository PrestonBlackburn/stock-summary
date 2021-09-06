import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Text, Tooltip} from 'recharts';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        position: 'relative',
        top:0, 
        backgroundColor: '#F5F5F5',
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
      paddingLeft:'25px',
    },
    
    heroSecondText: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '24px',
      letterSpacing: '0.05em',
      color: 'black',
    },

    labelText: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '36px',
      letterSpacing: '0.05em',
      color: 'black',
    },
}));


export default function SentimentTrends() {
    const classes = useStyles();   
    const[apiData, setApiData] = useState([0]);

        //Get Request To API
    //Get Request To API

    useEffect(() =>  {
        //console.log(process.env.REACT_APP_ENDPOINT); can use this method if getting data from internal source
        async function fetchData() {
            const response = await axios('https://3m0gid5od6.execute-api.us-east-2.amazonaws.com/Stage/gettimeseries');
            setApiData(response.data['db_results']);
        }
        fetchData();

    }, []);



    return (
        <div className={classes.root}>
            <Grid container alignItems="center" justifyContent="center">
                <h1 className={classes.heroText}>
                    Sentiment Trends
                </h1>
            </Grid>

            <Grid container   
                spacing={6}
                direction="row"
                justifyContent="space-around"
                alignItems="center">

                <Grid item xs={11} md={5} lg={4} align="left">
                    <div className={classes.labelText}>
                        Oil and Gas Companies
                    </div>
                    <p className={classes.heroSecondText}>
                        Exxon
                        <br />
                        Chevron
                        <br />
                        Conoco
                        <br />
                        EOG
                        <br />
                        Marathon
                        <br />
                        Kinder Morgan 
                        <br />
                        Schlumberger

                    </p>
                </Grid>
                <Hidden only={['xs', 'sm']}>
                <Grid item xs={11} md={6} align="left">
                    <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart width={600} height={300} data={apiData}>
                        <Line name="Aggregate Sentiment" type="monotone" dataKey="sentiment" stroke="#3D6B45" />
                        <XAxis dataKey="date" />
                        <YAxis label={{ value: '< Negative - Positive >', angle: -90, position: 'Left', textAnchor: 'middle'}} tick={false}/>
                        <Tooltip />
                        <Legend verticalAlign="top" height={36}/>
                    </LineChart>
                    </ResponsiveContainer>
                </Grid>
                </Hidden>

                <Hidden only={['md','lg','xl']}>
                <Grid item xs={11} md={6} style={{paddingRight:'50px'}}>
                    <ResponsiveContainer width="100%" aspect={1}>
                    <LineChart width={600} height={500} data={apiData}>
                        <Line name="Aggregate Sentiment" type="monotone" dataKey="sentiment" stroke="#3D6B45" />
                        <XAxis dataKey="date" />
                        <YAxis label={false} tick={false}/>
                        <Tooltip />
                        <Legend verticalAlign="top" height={36}/>
                    </LineChart>
                    </ResponsiveContainer>
                </Grid>
                </Hidden>
                
            </Grid>
            <div style={{height: '75px'}} />
        </div>
    )
}
