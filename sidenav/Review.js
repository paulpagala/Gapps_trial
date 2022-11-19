import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Routes
      </Typography>
      <Grid container spacing={3}>
       
        <Grid item xs={12}>
          <TextField
            required
            id="origin"
            name="origin"
            label="Origin"
            fullWidth
            // autoComplete="shipping address-line1"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="destination"
            name="destination"
            label="Destination"
            fullWidth
            // autoComplete="shipping address-line2"
            variant="outlined"
          />
        </Grid>
      
      </Grid>
    </React.Fragment>
  );
}