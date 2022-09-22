import express from 'express';
import db from '../database/connect.js';

const Router = express.Router();

Router.put('/edit/:id', async (req, res) => {
	try {
		const game = await db.Games.findByPk(req.params.id);
		await game.update(req.body);
		res.send('Zaidimas sekmingai atnaujintas');
	} catch (error) {
		console.log(error);
		res.status(500).send('ivyko klaida issaugant duomenis');
	}
});

Router.delete('/delete/:id', async (req, res) => {
	try {
		const game = await db.Games.findByPk(req.params.id);
		await game.destroy();
		res.send('Zaidimas sekmingai istrintas');
	} catch (error) {
		console.log(error);
		res.status(500).send('ivyko klaida');
	}
});

Router.get('/', async (req, res) => {
	try {
		const games = await db.Games.findAll();
		res.json(games);
	} catch (error) {
		console.log(error);
		res.status(500).send('ivyko klaida');
	}
});

Router.post('/new', async (req, res) => {
    try {
        new db.Games(req.body).save()
        res.send('Įrašas sėkmingai sukurtas')
    } catch {
        res.status(500).send('Įvyko serverio klaida')
    }
})


Router.get('/:id', async (req, res) => {
    try {
        const post = await db.Games.findByPk(req.params.id)
        res.json(post)
    } catch {
        res.status(500).send('Įvyko serverio klaida')
    }
})
export default Router;
