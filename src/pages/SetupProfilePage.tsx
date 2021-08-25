import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonFooter, IonBackButton, IonButtons, IonInput, IonLabel, IonItem, IonIcon, IonToggle, IonList, IonRadioGroup, IonListHeader, IonRadio, IonItemDivider, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import { call, locateOutline } from "ionicons/icons";
import React, { useState } from 'react';
import './SetupProfilePage.css';
import { ServiceRole } from './SelectionPage';
import DistressedProfile from '../components/DistressedProfile';
import VolunteerProfile from '../components/VolunteerProfile';

const SetupProfile: React.FC = () => {
    const router = useIonRouter();
    const [selected, setSelected] = useState<string>('food');
/*     const SelectProfile = () => {
        if (ServiceRole == "Volunteer") {
            <DistressedProfile></DistressedProfile>
            console.log("Worked")
        }
        else if (ServiceRole == "Distressed") {
            <DistressedProfile></DistressedProfile>
            console.log("Didn't work")
        }
    }
    useIonViewDidEnter(() => { SelectProfile() }) */

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
            <IonContent>
                {/* <DistressedProfile></DistressedProfile> */}
                <VolunteerProfile></VolunteerProfile>
            </IonContent>
            <IonFooter>
                <IonButton color="danger" expand="full" >UPDATE</IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default SetupProfile;
