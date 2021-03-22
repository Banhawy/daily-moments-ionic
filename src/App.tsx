import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTabs';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  console.log(`logged in status: ${loggedIn}`)
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login">
            <LoginPage loggedIn={loggedIn}
              onLogin={() => setLoggedIn(true)} />
          </Route>
          <Route path="/my">
            <AppTabs loggedin={loggedIn} />
          </Route>
          <Redirect exact path="/" to="/my/entries" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
