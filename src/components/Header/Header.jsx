import React from 'react';
import './Header.css';


class Header extends React.Component {
  render() {

    const className = 'Header ' + this.props.className;
    
    return (
      <div className={className}>
          <h1 className="Header__title">
              <span>s</span>
              <span>h</span>
              <span className="Header__title--o">o</span>
              <span className="Header__title--w">w</span>
          </h1>
          <h2 className="Header__subtitle">AND TELL</h2>
      </div>
    );
  }
}

export default Header;