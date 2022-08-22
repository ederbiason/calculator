import { IonCard, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Button from '../components/Button';

import './Tab2.css'

import { buttons } from '../utils/ButtonsValues';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
        <IonCard id="textArea">
          <p>Text</p>
        </IonCard>

        <IonGrid>
          {buttons.map((button, index) => (
            <IonRow key={index}>
              {button.numbers.map((number) => (
                <Button key={number.value} value={number.value} special={number.special} />
              ))}
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
