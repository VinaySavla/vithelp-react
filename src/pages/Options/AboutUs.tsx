import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import CommonHeader from '../../components/CommonHeader';
import CommonTabBar from '../../components/CommonTabBar';
import '../../components/styles/AboutUs.css';

const AboutUs: React.FC = () => {

    return (
        <IonPage>
            <CommonHeader title="About" isBackButtonActive={true} isSmallLogoActivate={true}></CommonHeader>
            <IonContent>
                <div>
                    <h2>What is VIT?</h2>
                    <p>There are many people who wish to do support the needy, the distress and the helpless in various times, however it becomes challenging to know where to go and who to help and at what times. Hence, VIT (Co-Volunteers-IT-Help) is an app created keeping in mind that the current generation who knows the value of “Humanity” and the use of “Technology” can leverage this application as their tool to serve the purpose. </p>
                    <p>VIT is a Mobile Application built by team of IT Volunteers to assist the distressed at trying times. The idea emergence co-insides with the spread of Pandemic Corona Virus and its measures that government has taken to contain the spread in India and global governing bodies. However, it is just an idea, but the application is built to consider its use at these times and also anytime later for any reasons that maybe considered as distress. </p>

                    <h2>Aims and Objectives:</h2>
                    <p>The aim is to ensure that “Humanity prevails” in various forms and can be expressed freely in the form of using this app. </p>

                    <h3>Mission:</h3>
                    <p>To allow every eligible, healthy and willing to do individual to get as volunteers on the platform and be vigilant to the panic alerts that one may get on the application. </p>
                    <p>To also enable instant distress assistant to people in distress or at the scene of discomfort or harm to use this arm as a trigger button to alert the volunteers. </p>

                </div>
            </IonContent>
            <CommonTabBar />
        </IonPage>
    );
};

export default AboutUs;
