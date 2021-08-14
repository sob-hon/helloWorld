import { makeStyles } from '@material-ui/core'

export const styles = makeStyles((theme) => ({
    buttonWidth: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    wrapper: {
        position: 'relative',
        display: "inline-block"
      },
      fullWrapper: {
        position: 'relative',
      },
    buttonProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -10,
      marginLeft: -10,
    },
}))
