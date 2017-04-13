import {createStore} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}

// checkout react sling repo for more configuration