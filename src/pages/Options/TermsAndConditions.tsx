import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonRow } from '@ionic/react';
import './TermsAndConditions.css';

const TNC: React.FC = () => {

    return (
        <IonPage>
            <IonHeader id="selectP">
                <IonToolbar>
                    <IonTitle id="selectT">Terms & Conditions</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/informationpage"></IonBackButton>
                    </IonButtons>
                    <IonButtons slot="end">
                        <img
                            src="assets/images/VIT-logo.png"
                            alt="VIT logo"
                            title="VIT logo"
                            width="64"
                        />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonRow>
                    <div>
                        <h2 className="center">Mobile  App Terms &amp; Conditions</h2>
                        <ul>
                            <li>By downloading or using the app, these terms will  automatically apply to you – you should make sure therefore that you read them  carefully before using the app. You're not allowed to copy, or modify the app,  any part of the app, or our trademarks in any way. You're not allowed to attempt  to extract the source code of the app, and you also shouldn't try to translate  the app into other languages or make derivative versions. The app itself, and  all the trademarks, copyright, database rights and other intellectual property  rights related to it, still belong to ORANE/VIT. ORANE/VIT is  committed to ensuring that the app is as useful and efficient as possible. For  that reason, we reserve the right to make changes to the app or to charge for  its services, at any time and for any reason. We will never charge you for the  app or its services without making it very clear to you exactly what you're  paying for.</li>
                            <li>The ORANE/VIT app stores and processes personal  data that you have provided to us, in order to provide our Service. It's your  responsibility to keep your phone and access to the app secure. We therefore  recommend that you do not jailbreak or root your phone, which is the process of  removing software restrictions and limitations imposed by the official  operating system of your device. It could make your phone vulnerable to  malware/viruses/malicious programs, compromise your phone's security features  and it could mean that the VIT app won't work properly or at all.</li>
                            <li>You should be aware that there are certain things that  ORANE/VIT will not take responsibility for. Certain functions of the app  will require the app to have an active internet connection. The connection can  be Wi-Fi, or provided by your mobile network provider, but ORANE/VIT  cannot take responsibility for the app not working at full functionality if you  don't have access to Wi-Fi, and you don't have any of your data allowance left.</li>
                            <li>If you're using the app outside of an area with Wi-Fi,  you should remember that your terms of the agreement with your mobile network  provider will still apply. As a result, you may be charged by your mobile  provider for the cost of data for the duration of the connection while  accessing the app, or other third-party charges. In using the app, you're  accepting responsibility for any such charges, including roaming data charges  if you use the app outside of your home territory (i.e. region or country)  without turning off data roaming. If you are not the bill payer for the device  on which you're using the app, please be aware that we assume that you have  received permission from the bill payer for using the app.</li>
                            <li>Along the same lines, ORANE/VIT cannot always  take responsibility for the way you use the app i.e. You need to make sure that  your device stays charged – if it runs out of battery and you can't turn it on  to avail the Service, ORANE/VIT cannot accept responsibility. With  respect to ORANE/VIT's responsibility for your use of the app, when  you're using the app, it's important to bear in mind that although we endeavour  to ensure that it is updated and correct at all times, we do rely on third  parties to provide information to us so that we can make it available to you.</li>
                            <li>ORANE/VIT accepts no liability for any loss,  direct or indirect, you experience as a result of relying wholly on this  functionality of the app.</li>
                            <li>At some point, we may wish to update the app. The app  is currently available on Android – the requirements for system(and for any  additional systems we decide to extend the availability of the app to) may  change, and you'll need to download the updates if you want to keep using the  app.</li>
                            <li>ORANE/VIT does not promise that it will always  update the app so that it is relevant to you and/or works with the Android  version that you have installed on your device. However, you promise to always  accept updates to the application when offered to you, we may also wish to stop  providing the app, and may terminate use of it at any time without giving  notice of termination to you. Unless we tell you otherwise, upon any  termination, (a) the rights and licenses granted to you in these terms will  end; (b) you must stop using the app, and (if needed) delete it from your  device.</li>
                        </ul>
                        <h2>Changes to This Terms and Conditions</h2>
                        <ul>
                            <li>We may update our Terms and Conditions from time to  time. Thus, you are advised to review this page periodically for any changes.  We will notify you of any changes by posting the new Terms and Conditions on  this page. These changes are effective immediately after they are posted on  this page.</li>
                        </ul>
                        <h1>Privacy  Policy</h1>
                        <p>ORANE/VIT built the VIT app as a Free app.  This SERVICE is provided by ORANE/VIT and is intended for use as is. This  page is used to inform visitors regarding our policies with the collection,  use, and disclosure of Personal Information if anyone decided to use our  Service. If you choose to use our Service, then you agree to the collection and  use of information in relation to this policy. The Personal Information that we  collect is used for providing and improving the Service. We will not use or  share your information with anyone except as described in this Privacy.</p>
                        <h2>Policy</h2>
                        <p>The terms used in this Privacy Policy have the same  meanings as in our Terms and Conditions, which is accessible at ORANE/VIT  Website OR Office unless otherwise defined in this Privacy Policy.<br />
                            Information Collection and Use For a better  experience, while using our Service, we may require you to provide us with  certain personally identifiable information, including but not limited to Name,  Email, phone number and location. The information that we request will be  retained by us and used as described in this privacy policy.<br />
                            The app does use third party services that may collect  information used to identify you.
                            Link to privacy policy of third-party service providers  used by the app</p>
                        <ul>
                            <li>Google Play Services</li>
                            <li>Firebase Analytics</li>
                        </ul>
                        <h2 style={{ display: "block" }}>Log Data</h2>
                        <p>We want to inform you that whenever you use our  Service, in a case of an error in the app we collect data and information  (through third party products) on your phone called Log Data. This Log Data may  include information such as your device Internet Protocol ("IP") address,  device name, operating system version, the configuration of the app when  utilizing our Service, the time and date of your use of the Service, and other  statistics.</p>
                        <h2>Cookies</h2>
                        <p>Cookies are files with a small amount of data that are  commonly used as anonymous unique identifiers. These are sent to your browser  from the websites that you visit and are stored on your device's internal  memory.<br />
                            This Service does not use these "cookies" explicitly.  However, the app may use third party code and libraries that use "cookies" to  collect information and improve their services. You have the option to either  accept or refuse these cookies and know when a cookie is being sent to your  device. If you<br />
                            choose to refuse our cookies, you may not be able to  use some portions of this Service.</p>
                        <h2>Service Providers</h2>
                        <p>We may employ  third-party companies and individuals due to the following reasons:</p>
                        <ul>
                            <li>To facilitate our Service.</li>
                            <li>To provide the Service on our behalf.</li>
                            <li>To perform Service-related services; or</li>
                            <li>To assist us in analysing how our Service is used.</li>
                        </ul>
                        <p>We want to inform users of this Service that these  third parties have access to your Personal Information. The reason is to  perform the tasks assigned to them on our behalf. However, they are obligated  not to disclose or use the information for any other purpose.</p>
                        <h2>Security</h2>
                        <p>We value your trust in providing us your Personal  Information, thus we are striving to use commercially acceptable means of protecting  it. But remember that no method of transmission over the internet, or method of  electronic storage is 100% secure and reliable, and we cannot guarantee its  absolute security.</p>
                        <h2>Links to Other Sites</h2>
                        <p>This Service may contain links to other sites. If you  click on a third-party link, you will be directed to that site. Note that these  external sites are not operated by us. Therefore, we strongly advise you to  review the Privacy Policy of these websites. We have no control over and assume  no responsibility for the content, privacy policies, or practices of any  third-party sites or services. </p>
                        <h2>Children's Privacy</h2>
                        <p>These Services do not address anyone under the age of  13. We do not knowingly collect personally identifiable information from  children under 13. In the case we discover that a child under 13 has provided  us with personal information, we immediately delete this from our servers. If  you are a parent or guardian and you are aware that your child has provided us  with personal information, please contact us so that we will be able to do  necessary actions.</p>
                        <h2>Changes to This Privacy Policy</h2>
                        <p>We may update our Privacy Policy from time to time.  Thus, you are advised to review this page periodically for any changes. We will  notify you of any changes by posting the new Privacy Policy on this page. These  changes are effective immediately after they are posted on this page.</p>
                        <h1>License  Grant:</h1>
                        <p>Orane Intelli Solutions- grants you a revocable,  non-exclusive, non-transferable, limited right to install and use the  application on a single mobile device owner and controlled by you in accordance  with the Terms & Conditions f this License, the Usage Rules and any Service  Agreement associated with your Mobile device collectively "related  Agreements". </p>
                        <h1>Restrictions  on Use:</h1>
                        <p>You shall use the application strictly in accordance  with the terms of the Related Agreement and shall not, Decompile, reverse engineer,  disassemble, attempt to derive the source code, OR make modification,  adaptation, improvement, enhancement, translation or derivative work from the  application OR decrypt the application or violate any applicable laws, rules or  regulations in connection with your access or use of application OR remove,  alter or obscure any proprietary notice (Including any notice of copyright or  trademark) of company or its affiliates, partners, suppliers or the licensors  of the application OR use the application for any revenue generating endeavour,  commercial enterprise or other purpose for which it is not designed or intended  OR install, use or permit the application to exist on more than one mobile  device at a time or on any other mobile device or computer OR distribute the  application to multiple mobile devices OR make the application available over a  network or other environment permitting access or use by multiple mobile  devices or users at the same time OR use the application for creating a  product, service or software that is, directly or indirectly, competitive with  or in any way a substitute for any services, product or software offered by  Company; OR use the application to send automated queries to any website or to  send any unsolicited commercial e-mail OR use any proprietary information or  interfaces of company or other intellectual property of company in the design,  development, manufacturing, licensing or distribution of any applications,  accessories or devices for use with the application. </p>
                        <h1>EULA/  License Agreement:</h1>
                        <p>The end user license agreement is a legal agreement  between you and Orane Intelli Solutions and its affiliates. EULA governs your  use of VIT software and any third-party software that maybe distributed  therewith (collectively "Software"). Orane agrees to license the  software to you (Personally or on behalf of your employer) (collectively You or  Your) only if you accept all the terms contained in this agreement. By  installing, using, copying or distributing all or portion of the software, you  accept and agree to be bound by al the terms and conditions of this EULA. IF  YOU DO NOT AGREE WITH ANY OGF THE TERMS AND CONDITIONS, DO NOT DOWNLOAD,  INSTALL OR USE THE SOFTWARE. <br />
                            Your use of the software is also subject to your  agreement with us concerning your use of Orane's and VIT's website  (www.oranetech.com/ www.VIT.in/wwwVIT.org) and the services  provided through that website. The EULA hereby incorporates by reference all  terms, conditions, rules, policies and guidelines on the website, including the  VIT terms of service (the "terms of Service"). Please also see  VIT privacy policy as <a href="http://www.VIT.in">www.VIT.in</a>  and <a href="http://www.VIT.org">www.VIT.org</a> . Capitalized terms not defined in EULA are defined in the terms of  service. <br />
                            (Agree/  Disagree). </p>
                        <h2>Copyright/ Infringement acknowledgement: </h2>
                        <p>You and Company acknowledge and agree that, in the  event of a third party claim that the application or your possession or use of  the application infringes any third party's intellectual property rights, You  (and not the company) will be responsible for the investigation, defence,  settlement and discharge of any such claim of intellectual property  infringement. You will however promptly notify company in writing of such  claim. </p>
                        <h2>Termination: </h2>
                        <p>Orane may, in its sole and absolute discretion, at any  time and for any or no reason, suspend or terminate this license and the rights  afforded to you hereunder with or without prior notice. Furthermore, if you  fail to comply with any terms and conditions of this license, then this license  and any rights afforded to you hereunder shall be terminated automatically,  without any notice or other action by company. Upon the termination of the  license, you shall cease all use of the application and uninstall the  application</p>
                        <h2>Disclaimer of Warranties:  </h2>
                        <p>YOU ACKNOWLEDGE AND AGREE THAT THE APPLICAITON IS  PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, AND THAT  YOUR USE OF OR RELIANCE UPON THE APPLICATION AND ANY THIRD PARTY CONTENT AND  SERVICES ACCESS THEREBY IS AT YOUR SOLE RISK AND DISCRETION. COMPANY AND ITS  AFFILIATES, PARTNERS, SUPPLIERS AND LICENSIRS HEREBE DISCLAIN ANY AND ALL  REPRESENTATIONS, WARRANTIES AND GUARANTIED REGARDING THE APPLICATION AND THIRD  PARTY CONTENT AND SERVICES, WHETHER EXPRESS, IMPLIED OR STATUTORY, AND  INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MECHANTABILITY,  FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. FURTHERMORE, COMPANY AND  ITS AFFILIATES, PARTNERS, SUPPIERS AND LICENSORS MAKE NO WARRANTY THAT- THE  APPLICATION OR THIRD PARTY CONTENT AND SERVICES WILL MEET YOUR REQUIREMENTS,  THE APPLICATION OR THIRD PARTY CONTENT AND SERVICES WILL BE UNINTERRUPED,  ACCURATE, RELIABLE, TIMELY, SECURE OR ERROR-FREE, THE QUALITY OF ANY PRODUCTS,  SERVICES, INFORMATION OR OTHER MATERIAL ACCESSED OR OBTAINED BY YOU THROUGH THE  APPLICATION WILL BE AS REPRESENTED OR MEET YOUR EXPECTATION or ANY ERRORS IN  THE APPLICATION OR THIRD PARTY CONTENT AND SERVICES WILL BE CORRECTED. NO  ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM COMPANY OR  FROM THE APPLICATION SHALL CREATE ANY WARRANTS.</p>
                        <h1>Contact  Us</h1>
                        <p>If you have  any questions or suggestions about our Terms and Conditions, do not hesitate to  contact us on <a href="mailto:oraneintellisolutions@gmail.com">oraneintellisolutions@gmail.com</a></p>
                    </div>
                </IonRow>

            </IonContent>
        </IonPage>
    );
};

export default TNC;
