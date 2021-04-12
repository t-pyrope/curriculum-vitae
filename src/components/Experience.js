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
          <a href="https://www.cedarpoint.com/">Arcidiecezni charita Praha</a>
          ,
          {' '}
          {t('positionVol')}
          <p>{t('wPeriod1')}</p>
        </li>
        <li>
          <a href="https://www.cedarpoint.com/">Cedar Point Amusement Park</a>
          ,
          {' '}
          {t('position2')}
          <p>{t('wPeriod21')}</p>
          <p>{t('wPeriod22')}</p>
        </li>
        <li>
          <a href="https://fhs.cuni.cz/FHSENG-463.html?event=16151&lang=EN">{t('work3')}</a>
          ,
          {' '}
          {t('positionVol')}
          <p>{t('wPeriod3')}</p>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
