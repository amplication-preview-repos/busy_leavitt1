import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NetworkRecordList } from "./networkRecord/NetworkRecordList";
import { NetworkRecordCreate } from "./networkRecord/NetworkRecordCreate";
import { NetworkRecordEdit } from "./networkRecord/NetworkRecordEdit";
import { NetworkRecordShow } from "./networkRecord/NetworkRecordShow";
import { DetectionResultList } from "./detectionResult/DetectionResultList";
import { DetectionResultCreate } from "./detectionResult/DetectionResultCreate";
import { DetectionResultEdit } from "./detectionResult/DetectionResultEdit";
import { DetectionResultShow } from "./detectionResult/DetectionResultShow";
import { AnomalyTypeList } from "./anomalyType/AnomalyTypeList";
import { AnomalyTypeCreate } from "./anomalyType/AnomalyTypeCreate";
import { AnomalyTypeEdit } from "./anomalyType/AnomalyTypeEdit";
import { AnomalyTypeShow } from "./anomalyType/AnomalyTypeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"NetworkIntrusionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="NetworkRecord"
          list={NetworkRecordList}
          edit={NetworkRecordEdit}
          create={NetworkRecordCreate}
          show={NetworkRecordShow}
        />
        <Resource
          name="DetectionResult"
          list={DetectionResultList}
          edit={DetectionResultEdit}
          create={DetectionResultCreate}
          show={DetectionResultShow}
        />
        <Resource
          name="AnomalyType"
          list={AnomalyTypeList}
          edit={AnomalyTypeEdit}
          create={AnomalyTypeCreate}
          show={AnomalyTypeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
