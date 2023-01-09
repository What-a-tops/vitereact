import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"

const url = import.meta.env.VITE_REACT_APP_API

const Details = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [data, dataChange] = useState({})

    useEffect(() => {
        fetch(url+ "/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            dataChange(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
        <div className='text-center bg-light vh-100 mw-100 d-flex justify-content-center'>
            <div className='d-flex align-items-center'>
                <div className='col-12 dislay-1 card p-5 shadow-sm text-start'>
                    {
                    data &&
                        <div className="lead">
                            <div><label className="text-muted">ID:</label>  <b>{data.id}</b></div>
                            <div><label className="text-muted">Name:</label>  <b>{data.name}</b></div>
                            <div><label className="text-muted">Email:</label> <b>{data.email}</b></div>
                            <div><label className="text-muted">Contact:</label> <b>{data.phone}</b></div>
                        </div>
                    }
                    <button
                        className='btn btn-outline-danger mt-2'
                        onClick={() => navigate("/")}
                    >Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Details
