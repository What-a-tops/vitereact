import React from 'react'

const forms = (props) => {
    const formData = props.forms

    const Forms = [
        {
            id: "1",
            label: "ID",
            name: "id",
            type: "hidden",
            value: formData.id,
            pattern: '[^0-9]'
        },
        {
            id: "2",
            label: "Name",
            name: "name",
            type: "text",
            value: formData.name,
            pattern: '[a-zA-Z ]+'
        },
        {
            id: "3",
            label: "Email",
            name: "email",
            type: "email",
            value: formData.email,
            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
        },
        {
            id: "4",
            label: "Contact",
            name: "phone",
            type: "tel",
            value: formData.phone,
            pattern: '[0-9,()-]*'
        }
    ]
    
    return (
        <div className="col-4 mt-2">
            <form className="container card p-2 shadow-sm" onSubmit={props.handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        {
                        Forms &&
                        Forms.map((lists, index) => (
                            <div className={`form-group mt-2 ${index == 0 ? 'd-none' : ''}`} key={index}>
                                <label className='text-muted small' htmlFor="id">{lists.label} : (<span className='text-danger'>*</span>)</label>
                                <input required 
                                    name={lists.name}
                                    onChange={props.handleChange}
                                    value={lists.value}
                                    type={lists.type} 
                                    className={`form-control ${lists.name}`} 
                                    placeholder={"Enter " + lists.label}
                                    pattern={lists.pattern}
                                    maxLength={lists.type === 'tel' ? 11 : ''}
                                />
                            </div>
                        ))
                        }
                    </div>
                    <div className="col-lg-12 mt-2 text-center">
                        <button type="submit" className="btn m-1 btn-outline-success">{props.submit}</button>
                        <button type="button" onClick={props.handleClear} className={`btn m-1 btn-outline-danger ${props.clear ? 'd-none' : ''}`}>Clear</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default forms