import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../input/LanguageSelector';

export default function UnderConstruction() {
  const { t } = useTranslation('', { keyPrefix: 'UnderConstruction' });

  return (
    <main id="underconstruction">
      <div className="overlay">
        <h1>Paris & Comtesse SA</h1>
      </div>
      <div className="content">
        <div className="videoBg">
          <video autoPlay muted loop>
            <source src="../assets/layouts/videoBg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="contentMain">
          <img src={process.env.REACT_APP_LOGO_ABS_PATH} alt="Paris & Comtesse SA" />
          <h2>{t('title')}</h2>
        </div>
        <div className="contentBottom">
          <p>{t('desc')}</p>
          <p>
            <a href="tel:+41 32 846 14 30" target="_blank" rel="noreferrer noopener">
              <span id="phone" />
            </a>
            <br />
            <a href="mailto:info@pc-sa.ch" target="_blank" rel="noreferrer noopener">
              <span id="mail" />
            </a>
            <br />
            <br />
            Paris & Comtesse SA, Chem. de la Baconnière 55, CH-2017 Boudry
          </p>
        </div>
        <div className="contentDecoration">
          <LanguageSelector />
        </div>
      </div>
    </main>
  );
}
