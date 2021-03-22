import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTabs';
import { AuthContext } from './auth';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  console.log(`logged in status: ${loggedIn}`)
  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn }}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/login">
              <LoginPage onLogin={() => setLoggedIn(true)} />
            </Route>
            <Route path="/my">
              <AppTabs />
            </Route>
            <Redirect exact path="/" to="/my/entries" />
          </IonRouterOutlet>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
