/*
    posts state contains:
    id,
    title,
    author,
    date,
    likes
 */
const initialState = [];

export default function reducer(state = initialState, action={}) {
    const { type } = action;

    switch(type) {
        default:
            return state;
    }
}