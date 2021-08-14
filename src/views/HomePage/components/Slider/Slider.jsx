
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography, Box } from '@material-ui/core'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {styles} from "./Styles"
import SwiperCore, {Pagination,Navigation} from 'swiper/core';
import { useMediaQuery } from "@material-ui/core";

SwiperCore.use([Pagination,Navigation]);

export default function Slider() {
  
  const classes = styles();
  const matchesmd = useMediaQuery('(max-width:900px)');
  const matchesSm = useMediaQuery('(max-width:600px)');

  const checkslidesPerView = () => {
    let slideCount= 5
    if(matchesmd){
      slideCount = 3
    }
    if(matchesSm){
      slideCount = 1
    }
    return slideCount
  }

  return (
    <Box mt={4} mb={6}> 
      <Box className={classes.sliderHeader} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant=""color="primary">برنامه‌های پیشنهادی برای شما</Typography>
        <Box display="flex" alignItems="center">
          <span className={classes.more}>بیشتر</span>
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </Box>
      </Box>
      <Swiper 
        slidesPerView={checkslidesPerView()} 
        spaceBetween={20} 
        slidesPerGroup={1} 
        loop={true} 
        loopFillGroupWithBlank={true}  
        navigation={true} 
        className={`mySwiper ${classes.slide}`}
      >
      {
        [1,2,3,4,5,6,7,8,9,10].map((item) => {
          return (
            <SwiperSlide>    
                <Box className={classes.cardBox}>
                  <Box 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center" 
                    className={classes.cardImageContainer}
                  >
                    <img src="/image/game1.png" className={classes.cardImage}/>
                  </Box>
                  <Box 
                    flexDirection="column" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center" 
                    className={classes.cardInfo}
                  >
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