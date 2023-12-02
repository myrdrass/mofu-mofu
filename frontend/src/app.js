import HomeScreen from './screens/HomeScreen.js';
// import ProductScreen from './screens/ProductScreen';
// import { parseRequestUrl, showLoading, hideLoading } from './utils';
// import Error404Screen from './screens/Error404Screen';
// import CartScreen from './screens/CartScreen';
// import SigninScreen from './screens/SigninScreen';
// import Header from './components/Header';
// import RegisterScreen from './screens/RegisterScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import ShippingScreen from './screens/ShippingScreen';
// import PaymentScreen from './screens/PaymentScreen';
// import PlaceOrderScreen from './screens/PlaceOrderScreen';
// import OrderScreen from './screens/OrderScreen';
// import DashboardScreen from './screens/DashboardScreen';
// import ProductListScreen from './screens/ProductListScreen';
// import ProductEditScreen from './screens/ProductEditScreen';
// import OrderListScreen from './screens/OrderListScreen';
// import Aside from './components/Aside';

const router = () => {
  const mainNew = document.getElementById('trends-container');
  mainNew.innerHTML = HomeScreen.renderNew();
  const mainOffer = document.getElementById('offers-container');
  mainOffer.innerHTML = HomeScreen.renderOffer();
}
/*
const routes = {
  '/': HomeScreen,
  '/product/:id/edit': ProductEditScreen,
  '/product/:id': ProductScreen,
  '/order/:id': OrderScreen,
  '/cart/:id': CartScreen,
  '/cart': CartScreen,
  '/signin': SigninScreen,
  '/register': RegisterScreen,
  '/profile': ProfileScreen,
  '/shipping': ShippingScreen,
  '/payment': PaymentScreen,
  '/placeorder': PlaceOrderScreen,
  '/dashboard': DashboardScreen,
  '/productlist': ProductListScreen,
  '/orderlist': OrderListScreen,
};
const router = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
  console.log(request);
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const header = document.getElementById('header-container');
  header.innerHTML = await Header.render();
  await Header.after_render();

  const aside = document.getElementById('aside-container');
  aside.innerHTML = await Aside.render();
  await Aside.after_render();

  const main = document.getElementById('main-container');
  main.innerHTML = await screen.render();
  if (screen.after_render) await screen.after_render();
  hideLoading();
};*/
window.addEventListener('load', router);
// window.addEventListener('hashchange', router);