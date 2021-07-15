import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Spinner from './components/Spinner';


const App = React.lazy(() => import( './App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
        <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
