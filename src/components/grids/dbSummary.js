import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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
    
    useEffect(() =>  {
        console.log(process.env.REACT_APP_ENDPOINT);
        const response = fetch(`${process.env.REACT_APP_ENDPOINT}getdata`, {
        mode: 'cors'
        });

        const responseData = response.text();
        console.log(responseData)
    })




    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 620}}>
            <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="make" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn field="model" sortable={ true } filter={ true }></AgGridColumn>
               <AgGridColumn field="price" sortable={ true } filter={ true }></AgGridColumn>
           </AgGridReact>
        </div>
    )
}
