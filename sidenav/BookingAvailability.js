import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box'



export default function BookingAvailability() {

  const [bookingSchedule, setBookingSchedule] = React.useState('7:00 AM');
  const handleChangeBookingSchedule = (event) => {
    setBookingSchedule(event.target.value);
  };


    return(
        <Box sx={{mb:3}}>
            <Typography sx={{color:'black',ml:3,display:'inline'}}>Monday</Typography>
            <FormControl sx={{ my:2, ml: 3.5, minWidth: 250, display:'inline' }}>
                {/* <InputLabel id="demo-simple-select-autowidth-label">days</InputLabel> */}
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth-label"
                  value={bookingSchedule}
                  onChange={handleChangeBookingSchedule}
                  // label=""
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'7:00 AM'}>7:00 AM</MenuItem>
                  <MenuItem value={'7:30 AM'}>7:30 AM</MenuItem>
                  <MenuItem value={'8:00 AM'}>8:00 AM</MenuItem>
                  <MenuItem value={'8:30 AM'}>8:30 AM</MenuItem>
                  <MenuItem value={'9:00 AM'}>9:00 AM</MenuItem>
                  <MenuItem value={'9:30 AM'}>9:30 AM</MenuItem>
                  <MenuItem value={'10:00 AM'}>10:00 AM</MenuItem>
                  <MenuItem value={'10:30 AM'}>10:30 AM</MenuItem>
                  <MenuItem value={'11:00 AM'}>11:00 AM</MenuItem>
                  <MenuItem value={'11:30 AM'}>11:30 AM</MenuItem>
                  <MenuItem value={'12:00 NN'}>12:00 NN</MenuItem>
                </Select>
            </FormControl>
            </Box>
    );
}