import React from "react";

const Home: React.FC = () => (
  <>
    <h1>Welcome to your PWA!</h1>
    <a href="intent://send/0123456789#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">OPEN WHATSAPP ANDROID</a>
  </>
);

export default Home;