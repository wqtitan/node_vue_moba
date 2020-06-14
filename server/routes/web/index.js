module.exports = (app) => {
  const router = require("express").Router();
  const mongoose = require("mongoose");
  // const Article = require("../../models/Article");
  const Category = mongoose.model("Category");
  const Article = mongoose.model("Article");
  router.get("/news/init", async (req, res) => {
    const parent = await Category.findOne({
      name: "新闻分类",
    });
    const cats = await Category.find()
      .where({
        parent: parent,
      })
      .lean();
    const newsTitles = [
      "【优化预告】游戏内更新机制优化",
      "寻找“峡谷参谋”丨来线下玩家交流活动，见策划&amp;大神主播，赢专属局内称号",
      "云中君源·梦皮肤海报投票活动开启公告",
      "【预告】三雄会面，山雨欲来？",
      "【S20赛季皮肤爆料】醍醐杖·老夫子",
      "6月14日体验服破浪对决玩法异常公告",
      "6月13日体验服停机更新公告",
      "6月12日体验服停机更新公告",
      "体验服“找朋友”功能及“创意编辑”功能临时维护公告",
      "6月10日体验服停机更新公告",
      "应援KPL春决得好礼，上官婉儿-天狼绘梦者即将开售",
      "【破浪前行吧英雄们】活动开启公告",
      "参与活动免费解锁KPL限定皮肤个人专属购买6折特权",
      "新英雄蒙恬上架，多重好礼等你解锁",
      "应援KPL得好礼，福利清单就绪",
      "虎牙明星主播踢馆名校战队，峡谷高材生与学霸的荣耀对决",
      "2020年KPL春季赛常规赛最佳阵容及最佳选手评选方式公布",
      "2020年KPL春季赛季后赛赛程赛制公布，5月28日16:00热血开战",
      "【原创内容大赛音乐比赛】优秀作品合集（二）",
      "大众赛事合作赛道全面开启，携手合作伙伴共建王者电竞生态",
    ];
    const newsList = newsTitles.map((title) => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5);
      return {
        categories: randomCats.slice(0, 2),
        title: title,
      };
    });
    await Article.deleteMany({});
    await Article.insertMany(newsList);
    res.send(newsList);
  });

  app.use("/web/api", router);
};
