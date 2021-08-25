import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SubmitOtp from './pages/SubmitOtp';
import Terms from './pages/Terms'
import Selection from './pages/SelectionPage';
import SetupProfilePage from './pages/SetupProfilePage'
import InformationPage from './pages/InformationPage'
import AboutUs from './pages/Options/AboutUs';
import FAQ from './pages/Options/Faq';
import TNC from './pages/Options/TermsAndConditions';
import ContactUs from './pages/Options/ContactUs';
import Main from './pages/Main';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global Theme */
import './theme/global.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/submitotp">
          <SubmitOtp />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route exact path="/selectionpage">
          <Selection />
        </Route>
        <Route exact path="/setupprofilepage">
          <SetupProfilePage />
        </Route>
        <Route exact path="/informationpage">
          <InformationPage />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/tnc">
          <TNC />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/main">
        <Main />
        </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp >
);

export default App;
