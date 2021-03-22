import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home as homeIcon, settings as settingsIcon } from "ionicons/icons";
import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import EntryPage from './pages/EntryPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  console.log(`logged in status: ${loggedIn}`)
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/login">
              <LoginPage loggedIn={loggedIn}
                onLogin={() => setLoggedIn(true)} />
            </Route>
            <Route exact path="/my/entries">
              {loggedIn ? <HomePage /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/my/settings">
              <SettingsPage />
            </Route>
            <Route exact path="/my/entries/:id">
              <EntryPage />
            </Route>
            <Redirect exact path="/" to="/my/entries" />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/my/entries">
              <IonIcon icon={homeIcon} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/my/settings">
              <IonIcon icon={settingsIcon} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
