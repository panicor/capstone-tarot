const app = require("../src/App");
const { PORT } = require("./config/config");

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
