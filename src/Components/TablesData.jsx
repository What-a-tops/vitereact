import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Table, Button} from 'react-bootstrap'

const TablesData = (props) => {
    const navigate = useNavigate()

    return (
            <Table className="table col-12 mt-2 p-2 p-2bg-dark text-center table-sm shadow-sm table-hover">
                <thead className="bg-secondary text-white text-uppercase small">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data && props.data.length > 0 ?
                        props.data.map((items,index) => (
                            <tr key={items.id}>
                                <td>{items.id}</td>   
                                <td>{items.name}</td>
                                <td>{items.email}</td>    
                                <td >{items.phone}</td> 
                                <td>
                                    <Button variant="outline-primary m-1" onClick={() => navigate('/view/'+items.id)}  size="sm">View</Button>
                                    <Button variant="outline-warning m-1" onClick={() => props.handleEdit(items)} size="sm">Update</Button>
                                    <Button variant="outline-danger m-1" onClick={() => {props.handleRemove(items.id)}} size="sm">Delete</Button>
                                </td>     
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan={5} className="p-5">
                                <h1>Empty Data</h1>
                                <h4 className='lead'>No details displayed.</h4>
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
    )
}

export default TablesData