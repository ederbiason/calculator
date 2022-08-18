import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard id="textArea">
          visor da calculadora
        </IonCard>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="full" shape="round" color="secondary">
                  C
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="secondary">
                  (
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="secondary">
                  )
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="secondary">
                  +
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  7
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  8
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  9
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="secondary">
                  -
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  4
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  5
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  6
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="secondary">
                  x
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  1
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  2
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  3
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="secondary">
                  ÷
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="full" shape="round" color="secondary">
                  Del
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  0
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="dark">
                  .
              </IonButton>
            </IonCol>

            <IonCol>
              <IonButton expand="full" shape="round" color="secondary">
                  =
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
