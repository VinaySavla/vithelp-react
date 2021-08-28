import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonFooter } from '@ionic/react';
import HomeContainer from '../components/script/HomeContainer';
import Slide from '../components/Slide';
import '../components/styles/Home.css';
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
      <IonContent>
      <HomeContainer />
      </IonContent>

    </IonPage>
  );
};

export default Home;
