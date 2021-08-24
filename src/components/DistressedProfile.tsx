import React, { useState } from 'react';
import { IonContent, IonInput, IonLabel, IonItem, IonIcon, IonToggle, IonList, IonRadioGroup, IonListHeader, IonRadio } from '@ionic/react';
import { call, locateOutline } from "ionicons/icons";
import './DistressedProfile.css';

const DistressedProfile: React.FC = () => {
    const [selected, setSelected] = useState<string>('food');
    return (
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
        </div>)
  }
    
  export default DistressedProfile;