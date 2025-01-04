const router = require("express").Router();

router.get("/posts", async(req, res) => {
  res.end();
});
router.get("/posts/:id", async(req, res) => {});
router.post("/posts", async(req, res) => {});
router.put("/posts/:id", async(req, res) => {});
router.delete("/posts/:id", async(req, res) => {});

module.exports = router;