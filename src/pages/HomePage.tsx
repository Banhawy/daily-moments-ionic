import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

interface entries {
  id: string;
  title: string;
  description: string;
}

const HomePage: React.FC = () => {
  const [entries, setEntries] = useState<entries[]>([]);
  useEffect(() => {
    const entriesRef = firestore.collection('entries')
    entriesRef.get().then((snapshot) => {
      const entries = snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description
      }))
       setEntries(entries)
    })
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {entries.map(entry =>
            <IonItem button key={entry.id}
              routerLink={`/my/entries/${entry.id}`}>
              {entry.title}
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
