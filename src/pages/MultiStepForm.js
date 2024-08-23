import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import AccountInfo from './components/AccountInfo';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <PersonalInfo onNext={handleNext} />}
      {step === 2 && <AddressInfo onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && <AccountInfo onNext={handleNext} onPrev={handlePrev} />}
    </div>
  );
};

export default MultiStepForm;
