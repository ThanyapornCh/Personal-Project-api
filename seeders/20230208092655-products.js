'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          product_name: 'Milky Cleanser',
          product_price: '700.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676020437/1676020436009541611782.png',
          product_description: 'Milky Cleanser daily ',
          created_at: '2023-02-10 09:13:57',
          updated_at: '2023-02-10 09:13:57',
          brand_id: '1',
          categories_id: '1',
        },
        {
          product_name: 'Water Bank Blue Hyaluronic Cleansing Foam',
          product_price: '630.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676042401/1676042398614119757027.png',
          product_description:
            'Cleansing foam that thoroughly washes off makeup residue and pore-clogging impurities with a bouncy and rich lather',
          created_at: '2023-02-10 15:20:01',
          updated_at: '2023-02-10 15:20:01',
          brand_id: '1',
          categories_id: '1',
        },
        {
          product_name: 'Cream Skin Milk Oil Cleanser Thumb',
          product_price: '1050.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676047328/1676047326412560569040.png',
          product_description:
            'Cream Skin Milk Oil Cleanser is a new type of cleansing product that combines cleansing oil and skin care',
          created_at: '2023-02-10 16:42:08',
          updated_at: '2023-02-10 16:42:08',
          brand_id: '1',
          categories_id: '1',
        },
        {
          product_name: 'Water Bank Blue Hyaluronic Cleansing Gel Thumb',
          product_price: '1250.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676049044/1676049042433594667936.jpg',
          product_description:
            'Cleansing matters as much as skincare in the morning and for sensitive skin',
          created_at: '2023-02-10 17:10:44',
          updated_at: '2023-02-10 17:10:44',
          brand_id: '1',
          categories_id: '1',
        },
        {
          product_name:
            'Innisfree Green Tea Hydrating Amino Acid Cleansing Foam',
          product_price: '300.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676054581/1676054579258315290890.webp',
          product_description:
            'A hydrating cleanser with Jeju Fresh Green Tea Water and Amino Acid Complex to keep skin hydrated even after cleansing',
          created_at: '2023-02-10 18:43:01',
          updated_at: '2023-02-10 18:43:01',
          brand_id: '2',
          categories_id: '1',
        },
        {
          product_name: 'Bija Trouble Facial Foam',
          product_price: '325.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676054751/1676054749737396951025.webp',
          product_description:
            'Designed to help you fight stubborn breakouts, Innisfree Bija Trouble Facial Foam features Bija extracts from the beautiful island of Jeju',
          created_at: '2023-02-10 18:45:51',
          updated_at: '2023-02-10 18:45:51',
          brand_id: '2',
          categories_id: '1',
        },
        {
          product_name: 'Etude (KAKAO)Soon.J. whip cleanser ',
          product_price: '700.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676054923/1676054920756828345404.webp',
          product_description:
            'A whipped cream-texture cleanser with soft, weakly acidic bubbles for a moisturising facial cleanse',
          created_at: '2023-02-10 18:48:43',
          updated_at: '2023-02-10 18:48:43',
          brand_id: '3',
          categories_id: '1',
        },
        {
          product_name: 'Water Bank Blue Hyaluronic',
          product_price: '1500.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676055430/1676055428400731837039.png',
          product_description:
            ' A juicy serum that intensely hydrates for a smooth, supple complexion and suitable for sensitive skin',
          created_at: '2023-02-10 18:57:10',
          updated_at: '2023-02-10 18:57:10',
          brand_id: '1',
          categories_id: '2',
        },
        {
          product_name: 'Radian C Spot Serum',
          product_price: '1150.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676055608/1676055605332267624041.jpg',
          product_description:
            'Radian-C ampoule contains a light, refreshing watery formula that is less sticky and has a higher absorptivity',
          created_at: '2023-02-10 19:00:07',
          updated_at: '2023-02-10 19:00:07',
          brand_id: '1',
          categories_id: '2',
        },
        {
          product_name: 'Innisfree Serum',
          product_price: '1300.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676055830/1676055828767843271632.webp',
          product_description:
            'The Green Tea Seed Serum. It has fresh Juju green tea extract with rich mineral extract and seed oil to hold moisture in your skin',
          created_at: '2023-02-10 19:03:50',
          updated_at: '2023-02-10 19:03:50',
          brand_id: '2',
          categories_id: '2',
        },
        {
          product_name: 'Forest for Men Sensitive All in one Essence',
          product_price: '950.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676055956/1676055954141720188519.webp',
          product_description:
            'Hypoallergenic tested and is suitable for sensitive skin',
          created_at: '2023-02-10 19:05:55',
          updated_at: '2023-02-10 19:05:55',
          brand_id: '2',
          categories_id: '2',
        },
        {
          product_name: 'Essential Power Emulsion Thumb',
          product_price: '1120.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676056634/167605663145410944298.png',
          product_description: 'Emulsion to replenish the skin with moisture',
          created_at: '2023-02-10 19:17:13',
          updated_at: '2023-02-10 19:17:13',
          brand_id: '1',
          categories_id: '3',
        },
        {
          product_name: 'Essential Balancing Emulsion Light Thumb',
          product_price: '800.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676056895/1676056892816493540855.png',
          product_description:
            'Refreshing-type Essential Balancing Light Emulsion for balancing oil and moisture ',
          created_at: '2023-02-10 19:21:34',
          updated_at: '2023-02-10 19:21:34',
          brand_id: '1',
          categories_id: '3',
        },
        {
          product_name:
            'Water Bank Blue Hyaluronic Emulsion for Normal to Dry Skin',
          product_price: '1300.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676057069/1676057067444562597027.png',
          product_description:
            'Water Bank Blue Hyaluronic Emulsion for Normal to Dry skin.',
          created_at: '2023-02-10 19:24:29',
          updated_at: '2023-02-10 19:24:29',
          brand_id: '1',
          categories_id: '3',
        },
        {
          product_name: 'Green Tea Balancing Cream',
          product_price: '560.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676057301/1676057299167782504934.webp',
          product_description:
            'Beauty Green Tea ingredients provide rich moisture to dry and dehydrated skin',
          created_at: '2023-02-10 19:28:21',
          updated_at: '2023-02-10 19:28:21',
          brand_id: '2',
          categories_id: '3',
        },
        {
          product_name: 'Cherry Blossom Jellycream',
          product_price: '850.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676057531/1676057528398248876858.webp',
          product_description:
            'Jeju Cherry Blossom leaf extract which brightens skin for a clear and vibrant complexion',
          created_at: '2023-02-10 19:32:10',
          updated_at: '2023-02-10 19:32:10',
          brand_id: '2',
          categories_id: '3',
        },
        {
          product_name: 'Etude et.Moistfull Collagen Deep Cream',
          product_price: '550.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676058230/1676058228235916400685.webp',
          product_description:
            'Collagen Deep Cream Moisture durability strengthening cream with Super Collagen water.',
          created_at: '2023-02-10 19:43:50',
          updated_at: '2023-02-10 19:43:50',
          brand_id: '3',
          categories_id: '3',
        },
        {
          product_name: 'Water Bank Blue Hyaluronic Eye Cream',
          product_price: '1400.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676058525/1676058523812225222817.jpg',
          product_description:
            'This eye cream firms the skin and relieves dark eye circles',
          created_at: '2023-02-10 19:48:45',
          updated_at: '2023-02-10 19:48:45',
          brand_id: '1',
          categories_id: '4',
        },
        {
          product_name: 'Perfect Intensive Eye Cream',
          product_price: '1700.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676058753/167605875172776116651.webp',
          product_description:
            'Formulated with Jeju Anti-aging complex that is composed of 9 types of Jeju',
          created_at: '2023-02-10 19:52:33',
          updated_at: '2023-02-10 19:52:33',
          brand_id: '2',
          categories_id: '4',
        },
        {
          product_name: 'Jeju Orchid Eye Cream',
          product_price: '1100.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676058912/1676058910547492740671.webp',
          product_description:
            'Eye cream from Jeju orchid extract for energetic and healthy skin around the eyes.',
          created_at: '2023-02-10 19:55:12',
          updated_at: '2023-02-10 19:55:12',
          brand_id: '2',
          categories_id: '4',
        },
        {
          product_name: 'Watery Sun Cream Thumb SPF50+ PA+++',
          product_price: '700.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676059212/1676059210157750949464.jpg',
          product_description:
            'It is a watery moisturizing textured sun cream that bursts into moisture.',
          created_at: '2023-02-10 20:00:12',
          updated_at: '2023-02-10 20:00:12',
          brand_id: '1',
          categories_id: '5',
        },
        {
          product_name: 'Radian C Sun Cream SPF50+ PA++',
          product_price: '900',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676059477/1676059474399148071004.jpg',
          product_description:
            'Eye cream from Jeju orchid extract for energetic and healthy skin around the eyes.',
          created_at: '2023-02-10 19:55:12',
          updated_at: '2023-02-10 19:55:12',
          brand_id: '1',
          categories_id: '5',
        },
        {
          product_name: 'Tone Up Watering Sun',
          product_price: '490',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676059757/1676059755188612691816.webp',
          product_description:
            'A mix of mineral and chemical sunscreen that doubles as hydrating tone-up makeup base.',
          created_at: '2023-02-10 20:09:17',
          updated_at: '2023-02-10 20:09:17',
          brand_id: '2',
          categories_id: '5',
        },
        {
          product_name: 'Intensive Long Lasting Sun EX SPF50+ PA++',
          product_price: '490.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676060265/1676060263191622943777.webp',
          product_description:
            'A sheer water-resistant sunscreen for combination to oily skin.',
          created_at: '2023-02-10 20:17:44',
          updated_at: '2023-02-10 20:17:44',
          brand_id: '2',
          categories_id: '5',
        },
        {
          product_name: 'Etude moisture sun cream spf50+PA++',
          product_price: '850.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676060565/1676060561848789485787.webp',
          product_description:
            'Moisturizing and light fitting sunscreen featuring an essence type texture.',
          created_at: '2023-02-10 20:22:44',
          updated_at: '2023-02-10 20:22:44',
          brand_id: '3',
          categories_id: '5',
        },
        {
          product_name: 'Anessa Moisture UV Sunscreen Mild Milk spf 35 PA+++',
          product_price: '950.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676060847/1676060844787322663430.webp',
          product_description:
            'Made without additives such as alcohol, parabens, mineral oils, fragrances and colorants.',
          created_at: '2023-02-10 20:27:27',
          updated_at: '2023-02-10 20:27:27',
          brand_id: '4',
          categories_id: '5',
        },
        {
          product_name: 'Anessa Day Serum spf 50+++',
          product_price: '1015.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676060972/1676060969266510833037.webp',
          product_description:
            'Made without additives such as alcohol, parabens, mineral oils, fragrances and colorants.',
          created_at: '2023-02-10 20:29:31',
          updated_at: '2023-02-10 20:29:31',
          brand_id: '4',
          categories_id: '5',
        },
        {
          product_name: 'Anessa Brightening UV Sunscreen Gel spf50+ pa++',
          product_price: '950.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676061362/1676061360421371918745.webp',
          product_description:
            'Daytime beauty serum that can convert sunlight into beauty-effect light ',
          created_at: '2023-02-10 20:36:02',
          updated_at: '2023-02-10 20:36:02',
          brand_id: '4',
          categories_id: '5',
        },
        {
          product_name: 'Water Sleeping Mask EX',
          product_price: '1200.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676061944/1676061942724809008607.jpg',
          product_description:
            'An overnight, hydrating gel mask that quickly absorbs while you sleep to deeply hydrate skin.',
          created_at: '2023-02-10 20:45:44',
          updated_at: '2023-02-10 20:45:44',
          brand_id: '1',
          categories_id: '6',
        },
        {
          product_name: 'Cica Sleeping Mask',
          product_price: '1200.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676062247/1676062244680714449662.jpg',
          product_description:
            'Calming mask. It has calming ingredients that truly help with skin irritation and redness.',
          created_at: '2023-02-10 20:50:46',
          updated_at: '2023-02-10 20:50:46',
          brand_id: '1',
          categories_id: '6',
        },
        {
          product_name: 'Water Sleeping Mask Lavender Texture ',
          product_price: '1200.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676062421/1676062419078829657874.jpg',
          product_description:
            'Lavender Water Sleeping Mask has a light gel-type texture that gently soothes rough, tired skin and smoothens skin texture.',
          created_at: '2023-02-10 20:53:40',
          updated_at: '2023-02-10 20:53:40',
          brand_id: '1',
          categories_id: '6',
        },
        {
          product_name: 'Eye Sleeping Mask EX Thumb',
          product_price: '1200.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676062695/167606269275256784561.png',
          product_description:
            'The eye sleeping mask moisturizes, revitalizes, and brightens skin around the eyes.',
          created_at: '2023-02-10 20:58:14',
          updated_at: '2023-02-10 20:58:14',
          brand_id: '1',
          categories_id: '6',
        },
        {
          product_name: 'Sleeping Mask Yuzu Sheet',
          product_price: '230.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676063047/1676063043310150939344.webp',
          product_description:
            'Daily sheet mask infused with freshly squeezed Yuzu Extract.',
          created_at: '2023-02-10 21:04:06',
          updated_at: '2023-02-10 21:04:06',
          brand_id: '2',
          categories_id: '6',
        },
        {
          product_name: 'Sleeping Mask Centella Sheet',
          product_price: '230.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676063257/1676063254025746150683.webp',
          product_description:
            'Daily sheet mask infused with freshly squeezed Centella Extract.',
          created_at: '2023-02-10 21:07:36',
          updated_at: '2023-02-10 21:07:36',
          brand_id: '2',
          categories_id: '6',
        },
        {
          product_name: 'Etude collagen mask',
          product_price: '100.00',
          product_image:
            'https://res.cloudinary.com/dj1p6of8r/image/upload/v1676063467/1676063463931563896661.webp',
          product_description:
            'The moistfull sheet mask with super collagen water  firmly wraps skin and keeps skin deeply moisturized.',
          created_at: '2023-02-10 21:11:06',
          updated_at: '2023-02-10 21:11:06',
          brand_id: '3',
          categories_id: '6',
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
