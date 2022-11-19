import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createSvgIcon } from '@mui/material/utils';
import Paper from '@mui/material/Paper';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';



export default function PolicyDetails() {
  const [price, setPrice] = React.useState('0');

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleChangeNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const [serviceFee, setServiceFee] = React.useState('Paid');

  const handleChangeServiceFee = (event) => {
    setServiceFee(event.target.value);
  };

  const [seatCapacity, setSeatCapacity] = React.useState('');

  const handleChange = (event) => {
    setSeatCapacity(event.target.value);
  };

  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

 
  
  return (
    <React.Fragment>
     

    <Paper variant="outlined"  sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }}}>
        {/* <Box sx={{width:40}}> */}
          <Typography sx={{ml:3}}>Service Fee</Typography>
          <FormControl sx={{ml:3, display:'block'}}>
            {/* <FormLabel id="demo-controlled-radio-buttons-group" sx={{color:'black'}}>Service Fee</FormLabel> */}
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={serviceFee}
              onChange={handleChangeServiceFee}
            >
              <FormControlLabel value="Free" control={<Radio />} label="Free" />
              <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
            </RadioGroup>
          </FormControl>
          
          { serviceFee === "Paid" ?  (<Paper variant="outlined" sx={{ mr:10, ml: 10, my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }, backgroundColor:'#FAFAFA'}}>
            <Box>
            <Typography component="b1" variant="b1"  sx={{color: 'black'}} gutterBottom>
              Price 
            </Typography>
            <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey',display: 'block'}} gutterBottom>
              Indicate the amount needed to be paid via GCash integration (default)
            </Typography>
            </Box>
            <FormControl sx={{mt:2}}> 
              <InputLabel htmlFor="component-outlined">Price</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={price}
                onChange={handleChangePrice}
                label="Price"
              />
            </FormControl>
            <Box sx={{mt:2}}>
            <Typography component="b1" variant="b1"  sx={{color: 'black'}} gutterBottom>
              GCash number
            </Typography>
            <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey', display:'block'}} gutterBottom>
              Enter GCash account where payments will be sent
            </Typography>
            </Box>
            <FormControl sx={{mt:2}}>
              <InputLabel htmlFor="component-outlined">Enter Number</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={phoneNumber}
                onChange={handleChangeNumber}
                label="Phone Number"
              />
            </FormControl>
          </Paper>) : null }
         

        {/* </Box> */}
    </Paper>
    </React.Fragment>
  );
}