import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NavBar.module.scss';

class NavBarLink extends Component {
  handleClick(e) {
    e.preventDefault();

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  generateImg() {
    if (this.props.icon)
      return (<img src={this.props.icon} style={{width:100, height:60, marginTop: -7}} />);
  }

  render() {
    return (
      <a href={this.props.url} onClick={this.handleClick}>{this.props.text}
        {this.generateImg()}
      </a>
    );
  }

}

NavBarLink.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
};


class NavBarItem extends Component {

  generateLink() {
    return <NavBarLink key={this.props.text} url={this.props.url} text={this.props.text} icon={this.props.icon} onClick={this.props.onClick} />;
  }

  generateSubmenu() {
    return <NavBar items={this.props.submenu} />;
  }

  generateContent() {
    var content = [this.generateLink()];

    if(this.props.submenu){
      //If there is a submenu in our data for this item
      //We add a generated Submenu to our content
      content.push(this.generateSubmenu());
    }
    return content;
  }

  render() {
    var content = this.generateContent();
    return (
      <li className="nav-bar-item">
        {content}
      </li>
    );
  }
}

NavBarItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  submenu: PropTypes.object,
};

// class SlideNav extends Component {
//     render() {
//
//     }
// }


class NavBar extends Component {
  toggleNavBar() {
    console.log('toggleme');
    let body = document.body;
    body.setAttribute('shownav', (body.getAttribute('shownav') != 'true'));
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="primary-nav">
          <NavBarItem text={''} icon={'images/menu.png'} onClick={this.toggleNavBar} />
          <NavBarItem text={''} url={'/parent-dashboard/'} icon={'images/testive_logo.png'} />
          <NavBarItem text={''} url={'/parent-dashboard/'} icon={'images/referral.svg'} />
        </div>

        <div className="slide-nav-bar">
          <div className="user-name">
            <div className="display-name">David</div>
            <div className="close" onClick={this.toggleNavBar}></div>
          </div>

          <div id="id_student_list">
          </div>

          <a id="id_nav_account" className="nav-link push-state" href="">
            Your Account
          </a>
          <a className="nav-link push-state" href="/logout/">
            Logout
          </a>

          <NavBarItem text={'Email Us'} />
          <NavBarItem text={'Help Center'} url={'http://happy.testive.com'} />
          <NavBarItem text={'Our Blog'} url={'https://www.testive.com/blog/'} />

        </div>
      </div>
    );
  }
}
