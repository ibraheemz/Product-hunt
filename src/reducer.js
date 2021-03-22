export default function upVote(state, action) {
    if(action.type === "increase") {
        state + 1
    } else {
        return state
    }
}