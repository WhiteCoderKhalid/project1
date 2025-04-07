import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Pizza Category
  {
    id: 'pizza-1',
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, basil, olive oil',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    category: 'Pizza'
  },
  {
    id: 'pizza-2',
    name: 'Pepperoni Pizza',
    description: 'Spicy pepperoni, mozzarella, tomato sauce',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
    category: 'Pizza'
  },
  {
    id: 'pizza-3',
    name: 'BBQ Chicken Pizza',
    description: 'Grilled chicken, BBQ sauce, red onions, cilantro',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    category: 'Pizza'
  },
  {
    id: 'pizza-4',
    name: 'Vegetarian Pizza',
    description: 'Bell peppers, mushrooms, olives, onions',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
    category: 'Pizza'
  },
  {
    id: 'pizza-5',
    name: 'Hawaiian Pizza',
    description: 'Ham, pineapple, mozzarella cheese',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    category: 'Pizza'
  },
  {
    id: 'pizza-6',
    name: 'Supreme Pizza',
    description: 'Pepperoni, sausage, vegetables, extra cheese',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a',
    category: 'Pizza'
  },
  {
    id: 'pizza-7',
    name: 'Buffalo Pizza',
    description: 'Spicy buffalo chicken, blue cheese, ranch',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e',
    category: 'Pizza'
  },

  // Burgers Category
  {
    id: 'burger-1',
    name: 'Classic Cheeseburger',
    description: 'Beef patty, cheddar, lettuce, tomato, pickles',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    category: 'Burgers'
  },
  {
    id: 'burger-2',
    name: 'Bacon Deluxe',
    description: 'Beef patty, bacon, cheese, caramelized onions',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b',
    category: 'Burgers'
  },
  {
    id: 'burger-3',
    name: 'Mushroom Swiss',
    description: 'Beef patty, sautéed mushrooms, swiss cheese',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9',
    category: 'Burgers'
  },
  {
    id: 'burger-4',
    name: 'Veggie Burger',
    description: 'Plant-based patty, avocado, sprouts',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707',
    category: 'Burgers'
  },
  {
    id: 'burger-5',
    name: 'Spicy Jalapeño',
    description: 'Beef patty, jalapeños, pepper jack, chipotle mayo',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5',
    category: 'Burgers'
  },
  {
    id: 'burger-6',
    name: 'BBQ Ranch',
    description: 'Beef patty, BBQ sauce, ranch, onion rings',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6',
    category: 'Burgers'
  },
  {
    id: 'burger-7',
    name: 'Double Trouble',
    description: 'Double beef patty, double cheese, special sauce',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
    category: 'Burgers'
  },

  // Sushi Category
  {
    id: 'sushi-1',
    name: 'California Roll',
    description: 'Crab, avocado, cucumber, tobiko',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    category: 'Sushi'
  },
  {
    id: 'sushi-2',
    name: 'Spicy Tuna Roll',
    description: 'Fresh tuna, spicy mayo, cucumber',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754',
    category: 'Sushi'
  },
  {
    id: 'sushi-3',
    name: 'Rainbow Roll',
    description: 'California roll topped with assorted sashimi',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56',
    category: 'Sushi'
  },
  {
    id: 'sushi-4',
    name: 'Dragon Roll',
    description: 'Eel, cucumber, avocado, eel sauce',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db',
    category: 'Sushi'
  },
  {
    id: 'sushi-5',
    name: 'Salmon Nigiri',
    description: 'Fresh salmon over seasoned rice',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa',
    category: 'Sushi'
  },
  {
    id: 'sushi-6',
    name: 'Tempura Roll',
    description: 'Shrimp tempura, avocado, cucumber',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6',
    category: 'Sushi'
  },
  {
    id: 'sushi-7',
    name: 'Vegetable Roll',
    description: 'Assorted fresh vegetables, avocado',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
    category: 'Sushi'
  },

  // Desserts Category
  {
    id: 'dessert-1',
    name: 'Chocolate Cake',
    description: 'Rich chocolate layers with ganache',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    category: 'Desserts'
  },
  {
    id: 'dessert-2',
    name: 'Tiramisu',
    description: 'Classic Italian coffee-flavored dessert',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    category: 'Desserts'
  },
  {
    id: 'dessert-3',
    name: 'Cheesecake',
    description: 'New York style with berry compote',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad',
    category: 'Desserts'
  },
  {
    id: 'dessert-4',
    name: 'Apple Pie',
    description: 'Homemade with vanilla ice cream',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1568571780765-9276235f1945',
    category: 'Desserts'
  },
  {
    id: 'dessert-5',
    name: 'Crème Brûlée',
    description: 'Classic French vanilla custard',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc',
    category: 'Desserts'
  },
  {
    id: 'dessert-6',
    name: 'Lava Cake',
    description: 'Warm chocolate cake with molten center',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
    category: 'Desserts'
  },
  {
    id: 'dessert-7',
    name: 'Ice Cream Sundae',
    description: 'Three scoops with toppings and whipped cream',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
    category: 'Desserts'
  },

  // Drinks Category
  {
    id: 'drink-1',
    name: 'Fresh Lemonade',
    description: 'Homemade with real lemons',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e',
    category: 'Drinks'
  },
  {
    id: 'drink-2',
    name: 'Iced Coffee',
    description: 'Cold brew with optional milk',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
    category: 'Drinks'
  },
  {
    id: 'drink-3',
    name: 'Smoothie',
    description: 'Mixed berries and banana',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625',
    category: 'Drinks'
  },
  {
    id: 'drink-4',
    name: 'Milkshake',
    description: 'Vanilla, chocolate, or strawberry',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699',
    category: 'Drinks'
  },
  {
    id: 'drink-5',
    name: 'Green Tea',
    description: 'Organic Japanese sencha',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc',
    category: 'Drinks'
  },
  {
    id: 'drink-6',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed daily',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423',
    category: 'Drinks'
  },
  {
    id: 'drink-7',
    name: 'Coconut Water',
    description: 'Natural and refreshing',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054',
    category: 'Drinks'
  },

  // Salads Category
  {
    id: 'salad-1',
    name: 'Caesar Salad',
    description: 'Romaine, parmesan, croutons, caesar dressing',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
    category: 'Salads'
  },
  {
    id: 'salad-2',
    name: 'Greek Salad',
    description: 'Mixed greens, feta, olives, red onion',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
    category: 'Salads'
  },
  {
    id: 'salad-3',
    name: 'Cobb Salad',
    description: 'Chicken, bacon, egg, avocado, blue cheese',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf',
    category: 'Salads'
  },
  {
    id: 'salad-4',
    name: 'Quinoa Bowl',
    description: 'Quinoa, roasted vegetables, chickpeas',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'Salads'
  },
  {
    id: 'salad-5',
    name: 'Asian Chicken Salad',
    description: 'Grilled chicken, mandarin oranges, almonds',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    category: 'Salads'
  },
  {
    id: 'salad-6',
    name: 'Caprese Salad',
    description: 'Tomatoes, fresh mozzarella, basil, balsamic',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5',
    category: 'Salads'
  },
  {
    id: 'salad-7',
    name: 'Mediterranean Bowl',
    description: 'Falafel, hummus, tabbouleh, pita',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'Salads'
  }
];