import {Router} from 'express';
import CountrysController from './app/controllers/CountrysController';
import CountrysSearch from './app/controllers/CountrysSearch';
import CountrysSearchId from './app/controllers/CountrysSearchId';
import Coronavirus from './app/models/Coronavirus'

const routes = new Router();


routes.get('/', (req,res) =>{
  res.send({message: 'ok'})
})
routes.get('/update', CountrysController.store)
routes.get('/search', CountrysSearch.find)
routes.get('/search/:id', CountrysSearchId.find)

export default routes;