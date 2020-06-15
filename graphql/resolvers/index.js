//const Sensor = require('./Sensor/'); // <-- types_def_0
const mergeResolvers = require('merge-graphql-schemas').mergeResolvers;
//En el caso de añadir nuevos resolvers para una nueva clase,
//podremos establecer una organización de éstos, unificando 
//su definición en lugar de tener los resolvers de cada clase 
//en un mismo archivo.
const resolversDefs = [/*<types_def_0>,...,<types_def_n>*/];
//Exportamos la definición de resolvers
module.exports = mergeResolvers(resolversDefs, {all:true});