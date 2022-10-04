console.log("///////////////////////////////////////////")
console.log("          Lukita's Stationary Store        ")
console.log("///////////////////////////////////////////")


const inventory = []

// Create Item

const createItem = (product) => {
    inventory.push(product)
}

//Set Item
// Nota do desenvolvedor: Queria separar os itens em outro arquivo e criar uma função como chamar, não pesquisei por que acho que é um passo a mais no que voce quer, então só deixo o ponto minha curiosidade.
createItem ({
    barcode: '1145965872',
    itemName: 'Pencil 2B',
    quantity: '3000',
    category: 'Pencil'
})
createItem ({
    barcode: '1122254584',
    itemName: 'Pink Notebook',
    quantity: '50',
    category: 'Notebook'
})
createItem ({
    barcode: '1124588963',
    itemName: 'Blue Notebook',
    quantity: '150',
    category: 'Notebook'
})
createItem ({
    barcode: '4758569632',
    itemName: 'Red Notebook',
    quantity: '60',
    category: 'Notebook'
})
createItem ({
    barcode: '9856564232',
    itemName: 'scale',
    quantity: '30',
    category: 'measure'
})
createItem ({
    barcode: '7894562587',
    itemName: 'sharpener',
    quantity: '30',
    category: 'Sharpener'
})
createItem ({
    barcode: '9575327468',
    itemName: 'Erraser',
    quantity: '230',
    category: 'Erraser'
})
createItem ({
    barcode: '4565589657',
    itemName: 'Post-It',
    quantity: '55',
    category: 'Notes'
})
createItem ({
    barcode: '88566547899',
    itemName: 'Pink Pen',
    quantity: '75',
    category: 'Pen'
})
createItem ({
    barcode: '4567891235',
    itemName: 'Blue Pen',
    quantity: '1530',
    category: 'Pen'
})
createItem ({
    barcode: '6549873216',
    itemName: 'Black Pen',
    quantity: '700',
    category: 'Pen'
})
createItem ({
    barcode: '6549873216',
    itemName: 'A4 sheet',
    quantity: '500',
    category: 'Sheet'
})

// Remove Itens

const removeProducts = (index) => {
    inventory.splice(index, 1)
}
// removeProducts(0)
//Observação do desenvolvedor, eu removi corretamente porém o index não foi removido, ele subiu um, ou seja o "1" virou "0" e assim por diante


//Update Itens 

const updateProduct = ({index, attribute, newValue}) => {
    const product = inventory[index]
    product[attribute] = newValue
    console.log(product)
}

// updateProduct({index:0, attribute: "barcode", newValue: "0000000000"})


//Read Itens
    
const listProducts = () => {
    console.table(inventory)
}

// listProducts()

//Select Item
const selectUsers = (index) => {
    console.log(inventory[index])
}

// selectUsers(0)



/////////////////////////////////////////////////////
//Exemples
// createItem ({
//     barcode: '10num',
//     itemName: '',
//     quantity: '',
//     category: ''
// })
// listProducts()
// removeProducts(0)
// listProducts()
// updateProduct({index:0, attribute: "barcode", newValue: "0000000000"})
// selectUsers(10)