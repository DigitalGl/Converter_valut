function quantitiesByCategories(products) {
    return products.reduce((qtysByCategories, product) => {
        const { category, quantity } = product
        qtysByCategories[product.category] =
            (qtysByCategories[product.category] || 0) + product.quantity

        return qtysByCategories
    }, {})
}


const inputProducts = [
    {
        title: 'Phone case',
        price: 23,
        quantity: 2,
        category: 'Accessories',
    },
    {
        title: 'Android phone',
        price: 150,
        quantity: 1,
        category: 'Phones',
    },
    {
        title: 'Headphones',
        price: 78,
        quantity: 1,
        category: 'Accessories',
    },
    {
        title: 'Sport Watch',
        price: 55,
        quantity: 2,
        category: 'Watches',
    },
]

console.log(quantitiesByCategories(inputProducts))
/* {
    Accessories: 3,
    Phones: 1,
    Watches: 2
} */


console.log(5 || 0);
