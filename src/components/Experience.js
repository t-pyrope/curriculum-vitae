/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="section">
      <h3>{t('workTitle')}</h3>
      <ul>
        <li>
          <a href="https://movie-catcher.netlify.app/" target="_blank" rel="noreferrer">Movie catcher</a>
          <p>{t('wDesc1')}</p>
        </li>
        <li>
          <a href="https://jarkas-czech.netlify.app/" target="_blank" rel="noreferrer">Jarka&#39;s Czech</a>
          <p>{t('wDesc2')}</p>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
