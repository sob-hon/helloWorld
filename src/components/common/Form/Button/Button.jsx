import React from 'react'
import Button from '@material-ui/core/Button'
import { ButtonProps } from '@material-ui/core'
import { styles } from './Button.style'
import CircularProgress  from '@material-ui/core/CircularProgress';


const CustomButton = ({
    text,
    type="submit",
    loading = false,
    variant = 'outlined',
    color = 'primary',
    fullWidthResponsive = true,
    fullWidth,
    ...others
}) => {
    const classes = styles()

    return (
        <div className={fullWidth ? classes.fullWrapper :  classes.wrapper}>
            <Button
                type={type}
                fullWidth={fullWidth}
                disabled={loading}
                variant={variant}
                color={color}
                className={fullWidthResponsive ? classes.buttonWidth : ''}
                {...others}
            >
                {text}
            </Button>
            {loading && <CircularProgress size={20} color="primary" className={classes.buttonProgress} />}
       </div>
    )
}

export { CustomButton }
