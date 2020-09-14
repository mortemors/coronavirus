import Coronavirus from '../models/Coronavirus'
import fetch from 'node-fetch';

class CountryControllers {

  async store(req, res) {
    let url = "https://api.npoint.io/c5505f1a06be0713a25c";
    let settings = { method: "Get" };
    var paises = []
    fetch(url, settings)
      .then(res => res.json())
      .then(json => {
        var promises = []
        Object.keys(json.ref_country_codes).forEach(element => {
          promises.push(
            fetch('https://covid19-brazil-api.now.sh/api/report/v1/'+json.ref_country_codes[element].country,settings)
            .then(res => res.json())
            .then(async (country_info) => {
              if(country_info.data.cases)
              {json.ref_country_codes[element].cases = country_info.data.cases
                json.ref_country_codes[element].confirmed = country_info.data.confirmed
                json.ref_country_codes[element].deaths = country_info.data.deaths
                json.ref_country_codes[element].recovered = country_info.data.recovered
                json.ref_country_codes[element].updated_at = country_info.data.updated_at
                // console.log(json.ref_country_codes[element])
                paises.push(json.ref_country_codes[element])
              }
            }).catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message);
            })
          )
        });
        
        var promises2 = []
        Promise.allSettled(promises).
        then(async (json) => {
          promises2.push(
          Object.keys(paises).forEach(async element => {
            if(paises[element].cases){
              var country = await Coronavirus.findOne({where: {country: paises[element].country}}) 
            if(country){
              Coronavirus.update({
                alpha2:  paises[element].alpha2,
                alpha3:  paises[element].alpha3,
                country:  paises[element].country,
                numeric:  paises[element].numeric,
                latitude:  paises[element].latitude,
                longitude:  paises[element].longitude,
                country_ptbr:  paises[element].country_ptbr,
                cases:  paises[element].cases,
                confirmed:  paises[element].confirmed,
                deaths:  paises[element].deaths,
                recovered:  paises[element].recovered,
                updated:  paises[element].updated_at
              }, {
                where: {
                  country: paises[element].country
                }
              })
            } else{
              Coronavirus.create({
                alpha2:  paises[element].alpha2,
                alpha3:  paises[element].alpha3,
                country:  paises[element].country,
                numeric:  paises[element].numeric,
                latitude:  paises[element].latitude,
                longitude:  paises[element].longitude,
                country_ptbr:  paises[element].country_ptbr,
                cases:  paises[element].cases,
                confirmed:  paises[element].confirmed,
                deaths:  paises[element].deaths,
                recovered:  paises[element].recovered,
                updated:  paises[element].updated_at
              })}
            }
          })
          )
          Promise.allSettled(promises2).then(
            res.send(await Coronavirus.findAll())
          )
        }
        );        
      });        

      
  }
}
export default new CountryControllers();