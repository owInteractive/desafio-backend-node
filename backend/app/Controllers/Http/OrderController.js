'use strict'

const Order = use('App/Models/Order')

class OrderController {
  async store ({ request }) {
    const order = await Order.create(request.data);

    return order;
  }

  async index() {
    const orders = await Order.all();

    return orders;
  }

  async show ({ params }) {
    const order = await Order.findOrFail(params.id);

    return order;
  }

  async destroy ({ params }) {
    const order = await Order.findOrFail(params.id);

    await order.delete();
  }
}

module.exports = OrderController
