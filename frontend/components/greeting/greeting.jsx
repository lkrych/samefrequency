import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import ShowUser from '../user_profile/show_user';
import EditUserForm from '../user_profile/edit_user_form';
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
    this.setState({showModalOpen: false });
  }

  editModalClose(){
    this.setState({editModalOpen: false});
    this.setState({showModalOpen: true});
  }

  render(){
    return (
      <section>
        <p className="navbar-text navbar-user-info"
          onClick={this.toggleShowModal}>
          Welcome, {this.props.user.email}! </p>

        <button onClick={this.props.logout}
          className ="btn btn-default navbar-btn ">Log out</button>


        <Modal
          isOpen={this.state.showModalOpen}
          onRequestClose={this.showModalClose}
          style={style}
          contentLabel="User Modal"
          >
          <ShowUser
            user={this.props.user}
            toggleEditModal={this.toggleEditModal} />
        </Modal>


        <Modal
          isOpen={this.state.editModalOpen}
          onRequestClose={this.editModalClose}
          style={style}
          contentLabel="Edit User Modal"
          >
            <EditUserForm
              user={this.props.user}
              processForm={this.props.processForm}
           />
        </Modal>

      </section>
    );
  }
}

export default Greeting;
