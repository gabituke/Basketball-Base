import express from 'express';
import db from '../database/connect.js';

const Router = express.Router();

Router.put('/edit/:id', async (req, res) => {
	try {
		const score = await db.Scores.findByPk(req.params.id);
		await score.update(req.body);
		res.send('Rezultatas sekmingai atnaujintas');
	} catch (error) {
		console.log(error);
		res.status(500).send('ivyko klaida issaugant duomenis');
	}
});

Router.delete('/delete/:id', async (req, res) => {
	try {
		const score = await db.Scores.findByPk(req.params.id);
		await score.destroy();
		res.send('Resultatas sekmingiai istrintas');
	} catch (error) {
		console.log(error);
		res.status(500).send('ivyko klaida');
	}
});

Router.get('/', async (req, res) => {
	try {
		const scores = await db.Scores.findAll();
		res.json(scores);
	} catch (error) {
		console.log(error);
		res.status(500).send('ivyko klaida');
	}
});

Router.post('/new', async (req, res) => {
	try {
		await db.Scores.create(req.body);
		res.send('Rezultatas sekmingai sukurtas');
	} catch (error) {
		console.log(error);
		res.status(500).send('ivyko klaida issaugant duomenis');
	}
});

export default Router;
