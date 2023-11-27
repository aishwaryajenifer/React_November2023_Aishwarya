import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/bannerr.jpg";
import Bannerr from "../images/bannerit.jpg";
import Image from "../images/milkimage.jpg";
import { AppBar, Box, Container, Grid, Typography } from '@mui/material';
import "../styles/HomeStyles.css";
import About from './About';
const galleryBoxStyle = {
  maxWidth: '100%',
  marginBottom: '10px',
  backgroundColor:'white',
};
const gallerySectionStyle = {
  background: 'white', // Gradient color
  padding: '50px',
  
  textAlign: 'center',
  color: 'black', 
};
const imageStyle = {
  maxWidth: '100%',
  borderRadius: '10px',
};
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>40% OFF</h1>
          <p>Fresh fruits and Vegetables</p>
          <Link to="/menu">
            <button>BUY NOW</button>
          </Link>
        </div>
      </div>
      
      <Box sx={gallerySectionStyle}>
        <Container>
          
          <Grid container spacing={4}>
            {/* Box 1 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://static4.depositphotos.com/1010050/355/i/450/depositphotos_3552701-stock-photo-assortment-of-fresh-vegetables-and.jpg" alt="GalleryImage1" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                 <h1>NEW ARRIVALS</h1>
                <p>FRESH VEGETABLES AND FRUITS</p>
                </Typography>
              </Box>
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://img.freepik.com/premium-photo/dairy-products-collection-green-light-background_488220-55599.jpg" alt="GalleryImage2" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                  <h1>DAIRY PRODUCTS WITH AMAZING OFFERS</h1>
                 <p></p>
                </Typography>
              </Box>
            </Grid>
            {/* Box 3 */}
            <Grid item xs={12} md={4}>
              <Box sx={galleryBoxStyle}>
                <img src="https://media.self.com/photos/63f500b053d9877cf625b576/master/pass/02092023-SELF-GROCERY-ORANGE-SNACK-01.jpg" alt="GalleryImage3" style={imageStyle} />
                <Typography variant="body2" color="inherit">
                <h1>SUPER SALES</h1>
                  <p>snack items with addictive tastes</p>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <About/>
    </Layout>
  );
};

export default Home;
