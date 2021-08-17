import ButtonAppBar from "../../components/common/AppBar/AppBar";
import Slider from "./components/Slider/Slider";
import AppListUseQuery from "../../core/services/api/AppList.api";
import { useStyles } from "./HomePage.style";

const HomePage = () => {
  const appList = AppListUseQuery();
  const classes = useStyles();

  const { isLoading, isError, data } = appList;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Fseek</div>;
  }

  return (
    <>
      <div className={classes.root}>
        <ButtonAppBar />
        {Object.keys(data.data).map((item) => {
          return <Slider key={item} categoryData={data.data[item]} categoryName={item}/>;
        })}
      </div>
    </>
  );
};

export default HomePage;
