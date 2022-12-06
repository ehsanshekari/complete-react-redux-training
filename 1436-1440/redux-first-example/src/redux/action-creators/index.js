// ACTION CREATOR
export const increment = () => {
    // ACTION
    return {
        type: 'INCREMENT'
    }
}

// ACTION CREATOR
export const decrement = () => {
    // ACTION
    return {
        type: 'DECREMENT'
    }
}

// ACTION CREATOR
export const changeColor = (color) => {
    return {
        type: 'NEW_COLOR',
        payload: color
    }
}