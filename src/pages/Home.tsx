import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';

export default function Home() {
  const { t } = useTranslation('', { keyPrefix: 'Home' });

  return (
    <main id="home">
      <Hero page="Home" imgPath="../assets/layouts/home.jpg" />
      <section className="container">
        <p>Notre site est actuellement en construction.</p>

        <h3>Adresse</h3>
        <p>
          <strong>Paris & Comtesse SA</strong>
          <br />
          Chem. de la Baconnière 55
          <br />
          CH-2017 Boudry
        </p>

        <h3>Contact</h3>
        <p>
          <a href="tel:+41 32 846 14 30">
            <span id="phone" />
          </a>
          <br />
          <a href="mailto:info@pc-sa.ch">
            <span id="mail" />
          </a>
        </p>
      </section>
    </main>
  );
}
