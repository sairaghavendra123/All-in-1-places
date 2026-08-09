// Comprehensive Andhra Pradesh Food Heritage Dataset

export const CITIES_DATA = [
  {
    id: 'vijayawada',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    famousFood: 'Challa Punugulu',
    category: 'Street Foods',
    image: '/punugulu.jpg',
    description: 'Golden crispy Challa Punugulu served on a platter with the iconic trio of South Indian chutneys: tempered coconut chutney, spicy green ginger (allam) pachadi, and fiery red chilli chutney.',
    history: 'Originating as a clever way to use leftover fermented batter mixed with sour curd (challa), Vijayawada transformed Punugulu into the city\'s signature street food along the Krishna river.',
    whyFamous: 'Renowned for its golden crunchy outer shell, light fluffy interior, and the irresistible pairing with three distinct chutneys.',
    ingredients: ['Fermented Batter', 'Sour Curd (Challa)', 'Rice Flour', 'Cumin Seeds', 'Chopped Onions & Chillies', 'White Coconut Chutney', 'Green Allam Chutney', 'Red Tomato Chutney'],
    bestTimeToEat: 'Rainy evenings & late afternoons (4 PM - 9 PM)',
    region: 'Andhra Pradesh',
    coordinates: { x: 52, y: 58 } // percentage on AP map
  },
  {
    id: 'bhimavaram',
    city: 'Bhimavaram',
    state: 'Andhra Pradesh',
    famousFood: 'Bhimavaram Bajji Mixture',
    category: 'Street Foods',
    image: '/bhimavaram_bajji_mixture.jpg',
    description: 'Piping-hot sliced mirchi bajjis served alongside a generous mound of crunchy Godavari savory mixture tossed with fried peanuts, finely chopped raw red onions, fresh coriander, lemon juice, and street chat masala.',
    history: 'A famous West Godavari evening street culture staple born in Bhimavaram, combining freshly deep-fried chilli fritters with crunchy spiced mixture served on black trays or newspaper cones.',
    whyFamous: 'Renowned for its mouthwatering contrast of hot, soft sliced mirchi bajjis paired with crunchy peanut-studded mixture and sour lemon tang.',
    ingredients: ['Sliced Hot Mirchi Bajjis', 'Godavari Crunchy Mixture', 'Roasted Peanuts', 'Finely Diced Red Onions', 'Fresh Lemon Wedge', 'Coriander', 'Chat Masala'],
    bestTimeToEat: 'Sunset hours with friends',
    region: 'Andhra Pradesh',
    coordinates: { x: 62, y: 55 }
  },
  {
    id: 'athreyapuram',
    city: 'Athreyapuram',
    state: 'Andhra Pradesh',
    famousFood: 'Athreyapuram Pootharekulu',
    category: 'Traditional Sweet',
    image: '/athreyapuram_pootharekulu.jpg',
    description: 'Iconic GI-tagged Andhra "Paper Sweet" made of translucent ultra-thin rice starch sheets smeared generously with pure cow ghee, folded delicately into rectangular rolls and filled with organic jaggery, powdered sugar, and premium cashews.',
    history: 'Crafted for over 3 centuries in the Godavari riverbank village of Athreyapuram. Skilled artisans roll paper-thin starch sheets over inverted hot clay pots fueled by coconut dry leaves.',
    whyFamous: 'Renowned globally for its paper-thin melt-in-mouth texture that dissolves instantly, releasing rich cow ghee and crunchy cashews.',
    ingredients: ['Jaya Rice Starch Sheets (Pootha)', 'Pure Cow Ghee', 'Organic Jaggery / Powdered Sugar', 'Whole & Crushed Cashews', 'Cardamom Powder'],
    bestTimeToEat: 'Festival seasons & wedding celebrations',
    region: 'Andhra Pradesh',
    coordinates: { x: 68, y: 50 }
  },
  {
    id: 'kakinada',
    city: 'Kakinada',
    state: 'Andhra Pradesh',
    famousFood: 'Kakinada Gottam Kaja',
    category: 'Traditional Sweet',
    image: '/kakinada_gottam_kaja.jpg',
    description: 'Crispy layered cylindrical sweet fried to golden perfection and soaked in warm, aromatic cardamom sugar syrup, garnished with slivered almonds.',
    history: 'First prepared by Chittipeddi Kotaiah in 1891 in Kakinada. With over 130 years of sweetmaking heritage, "Kotaiah Kaja" remains one of Andhra\'s most celebrated traditional sweets.',
    whyFamous: 'Renowned for its unique "Gottam" (cylindrical tube) shape—the outer crust stays crisp while the inside bursts with warm cardamom sugar syrup in every bite.',
    ingredients: ['All-purpose Flour (Maida)', 'Pure Cow Ghee', 'Cardamom Sugar Syrup', 'Slivered Almonds & Pistachios'],
    bestTimeToEat: 'Freshly warm from Kotaiah sweet stalls',
    region: 'Andhra Pradesh',
    coordinates: { x: 74, y: 46 }
  },
  {
    id: 'guntur',
    city: 'Guntur',
    state: 'Andhra Pradesh',
    famousFood: 'Guntur Mirchi Bajji',
    category: 'Street Foods',
    image: '/guntur_mirchi_bajji.jpg',
    description: 'Long green Guntur chillies dipped in seasoned gram flour batter, deep-fried to golden perfection, slit open down the center and stuffed generously with finely chopped raw red onions, fresh coriander, spicy lemon juice, and red chilli powder dusting.',
    history: 'Guntur is Asia\'s largest chilli market. Street vendors along Guntur clock tower invented cut-open stuffed Mirchi Bajjis to showcase the region\'s world-famous fiery agricultural harvest.',
    whyFamous: 'Famous for the mouthwatering heat of Guntur chillies combined with the fresh crunch of raw stuffed onions, lemon juice, and fragrant cilantro.',
    ingredients: ['Guntur Long Green Chillies', 'Besan (Gram Flour)', 'Finely Chopped Red Onions', 'Fresh Coriander Leaves', 'Red Chilli Powder Dusting', 'Lemon Juice', 'Tamarind Masala'],
    bestTimeToEat: 'Monsoon season with hot tea',
    region: 'Andhra Pradesh',
    coordinates: { x: 50, y: 64 }
  },
  {
    id: 'rajahmundry',
    city: 'Rajahmundry',
    state: 'Andhra Pradesh',
    famousFood: 'Rajahmundry Rose Milk',
    category: 'Beverages',
    image: '/rajahmundry_rose_milk.jpg',
    description: 'Iconic chilled rich boiled milk infused with natural organic rose extract syrup, almond gum (Badam Pisin), khoa cream, and topped with fresh red rose petals.',
    history: 'First crafted in 1950 by Gubba Simhachalam along the banks of Godavari River near Pushkar Ghat, establishing a 70+ year cooling beverage legacy in Rajahmundry.',
    whyFamous: 'Renowned for its thick, silky creamy texture cooled naturally without artificial additives, topped with fragrant fresh red rose petals.',
    ingredients: ['Pure Chilled Milk', 'Natural Rose Extract', 'Badam Pisin (Almond Resin)', 'Khoa / Cream', 'Crushed Ice'],
    bestTimeToEat: 'Hot summer afternoons near Godavari Pushkar Ghat',
    region: 'Andhra Pradesh',
    coordinates: { x: 64, y: 48 }
  },
  {
    id: 'bandar',
    city: 'Bandar (Machilipatnam)',
    state: 'Andhra Pradesh',
    famousFood: 'Bandar Badam Milk',
    category: 'Beverages',
    image: '/bandar_badam_milk.jpg',
    description: 'Thick, aromatic saffron-infused chilled almond milk served in traditional peacock-embossed brass/silver tumblers, topped generously with saffron strands, slivered pistachios, and crushed almonds.',
    history: 'Machilipatnam (popularly known as Bandar in Krishna District) created this royal cooling beverage during the port trade era, perfecting rich badam milk with pure saffron infusion.',
    whyFamous: 'Famous for its rich yellow saffron color, dense nuttiness, and iconic serving in traditional peacock-patterned metal glasses.',
    ingredients: ['Whole Milk Reduction', 'Almond Paste (Badam)', 'Kashmiri Saffron (Kumkuma Puvvu)', 'Slivered Pistachios', 'Cardamom', 'Rock Sugar'],
    bestTimeToEat: 'Chilled evening refreshment in Bandar market',
    region: 'Andhra Pradesh',
    coordinates: { x: 58, y: 62 }
  }
];

export const POPULAR_STREET_FOODS = [
  {
    id: 'pani-puri',
    name: 'Andhra Gourmet Pani Puri Platter',
    image: '/pani_puri.jpg',
    description: 'Crispy golden hollow puris stuffed with spiced potato-chickpea ragda, finely diced red tomatoes, chopped coriander, and fine sev garnishing, served on a white platter with twin bowls of spicy green mint pani and sweet tamarind dates chutney.',
    origin: 'Popularized across Vijayawada, Guntur & Vizag food streets',
    funFact: 'Gourmet Andhra street vendors serve stuffed puris on white ceramic trays with dual dipping bowls of spicy green mint pani and sweet tamarind dates chutney!',
    category: 'Street Foods'
  },
  {
    id: 'ice-creams',
    name: 'Ice Creams',
    image: '/ice_creams.jpg',
    description: 'Delicious creamy vanilla ice cream sundae served in a tall glass goblet, layered with rich whipped cream, decadent chocolate syrup drizzle, and a crispy wafer biscuit.',
    origin: 'Popular ice cream parlors and dessert kiosks across Andhra Pradesh',
    funFact: 'Classically served in glass goblets topped with rich chocolate drizzle and crunchy wafer biscuits for a nostalgic summer delight!',
    category: 'Beverages'
  },
  {
    id: 'chicken-pakoda',
    name: 'Spicy Andhra Street Chicken Pakoda',
    image: '/chicken_pakoda.jpg',
    description: 'Crispy, bite-sized chicken pieces marinated in ginger-garlic paste, fiery Guntur red chilli powder, cornstarch, and curry leaves, double-fried to golden perfection and tossed with crispy fried curry leaves, slit green chillies, and lemon wedges.',
    origin: 'Bustling evening street stalls, night markets, and highway dhabas across Vijayawada, Vizag & Guntur',
    funFact: 'Double frying the chicken and tossing it hot with crispy deep-fried curry leaves gives Andhra Chicken Pakoda its iconic crunch and irresistible aroma.',
    category: 'Street Foods'
  },
  {
    id: 'fruit-juices',
    name: 'Fresh Fruit & Sugarcane Juices',
    image: '/fruit_juices.jpg',
    description: 'Ice-chilled freshly pressed green sugarcane juice infused with ginger, lemon, and mint leaves, paired with a vibrant array of fresh tropical fruit juices (mango, berry, orange, grape) and fresh whole fruits.',
    origin: 'Street refreshment kiosks and highway fruit stalls across Andhra Pradesh',
    funFact: 'Traditional sugarcane crushers paired with colorful fruit displays are the quintessential summer highway refreshment across Andhra Pradesh!',
    category: 'Beverages'
  },
  {
    id: 'irani-chai-osmania',
    name: 'Andhra Irani Chai & Osmania Biscuits',
    image: '/irani_chai.jpg',
    description: 'Steaming hot freshly brewed milk tea served in porcelain cups on a wooden board, accompanied by crisp golden Osmania biscuits, chocolate chip cookies, honey dip, and cinnamon sticks.',
    origin: 'Popular tea kiosks and street stalls across Vijayawada, Guntur & Vizag',
    funFact: 'Dipping warm, buttery Osmania biscuits into hot spiced Irani chai creates an unforgettable melt-in-mouth morning and evening ritual!',
    category: 'Beverages'
  },
  {
    id: 'chegodilu',
    name: 'Traditional Andhra Chegodilu (Dry Snack Items)',
    image: '/chegodilu.jpg',
    description: 'Crispy golden ring savories crafted from rice flour dough infused with sesame, cumin, and chana dal (yellow split peas), deep-fried for a delicious crunch.',
    origin: 'Traditional Andhra snack counters & takeaway gift shops',
    funFact: 'Studding the dough rings with soaked chana dal gives Andhra Chegodilu its iconic crunch and irresistible nutty aroma!',
    category: 'Street Foods'
  },
  {
    id: 'bajji-mixture',
    name: 'Godavari Famous Bajji Mixture',
    image: '/bhimavaram_bajji_mixture.jpg',
    description: 'Piping-hot sliced mirchi bajjis served alongside a generous mound of crunchy Godavari savory mixture tossed with fried peanuts, finely chopped raw red onions, fresh coriander, lemon juice, and street chat masala.',
    origin: 'Famous evening street culture staple across Bhimavaram, Guntur & Vijayawada',
    funFact: 'Slicing hot double-fried mirchi bajjis into crunchy peanut mixture with fresh lemon squeeze creates the ultimate Godavari evening snack!',
    category: 'Street Foods'
  },
  {
    id: 'shawarma',
    name: 'Shawarma',
    image: '/shawarma.jpg',
    description: 'Tender, spiced flame-roasted chicken shavings wrapped in warm rumali roti or soft pita bread with garlic mayo, pickled veggies, and fiery Guntur red chilli sauce.',
    origin: 'Bustling night food streets and evening kiosks across Vijayawada, Guntur & Vizag',
    funFact: 'Andhra street vendors add a signature twist of fiery garlic chilli paste and crisp pickled red onions to slow-roasted shawarma rolls!',
    category: 'Street Foods'
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', name: 'All Specialties', icon: 'Sparkles', count: 12 },
  { id: 'Traditional Sweet', name: 'Traditional Sweets', icon: 'Cookie', count: 2 },
  { id: 'Street Foods', name: 'Street Foods', icon: 'Utensils', count: 6 },
  { id: 'Beverages', name: 'Beverages & Drinks', icon: 'GlassWater', count: 4 },
];

export const FOOD_GALLERY = [
  {
    id: 1,
    title: 'Vijayawada Challa Punugulu with Chutney Trio',
    city: 'Vijayawada',
    category: 'Street Foods',
    image: '/punugulu.jpg',
    caption: 'Crispy mini fritters served with coconut chutney, green ginger (allam) pachadi, and red chilli chutney.'
  },
  {
    id: 2,
    title: 'Athreyapuram Pootharekulu Paper Sweet',
    city: 'Athreyapuram',
    category: 'Traditional Sweet',
    image: '/athreyapuram_pootharekulu.jpg',
    caption: 'Ultra-thin translucent rice starch rolls filled with pure ghee, organic jaggery, and cashews.'
  },
  {
    id: 3,
    title: 'Kakinada Gottam Kaja',
    city: 'Kakinada',
    category: 'Traditional Sweet',
    image: '/kakinada_gottam_kaja.jpg',
    caption: 'Golden cylindrical layered sweet glistening with cardamom sugar syrup and garnished with almonds.'
  },
  {
    id: 4,
    title: 'Guntur Cut Mirchi Bajji with Stuffed Onions',
    city: 'Guntur',
    category: 'Street Foods',
    image: '/guntur_mirchi_bajji.jpg',
    caption: 'Golden green chilli bajjis cut open and stuffed with raw red onions, cilantro, and lemon juice.'
  },
  {
    id: 5,
    title: 'Rajahmundry Rose Milk',
    city: 'Rajahmundry',
    category: 'Beverages',
    image: '/rajahmundry_rose_milk.jpg',
    caption: 'Thick chilled rose milk with almond gum topped with fresh red rose petals along Godavari pushkar ghat.'
  },
  {
    id: 6,
    title: 'Bhimavaram Bajji Mixture Platter',
    city: 'Bhimavaram',
    category: 'Street Foods',
    image: '/bhimavaram_bajji_mixture.jpg',
    caption: 'Sliced hot mirchi bajjis paired with crunchy peanut-studded Godavari mixture, onions, and lemon.'
  },
  {
    id: 7,
    title: 'Spicy Andhra Street Chicken Pakoda',
    city: 'Vijayawada / Vizag',
    category: 'Street Foods',
    image: '/chicken_pakoda.jpg',
    caption: 'Double-fried crunchy bite-sized chicken tossed with crispy curry leaves, slit green chillies, and lemon.'
  },
  {
    id: 8,
    title: 'Bandar Saffron Badam Milk',
    city: 'Bandar (Machilipatnam)',
    category: 'Beverages',
    image: '/bandar_badam_milk.jpg',
    caption: 'Thick saffron almond milk served in traditional peacock-embossed brass glass topped with pistachios and saffron.'
  },
  {
    id: 9,
    title: 'Andhra Gourmet Pani Puri Platter',
    city: 'Vijayawada / Guntur',
    category: 'Street Foods',
    image: '/pani_puri.jpg',
    caption: 'Crispy stuffed puris served with tomato, cilantro, fine sev, green mint pani, and sweet tamarind dates chutney.'
  },
  {
    id: 10,
    title: 'Traditional Andhra Chegodilu (Dry Snack Items)',
    city: 'Andhra Takeaway Counter',
    category: 'Snacks',
    image: '/chegodilu.jpg',
    caption: 'Crispy golden rice flour rings studded with chana dal, sesame, and spices served in traditional bowls.'
  }
];

export const FUN_FACTS = [
  {
    id: 1,
    title: 'The "Paper Sweet" Miracle',
    highlight: 'Athreyapuram Pootharekulu',
    fact: 'Pootharekulu is made from starch sheets so thin (less than 0.1 mm) that women in Athreyapuram village roll them over inverted hot clay pots fueled by dry coconut leaves!',
    icon: 'FileText'
  },
  {
    id: 2,
    title: 'Andhra Matha (Mother of Foods)',
    highlight: 'Gongura Sorrel Leaves',
    fact: 'Gongura (Roselle) is affectionately called "Andhra Matha". No grand Telugu feast is complete without Gongura Pachadi or Gongura Mutton!',
    icon: 'Leaf'
  },
  {
    id: 3,
    title: 'GI Tag Protection',
    highlight: 'Tirupati Laddu & Pootharekulu',
    fact: 'Both Tirupati Srivari Laddu and Athreyapuram Pootharekulu hold official Geographical Indication (GI) status under Indian law, protecting their authentic heritage.',
    icon: 'Award'
  },
  {
    id: 4,
    title: 'The Cylindrical Gottam Secret',
    highlight: 'Kakinada Gottam Kaja',
    fact: 'Kakinada Gottam Kaja is crafted into a hollow cylindrical tube before frying. When dipped in hot cardamom syrup, internal air pockets trap the syrup so it bursts in your mouth!',
    icon: 'Flame'
  },
  {
    id: 5,
    title: 'Ugadi Pachadi & 6 Emotions',
    highlight: 'Traditional Andhra New Year',
    fact: 'Ugadi Pachadi combines 6 distinct tastes (Sweet, Sour, Salty, Bitter, Tangy, Spicy) symbolizing the 6 emotional experiences of human life: Joy, Sadness, Fear, Anger, Surprise, and Disgust.',
    icon: 'Smile'
  }
];

export const FOOD_STORIES = [
  {
    id: 'spice-heritage',
    title: 'The Fiery Legacy of Guntur Chillies & Spices',
    subtitle: 'Why Andhra Cuisine is World Famous for Rich Spice Profiles',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    content: 'Andhra Pradesh is home to Guntur, Asia\'s largest chilli market. Spices in Andhra cooking aren\'t just about heat—they are layered with sun-dried coriander, cumin, sesame seeds, mustard, curry leaves, and aged dark tamarind that create complex, mouthwatering gravies.'
  },
  {
    id: 'pot-cooking',
    title: 'Matti Patralu: The Art of Earthenware Cooking',
    subtitle: 'Preserving Mineral Richness & Slow Heat Infusion',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    content: 'Traditional dishes like Nellore Chepala Pulusu and Natukodi Pulusu are slow-cooked in handmade clay pots (Matti Patralu) over woodfires. The porous clay absorbs excess moisture, balances acidity from tamarind and tomato, and keeps curry fresh for days without refrigeration.'
  },
  {
    id: 'banana-leaf',
    title: 'Arati Aaku Bhojanam: The Royal Banana Leaf Feast',
    subtitle: 'Sacred Placement Rules & Eco-friendly Culinary Tradition',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    content: 'Eating on a fresh green banana leaf is an ancient Telugu tradition. Heat from hot rice releases polyphenols and natural wax from the leaf, enriching food with aroma. Specific items have assigned places: salt & pickle on top left, sweets on bottom right, and steaming rice in the center!'
  }
];
