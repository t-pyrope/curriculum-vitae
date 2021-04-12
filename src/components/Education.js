import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="section">
      <h3>{t('educationTitle')}</h3>
      <ul>
        <li>
          {t('education1')}
        </li>
        <li>
          {t('education2')}
        </li>
      </ul>
    </div>
  );
};
export default Education;
