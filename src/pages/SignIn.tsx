import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { call } from "ionicons/icons";
import './SignIn.css';

const SignIn: React.FC = () => {
  const router = useIonRouter();

  const sendOtp = () => {
    router.push("/submitotp");
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="container">
          <img src="/assets/images/VIT-logo.png" alt="" />
          <IonItem>
            <IonInput style={{ maxWidth: "20%", borderRight: "1px solid grey" }}
              type="number"
              placeholder=""
              onClick={() => { }}
            >
            </IonInput>
            <IonInput style={{ maxWidth: "50%" }}
              type="number"
              placeholder="Your Mobile No."
              onClick={() => { }}
            ></IonInput>
            <IonIcon icon={call} slot="start"></IonIcon>
          </IonItem>
          <p>By clicking "SEND OTP" you are agreeing to the <a href="/signin">Terms and Conditions</a>.</p>
          <IonButton color="danger" expand="block" onClick={sendOtp}>SEND OTP</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
