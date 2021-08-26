import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import CommonTabBar from '../../components/CommonTabBar';
import { ServiceRole } from '../SelectionPage';
import './Map.css';

const Map: React.FC = () => {

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
                <div>
                    <h1> Map Appears Here</h1>
                </div>
            </IonContent>
            <CommonTabBar />
        </IonPage>
    );
};

export default Map;
