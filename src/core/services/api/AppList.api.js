import { useQuery } from "react-query";
import Http from "../interceptors/interceptors";

const mainURL = process.env.REACT_APP_BASE_URL;
const appListURL = mainURL + "/app/list/";

const appListQuery = async () => {
  return Http.get(appListURL);
};

const AppListUseQuery = () => {
  return useQuery('appList',appListQuery); // useQuery for get requests
};

export default AppListUseQuery;
