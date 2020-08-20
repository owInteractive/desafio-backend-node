'use strict'

const Category = use('App/Models/Category')

class CategoryController {
  async store ({ request }) {
    const category = await Category.create(request.data);

    return category;
  }

  async index() {
    const category = await Category.all();

    return category;
  }

  async show ({ params }) {
    const category = await Category.findOrFail(params.id);

    return category;
  }

  async destroy ({ params }) {
    const category = await Category.findOrFail(params.id);

    await category.delete();
  }
}

module.exports = CategoryController
