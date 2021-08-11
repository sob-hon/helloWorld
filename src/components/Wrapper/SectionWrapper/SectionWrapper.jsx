import React from "react"
import { Box } from "@material-ui/core"

import {styles} from "./SectionWrapper.style"

const SectionWrapper = ({children,className,...other}) => {

  const classes = styles()

  return (
    <Box className={`${classes.wrapper} ${className}`} {...other}>
      {children}
    </Box>
  )
}

export { SectionWrapper }