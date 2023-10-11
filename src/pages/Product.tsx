import * as React from 'react';
import { styled, Rating, LinearProgress, linearProgressClasses, Button, Card, ImageListItem, Typography, FormControl, OutlinedInput, Accordion, AccordionSummary } from "@mui/material";
import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import Link from '@mui/material/Link';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export default function Muibutton(){
  const [value, setValue] = React.useState<number | null>(2);
  return(
    
    <Grid container spacing={2} columns={{xs: 8, md: 16}}>
      <Grid item xs={8}>
        <Card variant="outlined">
            <ImageListItem>
              <img src="https://static.swatch.com/images/product/SVIZ104-5300/sa200/SVIZ104-5300_sa200_er005.png"/>
            </ImageListItem>
        </Card>
          <br />
          <Typography variant="h6" sx={{textAlign:'start'}}>Stock 75/100</Typography>
          <BorderLinearProgress variant="determinate" value={50} />
      </Grid>
      <Grid item xs={8}>
        <Card variant="outlined" sx={{padding:'10px'}}>
          <Typography variant="h6" gutterBottom sx={{fontWeight:'bold', textAlign:'start'}}>Product Name</Typography>
          <Typography variant="body1" gutterBottom sx={{textAlign:'start'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate praesentium corporis deleniti ea debitis, numquam</Typography>
          <Typography variant="body1" gutterBottom sx={{fontWeight:'bold', textAlign:'start'}}>Price: 150$</Typography>
          <Typography variant="body1" gutterBottom sx={{fontWeight:'bold', textAlign:'start'}}>Quatity</Typography>
          <Box sx={{display:'flex'}}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <OutlinedInput id="outlined-adornment-amount" />
            </FormControl>
          </Box>
          <Box sx={{display:'flex', marginTop: '10px'}}>
            <Button variant="contained" color="primary" component={Link} href='/CheckOut'>Add to cart</Button>
          </Box>
        </Card>
        <Accordion sx={{background:'#3333', marginTop: '15px'}}>
          <AccordionSummary>
            <Typography>Specification</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Timer</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Waterproof</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>lorem</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>lorem</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>lorem</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>lorem</Typography>
          </AccordionSummary>
        </Accordion>
      </Grid>
      <Grid item xs={16}>
        <Accordion sx={{background:'#3333', mt:5}}>
          <AccordionSummary>
            <Typography>Rate This Product</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Rating name="read-only" value={value} readOnly />
            <Button variant='contained' color='primary'>Submit</Button>
          </AccordionSummary>
        </Accordion>
        
        <Accordion sx={{background:'#3333', mt:5}}>
          <AccordionSummary>
            <Typography>Reviews</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start'}}>
              <Typography variant='body1'>Johny</Typography>
              <Typography variant='body1'>Good product</Typography>
            </Box>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start'}}>
              <Typography variant='body1'>Johny</Typography>
              <Typography variant='body1'>Good product</Typography>
            </Box>
          </AccordionSummary>
        </Accordion>
      </Grid>
    </Grid>
  )
}