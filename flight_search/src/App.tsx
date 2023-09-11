import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./services/flightService";
import TableContainer from "@mui/material/TableContainer";
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FlightsTable } from "./components/FlightsTable";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ContextProvider } from "./context/flightContext";
import { HomePage } from "./pages/HomePage";
function App() {
  

  return (
    <ContextProvider>
    <HomePage />
    </ContextProvider>
  );
}

export default App;
