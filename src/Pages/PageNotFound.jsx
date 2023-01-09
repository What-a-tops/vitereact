import React from 'react'
import {useNavigate} from "react-router-dom"

const PageNotFound = () => {
const navigate = useNavigate()
    return (
        <div className='text-center bg-danger text-white vh-100 mw-100 d-flex justify-content-center'>
            <div className='d-flex align-items-center'>
                <div className='col-12 dislay-1'>
                    <h1>404 ERROR</h1>
                    <h4 className='lead'>Page Not Found!</h4>
                    <button
                        className='btn btn-outline-light mt-2'
                        onClick={() => navigate("/")}
                    >Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound