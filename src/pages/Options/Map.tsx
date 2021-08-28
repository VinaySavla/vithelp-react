import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import CommonHeader from '../../components/CommonHeader';
import CommonTabBar from '../../components/CommonTabBar';
import { ServiceRole } from '../SelectionPage';
import '../../components/styles/Map.css';

const Map: React.FC = () => {

    return (
        <IonPage>
            <CommonHeader title="" isLoggedAsActivate={true} isFullLogoActivate={true}></CommonHeader>
            <IonContent>
                <div>
                    <h1> Map Appears Here</h1>
                </div>
            </IonContent>
            <CommonTabBar />
        </IonPage>
    );
};

export default Map;
