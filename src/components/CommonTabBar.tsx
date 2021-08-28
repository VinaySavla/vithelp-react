import React from 'react';
import { IonIcon, IonLabel, IonTabBar, IonTabButton } from '@ionic/react';
import { map, notifications, information, personCircleOutline } from 'ionicons/icons';

const CommonTabBar: React.FC = () => {
    return <IonTabBar slot="bottom">

    <IonTabButton tab="map" href="/map">
        <IonIcon icon={map} />
        <IonLabel>Map</IonLabel>
    </IonTabButton>

    <IonTabButton tab="notification" href="/notifications">
        <IonIcon icon={notifications} />
        <IonLabel>Notification</IonLabel>
    </IonTabButton>

    <IonTabButton tab="info" href="/informationpage">
        <IonIcon icon={information} />
        <IonLabel>Info</IonLabel>
    </IonTabButton>


    <IonTabButton tab="profile" href="/profile">
        <IonIcon icon={personCircleOutline} />
        <IonLabel>Profile</IonLabel>
    </IonTabButton>
</IonTabBar>
}

export default CommonTabBar;
