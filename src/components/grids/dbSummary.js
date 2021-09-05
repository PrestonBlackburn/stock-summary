import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

import MaterialTable from 'material-table'

import axios from 'axios';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });





export default function DBSummary() {
    const classes = useStyles();
    const[apiData, setApiData] = useState([]);
    const[sentiment, setSentiment] = useState([]);
    
    //Function for calculating total sentiment


    //Get Request To API
    useEffect(() =>  {
        //console.log(process.env.REACT_APP_ENDPOINT);
        async function fetchData() {
            setSentiment(0)
            const response = await axios('https://3m0gid5od6.execute-api.us-east-2.amazonaws.com/Stage/getstocks');
            setApiData(response.data['db_results']);
            
        }
        fetchData();
        console.log(apiData)

        //let intSentiment = 0
      //  for (let i in apiData) {
        //    let intSentiment += parseFloat(apiData[i]['sentiment']);
       // };
        //setSentiment(intSentiment/apiData.length);
        //console.log('db sentiment', sentiment)
        
    }, []);

    const columns = [
      { field: 'date', title: 'Date', type: 'date' },
      { field: 'ticker', title: 'Ticker'},
      { field: 'sentiment', title: 'Sentiment Value',  render:(rowData)=><div>{parseFloat(rowData.sentiment).toFixed(3)}</div>},
      { field: 'sentiment', title: 'Sentiment',  render:(rowData)=><div>{ rowData.sentiment>0.7?"Positive":rowData.sentiment<0.3?"Negative":"Mixed" }</div>},
      { field: 'sentenceID', title: 'Url', sorting: false, },
      { field: 'articleTitle', title: 'Title', sorting: false},
    ];
  

    return (
        <div style={{maxHeight: '1200px'}}>
        <MaterialTable
        title="Stock News - Sentiment Data"
        data={apiData}
        columns={columns}
        options={{
          paging: false,
          exportButton: true,
          grouping:true,
          columnsButton:true,
          maxBodyHeight: '800px',
          rowStyle:(data, index)=>index%2==0?{background:"#F7FBF8"}:null
        }}
      />
      </div>
    )
}
