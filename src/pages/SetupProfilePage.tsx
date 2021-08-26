import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonFooter, IonButtons } from '@ionic/react';
import React from 'react';
import './SetupProfilePage.css';
import { ServiceRole } from './SelectionPage';
import UserProfile from '../components/UserProfile';

const SetupProfile: React.FC = () => {
    const router = useIonRouter();
    return (
        <IonPage>

            <IonHeader id="selectP" >
                <IonToolbar>
                    <IonTitle>
                    </IonTitle>
                    <IonButtons slot="start" >
                        <img
                            src="assets/images/VITLogo.png"
                            alt="VIT logo"
                            title="VIT logo"
                            width="150"
                        />
                    </IonButtons>

                    <IonButtons slot="end" >Logged As: {ServiceRole}</IonButtons>
                </IonToolbar>
            </IonHeader>
            <UserProfile></UserProfile>
        </IonPage>
    );
};

export default SetupProfile;
