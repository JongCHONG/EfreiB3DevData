const { MongoClient } = require('mongodb')

const dbConnect = async () => {
  const DB_NAME = 'myEfrei'
  const DB_URL = `mongodb+srv://jochong:jochong@cluster0.6t0buxn.mongodb.net/${DB_NAME}`
  const client = new MongoClient(DB_URL)

  return client
}

module.exports = { 
  dbConnect
}