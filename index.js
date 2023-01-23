const server = require("./api/server");
// const express = require("express");

const port = 9000;

// START YOUR SERVER HERE
// server.use(express.json());

// var id = 0;

// var getId = () => ++id;

// var schema = [
//   { id: getId(), name: "Furkan Akif", bio: "Having Fun" },
//   { id: getId(), name: "Gregor Samsa", bio: "Dönüsüm" },
//   { id: getId(), name: "Martin Eden", bio: "Jack London" },
//   { id: getId(), name: "Froodo Baggins", bio: "Hobbitt" },
// ];

// server.get("/schema", (req, res) => {
//   res.status(200).json(schema);
// });

// server.get("/schema/:id", (req, res) => {
//   res.status(200).json(schema.find((response) => response.id == req.params.id));
// });

// server.post("/schema", (req, res) => {
//   schema.push({ id: getId(), name: req.body.name, bio: req.body.bio });

//   res.status(201).json(schema);
// });

// server.put("/schema/:id", (req, res) => {
//   schema = schema.map((data) =>
//     data.id == req.params.id
//       ? { ...data, name: req.body.name, bio: req.body.bio }
//       : data
//   );
//   res.status(200).json(schema);
// });

// server.delete("/schema/:id", (req, res) => {
//   schema = schema.filter((response) => response.id != req.params.id);
//   res.status(200).json(schema);
// });

server.listen(port, () => console.log("API running on port 9000 "));
