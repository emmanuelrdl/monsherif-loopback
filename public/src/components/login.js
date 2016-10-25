import {connect} from 'react-redux'
import React, { Component, PropTypes } from 'react'

class Login extends Component {

  constructor (props) {
    super(props)

    this.onLoginClick = this.onLoginClick.bind(this)
  }
  
  render() {
    const { errorMessage } = this.props
    
    return (
      <div>
        <input type='text' ref='username' className="form-control" style={{ marginRight: '5px' }} placeholder='Username'/>
        <input type='password' ref='password' className="form-control" style={{ marginRight: '5px' }} placeholder='Password'/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          Login
        </button>
        
        {errorMessage &&
          <p style={{color:'red'}}>{errorMessage}</p>
        }
      </div>
    )
  }
  
  handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    console.log(this)
    this.onLoginClick(creds)
  }

  onLoginClick(creds) {
    console.log('coucou')
  }





}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}



export default connect()(Login)













// import React, {Component, PropTypes} from 'react';
// import ReactDOM from 'react-dom';


// export class RegistrationsForm extends Component {

//   constructor(props){
//     super(props);

//     this.state = { 
//         email: '',
//         password: '' 
//     };
//     this.handleEmailChange    = this.handleEmailChange.bind(this);
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//     this.handleFormSubmit     = this.handleFormSubmit.bind(this);
//   }

//   // ES6 doesn't have auto binding so we need to bind this to set  a value a this not set by the constructor
//   handleEmailChange(elem) {
//     this.setState({email: elem.target.value})

//   }

//   handlePasswordChange(elem) {
//     this.setState({password: elem.target.value})
//   }

//   handleFormSubmit(elem) {
//     elem.preventDefault();
//     var user = {email: this.state.email, password: this.state.password}
//     $.ajax({url: this.props.route.url , dataType:'json', type:'POST', data:user, cache: false,
//       success: function(response) { console.log(document.cookie)
//                                     console.log('request done')}.bind(this),
//       error: function() {console.log('fail')}.bind(this)

//     });

  
//   }



//     render() {

//         return (
//               <form className="text-center col-sm-12" onSubmit={this.handleFormSubmit} >
//                   <h3>Registration</h3>
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       placeholder="Email"
//                       className="form-control"
//                       onChange={this.handleEmailChange}
//                       value={this.state.email}
//                     />
//                   </div> 
//                   <div className="form-group">   
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Password"
//                       onChange={this.handlePasswordChange}
//                       value={this.state.password}
//                     />
//                   </div> 
//                   <div className="form-group">  
//                     <input type="submit" value="Submit" className="btn btn-success" />
//                   </div>   
//               </form>
//         );
//     }


// }