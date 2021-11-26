db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: true } },
);

db.produtos.find({
  ultimaModificacao: { $ne: null} //$exists: true
},
  { _id: 0, nome: 1 });