import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import DashMark from '../../Images/dash.png';
import UpArrow from '../../Images/upArrow.png';
import DownArrow from '../../Images/downArrow.png';

const useStyles = makeStyles((theme) => ({
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



export default function TotalSentiment() {
    const classes = useStyles();
    const[apiData, setApiData] = useState([0]);
    const[sentiment, setSentiment] = useState([]);

        //Get Request To API
    //Get Request To API
    useEffect(() =>  {
        //console.log(process.env.REACT_APP_ENDPOINT); can use this method if getting data from internal source
        async function fetchData() {
            const response = await axios('https://3m0gid5od6.execute-api.us-east-2.amazonaws.com/Stage/getstocks');
            setApiData(response.data['db_results']);
        }
        fetchData();
        console.log(apiData)
    }, []);


    return (
        <div>
            <Grid direction="column" alignItems="center" justifyContent="center">
                <p className={classes.heroSecondText}>
                    Oil And Gas Companies Financial Outlook
                </p>

                <div style={{display:'flex', flexDirection:'row', justifyContent:"space-evenly", alignItems: "center"}}> 
                    <div className={classes.sentimentText}>
                        { apiData==0?"Loading":(apiData.map(vals => parseFloat(vals.sentiment)).reduce((acc, vals) => vals + acc) / apiData.length)>0.7?"Positive":(apiData.map(vals => parseFloat(vals.sentiment)).reduce((acc, vals) => vals + acc) / apiData.length)<0.3?"Negative":"Mixed"}  
                    </div>
                    <img src={ apiData==0?"":(apiData.map(vals => parseFloat(vals.sentiment)).reduce((acc, vals) => vals + acc) / apiData.length)>0.7?UpArrow:(apiData.map(vals => parseFloat(vals.sentiment)).reduce((acc, vals) => vals + acc) / apiData.length)<0.3?DownArrow:DashMark }/>
                
                </div>
            </Grid>
        </div>   
    )
}
