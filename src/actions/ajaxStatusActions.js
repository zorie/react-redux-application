import * as types from './actionTypes.js';

export function beginAjaxCall() {
    return {type: types.BEGIN_AJAX_CALL};
}