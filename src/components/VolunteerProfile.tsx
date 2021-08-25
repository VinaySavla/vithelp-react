import React, { useState } from 'react';
import { IonContent, IonInput, IonLabel, IonItem, IonIcon, IonToggle, IonList, IonListHeader, IonCheckbox, } from '@ionic/react';
import { call, locateOutline } from "ionicons/icons";
import './VolunteerProfile.css';

const VolunteerProfile: React.FC = () => {
    const [selected, setSelected] = useState<string>('All');
    const [isSelectedAll, setIsSelectedAll] = useState<boolean | undefined>(undefined);
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
                    <IonListHeader>
                        <IonLabel>Assistung in</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonLabel>Select All</IonLabel>
                        <IonCheckbox onIonChange={(e)=>{setIsSelectedAll(e.detail.checked ? true : undefined)}} slot="start" value="All"  />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Food</IonLabel>
                        <IonCheckbox checked={isSelectedAll} slot="start" value="food"  />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Clothing</IonLabel>
                        <IonCheckbox checked={isSelectedAll} slot="start" value="clothing" />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Shelter</IonLabel>
                        <IonCheckbox checked={isSelectedAll} slot="start" value="shelter" />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Medical</IonLabel>
                        <IonCheckbox checked={isSelectedAll} slot="start" value="medical" />
                    </IonItem>
            </IonList>
        </div>)
  }
    
  export default VolunteerProfile;