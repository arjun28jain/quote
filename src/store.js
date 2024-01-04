import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import quoteReducer from './reducers/quoteReducer';
import tagsReducer from './reducers/tagsReducer';
import bookmarksReducer from './reducers/bookmarksReducer';

const rootReducer = combineReducers({ quote: quoteReducer, tags: tagsReducer, bookmarks: bookmarksReducer });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
