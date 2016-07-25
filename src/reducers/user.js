const initialState = {
    user: {
        username: 'lambert',
        password: 'pwd'
    }
};

export default function reducer(state = initialState, action={}) {
    const { type } = action;

    switch(type) {
    default:
        return state;
    }
}