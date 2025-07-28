import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../../components/Filter/LanguageSwitcher';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t('profile')}</h1>
      <LanguageSwitcher />
    </div>
  );
};

export default Profile;
 