import React, {Component} from 'react';
import './Register.css';
import validate from './validate';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        value: '',
        status: ''
      },
      lastName: {
        value: '',
        status: ''
      },
      email: {
        value: '',
        status: ''
      },
      password: {
        value: '',
        status: ''
      },
      password2: {
        value: '',
        status: ''
      }
    };
  }

  tmpClassName = tmp => {
    const prefix = 'form-control ';

    switch (tmp) {
      case '':
        return prefix + '';
      case true:
        return prefix + 'is-valid';
      case false:
        return prefix + 'is-invalid';
    }
  };

  onChange = e => {
    const { name, value } = e.target;

    let status = validate(name, value);
    if (name === 'password2')
      status = status && this.state.password.value === value;

    this.setState( { [name]: { value, status } });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="row register offset-md-2 col-md-8 col-xs-12">
        <form onSubmit={this.onSubmit}>
          <fieldset>

            <h1>Sign Up</h1>

            <div className="form-group name">
              <input
                type="firstName"
                className={this.tmpClassName(this.state.firstName.status)}
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName.value}
                onChange={this.onChange}
                minLength="2"
                required
              />
              <input
                type="lastName"
                className={this.tmpClassName(this.state.lastName.status)}
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName.value}
                onChange={this.onChange}
                minLength="2"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className={this.tmpClassName(this.state.email.status)}
                name="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={this.state.email.value}
                onChange={this.onChange}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <input
                type="password"
                className={this.tmpClassName(this.state.password.status)}
                name="password"
                placeholder="Password"
                value={this.state.password.value}
                onChange={this.onChange}
                minLength="6"
                maxLength="100"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className={this.tmpClassName(this.state.password2.status)}
                name="password2"
                placeholder="Confirm Password"
                value={this.state.password2.value}
                onChange={this.onChange}
                minLength="6"
                maxLength="100"
                required
              />
            </div>

            <button
              type="submit"
              /*statusのlength取って、classを加えていく感じやな*/
              className={`btn btn-primary
                ${this.state.firstName.status ? 'quarter' : ''} +
                ${this.state.lastName.status ? 'half' : ''} +
                ${this.state.email.status ? 'three-quarters' : ''}`
              }
              disabled
            >
              Submit
            </button>

          </fieldset>
        </form>
      </div>
    );
  }
}

export default Register;
