import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllUser, deleteUser } from "../../../api/UserRequest";
function Example(props) {
    const { modal, toggle, item, setCheck } = props;
    const [user, setUser] = useState([])
    const handleDelete = async (e) => {
        console.log(item._id);
        await deleteUser(item._id);
        // const user = await getAllUser();
        // setUser(user.data);
        setCheck(true)
        toggle()
    };
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
                    <Button color="primary" onClick={(e) => handleDelete(e._id)}>
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