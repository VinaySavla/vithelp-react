import React from 'react';
import { IonBackButton, IonButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { ServiceRole } from '../pages/SelectionPage';
import './CommonHeader.css'

interface CommonHeaderProps {
    isBackButtonActive?: boolean;
    isSmallLogoActivate?: boolean;
    isLoggedAsActivate?: boolean;
    isFullLogoActivate?: boolean;
    title: string;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ isBackButtonActive = false, isFullLogoActivate = false, isSmallLogoActivate = false, isLoggedAsActivate = false, title }) => {
    return (<IonHeader id="selectP">
        <IonToolbar>
            <IonTitle id="selectT">
                { title }
            </IonTitle>
            {(() => {
                if (isBackButtonActive) {
                    return <>
                        <IonButtons slot="start" >
                            <IonBackButton defaultHref="/informationpage"></IonBackButton>
                        </IonButtons>
                    </>;
                } else {
                    return;
                }
            })()}
            {(() => {
                if (isFullLogoActivate) {
                    return <>
                        <IonButtons slot="start" >
                            <img
                                src="assets/images/VITLogo.png"
                                alt="VIT logo"
                                title="VIT logo"
                                width="150"
                            />
                        </IonButtons>
                    </>;
                } else {
                    return;
                }
            })()}
            {(() => {
                if (isSmallLogoActivate) {
                    return <>
                        <IonButtons slot="end" >
                            <img
                                src="assets/images/VIT-logo.png"
                                alt="VIT logo"
                                title="VIT logo"
                                width="64"
                            />
                        </IonButtons>
                    </>;
                } else {
                    return;
                }
            })()}
            {(() => {
                if (isLoggedAsActivate) {
                    return <>
                        <IonButtons slot="end">Logged As: {ServiceRole}</IonButtons>
                    </>;
                } else {
                    return;
                }
            })()}

        </IonToolbar>
    </IonHeader>
    );
}

export default CommonHeader;
