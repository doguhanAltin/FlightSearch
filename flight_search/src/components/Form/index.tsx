import { Grid, FormControl, InputLabel, Select, MenuItem, Checkbox, Button } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useContext, useEffect, useState } from 'react'
import { fetchData } from '../../services/flightService';
import { flightContext } from '../../context/flightContext';

export const Form = () => {
    const {data,setData,filteredData,setFilteredData} = useContext(flightContext);

    const [city, setCity] = useState<any>("");
    const [destination, setDestination] = useState<any>();
    const [flightDate, setFlightDate] = useState<Date | undefined>();
    const [backDate, setBackDate] = useState<Date | undefined>();
    const [goBack, setGoBack] = useState();


    function filterDataByCityAndDestination(
        data: any,
        city: any,
        destination: any,
        flightDate: any,
        backDate: any
      ) {
        return data?.filter((item: any) => {
          if (
            (!city || item.city === city) &&
            (!destination || item.destination === destination) &&
            (!flightDate || item.flightDate === flightDate) &&
            (!backDate || item.backDate === backDate)
          ) {
            return true;
          }
          return false;
        });
      }
    
      useEffect(() => {
        let formattedFlightDate = null;
        let formattedBackDate = null;
        if (flightDate) {
          const fday = flightDate?.getDate().toString().padStart(2, "0");
          const fmonth = (flightDate?.getMonth()! + 1).toString().padStart(2, "0");
          const fyear = flightDate?.getFullYear();
          formattedFlightDate = `${fday}-${fmonth}-${fyear}`;
        }
        if (backDate) {
          const bday = backDate?.getDate().toString().padStart(2, "0");
          const bmonth = (backDate?.getMonth()! + 1).toString().padStart(2, "0");
          const byear = backDate?.getFullYear();
    
          formattedBackDate = `${bday}-${bmonth}-${byear}`;
        }
    
        const filtered = filterDataByCityAndDestination(
          data,
          city,
          destination,
          formattedFlightDate,
          formattedBackDate
        );
        setFilteredData(filtered);
      }, [city, destination, flightDate, backDate]);

  return (
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    gap={2}
    p={2}
  >
    <Grid item width={"100%"}>
      <h1>Search</h1>
    </Grid>
    <Grid item width={"100%"}>
      <FormControl fullWidth>
        <InputLabel id="city-label">Kalkış</InputLabel>
        <Select
          labelId="city-select-label"
          id="city-select"
          label="City"
          value={city}
          onChange={(e: any) => {
            setCity(e.target.value);
          }}
        >
          <MenuItem value={"Istanbul"}>İstanbul</MenuItem>
          <MenuItem value={"Ankara"}>Ankara</MenuItem>
          <MenuItem value={"London"}>London</MenuItem>
          <MenuItem value={""}>Seçim Yapma</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item width={"100%"}>
      <FormControl fullWidth>
        <InputLabel id="city-label">İniş</InputLabel>
        <Select
          labelId="city-select-label"
          id="city-select"
          label="City"
          value={destination}
          onChange={(e: any) => {
            setDestination(e.target.value);
          }}
        >
          <MenuItem value={"Istanbul"}>İstanbul</MenuItem>
          <MenuItem value={"Ankara"}>Ankara</MenuItem>
          <MenuItem value={"London"}>London</MenuItem>
          <MenuItem value={""}>Seçim Yapma</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item width={"100%"}>
      <Grid>Kalkış Tarihi</Grid>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onChange={(e: any) => {
            setFlightDate(new Date(e.$d));
          }}
        />
      </LocalizationProvider>
    </Grid>
    <Grid item width={"100%"}>
      <div>Gidiş Dönüş</div>
      <Checkbox
        onChange={(e: any) => {
          setGoBack(e.target.checked);
        }}
      />
      {goBack && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(e: any) => {
              setBackDate(new Date(e.$d));
            }}
          />
        </LocalizationProvider>
      )}
    </Grid>
    <Grid>
      <Button
        onClick={() => {
          setBackDate(undefined);
          setCity(null);
          setDestination(null);
          setFlightDate(undefined);
        }}
      >
        {" "}
        Temizle
      </Button>
    </Grid>
  </Grid>
  )
}
