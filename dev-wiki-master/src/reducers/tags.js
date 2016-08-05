const initialState = [{
    id: 0,
    name: "java"
}, {
    id: 1,
    name: "html5"
}, {
    id: 2,
    name: "c#"
}, {
    id: 3,
    name: "nodejs"
}, {
    id: 4,
    name: "react"
}];

export default function reducer(state = initialState, action={}) {
    const { type } = action;

    switch(type) {
        default:
            return state;
    }
}