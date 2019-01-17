const request = require("request");
const router = require("express").Router();
const User = require("../../server/database/models/user");
const _ = require("lodash");

router.route("/").get(getBars);

function getBars(req, res) {
  const linkArray = [
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)424-6072&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=the%20anchor%20bar%20raleigh&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)833-4949&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)832-6082&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)977-3829&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)900-8147&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)803-2796&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)899-3675&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)907-1121&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)835-2222&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)307-4597&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)307-3215&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)307-8335&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)794-7304&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)809-5560&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)324-3529&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)833-1252&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)977-3714&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)607-8501&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)899-3672&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)615-4757&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)821-7401&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)896-6016&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)322-0128&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)831-0991&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)821-9865&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)833-3866&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)502-7155&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)838-6633&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=thelynkraleigh&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=the%20milk%20bar%20raleigh&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)896-7063&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)977-0825&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    // "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)945-9382&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=the%20outpost%20bar%20raleigh&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(984)232-8969&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)444-2769&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)977-5953&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)324-3415&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)833-0999&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)900-8194&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=slimsraleigh&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)755-0755&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    // "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)839-6207&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)977-1567&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)301-8793&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)424-7817&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)828-8077&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)803-3156&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)896-8016&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)335-3165&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=(919)833-3000&inputtype=phonenumber&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA"
  ];
  
  
  
  
  
  
  const picArray = [
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAO5zSyYyiU7Wn3r4oE4j_HTyEKWctYUvTheThJ5fXbgwMo-jovJlkieMRpPmb4H2ByGpcbc36YNCG7LMzAk29c4XuNQpAkJ_zo0_1ouuhrfaQiR1cpeNNowovOvidQy6NEhATTq6dIMmVtwE8bLu-Nci_GhSq1Sd7DDEkqjHgfUxSnL5MfA2L9Q&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAcpQq7KRK4TdxalCYzan_rI61jLZZr5utPUgrMK7bZnG-9kmLzR9F33p0Fe5_yhKixIQtT3Wj5JnPNfAMZ91ReyfCXkWSvOqPMD0FI9htWlTDRaH19hNp9wXK3dK9hVHnEhAnopNTSbPXBuXJD8jQ3BxkGhTKG1TrQLZmZFetl7I52VeIDG_vwA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAazvhcAwYq8kqjfGVu0bfkuoEAYHrnUi6Ho7scc0cRrIXhxxLDB89abhkIFUtKBCL2fXY-Sk5mv1nesdZjAr0re2dahibyvkeKdri1FQVWCYmPMlsVhipz_TKATA70mUbEhA9EnggckUCOUFzsCRMwU4fGhQ0OMgy1_mzphKsJWACTmDSkApW5Q&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAoh_0JRaR8dK9MOJmVXYg5N6e4P4ZFvhooJI1-xq7UzPxt1AA1Tpo1Srjmzgv_ljEynEkBceuFc4-6lvCBKKC3UM6SrXWt7k7zRNuxnxqiD2C4ICFy0AobYd8vkwBttENEhB5L7Vi9JESmzMYOGI4BwSSGhRm6F0DMlzOBsDuqrWFeOfKC57NNQ&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAcHgwnzQ-rzAGIstblSmdAaah-_8hirOK8131mmCwgwGtVrXefx7aBn_RexDWBtRgMt3HgxwKe4cYsh1qq3MrUFBYn6RjiWyE7jLF8Lbu6PKMuOqHgAYJMnc0JWbopVa9EhAvnnDUFYGklGNO5NbFiffCGhSoDauyvHikE8wrI3yI_JqOcqVIZw&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAXUQBQfxdfP_xIRLcj-fgHZxT0Y1-4MxrUABLDTPgo_e-OAFCg_qZJeAOHYc8wRJE04as3JWdDdHvN-a5XbB7FBPU5sg3X07_aWo_ha0FCjqbtb6VPHJCta5jnn0eFstbEhDvltf7vbGKay0jmvyNYhLNGhSx3cGfXpyNQtDynF-6C1vjI4rgKg&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA1olUS3XhBrg5M8SkxztiAaazJaOUIdp3hIz6LtwJ0obNU95tnyA8sUO4KDFxnMzG6Kb1IcoRsTGG3K3e8KmFt4fFGPbs7xuyM8ZYYAF5vbKxxGJaSwsPZJVJYqbohcctEhC0NF0GL9EmPQsm9jppw3q-GhSCA23aEeei0urY-sM2cHOddltmwQ&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAnWaq7XDdlXB1pJAcDwmL7eUm7g-13ygmtSq83lkGpl92ecaygw3zs9X-vxP4HR7ZO8KT7HbpVD2O72nye628DiY276BB15zxMaTfz9UHtoSJ9-34AsbG1WNeyom2gflSEhC2soo7fNajMe53757MTguPGhRmDsEqWbivwCuxVBxZQ9sjXvGaKg&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAArrQ8xNMglDz47xifnxpvb1jjjwOG8KEZpMxAskYha7Qpo6XkL5quOPaoz1wmoBDZtw1Ivq4CxSeTiHH6kG0yFAVU33CEE99-Hz95vQymRqMkdVl-FUz7DCYRbg-F78NNEhBp2KA_UOI5m8UQCnMswolmGhSbM-MQjZVq1dPOXzkvRurXoNG4yQ&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAPYZaIWDBc3frWdS373-q_bRoPm8C49vfyKzeX8r2paJVdkmR9GOZRJJZFr6pmiEmjXs8rbI9PlYtsZ07kZIqHpYe6LYYfTGAJcjH1Nm5hCP_VPd0LJu_2h_Tecxj4a2uEhD45OCu70tCCLEi7781_W23GhQ1EcHEYMyH37dB_EaGELdmrcqifQ&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRZAAAAWvmXRaRjhsHczs93hJk38GAwj8egjaytT1qhOKxeYaNOM33B8naFxxaghftzU2z-SpnFfZ-_o_G141-vi0Zd7ycEA2N5HAaai4pjvfkZFCvbOM0EA45DZVIRRYnMcjzOEhBB73opoc87qWwlYe6QCtwzGhQhCuZ9960Tp-c-N2TTIxpSFXXdNA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAnUpnCeC9qhdqF4dspvFlxf0eOeKYVGv5D2o915lWdUO3OP1KOvN0pcLMJnEHoTvZehSihjWAL_Z8GrLWLSqVWjQNfrSN6YDFXst7QtELaHHwb1MKKe4Gwjkv6PTAytnqEhAgTC0SWeLODT9f9x_R6KhwGhQObE3kkCvOLkzCmr-L4gUZIfDmHA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAG9sEfgSKJAf1bKab3WQ7bIGsILagMYnWTIj7QcT2avQl-Ie1x95dzeKsM6moKbcB68RWs856o0Hxr2b-pfKJSEoTkXy42JBrbypIe7hDf7zycJSbYQbezIApMgwhwHm7EhC_DjwVX0_6HdFdEeUbnyKuGhSJTaYG6_o7kD56etP7FMBhCLMyTg&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAdjGcSOYdM1ep9Sjh4GGgYsl3re6vN-Vrb5SE5rsEBgGQey6EsAZ8jfkjPT4ldet-igZawwsVVIk0FOqDEWqBvH-GDOKQsPyvlvoroXmmLRTV86S_MS7y2GC43-4bdNUtEhD4i_DiJrnTigj-HFMiPZ_qGhSJWM28_iJQBfCiqzZoRHiU1VC1lw&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAeBPVO5RDKu8phsPnf1NuehVLGLNN_wHrtykXjB5ySsc44UNxcp2E8vMUjRdoUw4JMRlD4mDt1GK48HJgwLrqPsK7zUGFFQZF2eChC5TKAb0-UInnbG09f7LUpgZ1rNOZEhDd-ZM6PkFstCw3kyTNpH1wGhRZv7nnIwukUdHGy1HryRfxKCpRXA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAkX5atqkoUHiScCbsqxPhDwh9DFrovtCTNpqFvaJ3PScRZH1g2SgLc1Cvrj45ihRqOa0pSGoHoy-4V58WLkjlbMLQg3_uK4RkP-O6jfzorlcyK_71RWdwYnPiElNDZ_5pEhBB4eSFR-yR37ARQHakRR8XGhTp0-I74flHGD_uVwg20o6pVhyIDA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAVdcFsmFRNm05Ro3l4LlfCWxJbQXPdhIsc9JH2GCPqlulb5DRQK_rp6Z6heuQYD0zmBME7YbVVEvfmgUJ3KR06-kTnrRcG7eMJo_N8ZVRzM-4pXSrn4aSufgG7ciGKw_CEhCdIqiU1tSU3nHHmmEmgBckGhRlxlauA3lDHDnqSjUHyBPEXqK4_A&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAcL1Fg1y5BHhdUhGnLwn0uK9TM9SBYWqlydqBG4GpCpRTuYxiHYAI5IrwR34ueP94JGPU1RlChmtPbZeq2ZkMCHutAQcmNpjGmRaac5rnuTdmvIWyf_pOE50lXRCN82i3EhD4ER5IWOC-y-tpsWAGg48BGhS6zBHQtJ-B_xBUReogYv5lLKMTFA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA2AeVV6EOHCDTPW7FWlQp_feQd_riBwoIUn67VQYOrtyW6ptwaH3TrvRZPZJgiLnbWjYsHeK0cx72_f9O3DxS134FvnIzNU1dQ9hz2SZT5eBhq_z-F0B60iOSk_1SNdUtEhDjT-5pp5K7vWWn3GDNfSrCGhSBTvik5DTKCa-kSPlHbLdGy8PE2Q&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAIW8Y7bxOI8cIZGd4MPdyzFxPs9ENhsw8YtClziu8-fvF38qnX5xhu8leNNK2Zmxx7FQu5S-Y7wvCtQ4WmlZvi9VxfaIA-6XcqgChsC1FN-cKxW1uzrzWb-hzJZffXhT3EhD1foq7msyjZ8k7UyY2vimJGhQu55LGOXuwJ8agIIu7uendUm08Aw&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAN0JLmp5VMaFIl6-2GZZjXrG02EtilxZXGNnrbMG2h7Rkx6piEh1861ZiNz0B23TQpi_hD5bwtr_fAAtrefRoTGjxB2ArN8VL2WoBAOkfNst9VYx_tPcKg7HVjR866-wXEhDaZhQJuXhP3OANw9QrMfkTGhR-ji8F2-Qgnwi-TRMPD0b5aItoDw&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAgxcUapW-OOvP7RtL3d7kD7qUQH_xntwNbaq9qkfYf1hO4UuiPfsKdykNjqqWnV1SQWQNedriWl15QeKiBs4khZ1AfSAfSSYzQ7oSVAk3_4uvZpTWrjFkG64CTn0czfT3EhAZfbN4XbPFohyyJ_SjcNCHGhTkxPnXdQefhomR1SlTAs6J-B0yOA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA2IdbMjtun6kB3pv_071aLNokwcSduGsuUTDhcDRPB6Gsa4j_uKid6r-iWlRWNSSDUlbTWdIV54t1Y4d3eyHs1Xo9bFpbBeyfS0uhP3Ag-esPw1zlCYFSz9Ye9epinzE7EhDbcfcQnmSCmuo2KMvGjiBPGhTXbsy1Ze8O28culnD4Q8Ln0Od5zg&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRZAAAANG0NR6NUCVCUr7b8ya4Auu83ZmEAhb9ik27gkC42fqCL35cPTQPrxI0kVilUG8zgtsLKA_FD5BR-qQ0_Pjx7tnuwun9Eqbztp92aVYlW2idZtWtB4MjjJfQL2-BIN-FPEhBm-8Ad2PYYCbeHmunbVh7jGhQpfXw9SmznLGhWPr_R7GS4bhVX3A&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA4cY6GEDJbtua8b2j4BlDjfxk9VkjFD07-6oasFm3YuCm_O628CSe-WZICKImIrGCV7E9IKvL8vu2ShqBnPi9ab9j-5qU4g14p0qjNXM62O2voz87L4HpI7kwM0in55WcEhC-v1nNb7DcC5Bvxdu-Y9GcGhTQOKO4wwthxVS1TMD-kOsPga8tPw&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://www.tobaccoroadtours.com/wp-content/uploads/2015/09/Landmark-Tavern-Bar.jpg",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAVs_1NKZbjv9EskFKSF_1WTqrjNhlMGtz9IHab7Sw2Lv_NICcygSDNFxAVh-EecJ16-DJ_zn_MIJm8wgW8deIJNCAGcfv6u7Sg56-sGjXdj0p1EdoCg8yblbloKsfdQ4fEhCRmNhXjtLWThe7qq98_u4MGhSt_lS-ZJ3sP7nZGNiRuf5ykdJ9Xg&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAY54SrkhWtT3GM26R0GwJdUJf57qSmsGm1vrQZ6q_BQa9fzwXFIqaOcK9p4EALOHA0prqyyAFgp-lr65tzoWb5OG93hMCVBu0mBhQ_abQFrnK8hGSveFeWLKh_DlXrjKuEhCD6-m-gdqnSMUM549R27WAGhQQZZdqrd40emwOr4dZ5xgJgh1N7Q&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAIw9BNY8b9f18ZgBh5itSkSGWEIPeNY3AqsrKPD2AL3aody8J46FhIBcBm8Llux4FwRhANhzVlXgCZEAtfjydIxI0APukcSHji7osujwssD_wa44DEDa3qgHDpj2dUrz1EhD9jt9CNoU3j0Xps60p5u4nGhRboIEno8iSu8mI63FOHVQOI-TnCQ&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAI5C2Zto_fnTiCk5jfNNb2RwjreF1EZ86XfEL4FIdxTajpzuSLM4e-mva4OQsXIRsJ0PUZCQgH4habp-5q14rmaY1VN6R1e5anC6q7F3wQU6zGL_7p_K0QHQDpEp-gCh2EhCR2pL7WAjikR-4Q8Bdqe3KGhQHKkKrIVSYUR7I-RLCbXaFMn_P0A&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAArFMMp9IJKZVkpBUMfiXf0TsGeLpmyDhqKY1EDsFOjuhEEODkUvDF7kkcEv3RlYjcT13VmIdVer1E4aVz1vNjgQZJ0lOAS_2BeCMHmRhTPpLlQvcFcO57aoOiKuOH_CsQEhBZkdJ3aqJdqBKlDbb5Mkh4GhTExYq_PxxFdbBi1QeD0AGqiL5ULw&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAHnolqkCNqQ1Vl7PkDxptCXHyu0WjePo2xzZRfsoH4dPatPOtOpY7CZHDz6274sgMU882nuSJLib5i7hkNfqz8kSRKdIbIBdrlDHUOOR74-peKS4FX_Qcr7U9WEKTfBIUEhCIylQfqM-8gmojVaLdTuG1GhRwA2K2FZE_3c8MEbHsIOLRPm2N9g&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAxBrF2ls9Q00H5IpG4rwtDtQ45wQRESfh0R-fign_Gp49CWMAxJHGZnl03JPjxtiguPxLvD9xaw32yQbAC5QIYyOP-qUiJfefLEHGEC4BmCzrXOQqzG5P8C6ZNBpBQxJXEhBNpM_KbBnbTOqsag3Eur7cGhQDp4U8RY9n0uq5bTxYTY3kzVUejg&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    // "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAEkqNUGIog8YdCXxyyzQaKBoQCVxQwfdQFt6hjUt0OG_QTH9MU2NHUl6JwdFgRANRi9cYIF5pjfzlOBf6sIC_xDhqvM6QdiMj2ZevppCEPiM2Bzz98C6GLWvmV-1wLX4ZEhCjQYYWuqPiDlpCn349hWswGhS9-sJh8TT-o9HDid0LGZ4HPPylcw&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAaQFqeyKyY5QQc_KU0obfeldKhVwBx3qS2ILuAuur48zA2ciRqX5rfVv1Bwh_rsmq8IxfXDvlXiT3ubgTD979Dk6Q8Om-6SFWBs6km108pstwgWlCUkFLhGloCpKaqkmjEhC7Eis57cPqU9wHLY9K7NrSGhTQKKKkucW6YqKiiUVb-Q0FEB6W8A&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAZIB3VECMNhEYKOTt-YUjCl1B_CFyrPxja6gxPC6c7CRkRFBLSs69UpIiTnJkY3Qwp4z2ka0VRAG24Me43eJYaBV3xcJNPcvTzamXFOGmXjMh2LR1k09ZrM5TEzv5eNKsEhCwfH6WoNBQo0VKt6lzwrmmGhQAd0ivZNHSsIq8UQEyYqbbImi9lA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAnxeHAZT1H4m_JOVRRzRHSLBlv4FzNshksEtLp0Uoui94kVAN-DYDnC1M4qNWRNkqxx0iWzEAL8VjQK-XTsUUzLdHHHb8R9fVeIMiHSh4nIrq6z14tgDILJKaBCKBzYW6EhATXbpbY5mlvOG5ciEC1K71GhTfmhFj4gz3IkyBe3VjtsMLvINN5A&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAN6jZOgF8xo084u80r5pb24gcr29hIpk0ebg1_u8UsbO4deJqrRfSTqsE8a2sqjcckXU-tnRHvKzZEhIUzoyYODIPrUgZWl247wYcIDsv-tDCamo3qPXwwCD84SAjUY_uEhCAsOhV0Qci2gRZz0WT4Q8xGhR9M4TpOqZu-tbqS9q1VZ8_jUyDIA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAmlzSRDqYByIXVuiJIn5syzHWt4o0WzE8O5_xXoPpmHP903SxzgVS9mTLd085i0ujs9P_XpFLW4J1epwPTgJ0yJLHv-gA43yCDcDti4eLNPROdDLYfXJNSnrMfL5X_ckdEhCmzNEWKzkqWqarCxYw06YuGhSaz09Z5qlUYpe0jorj6S_vErHA3A&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA3YyYJqoZLYyIve_VcZitPnBl_DC0pBYC0BHu0W0w9BuiKI16NUDPQyM-v838yImaJgNSFbWRf-iOl5jMUt7NZbuFqk9jgJZ8Q8Iu-aEaQnJAq6ZOysr9biZjR8jOZ5G-EhDZwO92sE2W1TjAnKaCEuG9GhQgaNMOR4IccCzeNVKDag_s3SBEjg&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA73COD9o6OhlkwTDi1ie4g8BKFe8W16e7_J6BJVJOMOhcyqBZ7yA_NNnr57iNxonFXZwP10EsTvlWJ76MK55VrDtFJi2Ti2ldcslQ6JKVJl2pDrN6Ym81gb6mNWOwyVH6EhAa5w8eWr2d81_ONn7S4xUqGhRD510HPerJZWo6ylostODpCc8MRg&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAW2um_8Fu6BRJolbM30Mf4w5rkHikNMV8Y2ScbnPIHfEp-1K0E8t4FbEpDL8V5vDx0TIP6yuzRObb0B5PAy3cwjRQAQ49J2buH84tg9KH4n3HCktaHSkiyzvie0uNGH1aEhC_pqatMddYIJQk7jLZyGukGhQuxfcA0y6aDlWvUKCoNFihmuVUVg&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAT1yzc0tRb84RJPbXCF8EkfJSEe5q7kucAzF30eM-dovDrQhvuC7AUOd4JWnrpW_64eNfPFj0zjr8QI6qE8pMe_Qw831Ak46Zaaaie3SeDECG5JeUboIP4Klg0qkGHDUdEhD7CiC5E7NhHBxtj1wiCSN5GhQ-jOc8sn5W3ltz4ZqJEYTKIApQ5g&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    // "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAKOzI9WkxxJtA5r8HXuRZdorIeplP3NtlfndmBedLZGDf9KsOgbpeqCrBEBbHDgTLf7uWGjGDNt-Yk5Des7w2VCQPoedM_uT7JF6ctg4DUSLlI0GIO2p4XlYPj3vpXmDjEhBrTUz2bN_i2uhwlw0_4_X0GhQ-Wmu5K3ouD64TKy9nOUpaseEvCA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAg-3cVsT-SqWh_SkaU7ypnhljR3gzP-dgcr0kHIrOoMuNaDPOsNdO-cNl0OAMxNfgapj7h1RLQoFc5TJBRT0zIYSkdYIJ33RWtv2d7TVf0OwdV3MtVI6P6rgxIivfD_FdEhATZQpD2stO0mJ1i1RLY_DZGhQug6Z64latnAtnnqEAoBKlxA3NEA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAHYMDNZSmB2lLBvT049j3CqRhk3hIQJLQUb5uQADPutSfSjPOY59CeJkJes1uFbh5OXCuhGVGp6V_MK4makOR-SRrZM7r-IYENMMYWCaNukXRiGYgs67w8vsSKhIMyxGjEhAHoRK6-vn64Ezc8EvZ57QZGhTKtmQHQkhHiV_vokHXWOSo-BdLtw&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA-zOkrNxK_oTUffu7f4DX2t6M_01t5ICvkltvz1J_42tLzCupCiPv1kg5urFghksUf9eNVaMONSnR8xy5zDe0Uoqc0fS0tgxz4F7mmMJyjCGb6TIxI9UfmfynkTh51SRcEhDvlC7tNWhnlWGPBJC7QSk6GhSHtKfeC-5nUkga7rAf7c7HeDAWQg&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA8RZruryNjF3gucaQl3JLAYklGUUKC8_VHbG5wlwuQpvHIH_7lu2Po6HO4iM1ySV1ug18dduL_vxBNs-jlfxwzbO6q9wf9bVpeQSijCu0Frk9-PPto0BcDlQAwwuumGO6EhBY1Hh_ToWb7dR-Ny48OfnyGhT1dJzRWwGRu6vc-wGvvAr8gNUsiA&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAz21uk8T72it5UY5VjrIaQgq3ccYmdNP6tXkNAcbYQ_toJsBERnmw0zBHLxBHGO_-1dx-NdF4558TUMQ2QuOlY_nDRuBbdWz31HIlSfjwHd5J4AFiaxyY5BVe1jrhZl3pEhDSqN2aEqL9-sNxQ_u6RQp-GhRbUYzibYc2npQrrWaahtw-9ZsCuQ&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAmoxaNvEcSW6Ab2h_SxdAN6yl0CYpieSQdeZa-wgZ-rSjTjMJVr5xs5g1qZA54Y0XWpSTiQSbPRRTaqyA2JbfSUTliZvsh35GDG5pD9G_DF6-p_rw_CjUBTnCMTamaK8zEhAABqq1NI92VfLd312bVYkqGhT8pVJRE1awJfP6EIM-jEgrU8-D4w&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAApfaZmKg0YZroJRNei7gxQp6Ysnl6ScC74AL3MXLtlJIE0Ip_I0y6q5xZUBIdYCAd1SW5-VTAv0KhJLcmjzAFBfr3sM7breSMHzuj7utt5YfSWAKi_fF01_-v_NGkSVOdEhA-SH2qCrCRNMM2yAPD8P7vGhQyBmKYxVNhIUpKES7VSgB_rUmDNw&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA1M7NVrLQVtsBrxgewsydzVELPgDBzDBxM_y4YYvswklhGHfvBVwnD7mqeX0srFoF3sXiVVlNduXia1TFzD1NXOoZblrJqrH7CL4ljGXnr-ZFwozCN-g6eu2nTFrBtXc1EhDQ-54KjB_w88lpSjqPdg5IGhRbRv7A-l1CoZ3dPVsqZ2rgkN0eLQ&key=AIzaSyCT_9VdFj8ZNJoE0CP0HZgy8cXDN56qBOA"
  ];

  const barArray = [];
  let counter = 0;

  for (i = 0; i < linkArray.length; i++) {
    (function(i) {
      request(linkArray[i], function(err, response, body) {
        if (err) {
          return err;
        } else if (response) {
          const barjson = JSON.parse(body);
          User.findOne({ likedArray: barjson.candidates[0].name }).then(
            function(likedBar) {
              if (_.isEmpty(likedBar)) {
                User.findOne({
                  disLikedArray: barjson.candidates[0].name
                }).then(function(dislikedBar) {
                  if (_.isEmpty(dislikedBar)) {
                    let barObj = {
                      name: barjson.candidates[0].name,
                      address: barjson.candidates[0].formatted_address,
                      pic: picArray[i]
                    };
                    if (
                      typeof barjson.candidates[0].opening_hours !== "undefined"
                    ) {
                      barObj.open =
                        barjson.candidates[0].opening_hours.open_now;
                    } else {
                      barObj.open = "Unknowns";
                    }
                    if (typeof barjson.candidates[0].rating !== "undefined") {
                      barObj.rating = barjson.candidates[0].rating;
                    } else {
                      barObj.rating = "N/A";
                    }
                    barArray.push(barObj);
                    if (counter + barArray.length === linkArray.length) {
                      res.json(barArray);
                    }
                  } else {
                    counter++;
                  }
                });
              } else {
                counter++;
              }
            }
          );
        }
      });
    })(i);
  }
}

module.exports = router;
