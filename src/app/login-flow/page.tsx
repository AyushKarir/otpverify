"use client";
import SecondHome from '@/components/SecondHome/SecondHome';
import Home from '@/components/Home/Home';
import LoginFlow from '@/components/LoginFlow/LoginFlow';
import LanguagePreference from '@/components/LanguagePreferences/LanguagePreferenceComponent';
import QRLoginComponent from '@/components/QRLogin/QRLoginComponent';
import BenefitsComponent from '@/components/Exit/exit';
import LocationSelector from '@/components/LocationSelector/LocationSelector';
import MobileNumberInput from '@/components/MobileNumberInput/MobileNumberInput';
import VerificationFlow from '@/components/VerificationFlow/VerificationFlow';


export default function LoginFlowPage() {
 return ( <div>
    <VerificationFlow />
  </div>
 );
}