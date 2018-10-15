import React, {Component} from 'react';
import './Register.css';

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
    const currentName = e.target.name;
    const currentValue = e.target.value;

    switch (currentName) {
      case 'firstName':
        if (currentValue !== '' && currentValue.length >= 2) {
          this.setState({
            firstName: {
              value: currentValue,
              status: true
            }
          })
        } else {
          this.setState({
            firstName: {
              value: currentValue,
              status: false
            }
          })
        }
        break;

      case 'lastName':
        if (currentValue !== '' && currentValue.length >= 2) {
          this.setState({
            lastName: {
              value: currentValue,
              status: true
            }
          })
        } else {
          this.setState({
            lastName: {
              value: currentValue,
              status: false
            }
          })
        }
        break;

      case 'email':
        const invalidEmail = currentValue.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        if (invalidEmail && currentValue !== '') {
          this.setState({
            email: {
              value: currentValue,
              status: true
            }
          })
        } else {
          this.setState({
            email: {
              value: currentValue,
              status: false
            }
          })
        }
        break;

      case 'password':
        if (currentValue.length >= 6) {
          this.setState({
            password: {
              value: currentValue,
              status: true
            }
          })
        } else {
          this.setState({
            password: {
              value: currentValue,
              status: false
            }
          })
        }
        break;

      case 'password2':
        if (currentValue.length >= 6 && currentValue == this.state.password.value) {
          this.setState({
            password2: {
              value: currentValue,
              status: true
            }
          })
        } else {
          this.setState({
            password2: {
              value: currentValue,
              status: false
            }
          })
        }
        break;
    }
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
