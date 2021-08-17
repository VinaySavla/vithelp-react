import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { call } from "ionicons/icons";
import './SignIn.css';

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="container">
            <img src="/assets/images/VIT-logo.png" alt="" />
            <IonItem>
                <IonLabel></IonLabel>
                <IonInput type="number"></IonInput>
                <IonIcon icon={call} slot="start"></IonIcon>
            </IonItem>
            <p>By clicking "SEND OTP" you are agreeing to the <a href="/">Terms and Conditions</a>.</p>
            <IonButton color="danger" expand="block">SEND OTP</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
