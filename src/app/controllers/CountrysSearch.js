import Coronavirus from '../models/Coronavirus'
import fetch from 'node-fetch';

class CountrySearch {

  async find(req, res) {
    const result = await Coronavirus.findAll(
      {
        order:[
          ['id', 'ASC']
        ]
      }
    );
      res.send(result)
  }
}
export default new CountrySearch();