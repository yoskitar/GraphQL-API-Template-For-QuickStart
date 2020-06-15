const mergeTypes = require("merge-graphql-schemas").mergeTypes;
// const Sensor = require("./Sensor/"); // <-- types_def_0
//En el caso de añadir nuevas clases, podremos establecer una
//organización de éstas, unificando la definición de tipos,
//en lugar de tener las diferentes definiciones en un mismo
//archivo
const typeDefs = [/*<types_def_0>,...,<types_def_n>*/];
//Exportamos las definiciones de tipos
module.exports = mergeTypes(typeDefs, { all: true });