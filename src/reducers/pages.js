const initialState = [{
    id: 0,
    name: "posts",
    nameCN: "文章"
}, {
    id: 1,
    name: "signIn",
    nameCN: "登入"
}];

export default function reducer(state = initialState, action={}) {
    const { type } = action;

    switch(type) {
        default:
            return state;
    }
}