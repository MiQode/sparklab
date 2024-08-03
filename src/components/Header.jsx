import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { sparklabLogo } from '../assets';
import { navigation } from '../constants';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from 'react';

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className="w-full flex items-center justify-between px-2 lg:px-7.5 xl:px-6 max-lg:py-4">
        <a
          className="flex items-center gap-1 my-2 w-[20rem] xl:mr-8 "
          href="#hero"
        >
          <img src={sparklabLogo} width={70} alt="Sparklab" />
          <div className="block">
            <p className="uppercase  font-grotesk text-xl font-extrabold text-rose-400">
              Sparklab Technologies
            </p>
            <p className="text-xs text-center">
              Innovating Tomorrow, Hosting Today
            </p>
          </div>
        </a>

        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? 'lg:hidden' : ''
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${
                  item.url === pathname.hash
                    ? 'z-2 lg:text-n-1'
                    : 'lg:text-n-1/50'
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
