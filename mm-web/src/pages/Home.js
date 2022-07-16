import React, {useS, useState} from 'react'
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';
import { Grid } from '@mui/material';
import '../styles/Home.css';
import Datafetching from '../datafetching';

function Home() {
  /*const [data, setData]= useState([])
  useState(()=>{
    fetch('/api/articles')
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      setData(result)
    })
    })*/

  return (
    <div className='articles'>
      <Datafetching/>
      <SearchBox/>
      <h1 className="weekly">This Week</h1>
        <Grid container justifyContent="center" spacing={10}>
          <Grid item xs={8} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
            <Card/>
          </Grid>
        </Grid>
      <h2 className='trending'>Trending</h2>
        <Grid container justifyContent="center" spacing={10}>
          <Grid item xs={8} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
            <Card/>
          </Grid>
        </Grid>
    </div>
  );}

export default Home;