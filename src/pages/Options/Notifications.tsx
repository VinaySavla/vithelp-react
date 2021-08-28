import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import CommonHeader from '../../components/CommonHeader';
import CommonTabBar from '../../components/CommonTabBar';
import { ServiceRole } from '../SelectionPage';
import '../../components/styles/Notifications.css';

const Notifications: React.FC = () => {

    return (
        <IonPage>
            <CommonHeader title="" isLoggedAsActivate={true} isFullLogoActivate={true}></CommonHeader>

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
