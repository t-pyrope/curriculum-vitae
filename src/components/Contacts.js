import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="section last">
      <h3>{t('contactsTitle')}</h3>
      <ul>
        <li>
          <b>
            {t('mobile')}
            :
            {' '}
          </b>
          730945628
        </li>
        <li>
          <b>Email: </b>
          mrmldsky27@gmail.com
        </li>
      </ul>
    </div>
  );
};
export default Contacts;
