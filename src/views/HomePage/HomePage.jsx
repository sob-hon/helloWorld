import ButtonAppBar from '../../components/common/AppBar/AppBar'
import Slider from './components/Slider/Slider';
import AppListUseQuery from '../../core/services/api/AppList.api'
import { useStyles } from './HomePage.style';


const HomePage = () => {
    const appList = AppListUseQuery();
    const classes = useStyles();

    const {isLoading, isError, data} = appList;

    if(isLoading) {
        return <div>Loading...</div>;
    }
    if(isError) {
        return <div>Fseek</div>;
    }

    return (
        <>
        <div className={classes.root}>
            <ButtonAppBar />
            {
                console.log(data)
            }
            <Slider />
            <Slider />
            <Slider />
        </div>
        </>
    )
}
 
export default HomePage;