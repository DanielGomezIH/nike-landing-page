import { navLinks } from '../constants/index';

const MobileNavCard = ({ navMobileStyles, setStateNavMobile }) => {
  return (
    <section>
      <div className={`overlayStyles ${navMobileStyles}`}></div>

      <div className={`menuStyles ${navMobileStyles}`}>
        <div className='flex justify-end'>
          <button
            onClick={setStateNavMobile}
            className='flex justify-center items-center absolute top-4 right-8 w-[22px] h-[22px] font-montserrat font-semibold rounded-full hover:bg-[#bbb]'
          >
            X
          </button>
        </div>

        <div className={`flex flex-col `}>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className='flex flex-row justify-between items-center py-[10px]'
            >
              <ul>
                <li>
                  <a
                    href={link.href}
                    onClick={setStateNavMobile}
                    className='font-montserrat leading-normal text-start text-lg text-black font-semibold hover:text-coral-red transition hover:duration-150'
                  >
                    {link.label}
                  </a>
                </li>
              </ul>

              <i className='gg-chevron-right hover:text-coral-red transition hover:duration-150'></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileNavCard;
