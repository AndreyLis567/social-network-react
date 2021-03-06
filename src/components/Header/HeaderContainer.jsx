import React from 'react';
import { render } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Header from './Header';
import { connect } from 'react-redux';
import{getAuthUserData} from '../../redux/auth-reducer'
import { authApi } from '../../api/api';

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.getAuthUserData();
   }

   render() {
   return <Header {...this.props}/>
   }
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login
});

export default connect (mapStateToProps, {getAuthUserData}) (HeaderContainer);