import React from 'react'
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';

import { Grid } from '@mui/material';
import '../styles/Home.css';

function Home() {
  return (
    <div className='articles'>
      <SearchBox/>
      <h1 className="weekly">This Week</h1>
        <Grid container>
          <Grid item xs={6} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card/>
          </Grid>
        </Grid>
      <h2 className='trending'>Trending</h2>
        <Grid container>
          <Grid item xs={6} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card/>
          </Grid>
        </Grid>
    </div>
  );
}

export default Home;