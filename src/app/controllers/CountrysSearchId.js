import Coronavirus from '../models/Coronavirus'
import fetch from 'node-fetch';

class CountrySearchId {

  async store(req, res) {
    const result = await Coronavirus.findOne(
      {
        where: {
          country: req.params.id
        }
      }
    );
      res.send(result)
  }
}
export default new CountrySearchId();