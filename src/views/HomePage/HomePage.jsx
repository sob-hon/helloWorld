import ButtonAppBar from '../../components/common/AppBar/AppBar'
import { makeStyles } from '@material-ui/core/styles';
import Slider from './components/Slider/Slider'
const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#f9fafd'
    }
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.root}>
            <ButtonAppBar />
            <Slider />
            <Slider />
            <Slider />
        </div>
        </>
    )
}
 
export default HomePage;