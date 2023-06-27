import * as React  from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import productimg from '../assest/pexels-ella-olsson-1640772.jpg';
import productimg1 from '../assest/pexels-jane-doan-1099680.jpg';
import productimg2 from '../assest/pexels-chan-walrus-958545.jpg';
import productimg3 from '../assest/pexels-julie-aagaard-2097090.jpg';
import productimg4 from '../assest/pexels-rajesh-tp-1624487.jpg'
import Productimges from '../Products/Productimg.module.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function BasicGrid() {
  return (
    <div>
      <h1 className={Productimges.productcatgorytext}>Product Catgory</h1>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>
          <img className={Productimges.imges} src={productimg2} alt="Product Image" />
          <p>dfg</p>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>
          <img className={Productimges.imges} src={productimg1} alt="Product Image" />
          <h3>Veg Raita</h3>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>
          <img className={Productimges.imges} src={productimg2} alt="Product Image" />
          <p>dfg</p>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>
          <img className={Productimges.imges} src={productimg3} alt="Product Image" />
          <p>dfg</p>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>
          <img className={Productimges.imges} src={productimg4} alt="Product Image" />
          <h3>Butter Chicken</h3>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>
          <img className={Productimges.imges} src={productimg1} alt="Product Image" />
          <p>dfg</p>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>
          <img className={Productimges.imges} src={productimg4} alt="Product Image" />
          <h3>Butter Chicken</h3>
        </Item>
      </Grid> <Grid item xs={12} sm={6} md={4} lg={3}>
        <Item>
          <img className={Productimges.imges} src={productimg2} alt="Product Image" />
          <h3>Butter Chicken</h3>
        </Item>
      </Grid>
    </Grid>
  </Box>
  </div>
  );
}