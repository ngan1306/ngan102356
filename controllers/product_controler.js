const Product = require("../model/product");

class ProductController {
  static async create(req, res) {
    let { name, description, price, stock } = req.body;
    try {
      let product = await Product.create({ name, description, price, stock });
      res.redirect("/products");
    } catch (error) {
      res.render("product_new");
    }
  }
  static async new(req, res) {
    console.log("new");
    res.render("product_new");
  }
  static async index(req, res) {
    let q = req.query.q;
    let page = parseInt(req.query.page);
    let skip = (page - 1) * 5;
    let products;
    if (q) {
      products = await Product.find({ name: { $regex: q, $options: "i" } });
    } else {
      products = await Product.find().skip(skip).limit(5);
    }

    res.render("product", { products });
  }

  static async delete(req, res) {
    console.log(req.params.id);
    let id = req.params.id;
    let product = await Product.deleteOne({ _id: id });
    res.redirect("/products");
  }
  static async edit(req, res) {
    console.log(req.params.id);
    let id = req.params.id;
    let product = await Product.deleteOne({ _id: id });
    res.redirect("/products");
  }
}

module.exports = ProductController;