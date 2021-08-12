
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CardActionArea, CardContent, CardMedia, makeStyles,Typography,Card, Box } from '@material-ui/core'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import { useMediaQuery } from "@material-ui/core";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Slider() {
  
  const classes = useStyles();
  const matchesmd = useMediaQuery('(max-width:900px)');
  const matchesSm = useMediaQuery('(max-width:600px)');

  const checkSlidesPre = () => {
    let i = 5
    if(matchesmd){
      i = 3
    }
    if(matchesSm){
      i = 1
    }
    return i
  }
  return (
    <Box mt={4} mb={6}> 
      <Box className="sliderHeader" display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant=""color="primary">برنامه‌های پیشنهادی برای شما</Typography>
        <Box display="flex" alignItems="center">
          <span style={{marginTop: '0'}}>بیشتر</span>
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </Box>
      </Box>
      <Swiper slidesPerView={checkSlidesPre()} spaceBetween={20} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true}  navigation={true} className="mySwiper slide">
      {
        [1,2,3,4,5,6,7,8,9,10].map((item) => {
          return (
            <SwiperSlide>    
                <Box style={{height:"250px",width:"200px"}}>
                  <Box display="flex" justifyContent="center" alignItems="center" style={{height:"70%",width:"100%"}}>
                    <img src="/image/game1.png" style={{height:"100px",width:"100px"}}/>
                  </Box>
                  <Box flexDirection="column" display="flex" alignItems="center" justifyContent="center" style={{height:"30%",width:"100%"}}>
                    <Typography> نرم افزار </Typography>
                    <Typography>  {item} </Typography>

                  </Box>
                </Box>
    
            </SwiperSlide>
          )
        })
      }
            
            
      </Swiper>
    </Box>
  )
}