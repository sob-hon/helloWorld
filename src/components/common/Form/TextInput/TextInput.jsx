import React from 'react'
import { Box, FormControl, InputLabel } from '@material-ui/core'

import { CustomTextInput } from './TextInput.style'


const TextInput= ({title}) => {
    return (
        <FormControl fullWidth >
         
                <InputLabel shrink htmlFor="bootstrap-input" style={{right:0,left:"unset",fontFamily:"BNazanin",fontSize:"18px"}}>
                    {title}
                </InputLabel>
            

            <CustomTextInput fullWidth  id="my" />
        </FormControl>
    )
}

export { TextInput }
