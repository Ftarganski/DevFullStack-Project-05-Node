const Brand = require("../models/Brand");
const { Sequelize } = require("sequelize");
const GenericController = require("./GenericController.js");
const Op = Sequelize.Op;

class BrandController extends GenericController{
  constructor(){
    super();
  }

  async getBrands(params) {
    try{
      let result;
      const pagination = this.generatePagination(params),
            limit = pagination[0],
            page = pagination[1];

      const paramsLimit = {
        offset: page * limit,
        limit: parseInt(limit),
      };
      const order = this.generateOrder(params);

      if (params.q) {
        result = await Brand.findAll({
          where: {
            name: {
              [Op.like]: `%${params.q.toLowerCase()}%`,
            },
          },
          ...order,
          ...paramsLimit,
        });
      } else {
        result = await Brand.findAll({
          ...order,
          ...paramsLimit
        });
      }
      return {
        status: 200,
        result: result
      };
    } catch (err) {
      return {
        status: 500,
        result: "Um erro genérico ocorreu, contate o administrador do sistema."
      };
    }
  }

  async getBrand(id) {
    try {
      const result = await Brand.findByPk(id);
      return {
        status: 200,
        result: result
      };
    } catch (err) {
      return {
        status: 500,
        result: "Um erro genérico ocorreu, contate o administrador do sistema.",
      };
    }
  }

  async createBrand(data){
    try{
      const brand = await Brand.create(data);
      return {
        status: 200,
        result: `Marca ${brand.id} criada com sucesso!!!`
      };
    }catch(err){
      return {
        status: 500,
        result: 'Um erro genérico ocorreu, contate o administrador do sistema.'
      }
    }
  }

  async updateBrand(id, data) {
    try{
      await Brand.update(data, {
        where: {
          id: id
        }
      });
      return {
        status: 200,
        result: `Marca ${id} ataualizada com sucesso!`
      };
    }catch(err){
      return {
        status: 500,
        result: 'Um erro genérico ocorreu, contate o administrador do sistema.'
      }
    }
  }

  async deleteBrand(id) {
    try{
      await Brand.destroy({
        where: {
          id: id
        }
      });
      return {
        status: 200,
        result: `Marca ${id} deletada com sucesso!`,
      };
    }catch(err){
      return {
        status: 500,
        result: 'Um erro genérico ocorreu, contate o administrador do sistema.'
      }
    }
  }
}

module.exports = BrandController;