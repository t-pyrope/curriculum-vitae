import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      name: 'Begaiym Adylbek kyzy',
      profession: 'Frontend Developer',
      skillsTitle: 'Skills',
      programming: 'Programming',
      languages: 'Languages',
      langList: 'Russian (native speaker), Czech (intermediate), English (intermediate)',
      educationTitle: 'Education',
      education1: "Charles University, Faculty of Humanities, Master's degree in Civil Society Studies, 2019-2021",
      education2: "Charles University, Faculty of Humanities, Bachelor's degree in Liberal Arts and Humanities, 2015-2019",
      workTitle: 'Previous places of work',
      positionVol: 'Volunteer',
      wPeriod1: 'October 2020 – March 2021',
      position2: 'Food Associate',
      wPeriod21: 'May 2017 – August 2017',
      wPeriod22: 'June 2018 – August 2018',
      work3: 'SIRIRI Charity Market',
      wPeriod3: 'December 2017',
      contactsTitle: 'Contacts',
      mobile: 'Mobile phone',
    },
  },
  ru: {
    translation: {
      name: 'Бегайым Адылбек кызы',
      profession: 'Frontend developer',
      skillsTitle: 'Навыки',
      programming: 'Программирование',
      languages: 'Языки',
      langList: 'русский (родной), чешский (разговорный), English (разговорный)',
      educationTitle: 'Образование',
      education1: 'Карлов университет, Факультет гуманитарных наук, степень магистра в исследованиях гражданского общества, 2019-настоящее время',
      education2: 'Карлов университет, Факультет гуманитарных наук, степень бакалавра в гуманитарных науках, 2015-2019',
      workTitle: 'Предыдущие места работы',
      positionVol: 'волонтёр',
      wPeriod1: 'Октябрь 2020 – Март 2021',
      position2: 'работник сети быстрого питания',
      wPeriod21: 'Май 2017 – Август 2017',
      wPeriod22: 'Июнь 2018 – Август 2018',
      work3: 'Рождественская благотворительная ярмарка SIRIRI',
      wPeriod3: 'Декабрь 2017',
      contactsTitle: 'Связаться',
      mobile: 'Мобильный',
    },
  },
  cs: {
    translation: {
      name: 'Begaiym Adylbek kyzy',
      profession: 'Frontend developer',
      skillsTitle: 'Dovednosti',
      programming: 'Programování',
      languages: 'Jazyky',
      langList: 'ruština (rodilý mluvčí), čeština (komunikativní znalost), angličtina (komunikativní znalost)',
      educationTitle: 'Vzdělání',
      education1: 'Univerzita Karlova, Fakulta humanitních studií, obor Studia občanské společnosti (Mgr.), 2019-současnost',
      education2: 'Univerzita Karlova, Fakulta humanitních studií, obor Studium humanitní vzdělanosti (Bc.), 2015-2019',
      workTitle: 'Praxe',
      positionVol: 'dobrovolník',
      wPeriod1: 'Říjen 2020 – Březen 2021',
      position2: 'zaměstnanec provozu restaurace',
      wPeriod21: 'Květen 2017 – Srpen 2017',
      wPeriod22: 'Červen 2018 – Srpen 2018',
      work3: 'Vánoční charitativní trh SIRIRI',
      wPeriod3: 'Prosinec 2017',
      contactsTitle: 'Kontaktní údaje',
      mobile: 'Telefon',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
