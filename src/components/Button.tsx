import { IonButton, IonCol } from "@ionic/react"

interface IProps {
    value: string;
    special: boolean;
}

const Button = ({ value, special }: IProps) => {
  return (
    <IonCol>
        <IonButton expand="full" shape="round" color={`${special ? 'secondary' : 'dark'}`}>
            {value}
        </IonButton>
    </IonCol>
  )
}

export default Button