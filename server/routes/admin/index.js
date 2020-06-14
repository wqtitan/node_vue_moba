module.exports = (app) => {
  const express = require("express");
  const AdminUser = require("../../models/AdminUser");
  const jwt = require("jsonwebtoken");
  const authMiddleware = require("../../middleware/auth");
  const resourceMiddleware = require("../../middleware/resource");
  const multer = require("multer");
  const assert = require("http-assert");
  const upload = multer({ dest: __dirname + "/../../uploads" });
  const router = express.Router({
    mergeParams: true,
  });

  router.post("/", async (req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model);
  });
  router.put("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });
  router.delete("/:id", async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body);
    res.send({
      seccess: true,
    });
  });
  router.get("/", async (req, res) => {
    const queryOptions = {};
    if (req.Model.modelName === "Category") {
      queryOptions.populate = "parent";
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100);
    res.send(items);
  });
  router.get("/:id", async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model);
  });

  // app.use("/", authMiddleware(), resourceMiddleware(), router);
  //
  app.use("/admin/api/rest/:resource", authMiddleware(), resourceMiddleware(), router);
  app.post("/admin/api/upload", authMiddleware(), upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:4000/uploads/${file.filename}`;
    res.send(file);
  });

  app.post("/admin/api/login", async (req, res) => {
    const { username, password } = req.body;
    // 根据用户名找用户

    const user = await AdminUser.findOne({ username }).select("+password");
    assert(user, 422, "用户不存在");

    // 校验密码
    const isValid = require("bcrypt").compareSync(password, user.password);
    assert(isValid, 422, "密码错误");

    // 返回token

    const token = jwt.sign({ id: user._id }, app.get("secret"));
    res.send({ token });
  });

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
  });
};
