import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import './index.css'

// import { store } from './redux/store.ts';
import TodoReducer from './redux/reducers/todo.reducer.js'
const store = createStore(combineReducers({tasks: TodoReducer,}));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)