import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './todo';
import registerServiceWorker from './registerServiceWorker';

function App(){
    return(
        <div className="app">
            <Todo />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
