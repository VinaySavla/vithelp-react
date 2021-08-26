import { IonList, IonItem, IonLabel, IonText, IonInput, IonIcon, IonToolbar, IonTitle, IonRadioGroup, IonCheckbox, IonButton, IonToggle, IonListHeader, IonRadio, useIonRouter } from '@ionic/react';
import { call, locateOutline, radio, text } from 'ionicons/icons';
import React, { useState } from 'react';
import { ServiceRole } from '../pages/SelectionPage';
import './UserProfile.css';

const UserProfile: React.FC = () => {
    const [selected, setSelected] = useState<string>('All');
    const [isSelectedAll, setIsSelectedAll] = useState<boolean | undefined>(undefined);

    const router = useIonRouter();

    const saveUserInfo = () => {
        router.push("/main");
    }
    return (<form >
        <IonList lines="full" className="ion-no-margin ion-no-padding">
            <IonItem>
                <IonLabel position="floating">Full Name <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput required type="text" ></IonInput>
            </IonItem>

            <IonItem disabled>
                <IonIcon icon={call}></IonIcon>
                <IonInput required type="number"></IonInput>
                <IonInput required type="number" ></IonInput>
            </IonItem>

            {(() => {
                if (ServiceRole == "Volunteer") {
                    return <div>
                        <IonItem >
                            <IonLabel position="floating">Profession<IonText color="danger">*</IonText>
                            </IonLabel>
                            <IonInput type="text" ></IonInput>
                        </IonItem>
                    </div>;
                } else {
                    return
                }
            })()}
            {
                (() => { })()
            }

            <IonItem onClick={() => { }/* getCurrentPosition() */}>
                <IonIcon icon={locateOutline}></IonIcon>
                <IonInput placeholder="Address" type="text" readonly></IonInput>
            </IonItem>
            <IonItem >
                <IonLabel color="black">Available for service?</IonLabel>
                <IonToggle slot="end" color="danger" checked />
            </IonItem>

        </IonList>

        {(() => {
            if (ServiceRole == "Volunteer") {
                return <div>
                    <IonList >
                        <h4 className="ion-padding-start">Assisting in</h4>
                        <IonItem>
                            <IonLabel>Select All</IonLabel>
                            <IonCheckbox onIonChange={(e) => { setIsSelectedAll(e.detail.checked ? true : undefined) }} slot="start" value="All" />
                        </IonItem>

                        <IonItem>
                            <IonLabel>Food</IonLabel>
                            <IonCheckbox checked={isSelectedAll} slot="start" value="food" />
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
                </div>;
            } else {
                return <div>
                    <IonList >
                        <IonToolbar>
                            <IonTitle size="large" slot="start">SOS Reason</IonTitle>
                        </IonToolbar>
                        <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                            <IonListHeader>
                                <IonLabel>SOS Reason</IonLabel>
                            </IonListHeader>

                            <IonItem>
                                <IonLabel>Food</IonLabel>
                                <IonRadio slot="start" value="food" />
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
                </div>;
            }
        })()}
        {
            (() => { })()
        }

        <div className="ion-padding">
            <IonButton color="danger" expand="block" onClick={saveUserInfo}>Update</IonButton>
        </div>
    </form>
    )
}

export default UserProfile;