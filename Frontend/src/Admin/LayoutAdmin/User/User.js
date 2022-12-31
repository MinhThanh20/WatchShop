import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { getAllUser, deleteUser } from "../../../api/UserRequest";
import ModalDeleteUser from '../ModalDeleteUser/ModalDeleteUser'
const User = () => {
    const [user, setUser] = useState([])
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [check, setCheck] = useState(false)
    useEffect(() => {
        const fetchAllUser = async () => {
            const res = await getAllUser();
            setUser(res.data);
        };
        fetchAllUser();
    }, [check]);

    return (
        <>
            <Table bordered>
                <thead style={{ background: 'rgb(10, 145, 10)', color: 'white', textAlign: 'center' }}>
                    <tr>
                        <th>STT</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, index) => {
                        return (

                            <tr key={index} style={{ textAlign: 'center' }}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.admin === false ?
                                    <FontAwesomeIcon icon={faX} />
                                    :
                                    <FontAwesomeIcon style={{ color: 'red' }} icon={faCheck} />}
                                </td>
                                <td>
                                    <ModalDeleteUser
                                        modal={modal}
                                        toggle={toggle}
                                        item={item}
                                        setCheck={setCheck}
                                        index={index}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
export default User