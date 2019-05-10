
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      newAccount: {},
      checkoutClicked: false,
      page1Clicked: false,
      page2Clicked: false,
      page3Clicked: false,
    }
    this.checkOutHandler = this.checkOutHandler.bind(this);
    this.next1Handler = this.next1Handler.bind(this);
    this.next2Handler = this.next2Handler.bind(this);
    this.next3Handler = this.next3Handler.bind(this);
    this.purchaseMade = this.purchaseMade.bind(this);
  }
  checkOutHandler(event) {
    this.setState({checkoutClicked: true});
    event.preventDefault();
  }
  next1Handler(info) {
    Object.assign(this.state.newAccount, info);
    this.setState({page1Clicked: true});
  }
  next2Handler(info) {
    Object.assign(this.state.newAccount, info);
    this.setState({page2Clicked: true});
    console.log(this.state.newAccount);
  }
  next3Handler(info) {
    console.log(this.state.newAccount);
    Object.assign(this.state.newAccount, info);
    this.setState({page3Clicked: true});
    console.log('JSON obj',JSON.stringify(this.state.newAccount));
  }
  purchaseMade(event) {
    event.preventDefault();
    //Put a post request here
    fetch('/profiles', {
      method: 'POST',
      body: this.state.newAccount,
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(console.log('Post sent'))
    .then(this.setState({
      newAccount: {},
      checkoutClicked: false,
      page1Clicked: false,
      page2Clicked: false,
      page3Clicked: false,}))
      .catch(console.log('Failed to post'));
    
  }
  render() {
    if (this.state.checkoutClicked === false) {
      return (
        <div>
          <button onClick={this.checkOutHandler}>CheckOut</button>
        </div>
      )
    }
    if (this.state.page1Clicked === false) {
      return <Page1 next1Handler={this.next1Handler}/>
    }
    if (this.state.page2Clicked === false) {
      return <Page2 next2Handler={this.next2Handler} />
    }
    if (this.state.page3Clicked === false) {
      return <Page3 next3Handler={this.next3Handler}/>
    }
    else {
      return <div>
        <h1>ACCOUNT INFORMATION</h1>
        <ul>
          <li> Name- {this.state.newAccount.name} </li>
          <li>Email- {this.state.newAccount.email}</li>
          <li>Password- {this.state.newAccount.password}</li>
          <li>Address- {this.state.newAccount.address}</li>
          <li>Phone Number- {this.state.newAccount.phone}</li>
          <li>Credit Card Number- {this.state.newAccount.creditCard}</li>
          <li>Experation Date- {this.state.newAccount.expiryDate}</li>
          <li>CVV- {this.state.newAccount.CVV}</li>
          <li>Zip Code- {this.state.newAccount.zipCode}</li>
        </ul>
        <button onClick={this.purchaseMade}>Purchase</button>
      </div>
    }
  }
}

export default App;
//
class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]:value});
  }
  handleClick(event) {
    event.preventDefault();
    this.props.next1Handler(this.state);
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }
  render() {
    return (
      <div>
        Page 1
        <form>
          <label>Name
            <input name='name' value={this.state.name} onChange={this.handleChange}/>
          </label>
          <label> Email
            <input name='email' value={this.state.email} onChange={this.handleChange}/>
          </label>
          <label>Password
            <input name='password' value={this.state.password} onChange={this.handleChange}/>
          </label>
          <button onClick={this.handleClick} >Next</button>
        </form>
      </div>
    )
  }
}
class Page2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange() {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  handleClick(event) {
    event.preventDefault();
    this.props.next2Handler(this.state);
    this.setState({
      address: '',
      phone: ''
    })
  }
  render() {
    return (
      <div>
        Page 2
        <form>
          <label>Address
            <input name='address' value={this.state.address} onChange={this.handleChange} />
          </label>
          <label>Phone Number
            <input name='phone' value={this.state.phone} onChange={this.handleChange} />
          </label>
          <button onClick={this.handleClick}>Next</button>
        </form>
      </div>
    )
  }
}
class Page3 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      creditCard: '', 
      expiryDate: '', 
      CVV: '', 
      zipCode: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange() {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  handleClick(event) {
    event.preventDefault();
    this.props.next3Handler(this.state);
    this.setState({
      creditCard: '', 
      expiryDate: '', 
      CVV: '', 
      zipCode: ''
    })
  }
  render() {
    return (
      <div>
        Page 3
        <form>
          <label> Credit Card Number
            <input name='creditCard' value={this.state.creditCard} onChange={this.handleChange} />
          </label>
          <label> Expiry Date
            <input name='expiryDate' value={this.state.expiryDate} onChange={this.handleChange} />
          </label>
          <label> CVV
            <input name='CVV' value={this.state.CVV} onChange={this.handleChange} />
          </label>
          <label> Zip Code
            <input name='zipCode' value={this.state.zipCode} onChange={this.handleChange} />
          </label>
          <button onClick={this.handleClick}>Next</button>
        </form>
      </div>
    )
  }
}
