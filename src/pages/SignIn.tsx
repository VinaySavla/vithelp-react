import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { call } from "ionicons/icons";
import './SignIn.css';
import { useForm } from 'react-hook-form';


const SignIn: React.FC = () => {
  const router = useIonRouter();

  const sendOtp = () => {
    router.push("/submitotp");
  }

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <form onSubmit={handleSubmit(onSubmit)}>
        <div id="container">
          <img src="/assets/images/VIT-logo.png" alt="" />
            <IonItem>
            <IonInput style={{ maxWidth: "20%", borderRight: "1px solid grey" }}
              type="number"
              placeholder=""
              value="091"
              required
              {...register("countryCode", {maxLength: 3, pattern: /^[0-9]{1,4}$/i})}
              onClick={() => { }}
            >
            </IonInput>
            <IonInput style={{ maxWidth: "50%" }}
              type="number"
              placeholder="Your Mobile No."
              required
              {...register("phone", {maxLength: 15, pattern: /^[0-9]{9,15}$/i})}
              onClick={() => { }}
            ></IonInput>
            <IonIcon icon={call} slot="start"></IonIcon>
          </IonItem>
          <p>By clicking "SEND OTP" you are agreeing to the <a href="./terms">Terms and Conditions</a>.</p>
          <IonButton type="submit" color="danger" expand="block" onClick={sendOtp}>SEND OTP</IonButton>
        </div>
          </form>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
