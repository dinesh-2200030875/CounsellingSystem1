import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAppoints = () => {
  const [res, setRes] = useState([]);

  const fetchAppointments = () => {
    axios.get('http://localhost:8080/retriveappointments').then(response => {
      setRes(response.data);
      console.log(response.data); // Fixed typo here
    });
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div style={{ backgroundColor: 'lightblue' ,}}>
      <center>
        <h1 style={{ color: 'darkblue' }}>Appointments</h1>
        <table style={{ width: '100%', color: 'green', backgroundColor: 'cornsilk', alignContent:'center', justifyContent:'center', alignItems:'center' }} border={20}>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
          </tr>
          {res.map((item, index) => (
            <tr key={index}> 
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.preferredDate}</td>
              <td>{item.preferredTime}</td>
              <td>{item.reason}</td> 
             
              
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
};

export default ViewAppoints;