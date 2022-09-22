import { DataTypes } from 'sequelize';

const Scores = (sequelize) => {
	const Schema = {
		team1_score: {
			type: DataTypes.INTEGER, 
			allowNull: false 
		},
		team2_score: {
			type: DataTypes.INTEGER, 
			allowNull: false 
		}
		

	
	
	};

	return sequelize.define('scores', Schema);
};

export default Scores;