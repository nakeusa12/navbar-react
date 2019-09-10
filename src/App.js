import React from 'react';
import EpicMenu from './EpicMenu';

import logo from './logo.png';

class App extends React.Component{
  render(){
    let links =[
      { label: 'Home', link: '#home', active: true},
      { label: 'About', link: '#about'},
      { label: 'Portfolio', link: '#portfolio'},
      { label: 'Contact us', link: '#contact-us'},
    ];

    return (
      <div className="container center">
        <EpicMenu links={links} logo={logo} />
      </div>
    );
  }
}

export default App;
