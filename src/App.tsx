import {
  IonApp, IonLoading
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTabs';
import { AuthContext, useAuthInit } from './auth';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';



const App: React.FC = () => {
  const { loading, auth } = useAuthInit();

  console.log(`logged in status: `, auth)

  if (loading) {
    return <IonLoading isOpen />
  }
  
  return (
    <IonApp>
      <AuthContext.Provider value={auth? auth : { loggedIn: false}}>
        <IonReactRouter>
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route path="/my">
              <AppTabs />
            </Route>
            <Redirect exact path="/" to="/my/entries" />
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
