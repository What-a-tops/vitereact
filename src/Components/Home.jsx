import React, {useEffect, useState, useReducer} from 'react'
import FormsField from './FormsFields'
import TablesData from './TablesData'
import Swal from 'sweetalert2'

const url = import.meta.env.VITE_REACT_APP_API

const Home = () => {
    const [submit, setSubmit] = useState('Save')
    const [clear, setClear] = useState(true)
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0)

    const [data, dataChange] = useState({})
    const [formData, setFormData] = useState(
        {
            id: "",
            name: "",
            email: "", 
            phone: "",
        }
    )

    const handleEdit = (datas) => {
        setFormData(datas)
        setSubmit('Update')
        setClear(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let id = formData.id == '' ? '' : '/'+ formData.id
        fetch(url+'/'+id, {
            method: formData.id == '' ? 'POST' : 'PUT',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(formData)
        }).then((res) => {
            let msg = (formData.id === '' ? 'Saved' : 'Updated') + ' Successfully!'
            sa({title: 'Success!', msg: msg, type: 'success'})

            if (formData.id !== '') {
                setClear(true)
                setSubmit('Save')
            }    
            forceUpdate()
            clearField()
        }).catch((err) => {
            console.log(err.message)
        })
        
    }

    const handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url+'/'+id, {
                    method: "DELETE"
                }).then((res) => {
                    sa({title: 'Success!', msg: 'Contact removed.', type: 'success'})
                    forceUpdate()
                }).catch((err) => {
                    console.log(err.message)
                })
            }
        })
    }

    const handleClear = () => {
        setClear(true)
        setSubmit('Save')
        clearField()
    }

    const handleChange = (event) => {  
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const clearField = () => {
        setFormData({id: "",name: "", email: "", phone: ""})
    }

    const sa = (props) => {
        Swal.fire(props.title, props.msg, props.type)
    }

    useEffect(() => {
            const fetchData = async () => {
                const res = await fetch(url)
                const data = await res.json()
                dataChange(data)
            }
            fetchData().catch(console.error)  
    }, [reducerValue])

    return (
        <div className="container">
            <FormsField 
                forms={formData} 
                submit={submit}
                clear={clear} 
                handleClear={handleClear} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange}
            />

            <TablesData 
                handleEdit={handleEdit}
                handleRemove={handleRemove}
                data={data}
            />
        </div>
    )
}

export default Home