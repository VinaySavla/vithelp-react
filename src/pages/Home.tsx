import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonFooter } from '@ionic/react';
import Slide from '../components/Slide';
import './Home.css';

const Home: React.FC = () => {
  const router = useIonRouter();

  const goToSignInPage = () => {
    router.push("/signin");
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
          {/* <img src="/assets/images/VIT-logo.png" alt="" />
            <img src="/assets/vithelp.png" alt="" />
          <p>Co-Volunteer IT Help</p> */}
          <Slide></Slide>
        </div>
        <div id="button">
        </div>
      </IonContent>
      <IonFooter>
        <IonButton color="danger" expand="full" onClick={goToSignInPage} >SIGN IN</IonButton>

      </IonFooter>
    </IonPage>
  );
};

export default Home;
