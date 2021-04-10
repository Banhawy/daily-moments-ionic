import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { add as addIcon } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth';
import { formateDate } from '../date';
import { firestore } from '../firebase';
import { Entry, toEntry } from '../models';

const HomePage: React.FC = () => {
  const { userId } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  useEffect(() => {
    const entriesRef = firestore.collection('users').doc(userId)
      .collection('entries');
    entriesRef.orderBy('date', 'desc').limit(7)
      .onSnapshot(({ docs }) => setEntries(docs.map(toEntry)))
  }, [userId])
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
                <IonThumbnail slot="end">
                  <IonImg src={entry.pictureUrl} />
                </IonThumbnail>
              <IonLabel>
                <h2>{formateDate(entry.date)}</h2>
                <h3>{entry.title}</h3>
              </IonLabel>
            </IonItem>
          )}
        </IonList>
        <IonFab vertical="bottom" horizontal="end">
          <IonFabButton routerLink="/my/entries/add">
            <IonIcon icon={addIcon}> </IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
