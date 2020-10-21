import Coronavirus from '../models/Coronavirus'
import fetch from 'node-fetch';

class CountrySearchId {

  async find(req, res) {
    try {
    const result = await Coronavirus.findOne(
      {
        where: {
          country_ptbr: req.params.id
        }
      }
    );
      res.status(200).send(result)
    } catch (error) {
      res.status(500).send('There has been a problem with your operation: ' + error.message);
    }
  }
}
export default new CountrySearchId();