const productSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'imagePath',
        title: 'Image Path',
        type: 'url',
        options: {
            isHighlighted: true,
              },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'quantity',
        title: 'quantity',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'discount price',
        title: 'Discount Price',
        type: 'number',
      },
    ],
    };
  
  export default productSchema;
  