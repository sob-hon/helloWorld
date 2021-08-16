import React from 'react';

const Timer = ({seconds,minutes}) => {
  return (  
    <div>
     <span >{seconds} </span> : <span > {minutes} </span>
    </div>
  );
}

// import { Typography } from '@material-ui/core';
// import React, { useState, useEffect } from 'react'

// const Timer = (props) => {
//     const {initialMinute = 0,initialSeconds = 0} = props;
//     const [ minutes, setMinutes ] = useState(initialMinute);
//     const [seconds, setSeconds ] =  useState(initialSeconds);
//     useEffect(()=>{
//     let myInterval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds(seconds - 1);
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(myInterval)
//                 } else {
//                     setMinutes(minutes - 1);
//                     setSeconds(59);
//                 }
//             } 
//         }, 1000)
//         return ()=> {
//             clearInterval(myInterval);
//           };
//     });

//     return (
//         <div>
//         { minutes === 0 && seconds === 0
//             ? null
//             : <Typography> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</Typography> 
//         }
//         </div>
//     )
// }

// export default Timer;
export { Timer }