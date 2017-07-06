const db = require('./connection');
const games = db.get('games');

function add(game){
  return games.insert(game);
}

function getAll(){
  return games.find({});
}

function getOne(id){
  return games.findOne({_id: id});
}

function atomicUpdate(id, game){
  return games.findOneAndUpdate({_id: id}, game);
}

function destroy(id){
  return games.findOneAndDelete({_id: id});
}

module.exports = {
  add,
  getAll,
  getOne,
  atomicUpdate,
  destroy
};
