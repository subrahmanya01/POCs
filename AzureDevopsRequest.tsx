import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Button  } from '@mui/material';
import HeaderComponent from "./HeaderComponent"

function App() {
  const organization ='subgb98';
 const project = 'mCart';
  useEffect(() => {
    //const url = `https://dev.azure.com/${organization}/${project}/_apis/wit/workitems/$Task?api-version=6.0`; // Replace with your organization and project names
    const url = 'https://dev.azure.com/subgb98/_apis/projects?api-version=4.0';
    const pat = "OnV2aXZ6bmpwN3hrb3Q3cGh2eTRpc29rdndhc3ZkNXFybjZjbHB2b2kyY3pmcWxjajRkanE="; // Replace with your PAT
   
    const data = [
      {
        op: 'add',
        path: '/fields/System.Title',
        value: 'Subrahmanyas Work Item'
      },
      {
        op: 'add',
        path: '/fields/System.Description',
        value: 'Subrahmanyas Work Item Description'
      },
      {
        op: 'add',
        path: '/fields/Microsoft.VSTS.Common.Activity',
        value: "Design"
      },
      {
        op: 'add',
        path: '/fields/Microsoft.VSTS.Common.Priority',
        value: "2"
      },
      {
        op: 'add',
        path: '/fields/Microsoft.VSTS.Scheduling.RemainingWork',
        value: "22"
      },
      {
        op: 'add',
        path: '/fields/System.AssignedTo',
        value: "subgb98@gmail.com"
      },
      {
        op: 'add',
        path: '/fields/System.History',
        value: 'This is Discussion'
      }
      
      

    
      // Add more fields as needed
    ];

    const headers = {
      'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Authorization': `Basic ${pat}`,
      'Content-Type': 'application/json-patch+json'
    };

    // API request example
    axios.post(url, data, { headers })
      .then(response => {
        console.log('Work item created successfully:', response.data);
        // Process the response data
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle the error
      });
  }, []);
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
