import React from 'react';
import Header from './Header';
import Content from './Content';


interface ExitScreenProps {
  logoSrc: string;
  welcomeText: string;
  successMessage: string;
}

const WelcomeScreen: React.FC<ExitScreenProps> = ({ logoSrc, welcomeText, successMessage }) => {
  return (
    <main className="flex overflow-hidden flex-col text-white bg-white max-w-[360px] rounded-[32px]">
      <Header logoSrc={logoSrc} welcomeText={welcomeText} />
      <Content successMessage={successMessage} />
    </main>
  );
};

export default WelcomeScreen;