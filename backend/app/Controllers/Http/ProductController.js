'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async store ({ request }) {
    const product = await Product.create(request.data);

    return product;
  }

  async index() {
    const products = await Product.all();

    return products;
  }

  async show ({ params }) {
    const product = await Product.findOrFail(params.id);

    return product;
  }

  async destroy ({ params }) {
    const product = await Product.findOrFail(params.id);

    await product.delete();
  }
}

module.exports = ProductController
