import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// // import Checkbox from '@mui/material/Checkbox';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// // import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import { createSvgIcon } from '@mui/material/utils';
import Paper from '@mui/material/Paper';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
// import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
// import {Editor}  from "react-draft-wysiwyg";
// import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextField from '@mui/material/TextField';





export default function AddressForm() {
  const [price, setPrice] = React.useState(0);
  const handleChangePrice = (event) => {
  setPrice(event.target.value);
  };

  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleChangeNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const [costOfServiceBooking, setcostOfServiceBooking] = React.useState('free');

  const handleChangeCostOfServiceBooking = (event) => {
    setcostOfServiceBooking(event.target.value);
  };

  const [cancelDeadline, setCancelDeadline] = React.useState(90);

  const handleChangeCancelDeadline = (event) => {
    setCancelDeadline(event.target.value);
  };

  const [earliestBook, setEarliestBook] = React.useState(90);

  const handleChangeEarliestBook = (event) => {
    setEarliestBook(event.target.value);
  };

  
  return (
    <React.Fragment>

<Paper variant="outlined"  sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }}}>
          <Box>
          <Typography sx={{ml:3, fontWeight: 'bold' }}>Rules & guidelines</Typography>
          <Typography sx={{ml:3, mt:2}}>Cost of service booking</Typography>
          </Box>
          <FormControl sx={{ml:3, display:'block'}}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={costOfServiceBooking}
              onChange={handleChangeCostOfServiceBooking}
            >
              <FormControlLabel value="free" control={<Radio />} label="Free of charge" />
              <FormControlLabel value="paid" control={<Radio />} label="Paid"/>
            </RadioGroup>
          </FormControl>

          {costOfServiceBooking === 'paid'?
          (<Paper variant="outlined" sx={{ mr:10, ml: 10, my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }, backgroundColor:'#FAFAFA'}}>
          
              <Box>
              <Typography component="b1" variant="b1"  sx={{color: 'black'}} gutterBottom>
                Booking Price 
              </Typography>
              <Typography component="b1" variant="b1"  sx={{color: 'black', ml:27}} gutterBottom>
                Receiving GCash number wallet
              </Typography>
              </Box>
              <Box sx={{mt:2}}>
              <FormControl> 
                <InputLabel htmlFor="component-outlined">Price</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={price}
                  onChange={handleChangePrice}
                  label="Price"
                  sx={{backgroundColor:'white'}}
                  startAdornment={<InputAdornment position="start">PHP</InputAdornment>}
                />
              </FormControl>
              <FormControl sx={{ml:6, width:400}} >
                <InputLabel htmlFor="component-outlined">Enter Number</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  value={phoneNumber}
                  onChange={handleChangeNumber}
                  label="Phone Number"
                  sx={{backgroundColor:'white'}}
                />
              </FormControl>
              </Box>
          </Paper>)
          :null}

          
          <Box>
                <Box>
                <Typography component="b1" variant="b1"  sx={{color: 'black', ml:3}} gutterBottom>
                  Earliest date employees can book
                </Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <TextField
                  id="outlined-number"
                  // label="Number of Slots"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={earliestBook}
                  onChange={handleChangeEarliestBook}
                  sx={{width:'86px',ml:3}}
                />
                <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'black', ml:3}}>days before the booking</Typography>
              </Box>
          </Box>
         
          <Box sx={{mt:2}}>
                <Box>
                <Typography component="b1" variant="b1"  sx={{color: 'black', ml:3}} gutterBottom>
                  Cancellation deadline
                </Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <TextField
                  id="outlined-number"
                  // label="Number of Slots"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={cancelDeadline}
                  onChange={handleChangeCancelDeadline}
                  sx={{width:'86px',ml:3}}
                />
                <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'black', ml:3}}>minutes before the booking</Typography>
                </Box>
                <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey',display: 'block', ml:3}} gutterBottom>
                    Employees can cancel <strong>{(cancelDeadline)/60} hour and {(cancelDeadline)%60} minutes </strong>  before the booking
                </Typography>
            </Box>
    </Paper>
    
    {/* <Paper variant="outlined"  sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }}}>
    <Box sx={{ml:3}}>
    <Typography  sx={{fontWeight: 'bold'}}>Policies</Typography>  
    <Typography variant="body1" color="text.secondary" sx={{mt:1}}>
      Enter guidelines, rules, regulations, or directions for your service
      </Typography>
      <Editor
        //  toolbarClassName="toolbarClassName"
        //  wrapperClassName="wrapperClassName"
        toolbarStyle={{backgroundColor: '#3D4E5D'}}
        placeholder='Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua....
        
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua....'
        wrapperStyle={{ width: 800, height: 500, border: "1px solid black", overflow: "hidden"}}
      />
      </Box>
      
      </Paper>
       */}
    </React.Fragment>
  );
}