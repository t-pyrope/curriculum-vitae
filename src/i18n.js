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
      workTitle: 'Examples of work',
      wDesc1: 'A website of movies',
      wDesc2: 'A website for the fictitious czech courses',
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
      workTitle: 'Примеры работ',
      wDesc1: 'Сайт с фильмами',
      wDesc2: 'Сайт для воображаемых курсов чешского языка',
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
      workTitle: 'Příklady prací',
      wDesc1: 'Webová stránka s filmy',
      wDesc2: 'Webová stránka pro fiktivní kurzy češtiny',
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
