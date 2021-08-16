import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    
 swiperContainer: {
  width: "100%",
  height: "100%"
  },
  slide :{
    width: "90%",
    boxShadow: "0 2px 12px rgb(0 0 0 / 8%)",
    background: "#fff",
    borderRadius: "0 0 7px 7px",
    "& .swiper-slide":{
        justifyContent: "center",
        textAlign: "center",
        fontSize: "18px",
        background: "#fff",
        alignItems: "center",
        display: "flex"
    },
    ['@media (max-width:1200px)']:{
      width: "100%"
    }  
  },
  sliderHeader : {
    boxSizing: "border-box",
    boxShadow: "0 2px 12px rgb(0 0 0 / 8%)",
    margin: "0 auto",
    width: "90%",
    background:" #fff",
    borderBottom:" 1px solid #ccc",
    padding:" 10px",
    borderRadius: "7px 7px 0 0",
    ['@media (max-width:1200px)']:{
      width: "100%"
    }
  },
  root: {
    maxWidth: 345,
  },
  more:{
    margin: "0"
  },
  cardBox:{
    width: "200px",
    height: "250px"
  },
  cardImageContainer:{
    height: "70%",
    width: "100%"
  },
  cardImage:{
    width: "100px",
    height: "100px"
  },
  cardInfo:{
    height: "30%",
    width: "100%"
  }
}))

