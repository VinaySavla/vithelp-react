import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonButton, useIonRouter, IonFooter } from '@ionic/react';
import './SubmitOtp.css';

const SubmitOtp: React.FC = () => {
    const router = useIonRouter();

    const SubmitOTP = () => {
        router.push("/submitotp");
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="danger">
                    <IonTitle></IonTitle>
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
