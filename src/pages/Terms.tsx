import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonButton, IonBackButton, IonTitle, IonRow, IonPage } from '@ionic/react';
import './Terms.css';

const Terms: React.FC = () => {
    return <IonPage>

        <IonHeader>
            <IonToolbar color="danger">
                <IonButton slot="start" color="danger">
                    <IonBackButton defaultHref="signin"></IonBackButton>
                </IonButton>
                <IonTitle class="center"></IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>

            <IonRow>
                <div id="tc">
                    <h2>Self-Declaration: (for website and mobile both)</h2>
                    <p> I accept that I am legally adult, and by submitting this application/form or registering with personal details on website/mobile application, I affirm that the facts set forth in it are true and complete. I understand that as a volunteer, any false statements, omissions, or other misrepresentations made by me on this application may result in my immediate dismissal and/or attract legal action. (Agree/Disagree)</p>

                    <p><strong>NOTE</strong>: It is the policy of this organization to provide equal opportunities without regard to race, color, religion, state origin, gender, age, or disability. Thank you for completing Registration and for your interest in volunteering with us.</p>
                    <h2>EULA/ License Agreement: (On installation of the application)</h2>
                    <p>The end user license agreement is a legal agreement between you and Orane Intelli Solutions and its affiliates. EULA governs your use of VIT software and any third-party software that maybe distributed therewith (collectively "Software"). Orane agrees to license the software to you (Personally or on behalf of your employer) (collectively You or Your) only if you accept all the terms contained in this agreement. By installing, using, copying or distributing all or portion of the software, you accept and agree to be bound by al the terms and conditions of this EULA. IF YOU DO NOT AGREE WITH ANY OGF THE TERMS AND CONDITIONS, DO NOT DOWNLOAD, INSTALL OR USE THE SOFTWARE.
                        Your use of the software is also subject to your agreement with us concerning your use of Orane's and VIT's website (www.oranetech.com / www.VIT.in / www.VIT.org) and the services provided through that website. The EULA hereby incorporates by reference all terms, conditions, rules, policies and guidelines on the website, including the VIT terms of service (the "terms of Service"). Please also see VIT privacy policy as www.VIT.in  and www.VIT.org . Capitalized terms not defined in EULA are defined in the terms of service.
                        (Agree/ Disagree).</p>
                </div>
            </IonRow>
        </IonContent>
    </IonPage>

}

export default Terms;
