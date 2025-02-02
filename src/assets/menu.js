const menu = {
  categories: [
    {
      name: "Фаст Фуд",
      slug: "fastfood",
      subcategories: [
        {
          name: "Пиццы",
          slug: "pizza",
          items: [
            {
              id: "pizza_bbq",
              name: "BBQ",
              details:
                "Пицца с охотничьими колбасками, ветчиной, грибами, маринованными огурцами, лучком в составе характеризуется идеальным наполнением и невероятной эстетикой.",
              price: 1500,
              image: "bbq.png",
              cookingTime: 15,
              ingredients: ["Тесто", "Соус томатный", "Сыр", "Базилик"],
            },
            {
              id: "pizza_GG",
              name: "GG",
              details:
                "Пицца с охотничьими колбасками, ветчиной, грибами, маринованными огурцами, лучком в составе характеризуется идеальным наполнением и невероятной эстетикой.",
              price: 1500,
              image: "bbq.png",
              cookingTime: 15,
              ingredients: ["Тесто", "Соус томатный", "Сыр", "Базилик"],
            },
            {
              id: "pizza_rrc",
              name: "RRC",
              details:
                "Пицца с охотничьими колбасками, ветчиной, грибами, маринованными огурцами, Пицца с охотничьими колбасками, ветчиной, грибами, маринованными огурцами, Пицца с охотничьими колбасками, ветчиной, грибами, маринованными огурцами, Пицца с охотничьими колбасками, ветчиной, грибами, маринованными огурцами, Пицца с охотничьими колбасками, ветчиной, грибами, маринованными огурцами, Пицца с охотничьими колбасками, ветчиной, грибами, маринованными огурцами, Пицца с охотничьими колбасками, ветчиной, грибами, маринованными огурцами, лучком в составе характеризуется идеальным наполнением и невероятной эстетикой.",
              price: 1500,
              image: "bbq.png",
              cookingTime: 15,
              ingredients: ["Тесто", "Соус томатный", "Сыр", "Базилик"],
            },
            {
              id: "pizza_bolognese",
              name: "Болоньезе",
              details: "Пицца с сыром и базиликом.",
              price: 1500,
              image: "bolognese.png",
              cookingTime: 15,
              ingredients: ["Тесто", "Соус томатный", "Сыр", "Базилик"],
            },
            {
              id: "pizza_pepperoni",
              name: "Pepperoni",
              details: "Классическая пицца с пепперони.",
              price: 1500,
              image: "pepperoni.png",
              cookingTime: 20,
              ingredients: ["Тесто", "Соус томатный", "Сыр", "Пепперони"],
            },
          ],
        },
        {
          name: "Бургеры",
          slug: "burgers",
          items: [
            {
              id: "burger_classic",
              name: "Classic Burger",
              details: "Сочный бургер с говядиной.",
              price: 1000,
              image: "/images/burgers/classic-burger.png",
              cookingTime: 10,
              ingredients: ["Булочка", "Говядина", "Сыр", "Салат"],
            },
          ],
        },
      ],
    },
    {
      name: "Напитки",
      slug: "drinks",
      subcategories: [
        {
          name: "Кофе",
          slug: "coffee",
          items: [
            {
              id: "coffee_cappuccino",
              name: "Cappuccino",
              details: "Эспрессо с молочной пенкой.",
              price: 500,
              image: "/images/drinks/cappuccino.png",
              cookingTime: 5,
              ingredients: ["Эспрессо", "Молоко"],
            },
            {
              id: "coffee_latte",
              name: "Latte",
              details: "Эспрессо с молочным слоем.",
              price: 400,
              image: "/images/drinks/latte.png",
              cookingTime: 5,
              ingredients: ["Эспрессо", "Молоко"],
            },
          ],
        },
      ],
    },
    {
      name: "Десерты",
      slug: "desserts",
      subcategories: [
        {
          name: "Торты",
          slug: "cakes",
          items: [
            {
              id: "cake_chocolate",
              name: "Шоколадный торт",
              details: "Нежный шоколадный торт с кремом.",
              price: 1200,
              image: "/images/desserts/chocolate-cake.png",
              cookingTime: 20,
              ingredients: ["Шоколад", "Мука", "Молоко", "Крем"],
            },
          ],
        },
        {
          name: "Пирожные",
          slug: "pastries",
          items: [
            {
              id: "pastry_cream",
              name: "Кремовый пирог",
              details: "Пирог с мягким кремом и фруктами.",
              price: 800,
              image: "/images/desserts/cream-pastry.png",
              cookingTime: 15,
              ingredients: ["Тесто", "Крем", "Фрукты"],
            },
          ],
        },
      ],
    },
    {
      name: "Горячие блюда",
      slug: "hotdishes",
      subcategories: [
        {
          name: "Паста",
          slug: "pasta",
          items: [
            {
              id: "pasta_carbonara",
              name: "Карбонара",
              details: "Паста с соусом карбонара и беконом.",
              price: 1300,
              image: "/images/hotdishes/carbonara.png",
              cookingTime: 25,
              ingredients: ["Паста", "Бекон", "Сливки", "Яйца"],
            },
          ],
        },
        {
          name: "Мясо",
          slug: "meat",
          items: [
            {
              id: "meat_steak",
              name: "Стейк",
              details: "Мясо, обжаренное до идеальной корочки.",
              price: 2500,
              image: "/images/hotdishes/steak.png",
              cookingTime: 30,
              ingredients: ["Мясо", "Овощи", "Специи"],
            },
          ],
        },
      ],
    },
    {
      name: "Салаты",
      slug: "salads",
      subcategories: [
        {
          name: "Овощные",
          slug: "vegetable",
          items: [
            {
              id: "salad_caesar",
              name: "Цезарь",
              details: "Салат с курицей, сыром и соусом Цезарь.",
              price: 900,
              image: "/images/salads/caesar.png",
              cookingTime: 10,
              ingredients: ["Курица", "Сыр", "Салат", "Соус Цезарь"],
            },
          ],
        },
        {
          name: "Фруктовые",
          slug: "fruit",
          items: [
            {
              id: "salad_fruit",
              name: "Фруктовый салат",
              details: "Салат с разнообразными фруктами.",
              price: 600,
              image: "/images/salads/fruit.png",
              cookingTime: 5,
              ingredients: ["Фрукты", "Йогурт"],
            },
          ],
        },
      ],
    },
  ],
};

export default menu;