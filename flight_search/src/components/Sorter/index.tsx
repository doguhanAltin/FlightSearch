import { Grid, Button } from "@mui/material";
import React, { useContext } from "react";
import { flightContext } from "../../context/flightContext";

export const Sorter = () => {
  const { filteredData, setFilteredData } = useContext(flightContext);
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid>
        <Button
          onClick={() => {
            setFilteredData(
              filteredData.slice().sort((a: any, b: any) => a.price - b.price)
            );
          }}
        >
          Fiyata Göre Artan
        </Button>
      </Grid>
      <Grid>
        <Button
          onClick={() => {
            setFilteredData(
              filteredData.slice().sort((a: any, b: any) => b.price - a.price)
            );
          }}
        >
          Fiyata Göre Azalan
        </Button>
      </Grid>
      <Grid>
        <Button
          onClick={() => {
            setFilteredData(
              filteredData.slice().sort((a: any, b: any) => {
                const dateA = new Date(
                    a.flightDate.split("-").reverse().join("-")
                  );
                  const dateB = new Date(
                    b.flightDate.split("-").reverse().join("-")
                  );
                return dateB.getTime() - dateA.getTime();
              })
            );
          }}
        >
          {" "}
          Gidiş Tarihine Göre Azalan
        </Button>
      </Grid>

      <Grid>
        <Button
          onClick={() => {
            setFilteredData(
              filteredData.slice().sort((a: any, b: any) => {
                const dateA = new Date(
                  a.flightDate.split("-").reverse().join("-")
                );
                const dateB = new Date(
                  b.flightDate.split("-").reverse().join("-")
                );

                return dateA.getTime() - dateB.getTime(); // Artan sıralama yapmak için
              })
            );
          }}
        >
          Gidiş Tarihine Göre Artan
        </Button>
      </Grid>
    </Grid>
  );
};
