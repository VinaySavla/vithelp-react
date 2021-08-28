import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { globeOutline, callOutline, mailOutline } from "ionicons/icons";
import CommonHeader from '../../components/CommonHeader';
import CommonTabBar from '../../components/CommonTabBar';
import '../../components/styles/ContactUs.css';

const ContactUs: React.FC = () => {

    return (
        <IonPage>
            <CommonHeader title="Contact Us" isBackButtonActive={true} isSmallLogoActivate={true}></CommonHeader>
            <IonContent fullscreen className="ion-padding">
                <div>
                    <p>If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us on <a href="mailto:oraneintellisolutions@gmail.com"> oraneintellisolutions@gmail.com</a></p>
                </div>
                <IonGrid>
                    <IonRow>
                        <IonCol size="2" className="vertical-align-content">
                            <IonIcon icon={globeOutline}></IonIcon>
                        </IonCol>
                        <IonCol>
                            <a href="https://www.covithelp.in">www.covithelp.in</a> <br />
                            <a href="https://covithelp.org/" target="blank">www.covithelp.org</a> <br />
                            <a href="http://www.oranetech.com/" target="blank">www.oranetech.com</a>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="2" className="vertical-align-content">
                            <IonIcon icon={callOutline}></IonIcon>
                        </IonCol>
                        <IonCol>
                            <a href="tel:011- 4158 7447">011- 4158 7447</a>  <br />
                            <a href="tel:+91-9886051916">+91-9886051916</a>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="2" className="vertical-align-content">
                            <IonIcon icon={mailOutline}></IonIcon>
                        </IonCol>
                        <IonCol>
                            <a href="mailto:info@oranetech.com">info@oranetech.com</a> <br />
                            <a href="mailto:Oraneintellisolutions@gmail.com" className="aLink">Oraneintellisolutions@gmail.com</a>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
            <CommonTabBar />
        </IonPage>
    );
};

export default ContactUs;
