import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getAllUser } from "../../../api/UserRequest";
import ModalDeleteUser from '../ModalDeleteUser/ModalDeleteUser'
const User = () => {
    const [user, setUser] = useState([])
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        const fetchAllUser = async () => {
            const res = await getAllUser();
            setUser(res.data);
        };
        fetchAllUser();
    }, []);
    console.log(user);
    return (
        <>
            <Table bordered>
                <thead style={{ background: 'rgb(10, 145, 10)', color: 'white', textAlign: 'center' }}>
                    <tr>
                        <th>STT</th>
                        <th>UserName</th>
                        <th>Email</th>
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
                                <td>
                                    <ModalDeleteUser modal={modal} toggle={toggle} />
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