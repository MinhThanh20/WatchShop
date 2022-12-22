import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Example(props) {
    const { modal, toggle, handleDelete } = props;


    return (
        <div>
            <Button onClick={toggle}>
                <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Modal
                isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>Bạn có chắc chắn muốn xóa </ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Có
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Không
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

Example.propTypes = {
    className: PropTypes.string,
};

export default Example;