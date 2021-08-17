import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const router = useIonRouter();

  const goToSignInPage = () => {
    router.push("/signin");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="container">
            <img src="https://www.vidyalankar.org/assets/img/logos/VersionThree.jpg" alt="" />
            {/* <img src="/assets/vithelp.png" alt="" /> */}
          <p>Co-Volunteer IT Help</p>
        </div>
        <div id="button">
          <IonButton color="danger" expand="block" onClick={goToSignInPage} >SIGN IN</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
