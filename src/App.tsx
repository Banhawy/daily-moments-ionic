import {
  IonApp
} from '@ionic/react';
import React from 'react';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <IonApp>
      <HomePage />
    </IonApp>
  );
};

export default App;
