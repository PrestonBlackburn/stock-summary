import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function DBSummary() {

    const[apiData, setApiData] = useState([]);


    
    const rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    //Get Request To API
    useEffect(async () =>  {
        //console.log(process.env.REACT_APP_ENDPOINT);
        const fetchData = async () => {
            const result = await axios('https://3m0gid5od6.execute-api.us-east-2.amazonaws.com/Stage/getstocks');
            setApiData(result.data['db_results']);
            console.log(apiData)
        }
        fetchData();
    }, []);



    return (
        <div className="ag-theme-alpine" style={{height: 600, width: 950}}>
            <AgGridReact
               rowData={apiData}>
               <AgGridColumn field="date" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn field="ticker" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn field="sentiment" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn headerName ="Title" field="articleTitle" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn headerName ="Url" field="sentenceID" sortable={ true } filter={ true }></AgGridColumn>
           </AgGridReact>
        </div>
    )
}
