export default function upVote(state, action) {
    if (action.type === 'increase') {
        return state + 1
    } else {
        return state
    }
}
