import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import { RegistrationStepOnePage } from '../pages/registration/step-1/page';
import { RegistrationStepThreePage } from '../pages/registration/step-3/page';
import { RegistrationStepTwoPage } from '../pages/registration/step-2/page';
import { ProfileInfoStepOnePage } from '../pages/profile-info/step-1/page';
import { ProfileInfoStepTwoPage } from '../pages/profile-info/step-2/page';
import { ProfileInfoStepThreePage } from '../pages/profile-info/step-3/page';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationStepOnePage />} />
        <Route path="/register/step-2" element={<RegistrationStepTwoPage />} />
        <Route path="/register/step-3" element={<RegistrationStepThreePage />} />
        <Route path="/profile-info/step-1" element={<ProfileInfoStepOnePage />} />
        <Route path="/profile-info/step-2" element={<ProfileInfoStepTwoPage />} />
        <Route path="/profile-info/step-3" element={<ProfileInfoStepThreePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
