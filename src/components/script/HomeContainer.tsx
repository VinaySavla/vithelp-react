import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonFooter } from '@ionic/react';
import  './ExploreContainer.css';
//import Applogo from '/assets/images/VIT-logo.png';
interface ContainerProps { }

const HomeContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <img alt='logo' src="/assets/images/VITLogo.png" ></img>
      <p>Co-Vounteer IT Help</p>
      

    <a href="Signin">  <IonButton >SIGN IN</IonButton></a>
    </div>
  );
};

export default HomeContainer;
