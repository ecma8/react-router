import initState from "./state";
function counter(state=initState, action) {
    switch (action.type) {
        case 'showLoading':
            return { isLoading :true};
        case 'hideLoading':
            return { isLoading :false};
        case 'add':
            return Object.assign({},state,{count:++state.count});
        case 'del':
            return Object.assign({},state,{count:--state.count});
        default:
            return state
    }
}
export {counter};