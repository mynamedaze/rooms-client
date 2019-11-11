import React from 'react';
import './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <main className="layout">
        {this.props.children}
      </main>
    )
  }
}

export default Layout;