/* Yak & Spice — full menu data.
   Edit prices/descriptions here; menu.html renders from this file.
   diet: "veg" | "vegan" | "nonveg" */
const MENU = [
  {
    section: "Appetizers",
    items: [
      { icon: "leaf", name: "Palak Chaat", price: "$10.99", desc: "Crispy fried spinach leaves tossed with sweet yogurt and tangy tamarind sauce.", diet: "veg" },
      { icon: "samosa", name: "Potato & Peas Samosa", price: "$8.99", desc: "Pastry filled with potato and green peas, spiced with fresh ginger and green chili.", diet: "vegan" },
      { icon: "pakora", name: "Vegetable Pakora", price: "$8.99", desc: "Chickpea-battered vegetables fried with green chili, ginger, and fresh coriander.", diet: "vegan" },
      { icon: "samosa", name: "Samosa Chaat", price: "$9.99", desc: "Crushed samosa topped with garbanzo beans, sweet yogurt, and tamarind-mint chutney.", diet: "veg" },
      { icon: "pani_puri", name: "Pani Puri", price: "$8.99", desc: "Crisp puffed shells filled with spiced potato, tangy tamarind water, and mint.", diet: "vegan" },
      { icon: "papdi_chaat", name: "Papdi Chaat", price: "$8.99", desc: "Crisp wafers layered with potato, chickpeas, yogurt, and tamarind-mint chutney.", diet: "veg" },
      { icon: "shrimp", name: "Malabari Shrimp", price: "$13.49", desc: "South Indian style shrimp simmered in coconut curry with fresh curry leaves.", diet: "nonveg" },
    ],
  },
  {
    section: "Soups",
    items: [
      { icon: "lentil_bowl", name: "Dal Shorba", price: "$6.99", desc: "Red lentil soup blended with warming Himalayan spices.", diet: "veg" },
      { icon: "cream_bowl", name: "Chicken Cream Soup", price: "$6.99", desc: "Chicken stock finished with butter, cracked pepper, and cream.", diet: "nonveg" },
    ],
  },
  {
    section: "Himalayan Momo",
    items: [
      { icon: "momo", name: "Chicken Momo", price: "$13.99", desc: "Steamed dumplings filled with minced chicken, onion, cabbage, and ginger, finished with Himalayan momo spice.", diet: "nonveg" },
      { icon: "momo", name: "Vegetable Momo", price: "$12.99", desc: "Steamed dumplings filled with cabbage, onion, ginger, and mixed vegetables, lightly spiced.", diet: "vegan" },
      { icon: "momo", name: "Cauliflower Momo", price: "$9.99", desc: "Steamed dumplings filled with spiced cauliflower.", diet: "vegan" },
      { sub: "Jhol Momo — served in a warm Himalayan sesame-tomato broth" },
      { icon: "jhol_bowl", name: "Jhol Momo — Chicken", price: "$14.99", diet: "nonveg" },
      { icon: "jhol_bowl", name: "Jhol Momo — Vegetable", price: "$12.99", diet: "vegan" },
    ],
  },
  {
    section: "Himalayan Noodles",
    items: [
      { icon: "noodles", name: "Vegetable Noodles", price: "$13.99", diet: "vegan" },
      { icon: "noodles", name: "Chicken Noodles", price: "$14.99", diet: "nonveg" },
      { icon: "noodles", name: "Mixed Noodles", price: "$15.99", desc: "Chicken, egg, and vegetables stir-fried together.", diet: "nonveg" },
    ],
  },
  {
    section: "From the Clay Oven — Tandoor",
    items: [
      { icon: "drumstick", name: "Tandoori Chicken — Half", price: "$16.99", desc: "Whole chicken marinated in yogurt, spices, and fenugreek leaves with a touch of lemon, roasted in the clay oven.", diet: "nonveg" },
      { icon: "drumstick", name: "Tandoori Chicken — Full", price: "$28.99", diet: "nonveg" },
      { icon: "skewer", name: "Chicken Tikka Boneless", price: "$16.99", desc: "Boneless chicken thigh marinated in spiced yogurt and char-grilled in the tandoor.", diet: "nonveg" },
      { icon: "shrimp", name: "Tandoori Shrimp", price: "$20.99", desc: "Shrimp marinated in spiced yogurt cream, roasted in the clay oven.", diet: "nonveg" },
      { icon: "fish", name: "Tandoori Salmon", price: "$19.99", desc: "Salmon marinated in Himalayan spices, roasted in the clay oven.", diet: "nonveg" },
      { icon: "skewer", name: "Lamb Seekh Kabab", price: "$19.99", desc: "Skewered minced lamb blended with fresh herbs and spices.", diet: "nonveg" },
      { icon: "skewer", name: "Lamb Boti Kabab", price: "$19.99", desc: "Chunks of lamb marinated in yogurt and spices, char-grilled.", diet: "nonveg" },
      { icon: "tandoor", name: "Mixed Tandoori Platter", price: "$25.49", desc: "Two pieces chicken tikka, two pieces lamb seekh kabab, two pieces tandoori shrimp.", diet: "nonveg" },
      { icon: "paneer", name: "Kashmiri Paneer Tikka", price: "$16.99", desc: "House-made paneer marinated in spiced yogurt and fenugreek, roasted in the clay oven.", diet: "veg" },
      { icon: "floret", name: "Tandoori Vegetables", price: "$16.99", desc: "Broccoli, cauliflower, and bell pepper marinated and roasted in the clay oven.", diet: "veg" },
    ],
  },
  {
    section: "From the Curry",
    items: [
      { icon: "curry_bowl", name: "Butter Chicken", price: "$18.99", desc: "Tandoor-roasted chicken simmered in a velvety tomato-butter sauce.", diet: "nonveg" },
      { icon: "curry_bowl", name: "Chicken Tikka Masala", price: "$18.99", desc: "Grilled chicken tikka simmered in a spiced tomato-cream sauce.", diet: "nonveg" },
      { icon: "curry_bowl", name: "Himalayan Chicken Curry", price: "$17.99", desc: "Chicken slow-cooked in onion, tomato, and Himalayan spices.", diet: "nonveg" },
      { sub: "Chicken — choice of style" },
      { icon: "curry_bowl", name: "Chicken Saag / Vindaloo", price: "$18.99", desc: "Choice of spinach-based Saag or tangy Vindaloo preparation.", diet: "nonveg" },
      { icon: "drumstick", name: "Himalayan Goat Curry", price: "$19.99", desc: "Bone-in goat simmered with onion, tomato, and Himalayan spices in a yogurt-fenugreek base.", diet: "nonveg" },
      { icon: "curry_bowl", name: "Lamb Curry — Rogan Josh / Vindaloo / Saag", price: "$19.49", desc: "Choice of Kashmiri Rogan Josh, tangy Vindaloo, or spinach-based Saag preparation.", diet: "nonveg" },
    ],
  },
  {
    section: "Seafood",
    items: [
      { icon: "fish", name: "Malabari Fish Curry", price: "$18.99", desc: "Simmered in onion, tomato, South Indian spices, and coconut milk.", diet: "nonveg" },
      { icon: "shrimp", name: "Goa Shrimp Curry", price: "$20.99", desc: "Shrimp simmered with curry leaves, mustard seed, and coconut milk.", diet: "nonveg" },
      { icon: "shrimp", name: "Shrimp Vindaloo", price: "$20.99", desc: "Shrimp and potato in a tangy, spiced vindaloo sauce.", diet: "nonveg" },
    ],
  },
  {
    section: "Vegetarian Curry",
    items: [
      { icon: "floret", name: "Aloo Gobi", price: "$14.99", desc: "Potato and cauliflower sautéed with onion and tomato sauce.", diet: "vegan" },
      { icon: "okra", name: "Bhindi Masala", price: "$14.99", desc: "Okra sautéed with onion and tomato in Jaipuri masala.", diet: "vegan" },
      { icon: "paneer", name: "Palak Paneer", price: "$15.99", desc: "House-made cheese simmered in creamy spinach with butter, onion, and tomato.", diet: "veg" },
      { icon: "leaf", name: "Mixed Vegetable Curry", price: "$14.99", desc: "Five seasonal vegetables simmered in a light Himalayan curry sauce.", diet: "vegan" },
    ],
  },
  {
    section: "Breads & Rice",
    items: [
      { sub: "Breads" },
      { icon: "naan", name: "Plain Naan", price: "$5.49", desc: "Classic leavened bread, baked fresh in the clay oven.", diet: "veg" },
      { icon: "naan", name: "Butter Naan", price: "$6.00", desc: "Clay oven-baked naan brushed with butter.", diet: "veg" },
      { icon: "naan", name: "Lachha Paratha", price: "$6.49", desc: "Multi-layered whole wheat flatbread, flaky and lightly buttered.", diet: "veg" },
      { icon: "naan", name: "Aloo Paratha", price: "$7.00", desc: "Whole wheat flatbread stuffed with spiced mashed potato.", diet: "veg" },
      { icon: "naan", name: "Onion Kulcha", price: "$6.99", desc: "Leavened flatbread stuffed with spiced onion, baked in the clay oven.", diet: "veg" },
      { icon: "naan", name: "Tandoori Roti", price: "$5.99", desc: "Whole wheat flatbread baked in the clay oven.", diet: "vegan" },
      { sub: "Rice" },
      { icon: "rice_bowl", name: "Steamed Rice", price: "$5.99", desc: "Fragrant basmati rice.", diet: "vegan" },
    ],
  },
  {
    section: "Biryani",
    items: [
      { icon: "rice_bowl", name: "Hyderabadi Goat / Lamb Biryani", price: "$19.99", desc: "Tender goat or lamb layered with fragrant basmati rice, slow-cooked in the traditional Hyderabadi dum style.", diet: "nonveg" },
      { icon: "rice_bowl", name: "Hyderabadi Chicken Biryani", price: "$18.99", desc: "Marinated chicken layered with fragrant basmati rice, slow-cooked in the traditional Hyderabadi dum style.", diet: "nonveg" },
      { icon: "rice_bowl", name: "Shrimp Biryani", price: "$20.99", desc: "Shrimp layered with fragrant basmati rice, slow-cooked in the traditional Hyderabadi dum style.", diet: "nonveg" },
      { icon: "rice_bowl", name: "Hyderabadi Vegetable Biryani", price: "$16.99", desc: "Mixed vegetables layered with fragrant basmati rice, slow-cooked in the traditional Hyderabadi dum style.", diet: "veg" },
      { icon: "rice_bowl", name: "Awadhi Vegetable Biryani", price: "$17.99", desc: "Mixed vegetables and paneer layered with basmati rice, slow-cooked with a spiced yogurt marinade.", diet: "veg" },
      { sub: "Side Orders" },
      { icon: "cream_bowl", name: "Raita", price: "$4.99", desc: "Cooling yogurt with cucumber and light spices.", diet: "veg" },
      { icon: "leaf", name: "Kuchumba Salad", price: "$8.99", desc: "Fresh chopped cucumber, tomato, and onion with lime.", diet: "vegan" },
    ],
  },
  {
    section: "Beverages",
    items: [
      { icon: "lassi", name: "Mango Lassi", price: "$6.99", desc: "Chilled yogurt blended with sweet mango.", diet: "veg" },
      { icon: "chai_cup", name: "Masala Chaye", price: "$4.50", desc: "Black tea simmered with milk and warming spices.", diet: "veg" },
      { icon: "lemonade", name: "Lemonade", price: "$4.99", desc: "Freshly squeezed and lightly sweetened.", diet: "vegan" },
      { icon: "soda_bottle", name: "Sprite / Coke / Fanta", price: "$3.99", diet: "vegan" },
      { icon: "water_bottle", name: "Mineral Water", price: "$3.00", diet: "vegan" },
    ],
  },
  {
    section: "Dessert",
    items: [
      { icon: "rasmalai", name: "Rasmalai", price: "$5.99", desc: "Soft cheese discs soaked in sweetened, cardamom-scented milk.", diet: "veg" },
      { icon: "gulab_jamun", name: "Gulab Jamun", price: "$5.99", desc: "Warm milk dumplings soaked in rose-cardamom syrup.", diet: "veg" },
      { icon: "kheer", name: "Rice Pudding", price: "$5.99", desc: "Basmati rice slow-simmered in sweetened milk with cardamom.", diet: "veg" },
      { icon: "kulfi", name: "Kulfi", price: "$6.99", desc: "Dense, creamy traditional Indian ice cream on a stick.", diet: "veg" },
    ],
  },
];
