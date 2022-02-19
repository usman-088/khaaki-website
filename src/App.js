import React from 'react';
import { Provider } from 'react-redux'
import configStore from './redux/store/store'
// import persistor from './redux/store/store'
import Router from './config/Router'
import { PersistGate } from 'redux-persist/integration/react'
import Products from './components/AdminPortal/Products/DescriptionProduct';

function App() {
  const { store, persistor } = configStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
        {/* <Products/> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
