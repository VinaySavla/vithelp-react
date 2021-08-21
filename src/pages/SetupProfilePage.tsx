import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonFooter, IonBackButton, IonButtons, IonInput, IonLabel, IonItem, IonIcon, IonToggle, IonList, IonRadioGroup, IonListHeader, IonRadio, IonItemDivider } from '@ionic/react';
import { call, locateOutline } from "ionicons/icons";
import React, { useState } from 'react';
import './SetupProfilePage.css';

const SetupProfile: React.FC = () => {
    const router = useIonRouter();
    const [selected, setSelected] = useState<string>('food');

    return (
        <IonPage>
            <IonHeader id="selectP">
                <IonToolbar color="#fff">
                    <IonTitle is="selectP-Title">
                    </IonTitle>
                    <IonButtons slot="start" >
                        <img
                            src="assets/images/VITLogo.png"
                            alt="VIT logo"
                            title="VIT logo"
                            width="150"
                        />
                    </IonButtons>

                    <IonButtons slot="end">Logged As: Distressed{/* {{serviceRole}} */}</IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div>
                    <IonItem>
                        <IonLabel position="floating" color="black">Full Name</IonLabel>
                        <IonInput color="black"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={call} slot="start"></IonIcon>
                        <IonLabel position="floating" color="black"></IonLabel>
                        <IonInput value="91" type="number" color="black"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={locateOutline}></IonIcon>
                        <IonInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked" color="black">Available for Service?</IonLabel>
                        <IonToggle slot="end" color="danger" checked />
                    </IonItem>
                    <IonList>
                        <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                            <IonListHeader>
                                <IonLabel>SOS Reason</IonLabel>
                            </IonListHeader>

                            <IonItem>
                                <IonLabel>Food</IonLabel>
                                <IonRadio slot="start" value="food"  />
                            </IonItem>

                            <IonItem>
                                <IonLabel>Clothing</IonLabel>
                                <IonRadio slot="start" value="clothing" />
                            </IonItem>

                            <IonItem>
                                <IonLabel>Shelter</IonLabel>
                                <IonRadio slot="start" value="shelter" />
                            </IonItem>
                            <IonItem>
                                <IonLabel>Medical</IonLabel>
                                <IonRadio slot="start" value="medical" />
                            </IonItem>
                        </IonRadioGroup>
                    </IonList>
                </div>
            </IonContent>
            <IonFooter>
                <IonButton color="danger" expand="full" >UPDATE</IonButton>
            </IonFooter>
        </IonPage >
    );
};

export default SetupProfile;
