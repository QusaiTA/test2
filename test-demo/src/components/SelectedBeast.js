import React, { PureComponent } from 'react';
import { Modal, Button } from 'react-bootstrap';


class SelectedBeast extends PureComponent {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{ width: '18rem' }}
            src={this.props.url}
            alt={this.props.title}
          />
          <p>{this.props.desc}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hide}>
              Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
