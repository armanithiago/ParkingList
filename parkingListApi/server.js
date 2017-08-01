var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

const Conrado = null;
console.log(Conrado?"Tem Conrado":"Não tem Conrado até agora " + Date.now() )
