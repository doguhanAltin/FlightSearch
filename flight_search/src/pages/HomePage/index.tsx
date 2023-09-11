import { Grid, FormControl, InputLabel, Select, MenuItem, Checkbox, Button } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useEffect, useState } from 'react'
import { FlightsTable } from '../../components/FlightsTable';
import { fetchData } from '../../services/flightService';
import { flightContext } from '../../context/flightContext';
import { Form } from '../../components/Form';

export const HomePage = () => {
    const {data,setData,filteredData,setFilteredData} = useContext(flightContext);
  
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<any>(null);


    useEffect(() => {
        const fetchDataAsync = async () => {
          try {
            const result = await fetchData();
            setData(result);
            setIsLoading(false);
            setFilteredData(result);
          } catch (error: any) {
            setError(error);
            setIsLoading(false);
          }
        };
    
        fetchDataAsync();
      }, []);



  

  

  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }


  return (

<Grid p={5} container gap={5}>
      <Grid xs={8}>
        <FlightsTable data={filteredData} />
      </Grid>
      <Grid xs={3} pr={10}>
    <Form/>
      </Grid>
    </Grid>






    )
}
