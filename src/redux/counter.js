function counter(state, action) {
    switch (action.type) {
        case 'showLoading':
            return { isLoading :true};
        case 'hideLoading':
            return { isLoading :false};
        default:
            return state
    }
}
export {counter};