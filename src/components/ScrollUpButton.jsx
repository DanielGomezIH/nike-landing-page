import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollUpButton = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.scroll-up', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
    });
  }, []);

  return (

    <>
      <a href='#' className='scroll-up'>
        <i className='ri-arrow-up-line'></i>
      </a>
    </>
  );
};

export default ScrollUpButton;
