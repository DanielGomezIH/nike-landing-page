import { useEffect, useState } from 'react';
import { MobileNavCard, Nav, ScrollUpButton } from './components';
import ScrollReveal from 'scrollreveal';

import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections';

const App = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(
      '#nav_menu, #home, #products, #about-us, #services, #special-offer, #reviews, #contact-us',
      {
        origin: 'top',
        distance: '20px',
        duration: 1000,
        delay: 200,
      }
    );
  }, []);

  const [stateNavMobile, setStateNavMobile] = useState(false);

  const navMobileStyles = stateNavMobile
    ? 'showNavMobileCard'
    : 'hiddeNavMobileCard';

  const handleClick = () => {
    return setStateNavMobile(!stateNavMobile);
  };

  return (
    <main className='relative'>
      <ScrollUpButton />

      <Nav setStateNavMobile={handleClick} />

      <MobileNavCard
        navMobileStyles={navMobileStyles}
        setStateNavMobile={handleClick}
      />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
