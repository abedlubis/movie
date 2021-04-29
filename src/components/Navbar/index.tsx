import React from 'react';

import './index.css';
import { Link } from 'react-router-dom';
import IconSearch from '../../assets/search.svg';
import LogoSearch from '../../assets/movie-logo.svg';
import ProfileSearch from '../../assets/profile.svg';
import Image from '../UI/Image/Image';
import { IUseRefDiv } from '../../utils/ActionHelper';

interface INavBarProps {
  refApp: React.RefObject<HTMLDivElement>;
  refSideBar: IUseRefDiv | null;
  refSideBarBg: IUseRefDiv | null;
}
const NavBar: React.FC<INavBarProps> = (props) => {
  const { refApp, refSideBar, refSideBarBg } = props;

  const openNav = () => {
    if (
      refApp.current &&
      refSideBar !== null &&
      refSideBarBg !== null &&
      refSideBar.current &&
      refSideBarBg.current
    ) {
      refSideBar.current.classList.remove('close');
      refSideBarBg.current.classList.remove('close');
      refApp.current.classList.remove('close');
      refSideBar.current.classList.add('open');
      refSideBarBg.current.classList.add('open');
      refApp.current.classList.add('open');
      setTimeout(() => {
        document.body.style.overflowX = 'hidden';
        document.getElementsByTagName('html')[0].style.overflowX = 'hidden';
      }, 500);
    }
  };

  return (
    <header className="NavBar">
      <div className="NavBarItems container">
        <Image
          src={IconSearch}
          className="h24 w24"
          alt="search"
          onClick={() => openNav()}
        />
        <Link className="centerLized" to="/">
          <Image src={LogoSearch} className="h24 w24" alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
