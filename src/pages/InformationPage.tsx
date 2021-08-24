import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonFooter, IonBackButton, IonButtons, IonInput, IonLabel, IonItem, IonIcon, IonToggle, IonList, IonRadioGroup, IonListHeader, IonRadio, IonItemDivider } from '@ionic/react';
import React, { useState } from 'react';
import { ServiceRole } from './SelectionPage';
import './InformationPage.css';

const InformationPage: React.FC = () => {

    const router = useIonRouter();
    const [selected, setSelected] = useState<string>('food');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar id="selectP">
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

                    <IonButtons slot="end">Logged As:{ServiceRole}</IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="buttons">
            <IonButton color="danger" expand="block" >FAQS</IonButton>
            <IonButton color="danger" expand="block" >TERMS & CONDITIONS</IonButton>
            <IonButton color="danger" expand="block" >CONTACT US</IonButton>
            <IonButton color="danger" expand="block" >ABOUT</IonButton>
            </IonContent>
            </IonPage>
    );
 
};

 export default InformationPage;