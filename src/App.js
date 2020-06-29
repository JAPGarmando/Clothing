import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils'

class App extends React.Component{
  constructor(props){
      super();
      this.state={
        currentUser: null
      }
  }

  unsubscribeFromAuth = null;

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user})
      console.log(user)
    })
  }
  render(){
    return(
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
    );
  }
  
}


export default App;
