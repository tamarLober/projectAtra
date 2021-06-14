import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}
    function mapDispatchToProps(dispatch) {
        return {
            setName: (name) => dispatch(setName(name)),
            setPassword: (password) => dispatch(setPassword(password)),
            setEmail: (email) => dispatch(setEmail(email)),
            setToken: (phone) => dispatch(setToken(phone))
        }
    }
export default connect(mapStateToProps)(function Stage3(props) {
    const { user } = props

    
    return (
        <>
            <div className='pt-5'>
            </div>
            <div className='container '>
                <ul className='list-group'>
                    {user.users.map(u =>
                        <li  className='list-group-item d-flex row'>
                            <div className='col-5 mt-5 mx-5'>
                                <h3>{u.strName}</h3>
                                <div style={{textAlign:'left'}}>
                                <h6>Age:</h6>
                                <h6>Email: </h6>
                                <p>{u.strEmail}</p>
                                </div>
                            </div>
                        </li>).reverse()}
                </ul>
            </div>
        </>
    )
})