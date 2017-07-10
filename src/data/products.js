// Use require to import static images from folder

const products = [
  {
    id: 1,
    name: 'bike one',
    description: 'beach bike nice description - bike one',
    size: [34, 36, 40],
    color: 'white',
    price: 40600,
    image: require('../images/beach-bike.jpg')
  },
  {
    id: 2,
    name: 'bike two',
    description: 'bike against a wall description - bike two',
    size: [40, 41, 42],
    color: 'blue-green',
    price: 21100,
    image: require('../images/blue-green-bike.jpg')
  },
  {
    id: 3,
    name: 'bike three',
    description: 'bike against a fence description - bike three',
    size: [40, 42, 44],
    color: 'colorful',
    price: 16500,
    image: require('../images/colorful-bike.jpg')
  },
  {
    id: 4,
    name: 'bike four',
    description: 'mountain bike on the shore of a lake or something description - bike four',
    size: [30, 32, 34],
    color: 'black-and-blue',
    price: 37500,
    image: require('../images/mountain-bike.jpg')
  },
  {
    id: 5,
    name: 'bike five',
    description: 'old peoples bike description - bike five',
    size: [31, 33, 35],
    color: 'black',
    price: 11500,
    image: require('../images/oma-fiets.jpg')
  },
  {
    id: 6,
    name: 'bike six',
    description: 'bike on a harvested wheat field description - bike six',
    size: [30, 35, 40],
    color: 'white',
    price: 13700,
    image: require('../images/white-bike.jpg')
  },
  {
    id: 7,
    name: 'bike seven',
    description: 'racing bike description - bike seven',
    size: [31, 33, 35],
    color: 'blue',
    price: 41800,
    image: require('../images/racing-bike.png')
  },
  {
    id: 8,
    name: 'bike eight',
    description: 'vintage bike description - bike eight',
    size: [30, 32, 34],
    color: 'blue',
    price: 81100,
    image: require('../images/vintage-bike.png')
  },
]

export default products
