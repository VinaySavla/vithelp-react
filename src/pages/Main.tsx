import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, useIonRouter, IonRouterOutlet } from '@ionic/react';
import { calendar, personCircle, map, informationCircle, notifications, information, personCircleOutline, notificationsOutline, informationOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import InformationPage from './InformationPage';
import SetupProfile from './SetupProfilePage';
import AboutUs from './Options/AboutUs';
import ContactUs from './Options/ContactUs';
import FAQ from './Options/Faq';
import TNC from './Options/TermsAndConditions';

const Main: React.FC = () => {

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/informationpage">
                    <InformationPage />
                </Route>
                <Route exact path="/aboutus">
                    <AboutUs />
                </Route>
                <Route exact path="/faq">
                    <FAQ />
                </Route>
                <Route exact path="/tnc">
                    <TNC />
                </Route>
                <Route exact path="/contactus">
                    <ContactUs />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">

                <IonTabButton tab="map">
                    <IonIcon icon={map} />
                    <IonLabel>Map</IonLabel>
                </IonTabButton>

                <IonTabButton tab="notification">
                    <IonIcon icon={notifications} />
                    <IonLabel>Notification</IonLabel>
                </IonTabButton>

                <IonTabButton tab="info" href="informationpage">
                    <IonIcon icon={information} />
                    <IonLabel>Info</IonLabel>
                </IonTabButton>


                <IonTabButton tab="profile">
                    <IonIcon icon={personCircleOutline} />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );

};

export default Main;