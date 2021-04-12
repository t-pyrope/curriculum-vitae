import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="section">
      <h3>{t('skillsTitle')}</h3>
      <ul>
        <li>
          <b>
            {t('programming')}
            :
          </b>
          {' '}
          HTML, CSS, Javascript, React
        </li>
        <li>
          <b>
            {t('languages')}
            :
          </b>
          {' '}
          {t('langList')}
        </li>
      </ul>
    </div>
  );
};

export default Skills;
