import { DataTypes } from 'sequelize';

const Games = (sequelize) => {
	const Schema = {
		team1: {
			type: DataTypes.STRING, 
			allowNull: false 
		},
		flag1: {
			type: DataTypes.STRING, 
			allowNull: false 
		},
		team2: {
			type: DataTypes.STRING,
			allowNull: false
		},
		flag2: {
			type: DataTypes.STRING, 
			allowNull: false 
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		time: {
			type: DataTypes.TIME,
			allowNull: false
		}
	
	};

	return sequelize.define('games', Schema);
};

export default Games;