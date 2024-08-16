import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UnitList } from "./unit/UnitList";
import { UnitCreate } from "./unit/UnitCreate";
import { UnitEdit } from "./unit/UnitEdit";
import { UnitShow } from "./unit/UnitShow";
import { GeographyList } from "./geography/GeographyList";
import { GeographyCreate } from "./geography/GeographyCreate";
import { GeographyEdit } from "./geography/GeographyEdit";
import { GeographyShow } from "./geography/GeographyShow";
import { DatasetList } from "./dataset/DatasetList";
import { DatasetCreate } from "./dataset/DatasetCreate";
import { DatasetEdit } from "./dataset/DatasetEdit";
import { DatasetShow } from "./dataset/DatasetShow";
import { MetricList } from "./metric/MetricList";
import { MetricCreate } from "./metric/MetricCreate";
import { MetricEdit } from "./metric/MetricEdit";
import { MetricShow } from "./metric/MetricShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Freshwater Data Hub"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Unit"
          list={UnitList}
          edit={UnitEdit}
          create={UnitCreate}
          show={UnitShow}
        />
        <Resource
          name="Geography"
          list={GeographyList}
          edit={GeographyEdit}
          create={GeographyCreate}
          show={GeographyShow}
        />
        <Resource
          name="Dataset"
          list={DatasetList}
          edit={DatasetEdit}
          create={DatasetCreate}
          show={DatasetShow}
        />
        <Resource
          name="Metric"
          list={MetricList}
          edit={MetricEdit}
          create={MetricCreate}
          show={MetricShow}
        />
      </Admin>
    </div>
  );
};

export default App;
