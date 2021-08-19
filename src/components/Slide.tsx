import React from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import './Slide.css'

const slideOpts = {
  initialSlide: 1,
  speed: 400
};
const Slide: React.FC = () => {
  return <IonSlides pager={true} options={slideOpts} color="danger">

    <IonSlide>
      <div style={{ display: "block" }}>
        <img src="/assets/images/VITLogo.png" alt="" />
        <p>Co-Vounteer IT Help</p>
      </div>
    </IonSlide>
  </IonSlides>
}

export default Slide;
