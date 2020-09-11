import {Router} from 'express';
import CountrysController from './app/controllers/CountrysController';
import CountrysSearch from './app/controllers/CountrysSearch';
import Coronavirus from './app/models/Coronavirus'

const routes = new Router();


routes.get('/', (req,res) =>{
  res.send({message: 'ok'})
})
routes.get('/update', CountrysController.store)
routes.get('/search', CountrysSearch.store)

export default routes;