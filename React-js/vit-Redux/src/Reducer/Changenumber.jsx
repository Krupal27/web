const Chanegenumber = (state = 0, action) => {
    switch (action.type) {
        case "INcrement": return state + 1
        case "DEcrement": return state - 1
        default : return state
    }

}


export default Chanegenumber