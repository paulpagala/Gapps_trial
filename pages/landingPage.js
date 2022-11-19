import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { useRouter } from "next/router";


export default function ImgMediaCard() {
  const router = useRouter();

  function redirect(){
    router.push("/setupChecklist")
  }
  
  
  return (
    <Card sx={{ maxWidth: 950,height:400,mt:'292px',ml:'485px',display:'flex',flexDirection: 'row'}}>
        <CardMedia
        component="img"
        alt="bike"
        // height="496"
        image="Image 8@2x.png"
        sx={{width:330,backgroundSize: 'cover',}}
      />
      <div style={{marginLeft:51, marginTop:50}}>
      <CardContent >
        <Typography gutterBottom variant="h4" component="div" sx={{fontWeight: 'bold'}}>
        Welcome to G Access, Tria!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{pt:3}}>
        You are the assigned service administrator for 
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{fontWeight: 'bold'}}>
        Parking at The Globe Tower
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{pt:3,mr:5}}>
        As the service admin, you will be the one to manage the appointment slots in your assigned Globe sites
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" sx={{width:211,height:65,backgroundColor:'#5BADFA'}} onClick={redirect}>Start set up</Button>
      </CardActions>
      </div>
    </Card>
  );
}
