import React, {FC} from 'react';
import {Provider} from 'react-redux';

import Navigation from './src/navigation';

import {configureStore} from './src/redux/store'

const App: FC = () => {
  return (
      <Provider store={configureStore()}>
        <Navigation />
      </Provider>
  );
}

export default App;
