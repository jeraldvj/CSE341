const ginaRoute = (req, res) => {
    res.send("Gina Vasquez");
  };

const tomyRoute = (req, res) => {
    res.send("Tomy Vasquez");
  };
const garyRoute = (req, res) => {
    res.send("Gary Vasquez");
};

module.exports = {
    ginaRoute,
    tomyRoute,
    garyRoute,
}