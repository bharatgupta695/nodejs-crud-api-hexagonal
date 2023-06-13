
const createProductController = ({ service }) => ({
    getProduct: ({ data: { id }}) => service.getProduct(id),
    createProduct: ({ data }) => service.createProduct(data),
    updateProduct: ({ data }) => service.updateProduct(data),
    deleteProduct: async ({ data: { id }}) => {
      await service.deleteProduct(id)
      return { status: 204 }
    },
})     

module.exports = createProductController;