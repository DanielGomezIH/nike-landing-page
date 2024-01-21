import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index';

const Nav = ({ setStateNavMobile }) => {
  return (
    <header className=' relative padding-x py-8 z-10 w-full bg-[#F5F6FF]'>
      <nav className='flex justify-between items-center max-container '>
        <a href='/'>
          <img src={headerLogo} alt='logo nike' width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className='font-montserrat leading-normal text-lg bg-white text-slate-gray hover:text-white duration-300 border-2 hover:bg-coral-red rounded-full p-4'
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt='hamburguer'
            width={25}
            height={25}
            className='cursor-pointer'
            onClick={setStateNavMobile}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
