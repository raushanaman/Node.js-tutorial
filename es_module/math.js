//named export example below
export const add = (a, b) => {
    return a + b;
}



// default export example below
const mult = (a,b) => {
    return a * b;
}
//default export
export default mult;

//example of all export at once below

const div = (a, b) => {
    return a/b;
}

const sub = (a,b) => {
    return a - b;
}

export {div, sub};
