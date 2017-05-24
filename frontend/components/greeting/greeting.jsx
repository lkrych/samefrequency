import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import {style} from './style';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  toggleModal(){
    this.setState({modalOpen: true});
  }

  onModalClose(){
    this.setState({modalOpen: false});
  }

  render(){
    return (
      <section>
        <p className="navbar-text navbar-user-info"
          onClick={this.toggleModal}>
          Welcome, {this.props.session.currentUser.email}! </p>

        <button onClick={this.props.logout}
          className ="btn btn-default navbar-btn ">Log out</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={style}
          >
          <button onClick={this.onModalClose}>Close</button>
          ...content
        </Modal>
      </section>
    );
  }
}

export default Greeting;
