import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import CommonHeader from '../../components/CommonHeader';
import CommonTabBar from '../../components/CommonTabBar';
import UserProfile from '../../components/UserProfile';
import { ServiceRole } from '../SelectionPage';
import '../../components/styles/Profile.css';

const Profile: React.FC = () => {

    return (
        <IonPage>
            <CommonHeader title="" isLoggedAsActivate={true} isFullLogoActivate={true}></CommonHeader>
            <IonContent>
                <UserProfile />
            </IonContent>
            <CommonTabBar />
        </IonPage>
    );
};

export default Profile;
