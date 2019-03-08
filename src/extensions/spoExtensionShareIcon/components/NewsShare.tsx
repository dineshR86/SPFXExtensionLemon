import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { INewsShareState, INewsShareProps } from './INewsShare';
import { override } from '@microsoft/decorators';
const logo = require('../../../../images/logo.png');

export default class NewsShare extends React.Component<INewsShareProps, INewsShareState> {

    constructor(props: any) {
        super(props);
        this.state = {
            show:false
        };
    }

    @override
    private handleClose() {
        this.setState({ show: false });
      }
    
    @override
    private handleShow() {
        this.setState({ show: true });
      }

    public render(): any {
        //debugger;
        return (
            <div>
                <div>
                    <button>
                        <img src={String(logo)} style={{ width: 16, height: 16 }} />
                        <span>Workplace</span>
                    </button>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}