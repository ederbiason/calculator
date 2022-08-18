import { IonCard, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Button from '../components/Button';

import { buttons } from '../utils/ButtonsValues';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard id="textArea">
          Text
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
