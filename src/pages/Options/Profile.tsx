import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import CommonTabBar from '../../components/CommonTabBar';
import UserProfile from '../../components/UserProfile';
import { ServiceRole } from '../SelectionPage';
import '../../components/styles/Profile.css';

const Profile: React.FC = () => {

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
                <UserProfile />
            </IonContent>
            <CommonTabBar />
        </IonPage>
    );
};

export default Profile;
