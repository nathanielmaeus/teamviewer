import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './model/store';

// import { ChartPage } from './containers/ChartPage';
import Routes from './routes/root';
import './index.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
