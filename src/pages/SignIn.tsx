import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { call } from "ionicons/icons";
import './SignIn.css';
import { useForm } from 'react-hook-form';


interface OTPFormData {
  countryCode: number;
  phone: number;
}

const SignIn: React.FC = () => {
  const router = useIonRouter();

  const sendOtp = (data: OTPFormData) => {
    console.log(data);
    router.push("/submitotp");
  }

  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <form onSubmit={handleSubmit(sendOtp)}>
        <div id="container">
          <img src="/assets/images/VIT-logo.png" alt="" />
            <IonItem>
            <IonInput style={{ maxWidth: "20%", borderRight: "1px solid grey" }}
              type="number"
              placeholder=""
              value="091"
              {...register("countryCode", {required: true, maxLength: 3, pattern: /^[0-9]{1,4}$/i})}
            >
            </IonInput>
            <IonInput style={{ maxWidth: "50%" }}
              type="number"
              placeholder="Your Mobile No."
              {...register("phone", {required: true, maxLength: 15, pattern: /^[0-9]{9,15}$/i})}
            ></IonInput>
            <IonIcon icon={call} slot="start"></IonIcon>
          </IonItem>
          <p>By clicking "SEND OTP" you are agreeing to the <a href="./terms">Terms and Conditions</a>.</p>
          <IonButton type="submit" color="danger" expand="block" >SEND OTP</IonButton>
        </div>

          </form>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
