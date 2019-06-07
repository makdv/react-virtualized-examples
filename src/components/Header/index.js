import React from 'react';
import reactLogo from '../../images/logo.svg';
import { ReactComponent as GithubLogo } from '../../images/github.svg';
import './Header.scss';

const Header = () => (
    <header className="App-header">
        <div className="App-header__left">
            <img src={reactLogo} className="App-logo" alt="logo" />
            <h3>react-virtualized Grid</h3>
        </div>
        <a href="https://github.com/makdv/react-virtualized-examples" target="_blank" rel="noopener noreferrer">
            <GithubLogo />
        </a>
    </header>
);

export default Header;