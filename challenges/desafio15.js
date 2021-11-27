db.produtos.count({
  nome: {
    $regex: /mc/i
  },
},
);
// https://docs.mongodb.com/manual/reference/method/db.collection.count/