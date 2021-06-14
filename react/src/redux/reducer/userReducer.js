import produce from 'immer'


const initialState = {
    user: {
        email: '',
        password: '',
        name: null,
        token: '',
        drinks: []
    }
}

export default produce((state, action) => {
    switch (action.type) {
        case 'SET_NAME': state.user.name = action.payload
            break;
        case 'SET_EMAIL': state.user.email = action.payload
            break;
        case 'SET_PASSWORD': state.user.password = action.payload
            break;
            case 'SET_PHONE':state.product.phone=action.payload
            break;
            case 'SET_AGE':state.product.age=action.payload
            break;
    }
}, initialState)