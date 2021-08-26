import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import CommonTabBar from '../../components/CommonTabBar';
import { ServiceRole } from '../SelectionPage';
import './Notifications.css';

const Notifications: React.FC = () => {

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
            <IonContent>
                <div id="noData">
                    <img src="../../../assets/images/job-seeker.png" width="100" />
                    <h3>No Volunteer/Distress Nearby</h3>
                </div>

            </IonContent>
            <CommonTabBar />
        </IonPage>
    );
};

export default Notifications;
