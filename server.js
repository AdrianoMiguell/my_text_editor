const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3050;

app.use(express.static(path.join(__dirname, "/")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/img/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", upload.single("input_image"), (req, res) => {
  console.log("Arquivo enviado com sucesso!");
  // res.render("/");
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta $http://localhost:${port}`);
});
