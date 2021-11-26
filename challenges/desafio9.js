db.produtos.updateMany(
  {nome: {$eq: "Cheddar McMelt"}},
  { $pop: { ingredientes: 1 } }, // Para remover o ultimo elemento do array items
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);