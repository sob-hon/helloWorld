import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography, Box } from "@material-ui/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useStyles } from "./Slider.style";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { useMediaQuery } from "@material-ui/core";

SwiperCore.use([Pagination, Navigation]);

const Slider = (props) => {
  const classes = useStyles();
  const matchesmd = useMediaQuery("(max-width:900px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  console.log("Props of Slider: ", props);
  const checkslidesPerView = () => {
    let slideCount = 5;
    if (matchesmd) {
      slideCount = 3;
    }
    if (matchesSm) {
      slideCount = 1;
    }
    return slideCount;
  };

  return (
    <Box mt={4} mb={6}>
      <Box
        className={classes.sliderHeader}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography color="primary">{props.categoryName}</Typography>
        <Box display="flex" alignItems="center">
          <span className={classes.more}>بیشتر</span>
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </Box>
      </Box>
      <Swiper
        slidesPerView={checkslidesPerView()}
        spaceBetween={20}
        slidesPerGroup={1}
        // loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        className={`mySwiper ${classes.slide}`}
        
      >
        {}
        {props.categoryData.map((item, index) => {
          return (
            <SwiperSlide>
              <Box className={classes.cardBox}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.cardImageContainer}
                >
                  <img
                    src={item.image_url}
                    alt="یه پیام برای بکند عزیز"
                    className={classes.cardImage}
                  />
                </Box>
                <Box
                  flexDirection="column"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.cardInfo}
                >
                  <Typography>{item.name}</Typography>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Slider;
