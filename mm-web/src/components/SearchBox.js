import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={filterCategory}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Filter" />}
    />
  );
}

const filterCategory= [
  { label: 'filter1', year: 1994 },
  { label: 'filter2', year: 1972 },
];