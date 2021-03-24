import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import { auth } from '../firebase';


interface LoggedInProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoggedInProps> = ({ onLogin }) => {
  const { loggedIn } = useAuth()
  const [email, setEmail] = useState<string | null | undefined>('');
  const [password, setPassword] = useState<string | null | undefined>('');
  
  const handleLogin = async () => {
    if (email && password) {
      const credentials = await auth.signInWithEmailAndPassword(email, password)
      console.log('credentials: ', credentials)
      onLogin();
    }
  }

  if (loggedIn) {
    return <Redirect to="/my/entries" />
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" value={email}
              onIonChange={event => setEmail(event.detail.value)}
             />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" value={password}
              onIonChange={event => setPassword(event.detail.value)}
             />
          </IonItem>
        </IonList>
        <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
