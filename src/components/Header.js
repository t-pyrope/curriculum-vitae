/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import photo from '../img/photo2.jpg';
import facebook from '../img/facebook.png';
import github from '../img/github.png';
import wordpress from '../img/wordpress.png';
import czech from '../img/czech.png';
import russian from '../img/russian.png';
import english from '../img/english.png';
import i18n from '../i18n';

const Header = () => {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="header">
      <div className="languages">
        <button onClick={() => changeLanguage('cs')} type="button"><img src={czech} alt="czech" /></button>
        <button onClick={() => changeLanguage('en')} type="button"><img src={english} alt="english" /></button>
        <button onClick={() => changeLanguage('ru')} type="button"><img src={russian} alt="russian" /></button>
      </div>
      <img src={photo} alt="person" className="photo" />
      <div className="title">
        <h1>{t('name')}</h1>
        <div><span className="bubble">Frontend Developer</span></div>
        <div className="icons">
          <a href="https://github.com/t-pyrope" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
          <a href="https://www.facebook.com/adylbek.kyzy/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a>
          <a href="https://bakabegemot.wordpress.com/" target="_blank" rel="noreferrer"><img src={wordpress} alt="wordpress" /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
