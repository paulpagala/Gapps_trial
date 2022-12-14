import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import BookingAvailability,{bookingScheduleStart} from '../BookingAvailability';
// import { FamilyRestroomRounded } from '@mui/icons-material';



export default function ServiceSetting() {
  

  const [weekday, setWeekday] = React.useState(() => []);

  const handleWeekday = (event, newWeekday) => {
    setWeekday(newWeekday);
  };


  // const [state, setState] = React.useState({
  //     checkin: false,
    
  //   });
  
  // const handleChangeCheckin = (event) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.checked,
  //   });
  // };
 
  // const { checkin } = state;

  const [checkIn, setCheckIn] = React.useState(false);

  const handleChangeCheckIn = (event) => {
    setCheckIn(event.target.checked);
  };

  const [checkInAndOut, setCheckInAndOut] = React.useState(false);

  const handleChangeCheckInAndOut= (event) => {
    setCheckInAndOut(event.target.checked);
  };



//   const [stateInAndOut, setStateInAndOut] = React.useState({
//     checkInAndOut: false,
  
//   });

// const handleChangeCheckInAndOut = (event) => {
//   setStateInAndOut({
//     ...stateInAndOut,
//     [event.target.name]: event.target.checked,
//   });
// };

// const { checkInAndOut } = stateInAndOut;
    
  
  const [latestBookingSchedule, setLatestBookingSchedule] = React.useState();
  const handleChangeLatestBookingSchedule = (event) => {
    setLatestBookingSchedule(event.target.value);
  };

  const [serviceFee, setServiceFee] = React.useState('Paid');
  const handleChangeServiceFee = (event) => {
    setServiceFee(event.target.value);
  };

//  console.log(bookingScheduleStart)
  
  return (
    <React.Fragment>

      <Paper variant="outlined" sx={{ my: { xs: 3, md: 5 }, p: { xs: 2, md: 3 }}}>
          <Box sx={{display:'flex',flexDirection:"column"}}>
          <Typography component="b1" variant="b1"  sx={{color: 'black',ml:3,mt:2, fontWeight: 'bold' }} gutterBottom>Service schedule </Typography>
          <Typography component="subtitle1" variant="subtitle1"  sx={{color: '#6F8191',ml:3,mt:-1 }} gutterBottom>Set days when the service will be able</Typography> 
          <Box>
          <ToggleButtonGroup
              value={weekday}
              onChange={handleWeekday}
              aria-label="text formatting"
              size='large'
              sx={{ml:3,mt:2}}
            >
              <ToggleButton value="monday" aria-label="monday">
                M
              </ToggleButton>
              <ToggleButton value="tuesday" aria-label="tuesday">
                T
              </ToggleButton>
              <ToggleButton value="wednesday" aria-label="wednesday">
                W
              </ToggleButton>
              <ToggleButton value="thursday" aria-label="thursday">
                Th
              </ToggleButton>
              <ToggleButton value="friday" aria-label="friday">
                F
              </ToggleButton>
              <ToggleButton value="saturday" aria-label="saturday">
                S
              </ToggleButton>
              <ToggleButton value="sunday" aria-label="sunday">
                Su
              </ToggleButton>
          </ToggleButtonGroup>
          </Box>
        </Box>
        <Box sx={{ml:3, mt:2}}>
            <Typography component="b1" variant="b1"  sx={{color: 'black',display:'block'}} gutterBottom>
              Set booking schedule
            </Typography>
            <Box>
            {weekday.includes("monday") ? (<BookingAvailability day="Monday"/>) : null}
            {weekday.includes("tuesday") ? (<BookingAvailability day="Tuesday"/>) : null}
            {weekday.includes("wednesday") ? (<BookingAvailability day="Wednesday"/>) : null}
            {weekday.includes("thursday") ? (<BookingAvailability day="Thursday"/>) : null}
            {weekday.includes("friday") ? (<BookingAvailability day="Friday"/>) : null}
            {weekday.includes("saturday") ? (<BookingAvailability day="Saturday"/>) : null}
            {weekday.includes("sunday") ? (<BookingAvailability day="Sunday"/>) : null}
            </Box>
        </Box>
      </Paper>


      <Paper variant="outlined"  sx={{ my: { md: 3, lg: 5 }, p: { md: 2, lg: 3 }}}>
          <Typography sx={{ml:3, fontWeight: 'bold' }}>Check-in options</Typography>
          <FormControl sx={{ml:3, display:'block'}}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={serviceFee}
              onChange={handleChangeServiceFee}
            >
              <FormControlLabel value="noCheckin" control={<Radio />} label="No check-in needed" />


              <FormControlLabel value="requireCheckin" control={<Radio />} label="Require check-in only" />
              { serviceFee === "requireCheckin" ?  (
                <Paper variant="outlined" sx={{ mr:10, my: { md: 0, lg: 0 }, p: { md: 2, lg: 3 }, backgroundColor:'#FAFAFA'}}>
                
                <FormControlLabel
                        control={
                          <Checkbox checked={checkIn} onChange={handleChangeCheckIn} name="checkin" />
                        }
                        label="Accomplish health declariton before check-in"
                      />
                <Box>
                <Typography component="b1" variant="b1"  sx={{color: 'black'}} gutterBottom>
                  Latest check-in time 
                </Typography>
                </Box>
                <FormControl sx={{ my:3, ml: 3.5, minWidth: 250, display:'inline' }}>
                    {/* <InputLabel id="demo-simple-select-autowidth-label">days</InputLabel> */}
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth-label"
                      value={latestBookingSchedule}
                      onChange={handleChangeLatestBookingSchedule}
                      // label=""
                      sx={{width:150}}
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
                <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey',display: 'block'}} gutterBottom>
                    Employees must check in by {latestBookingSchedule}. If not checked in before this time, booking will be forfeited.
                </Typography>
                </Paper>) : null }

                
              <FormControlLabel value="requireCheckInAndOut" control={<Radio />} label="Require check-in and check-out" />
              { serviceFee === "requireCheckInAndOut"  ?  (
            <Paper variant="outlined" sx={{ mr:10, my: { md: 0, lg: 0 }, p: { md: 2, lg: 3 }, backgroundColor:'#FAFAFA'}}>
            <FormControlLabel
                    control={
                      <Checkbox checked={checkInAndOut} onChange={handleChangeCheckInAndOut}  inputProps={{ 'aria-label': 'controlled' }} name="checkInandOut" />
                    }
                    label="Accomplish health declariton before check-in"
                  />
            <Box>
            <Typography component="b1" variant="b1"  sx={{color: 'black'}} gutterBottom>
              Latest check-in time 
            </Typography>
            </Box>
            <FormControl sx={{ my:3, ml: 3.5, minWidth: 250, display:'inline' }}>
                {/* <InputLabel id="demo-simple-select-autowidth-label">days</InputLabel> */}
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth-label"
                  value={latestBookingSchedule}
                  onChange={handleChangeLatestBookingSchedule}
                  // label=""
                  sx={{width:150}}
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
            <Typography component="subtitle1" variant="subtitle1"  sx={{color: 'grey',display: 'block'}} gutterBottom>
                Employees must check in by {latestBookingSchedule}. If not checked in before this time, booking will be forfeited.
            </Typography>
            </Paper>) : null }


            </RadioGroup>
          </FormControl>
          
         
      </Paper>
    </React.Fragment>
  );
}