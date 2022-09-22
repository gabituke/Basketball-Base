import { useState } from 'react'
import axios from 'axios'

const NewGame = () => {
    const [form, setForm] = useState({
        team1: '',
        flag1: '',
        team2: '',  
        flag2: '',
        date: '',
        time: ''
    })


    const handleForm = (e) => {
        setForm({...form, [e.target.name]:  e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/api/games/new', form)
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>Naujas zaidimas</h1>
            {alert.message && (
                <div className={'alert alert-' + alert.status}>
                {alert.message}
                </div>
            )}
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group mb-2">
                    <label className="mb-1">Pirma komanda:</label>
                    <input type="text" name="team1" className="form-control" onChange={(e) => handleForm(e)} />
                </div>
                <div className="form-group mb-2">
                    <label className="mb-1">Pirmos komandos veliava:</label>
                    <input type="text" name="flag1" className="form-control" onChange={(e) => handleForm(e)} />
                </div>
                <div className="form-group mb-2">
                    <label className="mb-1">Antra komanda:</label>
                    <input type="text" name="team2" className="form-control" onChange={(e) => handleForm(e)} />
                </div>
                <div className="form-group mb-2">
                    <label className="mb-1">Antros komandos veliava:</label>
                    <input type="text" name="flag2" className="form-control" onChange={(e) => handleForm(e)} />
                </div>
                <div className="form-group mb-2">
                    <label className="mb-1">Zaidimo data:</label>
                    <input type="text" name="date" className="form-control" onChange={(e) => handleForm(e)} />
                </div>
                <div className="form-group mb-2">
                    <label className="mb-1">Zaidimo laikas:</label>
                    <input type="text" name="time" className="form-control" onChange={(e) => handleForm(e)} />
                </div>
                <button className="btn btn-primary">Siųsti</button>
            </form>
        </div>
    )
}

export default NewGame