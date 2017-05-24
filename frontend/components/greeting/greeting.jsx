import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import {style} from './style';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModalOpen: false,
                    editModalOpen: false };
    this.toggleShowModal = this.toggleShowModal.bind(this);
    this.showModalClose = this.showModalClose.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.editModalClose = this.editModalClose.bind(this);
  }

  toggleShowModal(){
    this.setState({showModalOpen: true});
  }

  showModalClose(){
    this.setState({showModalOpen: false});
  }

  toggleEditModal(){
    this.setState({editModalOpen: true});
  }

  editModalClose(){
    this.setState({editModalOpen: false});
  }

  render(){
    return (
      <section>
        <p className="navbar-text navbar-user-info"
          onClick={this.toggleShowModal}>
          Welcome, {this.props.session.currentUser.email}! </p>

        <button onClick={this.props.logout}
          className ="btn btn-default navbar-btn ">Log out</button>

        //show modal
        <Modal
          isOpen={this.state.showModalOpen}
          onRequestClose={this.onShowModalClose}
          style={style}
          >
          <button onClick={this.onShowModalClose}>Close</button>
        </Modal>

          //edit modal
        <Modal>
          isOpen={this.state.editModalOpen}
          onRequestClose={this.onEditModalClose}
          style={style}
          >
          <button onClick={this.onEditModalClose}>Close</button>
        </Modal>

      </section>
    );
  }
}

export default Greeting;
