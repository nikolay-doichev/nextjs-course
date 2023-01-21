import { Fragment } from 'react';
import MainNavigaion from './main-navigation';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigaion />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
