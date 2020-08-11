import React from 'react';
import CookieConsent from 'react-cookie-consent-notification';

/* const checkStatus = () => {
    if (status) {
        // To set a cookies
    }
}; */



const CookieConsentAlert = () => (
    <div className="container-fluid">

        <CookieConsent
            background={'#000'}
            bottomPosition={false}
            buttonText={'I agree'}
            buttonBackground={'#fff'}
            buttonColor={'#000'}
            buttonFontSize={16}
            color={'#fff'}
            //consentFunction={checkStatus}
            padding={20}
        >
            This website collects your data.
      Please read our <a href={'/gdpr'} style={{ color: '#fff' }}>GDPR Policy</a>.
      By clicking "I agree" you confirm your consent.
    </CookieConsent>
    </div>
);
export default CookieConsentAlert;