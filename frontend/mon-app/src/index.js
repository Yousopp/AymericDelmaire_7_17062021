import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Loading from 'loading';
const App = React.lazy(() => import( './App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Chargement...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
