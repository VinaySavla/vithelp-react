import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { map, notifications, information, personCircleOutline, } from 'ionicons/icons';
import { Route, Redirect } from 'react-router-dom';
import InformationPage from './InformationPage';
import AboutUs from './Options/AboutUs';
import ContactUs from './Options/ContactUs';
import FAQ from './Options/Faq';
import TNC from './Options/TermsAndConditions';
import Map from './Options/Map';
import Profile from './Options/Profile';

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
                <Route exact path="/map">
                    <Map />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>

            </IonRouterOutlet>
            <IonTabBar slot="bottom">

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
        </IonTabs>
    );

};

export default Main;