import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link }	from 'react-router-dom';

const AllGames = () => {
	const [ games, setGames ] = useState([]);
	const [ alert, setAlert ] = useState({
		message: '',
		status: ''
	});

	useEffect(() => {
		axios
			.get('/api/games/')
			.then((resp) => {
				setGames(resp.data);
			})
			.catch((error) => {
				setAlert({
					message: error.response.data,
					status: 'danger'
				});
			});
	}, []);

	return (
		<div className="container">
			{alert.message && <div className={'alert alert-' + alert.status}>{alert.message}</div>}
			<div className="articles">
				{games.length > 0 &&
					games.map((game) => {
						return (
							<div key={game.id} className="box">
								<div className="list-group w-auto">
								<Link to={'/scores/add/:id'}>
									<div
										className="list-group-item list-group-item-action d-flex gap-3 py-3"
										aria-current="true"
									>
										<img
											src={game.flag1}
											alt={game.team1}
											width="32"
											height="32"
											className="rounded-circle flex-shrink-0"
										/>
										<div className="d-flex gap-2 w-100 justify-content-between">
											<div>
												<h6 className="mb-0">{game.team1}</h6>
											</div>
										</div>

										<span>VS</span>

										<img
											src={game.flag2}
											alt={game.team2}
											width="32"
											height="32"
											className="rounded-circle flex-shrink-0"
										/>
										<div className="d-flex gap-2 w-100 justify-content-between">
											<div>
												<h6 className="mb-0">{game.team2}</h6>
											</div>
										</div>

										<p className="mb-0 opacity-75"><em>{new Date(game.date).toLocaleDateString('lt-LT')}</em></p>
										<p className="mb-0 opacity-75">{game.time}</p>
									</div>
										</Link>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default AllGames;
