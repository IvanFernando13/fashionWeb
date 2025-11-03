// Simple in-memory product catalog for the detail page
// In a real app this would come from an API or database

window.PRODUCTS = [
    // TOPS (12 products)
    {
        id: "101",
        name: "Stussy Waffle Cashmere Zip Hood Sweater",
        price: "$298.00",
        image: "image/inspo5Knit.jpeg",
        images: [
            "image/inspo5Knit.jpeg",
            "image/inspo5Knit2.jpeg",
            "image/inspo5Knit3.jpeg"
        ],
        description: "Relaxed fit zip-front hoodie. Heavyweight waffle-knit cashmere. 9-gauge knit. Ribbed hood, cuffs and hem. YKK metal zip closure. Patch pocket. Stüssy stock flag label at side seam",
        brand: "Stussy",
        material: "100% Cashmere",
        size: "XS-XL",
        category: "tops"
    },
    {
        id: "102",
        name: "Stussy Stock Link Tee Pigment Dye",
        price: "$55.00",
        image: "image/inspo5Top.jpeg",
        images: [
            "image/inspo5Top.jpeg",
            "image/inspo5Top2.jpeg",
            "image/inspo5Top3.jpeg"
          
        ],
        description: "Midweight pigment dyed 220gsm cotton jersey. Screenprinted with water-based ink for a soft hand feel",
        brand: "Stussy",
        material: "100% Cotton",
        size: "XS-XL",
        category: "tops"
    },
    {
        id: "103",
        name: "Carhartt WIP Brent Vest",
        price: "$269.00",
        image: "image/inspo9vest.jpg",
        images: [
            "image/inspo9vest.jpg",
            "image/inspo9vest2.jpg",
        ],
        description: "The Brent Vest is made from lightweight polyester fabric and is padded with artificial down. Two patch pockets appear on the front. A woven Square Label completes the design.",
        brand: "Carhartt WIP",
        material: "100% Polyester",
        size: "XS-XL",
        category: "tops"
    },
    {
        id: "104",
        name: "Sacai x Carhartt WIP Cotton Jersey T-Shirt",
        price: "$365.00",
        image: "image/inspo9tee.jpg",
        images: [
            "image/inspo9tee.jpg",
            "image/inspo9tee2.jpg",
            
        ],
        description: "The sacai x Carhartt WIP Cotton Jersey T-Shirt is a hybrid of Carhartt WIP’s Pocket T-Shirt and sacai’s t-shirt. The item is made from crisp, tightly knit cotton jersey, featuring Carhartt WIP’s duck canvas trims on the chest pocket and side slits. A co-branded woven label appears on the pocket.",
        brand: "Carhartt WIP",
        material: "100% Cotton",
        size: "XS-XL",
        category: "tops"
    },
    {
        id: "105",
        name: "Vivienne Westwood Chaos Shirt",
        price: "$440.00",
        image: "image/inspo10shirt.jpg",
        images: [
            "image/inspo10shirt.jpg",
            "image/inspo10shirt2.jpg",
        ],
        description: "The Chaos Shirt is made from 100% cotton and is printed with the Vivienne Westwood logo. It is a unisex shirt and is available in a range of sizes.",
        brand: "Vivienne Westwood",
        material: "100% Cotton",
        size: "XS-XL",
        category: "tops"
    },
    {
        id: "106",
        name: "Carhartt WIP Vista Sweatshirt",
        price: "$150.00",
        image: "image/inspo12hood.jpg",
        images: [
            "image/inspo12hood.jpg",
            "image/inspo12hood2.jpg",
        ],
        description: "The Vista Sweatshirt is made from 100% cotton and is printed with the Carhartt WIP logo. It is a unisex sweatshirt and is available in a range of sizes.",
        brand: "Carhartt WIP",
        material: "100% Cotton",
        size: "XS-XL",
        category: "tops"
    },
    
    // OUTERWEAR (12 products)
    {
        id: "201",
        name: "Carhartt WIP Harvey Shirt Jacket",
        price: "$155.00",
        image: "image/inspo1Jacket.jpg",
        images: [
            "image/inspo1Jacket.jpg",
            "image/inspo1Jacket2.jpg",
            "image/inspo1Jacket3.jpg"
        ],
        description: "100% cotton. Made in Tunisia. Machine wash. Front button closure",
        brand: "Carhartt WIP",
        material: "100% Cotton: A very soft and pleasant material whose properties include tensile strength and elongation at break.",
        size: "XS-XL",
        category: "outerwear"
    },
    {
        id: "202",
        name: "Balenciaga 3B Sports Icon track jacket",
        price: "$1,405.00",
        image: "image/inspo2Jacket.jpeg",
        images: [
            "image/inspo2Jacket.jpeg",
            "image/inspo2Jacket2.jpeg",
            "image/inspo2Jacket3.jpeg"
        ],
        description: "BALENCIAGA 3B SPORTS ICON TRACK JACKET IN BLACK",
        brand: "Balenciaga",
        material: "100% Polyester",
        size: "XS-XL",
        category: "outerwear"
    },
    {
        id: "203",
        name: "Carhartt WIP OG Active Jacket - Denim (Winter)",
        price: "$288.00",
        image: "image/inspo3Jacket.jpeg",
        images: [
            "image/inspo3Jacket.jpeg",
            "image/inspo3Jacket2.jpeg",
            "image/inspo3Jacket3.jpeg"
        ],
        description: "The OG Active Jacket is constructed in our original loose fit from Maitland denim, which is a heavyweight cotton fabric. It also features an insulating, striped blanket lining. A kangaroo pocket and adjustable hood offer functional touches, while triple-stitch details provide extra durability.",
        brand: "Carhartt WIP",
        material: "100% Organic Cotton 'Dearborn' Canvas, 12oz",
        size: "XS-XL",
        category: "outerwear"
    },
    {
        id: "204",
        name: "Maison Margiela waxed button-up coat",
        price: "$1,932.00",
        image: "image/inspo4Jack.jpg",
        images: [
            "image/inspo4Jack.jpg",
            "image/inspo4Jack2.jpg",
            "image/inspo4Jack3.jpg"
        ],
        description: "Made in Italy.",
        brand: "Maison Margiela",
        material: "Cotton 57%, Viscose 43%",
        size: "XS-XL",
        category: "outerwear"
    },
    {
        id: "205",
        name: "Kapital Boro Distressed Patchwork Denim Jacket",
        price: "$3,255.00",
        image: "image/KapitalJacket.jpg",
        images: [
            "image/KapitalJacket.jpg",
            "image/KapitalJacket2.jpg",
            "image/KapitalJacket3.jpg"
        ],
        description: "KAPITAL gets its name from Kojima, Okayama – Japan's 'Denim Capital'. Demonstrating that speciality, this jacket is distressed and repaired using sashiko stitching, a traditional technique used to extend a fabric's life. The front is fitted with a few slanted pockets, while the back depicts an impressively patchworked Virgin Mary.",
        brand: "Kapital",
        material: "Fabric1: 90% cotton, 10% linen; fabric2: 100% cotton",
        size: "XS-XL",
        category: "outerwear"
    },
    {
        id: "206",
        name: "Balenciaga 3B Sports Icon Ski Puffer",
        price: "$4,350.00",
        image: "image/inspo6Jack.jpeg",
        images: [
            "image/inspo6Jack.jpeg",
            "image/inspo6Jack2.jpeg",
            "image/inspo6Jack3.jpeg"
            
        ],
        description: "Light matte nylon. 900 gsm thick padded technical lining. Made in Italy,",
        brand: "Balenciaga",
        material: "100% polyamide",
        size: "XS-XL",
        category: "outerwear"
    },
    {
        id: "207",
        name: "Balenciaga logo-embossed leather jacket",
        price: "$3,897.00",
        image: "image/inspo8Jack.jpg",
        images: [
            "image/inspo8Jack.jpg",
            "image/inspo8Jack2.jpg",
            "image/inspo8Jack3.jpg"
        ],
        description: "Made in Italy. Black. Classic Collar",
        brand: "Balenciaga",
        material: "100% Lambskin",
        size: "XS-XL",
        category: "outerwear"
    },
    {
        id: "208",
        name: "Vivienne Westwood Piranha Jacket",
        price: "$700.00",
        image: "image/inspo10Jacket.jpg",
        images: [
            "image/inspo10Jacket.jpg",
            "image/inspo10Jacket2.jpg",
            "image/inspo10Jacket3.jpg"
        ],
        description: "The Vivienne Westwood Piranha Jacket is a unique piece that is made from 100% cotton and is printed with the Vivienne Westwood logo. It is a unisex jacket and is available in a range of sizes.",
        brand: "Vivienne Westwood",
        material: "100% Cotton",
        size: "XS-XL",
        category: "outerwear"
    },
    {
        id: "209",
        name: "Vivienne Westwood Wreck Jacket",
        price: "$780.00",
        image: "image/inspo11jack.jpg",
        images: [
            "image/inspo11jack.jpg",
            "image/inspo11jack2.jpg",
        ],
        description: "The Vivienne Westwood Wreck Jacket is a unique piece that is made from 100% cotton and is printed with the Vivienne Westwood logo. It is a unisex jacket and is available in a range of sizes.",
        brand: "Vivienne Westwood",
        material: "100% Cotton",
        size: "XS-XL",
        category: "outerwear"
    },
    {
        id: "210",
        name: "Carhartt WIP Detroit Jacket",
        price: "$200.00",
        image: "image/inspo12jack.jpg",
        images: [
            "image/inspo12jack.jpg",
            "image/inspo12jack2.jpg",
            "image/inspo12jack3.jpg"
        ],
        description: "The Carhartt WIP Detroit Jacket is a unique piece that is made from 100% cotton and is printed with the Carhartt WIP logo. It is a unisex jacket and is available in a range of sizes.",
        brand: "Carhartt WIP",
        material: "100% Cotton",
        size: "XS-XL",
        category: "outerwear"
    },

    // BOTTOMS (12 products)
    {
        id: "301",
        name: "Kapital Chino High Waisted NIME Pants",
        price: "$214.00",
        image: "image/inspo1Pants.jpeg",
        images: [
            "image/inspo1Pants.jpeg",
            "image/inspo1Pants2.jpeg",
            "image/inspo1Pants3.jpg"
        ],
        description: "These workwear-inspired trousers feature a loose, high-waisted fit, offering a relaxed yet refined silhouette. The roomy upper tapers subtly toward the ankle for a more structured look, while the back cinch allows for a customized fit. Finished with a branded woven patch, they blend functionality and aesthetics.",
        brand: "Kapital",
        material: "100% Cotton",
        size: "XS-XL",
        category: "bottoms"
    },
    {
        id: "302",
        name: "Balenciaga 3B Sports Icon Track Pants",
        price: "$2,250.00",
        image: "image/inspo2Pants.jpeg",
        images: [
            "image/inspo2Pants.jpeg",
            "image/inspo2Pants2.jpeg",
            "image/inspo2Pants3.jpeg"
        ],
        description: "Lean into a laidback vibe with the 3B Sports Icon track pants from Balenciaga. The easygoing wide-leg silhouette is crafted from cotton jersey for unbeatable comfort and is accented with contrasting piping and a signature logo embellishment.",
        brand: "Balenciaga",
        material: "100% polyamide",
        size: "XS-XL",
        category: "bottoms"
    },
    {
        id: "303",
        name: "Maison Margiela Drawstring Trousers",
        price: "$721.00",
        image: "image/inspo4Pant.jpeg",
        images: [
            "image/inspo4Pant.jpeg",
            "image/inspo4Pant2.jpeg",
            "image/inspo4Pant3.jpeg"
           
        ],
        description: "Made in Italy. 100% cotton. Machine wash.",
        brand: "Maison Margiela",
        material: "100% Cotton",
        size: "XS-XL",
        category: "bottoms"
    },
    {
        id: "304",
        name: "Stussy Carpenter Pant Canvas",
        price: "$190.00",
        image: "image/inspo5Pant.jpeg",
        images: [
            "image/inspo5Pant.jpeg",
            "image/inspo5Pant2.jpeg",
            "image/inspo5Pant3.jpeg"
        ],
        description: "Relaxed fit carpenter pant in cotton canvas. Slightly tapered cut",
        brand: "Stussy",
        material: "100% Cotton",
        size: "XS-XL",
        category: "bottoms"
    },
    {
        id: "305",
        name: "Balenciaga Hybrid Wide-Leg Ripstop and Distressed Denim Drawstring Trousers",
        price: "$2,500.00",
        image: "image/inspo6Pant.jpeg",
        images: [
            "image/inspo6Pant.jpeg",
            "image/inspo6Pant2.jpeg",
            "image/inspo6Pant3.jpeg"
        ],
        description: "The perfect blend of modern and vintage, these trousers are a must-have for any wardrobe.",
        brand: "Balenciaga",
        material: "100% Cotton",
        size: "XS-XL",
        category: "bottoms"
    },
    {
        id: "306",
        name: "Rick Owens DRKSHDW zip-detail track shorts",
        price: "$465.00",
        image: "image/inspo7Shorts.jpg",
        images: [
            "image/inspo7Shorts.jpg",
            "image/inspo7Shorts2.jpg",
            
        ],
        description: "Mesh-lined athletic shorts, color block design.",
        brand: "Rick Owens",
        material: "100% Organic Cotton",
        size: "XS-XL",
        category: "bottoms"
    },
    {
        id: "307",
        name: "Comme des Garçons high-waisted twill drop-crotch trousers",
        price: "$660.00",
        image: "image/inspo8pant.jpg",
        images: [
            "image/inspo8pant.jpg",
            "image/inspo8pant2.jpg",
            "image/inspo8pant3.jpg"
        ],
        description: "When buying this unisex item, keep in mind that it is graded in standard men's sizing",
        brand: "Comme Des Garçons",
        material: "100% Polyester",
        size: "XS-XL",
        category: "bottoms"
    },
    {
        id: "308",
        name: "Carhartt WIP Double Knee Pant Camo",
        price: "$149.00",
        image: "image/inspo9pant.jpg",
        images: [
            "image/inspo9pant.jpg",
            "image/inspo9pant2.jpg",
            
        ],
        description: "Tapered wool-blend dress trousers.",
        brand: "Acne Studios",
        material: "Wool Blend",
        size: "XS-XL",
        category: "bottoms"
    },
    {
        id: "309",
        name: "Vivienne Westwood Buckleback Jeans",
        price: "$500.00",
        image: "image/inspo10pant.jpg",
        images: [
            "image/inspo10pant.jpg",
            "image/inspo10pant2.jpg",
           
        ],
        description: "Vivienne Westwood Buckle Back jeans feature a diagonal bleached-fade effect, paired with a mid-rise waistband that fastens with an orb-embossed pearl button. At the back, a refreshed ‘Westwood’ leather patch and our signature 'VW' topstitching on the pockets complete the design.",
        brand: "Vivienne Westwood",
        material: "100% Cotton",
        size: "XS-XL",
        category: "bottoms"
    },
    {
        id: "310",
        name: "Vivienne Westwood Builder Trousers",
        price: "$475.00",
        image: "image/inspo11pant.jpg",
        images: [
            "image/inspo11pant.jpg",
            "image/inspo11pant2.jpg",
            
        ],
        description: "The Vivienne Westwood Builder Trousers are a unique piece that is made from 100% cotton and is printed with the Vivienne Westwood logo. It is a unisex trousers and is available in a range of sizes.",
        brand: "Vivienne Westwood",
        material: "100% Cotton",
        size: "XS-XL",
        category: "bottoms"
    },
    {
        id: "311",
        name: "Comme des Garçons Loose Fit Jeans",
        price: "$210.00",
        image: "image/inspo12jeans.jpg",
        images: [
            "image/inspo12jeans.jpg",
            "image/inspo12jeans2.jpg",
            
        ],
        description: "2006 jeans are cut to a loose fit with a low waist and wide, long legs. Crafted from rigid denim, featuring a wash with irregular bleach and dirt marks for an authentically worn-in look.",
        brand: "Comme des Garçons",
        material: "100% Cotton",
        size: "XS-XL",
        category: "bottoms"
    },
    
    // ACCESSORIES (12+ products)
    {
        id: "401",
        name: "Carhartt WIP Short Watch Hat",
        price: "$23.13",
        image: "image/inspo1Hat.jpeg",
        images: [
            "image/inspo1Hat.jpeg",
            "image/inspo1Hat2.jpeg",
            "image/inspo1Hat3.jpeg"
        ],
        description: "The Short Watch Hat is an updated version of the Carhartt WIP staple Acrylic Watch Hat. Created in a warm nine gauge Acrylic fabric with a stretchy rib knit that ensures comfort and a fit suitable for everyone. Features a woven Carhartt WIP label on the front.",
        brand: "Carhartt WIP",
        material: "100% acrylic",
        size: "All Sizes",
        category: "accessories"
    },
    {
        id: "402",
        name: "Rick Owens Ramones Sneakers",
        price: "$1,160.00",
        image: "image/inspo1Shoes.jpg",
        images: [
            "image/inspo1Shoes.jpg",
            "image/inspo1Shoes2.jpg",
            "image/inspo1Shoes3.jpg"
           
        ],
        description: "RICK OWENS FW25 CONCORDIANS SNEAKERS IN BLACK/MILK/MILK FULL GRAIN COW LEATHER THESE SNEAKERS ARE ABOVE-ANKLE HEIGHT AND FEATURE SEVEN EYELETS, LACES, A ZIPPER ON THE INSIDE ANKLE FOR EASY FASTENING, TOE CAPS AND SHARK-TOOTHED BUMPER SOLES.",

        
        brand: "Rick Owens",
        material: "100% Cow Leather",
        size: "EU 39-42",
        category: "accessories"
    },
    {
        id: "403",
        name: "Balenciaga Men's Le City Travel Bag in Black",
        price: "$3,650.00",
        image: "image/inspo2Acc.jpeg",
        images: [
            "image/inspo2Acc.jpeg",
            "image/inspo2Acc2.jpeg",
            "image/inspo2Acc3.jpeg"
        ],
        description: "Le City Travel Bag in black Arena Storico lambskin, brass hardware.",
        brand: "Balenciaga",
        material: "Arena Storico lambskin",
        size: "One Size",
        category: "accessories"
    },
    {
        id: "404",
        name: "Balenciaga Adidas Gym Bag",
        price: "$1,550.00",
        image: "image/inspo3Acc.jpg",
        images: [
            "image/inspo3Acc.jpg",
            "image/inspo3Acc2.jpg",
            "image/inspo3Acc3.jpg"
        ],
        description: "Created in collaboration with Adidas®. Double top handles. Adjustable and removable strap with shoulder pad. Front embossed logo detail. Front contrasting color stripe details. Tone-on-tone hardware.",
        brand: "Balenciaga",
        material: "83% Lambskin, 15% Polyamide, 2% LYCRA",
        size: "All Sizes",
        category: "accessories"
    },
    {
        id: "405",
        name: "Maison Margiela Anatomic Ankle Boots",
        price: "$695.00",
        image: "image/inspo4Shoe.jpg",
        images: [
            "image/inspo4Shoe.jpg",
            "image/inspo4Shoe2.jpg",
            "image/inspo4Shoe3.jpg"
            
        ],
        description: "Anatomic ankle boots in nappa leather with a curved tonal heel and inner side zip. MM6’s discreet yet distinct signature, a horizontal white stitch line, is present on the back of the shoes. 3.5 cm heel.",
        brand: "Maison Margiela",
        material: "100% calf leather",
        size: "EU 39-42",
        category: "accessories"
    },
    {
        id: "406",
        name: "Balenciaga Cargo Sneakers",
        price: "$1,080.00",
        image: "image/inspo6Shoe.jpeg",
        images: [
            "image/inspo6Shoe.jpeg",
            "image/inspo6Shoe2.jpeg",
            "image/inspo6Shoe3.jpeg"
        ],
        description: "Cargo Sneakers in grey, white and yellow microfiber and mesh.",
        brand: "Balenciaga",
        material: "50% polyurethane, 30% polyester, 20% nylon",
        size: "EU 39-42",
        category: "accessories"
    },
    {
        id: "407",
        name: "Oakley Over The Top Glasses",
        price: "$420.00",
        image: "image/inspo6Glass.jpeg",
        images: [
            "image/inspo6Glass.jpeg",
            "image/inspo6Glass2.jpeg",
            "image/inspo6Glass3.jpeg"
            
        ],
        description: "Oakley Over The Top Glasses. Known for their usage in hit movie Spy Kids.",
        brand: "Oakley",
        material: "50% Metal, 50% Alumunium",
        size: "One Size",
        category: "accessories"
    },
    {
        id: "408",
        name: "Rick Owens Vintage low-top leather sneakers",
        price: "$1,600.00",
        image: "image/inspo7Shoe.jpg",
        images: [
            "image/inspo7Shoe.jpg",
            "image/inspo7Shoe2.jpg",
            "image/inspo7Shoe3.jpg"
        ],
        description: "jet black/milk white. suede/calf leather. grained texture. contrast stitching",
        brand: "Rick Owens",
        material: "100% Leather",
        size: "EU 39-42",
        category: "accessories"
    },
    {
        id: "409",
        name: "Comme des Garçons logo-print striped-edge socks",
        price: "$44.00",
        image: "image/inspo7Sock.jpg",
        images: [
            "image/inspo7Sock.jpg",
            "image/inspo7Sock2.jpg",
            
        ],
        description: "Be sure before opening, as socks and hosiery can only be returned in their original, unopened packaging.",
        brand: "Comme des Garçons",
        material: "Cotton 77%, Nylon 20%, Polyurethane 3%",
        size: "XS-L",
        category: "accessories"
    },
    {
        id: "410",
        name: "Maison Margiela Tabi babouches",
        price: "$995.00",
        image: "image/inspo8tabi.jpg",
        images: [
            "image/inspo8tabi.jpg",
            "image/inspo8tabi2.jpg",
            "image/inspo8tabi3.jpg"
        ],
        description: "Crafted from soft nappa leather, the babouche shoes feature the Tabi split-toe, inspired by the traditional 15th century Japanese sock bearing the same name – launched for the Maison's debut collection in 1989. It captures the avant-garde and insubordinate spirit of the Maison and exists as a heritage classic, continually explored through each collection.",
        brand: "Maison Margiela",
        material: "100% Camel Leather",
        size: "EU 39-42",
        category: "accessories"
    },
    {
        id: "411",
        name: "Balenciaga Klub Trouser Chain in Antique Silver",
        price: "$1,490.00",
        image: "image/inspo8Acc.jpg",
        images: [
            "image/inspo8Acc.jpg",
            "image/inspo8Acc2.jpg",
            
        ],
        description: "Dimensions: L28,15 x H14,97 x W1,46 inch. Zamak and brass. Trouser chain. Large thick links. Industrial design",
        brand: "Balenciaga",
        material: "Zamak and Brass",
        size: "all size",
        category: "accessories"
    },
    {
        id: "412",
        name: "Vivienne Westwood Tie 8.5cm",
        price: "$105.00",
        image: "image/inspo10tie.jpg",
        images: [
            "image/inspo10tie.jpg",
            "image/inspo10tie2.jpg",
            "image/inspo10tie3.jpg"
        ],
        description: "Vivienne Westwood Tie 8.5cm is a unique piece that is made from 100% cotton and is printed with the Vivienne Westwood logo. It is a unisex tie and is available in a range of sizes.",
        brand: "Vivienne Westwood",
        material: "100% Cotton",
        size: "One Size",
        category: "accessories"
    },
];


