import express from 'express'
import models from './src/models'

models.sequelize.sync().then(()=>{
  app.listen(3000)
})