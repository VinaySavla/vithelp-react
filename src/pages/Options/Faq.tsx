import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonFooter, IonBackButton, IonButtons, IonItem, IonImg, IonLabel, useIonViewDidEnter, IonIcon, IonTabBar, IonTabButton } from '@ionic/react';
import { map, notifications, information, personCircleOutline } from 'ionicons/icons';
import React, { useEffect, useState } from "react";
import CommonTabBar from '../../components/CommonTabBar';
import './Faq.css';

const FAQ: React.FC = () => {
    const router = useIonRouter();

    useIonViewDidEnter(() => {
        var acc = document.getElementsByClassName("accordion");
        var faqs = document.getElementById("faqs")!;

        for (var i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                faqs.classList.toggle("active");
                var panel = faqs.nextElementSibling! as HTMLElement;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = "0px";
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    })

    return (
        <IonPage>
            <IonHeader id="selectP">
                <IonToolbar>
                    <IonTitle id="selectT">FAQs- General</IonTitle>
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
            <IonContent fullscreen className="ion-padding">
                <div id="faqs">

                    <button className="accordion">What do we mean by distress?</button>
                    <div className="panel">
                        <p>
                            Distress/ Distressed is a situation of panic or fear that may arise at a
                            situation with any living creature at the most unexpected, unforeseen or
                            unplanned times. Situations such as: Curfew, Lock Down, Quarantine,
                            Isolation or home quarantined etc are based on environmental conditions
                            (either epidemic, pandemic or viral situations), situations such as:
                            accidents on road, fights, epileptic attacks at offices, heart attack
                            situation at homes etc; extremes situations like: Rape, Murder attempt,
                            Blackmail, Domestic Violence, Physical abuse, mental tortures, suicide
                            attempts etc can all be distress situations. The person in the
                            situations or at the site of the event or the victim of situation may
                            use the application “Distressed” button to create a PANIC ALERT to
                            volunteers in the vicinity.
                        </p>
                    </div>

                    <button className="accordion">What are volunteers expected to do?</button>
                    <div className="panel">
                        <p>
                            Volunteers are primarily expected to agree and accept that they are here
                            willing to extend their support in the area of “Food, Cloths, Shelter
                            and Medical” Supplies for the person in distress. Having said that, in
                            extreme cases, it also extends to supporting the one in distress to get
                            first-hand help from Police or Hospitals or Doctors in the app or around
                            the vicinity.
                        </p>
                        <p>
                            Volunteers are not expected to be politically or religiously biased. Be
                            it Human or animal or bird or any living thing that seems to be in
                            distress, Volunteer will always “Be Prepared” to assist within the
                            limits.
                        </p>
                    </div>

                    <button className="accordion">Who can Register?</button>
                    <div className="panel">
                        <p><strong>Volunteers:</strong></p>
                        <ol>
                            <li>
                                Anyone above 20 yrs and above and within 55yrs in age can register as
                                volunteer.
                            </li>
                            <li>Healthy and legally eligible to assist can be a volunteer.</li>
                            <li>
                                Individual with independent mindset to assist at any time and any kind
                                of distress can volunteer.
                            </li>
                            <li>
                                Doctors, Police, Judiciary services, Journalist and press will be
                                considered as our Warriors for Panic Alarms, besides being a regular
                                volunteers.
                            </li>
                            <li>
                                Already member of an NGO or Social Society cannot be a volunteer in
                                VIT as there maybe conflicts the methods of working.
                            </li>
                            <li>
                                Active Politicians, Head of a political group, Head of religious
                                agencies or bodies, Head/ representative of another NGO or society
                                cannot be a volunteer.
                            </li>
                        </ol>
                        <p><strong>Distress:</strong></p>
                        <ol>
                            <li>
                                Anyone in distress (also includes children above the age 7) can
                                register (Parents can install the application on children phone with
                                parental controls on).
                            </li>
                            <li>Anyone over the age 60 can register as a distress</li>
                            <li>
                                Lonely Women, working women, people in PG, hostels, Guest houses etc
                                can register.
                            </li>
                            <li>Anyone with little or no help can register.</li>
                        </ol>
                    </div>

                    <button className="accordion">
                        I have registered on the website/portal, what next?
                    </button>
                    <div className="panel">
                        <p>
                            Every volunteer must attend a mandatory orientation before you can
                            volunteer, wait for us to contact you regarding the same.
                        </p>
                    </div>

                    <button className="accordion">Is there any age limit to volunteer?</button>
                    <div className="panel">
                        <p>
                            Yes & No. For specific projects such as (VIRAL/ EPIDEMIC and any
                            other that shall be identified) volunteers must be above 20 YRS of age.
                        </p>
                        <p>For the other projects there is no such requirement.</p>
                    </div>

                    <button className="accordion">
                        Will I be given a certificate for my work?
                    </button>
                    <div className="panel">
                        <p>
                            Yes, on your request, a certificate of appreciation will be provided
                            based on the quality and period of your volunteering for the NGO that is
                            affiliated to the activity.
                        </p>
                    </div>

                    <button className="accordion">Why don’t you have orientations?</button>
                    <div className="panel">
                        <p>
                            Orientations are held only when there is a need for more volunteers (for
                            Eg: VIT 19) where special instructions are passed out by health
                            organizations, ministry and international healthcare organizations, so
                            they are held only occasionally.
                        </p>
                    </div>
                </div>
            </IonContent>
            <CommonTabBar />

        </IonPage>
    );
};

export default FAQ;
