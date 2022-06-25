const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    //Listar todas as categorias
      const categories = await CategoriesRepository.findAll();
      response.json(categories)
  }

  // Error Hanlder (Middleware Express) --> Manipulador de erros

  async store(request, response) {
    const { name } = request.body;

    if(!name){
      return response.status(400).json({ error: 'Name is required!'});
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }
}

module.exports = new CategoryController();
