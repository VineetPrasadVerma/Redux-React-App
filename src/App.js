import Login from './components/Login';
import Profile from './components/Profile';
import ChangeColor from './components/ChangeColor';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { allReducers } from './store';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(allReducers, devToolsEnhancer());

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Profile />
                <Login />
                <ChangeColor />
            </div>
        </Provider>
    );
}

export default App;
