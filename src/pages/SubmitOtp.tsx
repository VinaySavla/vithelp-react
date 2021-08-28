import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonFooter, IonButtons, IonBackButton } from '@ionic/react';
import '../components/styles/SubmitOtp.css';
import {useForm, Controller} from "react-hook-form"

const SubmitOtp: React.FC = () => {
    const router = useIonRouter();

    const SubmitOTP = () => {
        router.push("/selectionpage");
    }

    return (
        <IonPage>
            <IonHeader id="selectP">
                <IonToolbar>
                    <IonTitle id="selectT">Enter OTP</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/signin"></IonBackButton>
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
            <IonContent fullscreen>
                <div className="otp">
                    <form /* [formGroup]="otpForm" novalidate */>
                        <div className="otp-option">
                            <IonInput
                                type="number"
                                placeholder="OTP"
                                //   formControlName="otp"
                                onClick={() => { }/* "changeOTP($event.target.value)" */}
                            ></IonInput>
                        </div>
                        <div
                            className="otp-resend-btn"
                            /* [ngClass]="{'otp-resend-btn-activate':timer<=0}" */
                            onClick={() => { }/* resendOTP() */}
                        >
                            <span>Resend OTP</span>
                            {/* <span  *ngIf="timer>0" >({{ timer}} sec)</span> */}
                        </div>
                    </form>
                </div>
            </IonContent>
            <IonFooter>
                <IonButton expand="full" color="danger" onClick={SubmitOTP} /* [disabled]="!otpForm.valid" */
                >Submit OTP</IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default SubmitOtp;
