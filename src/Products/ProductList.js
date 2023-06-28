import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import productimg1 from '../assest/pexels-jane-doan-1099680.jpg';
import productimg2 from '../assest/pexels-chan-walrus-958545.jpg';
import productimg3 from '../assest/pexels-julie-aagaard-2097090.jpg';
import productimg4 from '../assest/pexels-rajesh-tp-1624487.jpg'
import Productimges from '../Products/Productimg.module.css'
// import productimg from '../assest/pexels-ella-olsson-1640772.jpg';

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
      {/* <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={12}>
      <Grid item >
      <Item xs style={{ height: "88px", width: "150px" }}>
          <img className={Productimges.imges} src={productimg2} alt="Product Image" />
          <p>dfg</p>
        </Item>
      </Grid>
      <Grid item >
      <Item xs style={{ height: "88px", width: "150px" }}>
          <img className={Productimges.imges} src={productimg1} alt="Product Image" />
          <h3>Veg Raita</h3>
        </Item>
      </Grid>
      <Grid item>
      <Item xs style={{ height: "88px", width: "150px" }}>
          <img className={Productimges.imges} src={productimg2} alt="Product Image" />
          <p>dfg</p>
        </Item>
      </Grid>
      <Grid item>
      <Item xs style={{ height: "88px", width: "150px" }}>
          <img className={Productimges.imges} src={productimg3} alt="Product Image" />
          <p>dfg</p>
        </Item>
      </Grid>
      <Grid >
      <Item xs style={{ height: "88px", width: "150px" }}>
          <img className={Productimges.imges} src={productimg4} alt="Product Image" />
          <h3>Butter Chicken</h3>
        </Item>
      </Grid>
      <Grid >
      <Item xs style={{ height: "88px", width: "150px" }}>
          <img className={Productimges.imges} src={productimg1} alt="Product Image" />
          <p>dfg</p>
        </Item>
      </Grid>
      <Grid >
      <Item xs style={{ height: "88px", width: "150px" }}>
          <img className={Productimges.imges} src={productimg4} alt="Product Image" />
          <h3>Butter Chicken</h3>
        </Item>
      </Grid> <Grid item >
      <Item xs style={{ height: "88px", width: "150px" }}>
          <img className={Productimges.imges} src={productimg2} alt="Product Image" />
          <h3>Butter Chicken</h3>
        </Item>
      </Grid>
    </Grid>
  </Box> */}
      {/* <Box >
      <Grid container spacing={12} >
        <Grid item >
          <Item xs>
               <img className={Productimges.imges} src={productimg} alt="Product Image" />

            <p>dfg</p>
          </Item >
        </Grid>
        <Grid item >
          <Item xs>
               <img className={Productimges.catgoryimg} src={productimg2} alt="Product Image" />
            <p>dfg</p>
          </Item >
        </Grid><Grid item >
          <Item xs>
        
                    <img className={Productimges.catgoryimg} src={productimg3} alt="Product Image" />

            <p>dfg</p>
          </Item >
        </Grid><Grid item >
          <Item xs>
        
                    <img className={Productimges.catgoryimg} src={productimg1} alt="Product Image" />

            <p>dfg</p>
          </Item >
        </Grid><Grid item >
          <Item xs>
    <img className={Productimges.catgoryimg} src={productimg4} alt="Product Image" />

            <p>dfg</p>
          </Item >
        </Grid><Grid item >
          <Item xs>
        
                    <img className={Productimges.catgoryimg} src={productimg4} alt="Product Image" />

            <p>dfg</p>
          </Item >
        </Grid>
              </Grid>
    </Box> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Item>
              <img
                className={Productimges.catgoryimg}
                src={productimg1}
                alt="Product Image1"
                style={{ marginBottom: "10px" }} // Add margin bottom for spacing
              />
              <p>Veg Raita</p>
            </Item>
          </Grid>

          <Grid item xs>
            <Item>
              <img
                className={Productimges.catgoryimg}
                src={productimg2}
                alt="Product Image2"
                style={{ marginBottom: "10px" }} // Add margin bottom for spacing
              />
              <p>Veg Raita</p>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <img
                className={Productimges.catgoryimg}
                src={productimg3}
                alt="Product Image3"
                style={{ marginBottom: "10px" }} // Add margin bottom for spacing
              />
              <p>Veg Raita</p>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <img
                className={Productimges.catgoryimg}
                src={productimg4}
                alt="Product Image4"
                style={{ marginBottom: "10px" }} // Add margin bottom for spacing
              />
              <p>Veg Raita</p>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <img
                className={Productimges.catgoryimg}
                src={productimg1}
                alt="Product Image5"
                style={{ marginBottom: "10px" }} // Add margin bottom for spacing
              />
              <p>Veg Raita</p>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <img
                className={Productimges.catgoryimg}
                src={productimg2}
                alt="Product Image6"
                style={{ marginBottom: "10px" }} // Add margin bottom for spacing
              />
              <p>Veg Raita</p>
            </Item>
          </Grid>
          {/* Continue with the rest of your Grid items */}
        </Grid>
      </div>

      <br />
      <h1 className={Productimges.productcatgorytext}>Product List</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item xs>
              <img className={Productimges.imges} src={productimg2} alt="Product Image7" />
              <p>dfg</p>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>
              <img className={Productimges.imges} src={productimg1} alt="Product Image8" />
              <h3>Veg Raita</h3>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>
              <img className={Productimges.imges} src={productimg2} alt="Product Image9" />
              <p>dfg</p>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>
              <img className={Productimges.imges} src={productimg3} alt="Product Image10" />
              <p>dfg</p>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>
              <img className={Productimges.imges} src={productimg4} alt="Product Image11" />
              <h3>Butter Chicken</h3>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>
              <img className={Productimges.imges} src={productimg1} alt="Product Image12" />
              <p>dfg</p>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>
              <img className={Productimges.imges} src={productimg4} alt="Product Image13" />
              <h3>Butter Chicken</h3>
            </Item>
          </Grid> <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>
              <img className={Productimges.imges} src={productimg2} alt="Product Image14" />
              <h3>Butter Chicken</h3>
            </Item>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}