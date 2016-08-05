const initialState = [{
    id: 0,
    name: "Java技术栈"
}, {
    id: 1,
    name: "HTML5实战"
}, {
    id: 2,
    name: "C#从入门到放弃"
}, {
    id: 3,
    name: "nodejs最坑实战"
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