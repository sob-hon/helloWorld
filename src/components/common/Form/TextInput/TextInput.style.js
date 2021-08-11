import { createStyles } from '@material-ui/styles'
import { InputBase, withStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'

const CustomTextInput = withStyles((theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: "24px",
            },
        },
        input: {
            borderRadius: 7,
            position: 'relative',
            backgroundColor: '#f8f8f8',
            border: '1px solid #f5f6f7',
            fontSize: 16,
            padding: '10px 12px',
            '&::': '#ccc',
            transition: theme.transitions.create(['border-color', 'box-shadow']),

            '&:focus': {
                borderColor: theme.palette.primary.main,
            },
        },
    })
)(InputBase)

export { CustomTextInput }
