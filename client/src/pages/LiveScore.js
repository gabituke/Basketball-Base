import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LiveScore = () => {
    const [postForm, setPostForm] = useState({
       team1_score: '',
	   team2_score: ''
    })
    const [alert, setAlert] = useState({
        message: '',
        status: ''
    })

    const navigate = useNavigate()

    const handleForm = (e) => {
        setPostForm({...postForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = new FormData()

        for(const key in postForm) {
            form.append(key, postForm[key])
        }

        axios.post('/api/scores/', form)
        .then(resp => {
            setAlert({
                message: resp.data,
                status: 'success'
            })

            window.scrollTo(0, 0)

            setTimeout(() => navigate('/'), 2000)
        })
        .catch(error => {
            setAlert({
                message: error.response.data,
                status: 'danger'
              })
              window.scrollTo(0, 0)
      
             
        })

    }

	return (
		<div className="container">
			<h1>Live Score</h1>
			{alert.message && <div className={'alert alert-' + alert.status}>{alert.message}</div>}
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="form-group mb-2">
					<label className="mb-1">Pirma komanda:</label>
					<input type="text" name="team1_score" className="form-control" onChange={(e) => handleForm(e)} />
				</div>
				<div className="form-group mb-2">
					<label className="mb-1">Antra komanda:</label>
					<input type="text" name="team2_score" className="form-control" onChange={(e) => handleForm(e)} />
				</div>

				<button className="btn btn-primary">Siųsti</button>
			</form>
		</div>
	);
};

export default LiveScore;
