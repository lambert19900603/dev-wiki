const initialState = [{
    id: 0,
    name: "java",
    nameCN: "Java技术栈"
}, {
    id: 1,
    name: "html5",
    nameCN: "HTML5实战"
}, {
    id: 2,
    name: "c#",
    nameCN: "C#从入门到放弃"
}];

export default function reducer(state = initialState, action={}) {
    const { type } = action;

    switch(type) {
        default:
            return state;
    }
}