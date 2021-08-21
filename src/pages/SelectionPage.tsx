import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonRippleEffect, IonFooter, useIonRouter } from '@ionic/react';
import { call, receipt, shield } from "ionicons/icons";
import './SelectionPage.css';

const Selection: React.FC = () => {

    const router = useIonRouter();

    const profilePage = () => {
        router.push("/setupprofilepage");
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
                    <div>
                        <img id="image" src="/assets/images/VIT-logo.png" alt="" />
                        <p></p>

                    </div>


                    <IonButton color="danger" size="large" fill="outline" expand="block" id="volunteer-button" strong>
                        <IonIcon slot="start" icon={shield} />
                        Volunteer
                    </IonButton>
                    <IonButton color="danger" size="large" fill="outline" expand="block" id="distressed-button" strong>
                        <IonIcon slot="start" icon={receipt} />
                        Distressed
                        <IonRippleEffect></IonRippleEffect>
                    </IonButton>

                    <IonFooter>

                        <IonButton color="dark" expand="block" onClick={profilePage}>CONTINUE</IonButton>

                    </IonFooter>


                </div>
            </IonContent>

        </IonPage>
    );
};

export default Selection;
