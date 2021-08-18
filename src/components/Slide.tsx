import React from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import './Slide.css'

const slideOpts = {
  initialSlide: 1,
  speed: 400
};
const Slide: React.FC =()=>{
return <IonSlides pager={true} options={slideOpts}>
     {/* <IonSlide>
    <app-logo></app-logo>
    <h2>Covit Help App</h2>
    <p>Volunteers for VIT assistance</p>
  </IonSlide>
  <IonSlide>
    <h2><img src="/assets/images/volunteer-hand.png" /></h2>
    <p>Connecting volunteers with the needy person</p>
  </IonSlide>  */}
  <IonSlide>
    <h2><img src="/assets/images/VITLogo.png" /></h2>
    <p>Co-Vounteer IT Help</p>
  </IonSlide>
</IonSlides>
}

export default Slide;
