import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './commons/Loading';
import Loadable from 'react-loadable';
import { I18nextProvider } from 'react-i18next';
import i18n from './locale/i18n';

const Basic = Loadable({ loader: () => import('./layouts/Basic'), loading: Loading });
const Admin = Loadable({ loader: () => import('./layouts/Admin'), loading: Loading });
const Home = Loadable({ loader: () => import('./containers/Dashboard'), loading: Loading });
const SimpleOrderSystem = Loadable({ loader: () => import('./containers/SimpleOrderSystem'), loading: Loading });
const Default = Loadable({ loader: () => import('./containers/Default'), loading: Loading });

export default () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Switch>
        <Admin exact path={['/', '/home', '/admin', '/dashboard']} component={Home} />
        <Admin path='/simple-order-system' component={SimpleOrderSystem} />
        <Basic component={Default} />
      </Switch>
    </I18nextProvider>
  </BrowserRouter>
);
