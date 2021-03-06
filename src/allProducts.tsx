import React from 'react'
export interface Product {
    name: string
    price: number
    id: number
    img: string[]
    description: string
    category: string
}

const products: Product[] = [

    //Beds

    { name: "Neiden", price: 399, id: 1, img: [require('./assets/productImages/agy.jpg')], description: 'The solid surface of solid wood is beautiful as it is, but if you want to make it more personal you can laser, paint or wax it. Ribbed, mattress and bedding are sold separately. 90x200cm', category: 'beds' },
    { name: "Utåker", price: 1795, id: 2, img: [require('./assets/productImages/agy2.jpg')], description: 'Mattress and bedding are sold separately. Stacked on each other, these 2 beds become a single bed or sofa. It includes 2 bed 80x200cm', category: 'beds' },
    { name: "Napoli", price: 6495, id: 3, img: [require('./assets/productImages/napoli.jpg'), require('./assets/productImages/napoli2.jpg')], description: 'Fabric Mega light gray with Napoli bed mattress and 18 cm metal legs, 5-zone pocket elastic, Each zone adapts to your body. 120x200cm', category: 'beds' },
    { name: "Roma", price: 7995, id: 16, img: [require('./assets/productImages/roma.jpg'), require('./assets/productImages/roma2.jpg')], description: 'Fabric Roma light gray with bed mattress and 18 cm metal legs. The width is 90cm, height 60cm and length 200cm.', category: 'beds' },
    { name: "Cozy Bed", price: 3995, id: 17, img: [require('./assets/productImages/cozy.jpg'), require('./assets/productImages/cozy2.jpg')], description: 'Fabric Look light gray with bed mattress and 16 cm legs, with the width of 140cm, height 50cm and lenght 200cm.', category: 'beds' },
    { name: "Luna", price: 1295, id: 18, img: [require('./assets/productImages/luna.jpg'), require('./assets/productImages/luna2.jpg')], description: 'Fabric Athena dark gray, with bed mattress and 25 cm black wooden legs, Affordable bed, Perfectly suited to the guest room, Durable fabric. 90x200cm', category: 'beds' },

    //Lamps

    { name: "Cato LED", price: 2695, id: 4, img: [require('./assets/productImages/19.jpg')], description: 'Matte black lacquered metal. Timeless roof chandelier, dimmable, directional light source, adapted for long-burning LED lamp. Good lamp for reading. Light source LED 3x1 W included. Cato LED is part of a series. For indoor use only, can not be used in wet rooms.', category: 'lamps' },
    { name: "Montreal", price: 599, id: 5, img: [require('./assets/productImages/18.jpg')], description: 'White metal, Energy-efficient LED light source included, Directional light, Included in a series', category: 'lamps' },
    { name: "Karl", price: 399, id: 6, img: [require('./assets/productImages/17.jpg')], description: 'Metal with shade in opal white glass. Easily placed opal glass roof metal and satin finish metal in timeless design. Supplement with light source. Included in a series.', category: 'lamps' },
    { name: "Zenit", price: 299, id: 19, img: [require('./assets/productImages/31.jpg')], description: 'White glas. Easily placed ceiling in patterned glass that provides good general light. Supplement with 3 light sources, 40 W / E14. For indoor use only, can not be used in wet rooms.', category: 'lamps' },
    { name: "Vera", price: 299, id: 20, img: [require('./assets/productImages/32.jpg')], description: 'White glas. Easily placed ceiling in patterned glass that provides good general light. Supplement with 3 light sources. For indoor use only, can not be used in wet rooms.', category: 'lamps' },
    { name: "Classic", price: 899, id: 21, img: [require('./assets/productImages/33.jpg')], description: 'White textil. Simple and stylish design - Classic meets the requirements. In white textile with fine luster and a frosted bottom shade, the lamp gives a muted and comfortable glow in the room. With its unobtrusive design language, Classic does well in all rooms and is easy to mix and match with interior details in all colors. Feel free to buy one of our light sources.', category: 'lamps' },

    // //tables

    { name: "Novali", price: 1866, id: 7, img: [require('./assets/productImages/novali.jpg'), require('./assets/productImages/novali2.jpg')], description: 'Enjoy the raw beauty of marble and metal in our classy coffee table Novali. A nice material mix that together with the simple design makes the table timeless. Novalis neat frame in lacquered metal gives a stable coffee table with airy feel. The simplicity of Novali makes the table fit in most environments and to many of our sofas. L 80 cm', category: 'tables' },
    { name: "Louise", price: 2995, id: 8, img: [require('./assets/productImages/louise.jpg'), require('./assets/productImages/louise2.jpg')], description: 'Louise is a Swedish-made stylish coffee table with thoughtful design and high quality. The neat design with rounded corners and lightly exposed legs gives the table a relaxed feel. The coffee table has a smart shelf that holds both magazines and remote controls. Louise is available in four different shapes, so you can get a coffee table that fits your room and your sofa. L 90 cm', category: 'tables' },
    { name: "W.Forge", price: 2495, id: 9, img: [require('./assets/productImages/woodenforge.jpg'), require('./assets/productImages/woodenforge2.jpg')], description: 'Antique brown lacquered recycled wood with black lacquered metal base, FSC-labeled recycled wood,Ø 80 cm', category: 'tables' },
    { name: "Nelly", price: 1495, id: 22, img: [require('./assets/productImages/nelly.jpg'), require('./assets/productImages/nelly2.jpg')], description: 'You get a clean, simple and beautiful design in Nelly`s kettle table that combines glass, metal and marble feeling in an exciting way. Nelly is two stylish tables with matte glass top with printed marble pattern. Together with the straight, simple base of metal, the tables give a nice and airy impression. When Nelly is unmounted it is easy to take home with you.', category: 'tables' },
    { name: "Yesterday", price: 1295, id: 23, img: [require('./assets/productImages/yesterday.jpg'), require('./assets/productImages/yesterday2.jpg')], description: 'Oiled wood table. Article information: Pretty corner table in 50s design. Neatly paired with other 50s style classic furniture. Practical shelf. The table is available in several colors.', category: 'tables' },
    { name: "Terrazzo", price: 699, id: 24, img: [require('./assets/productImages/terazzo.jpg'), require('./assets/productImages/terrazzo2.jpg')], description: 'A stylish terrazzo tile table with beautiful marbling and a lacquered metal base. Place it next to the sofa, by the bed or wherever you need an extra relief surface.', category: 'tables' },

    // //carpets

    { name: "Madison", price: 3199, id: 10, img: [require('./assets/productImages/madison.jpg'), require('./assets/productImages/madison2.jpg')], description: 'The polyester material provides a durable and lint-free carpet,Oeko-Tex certified. 250x300cm', category: 'carpets' },
    { name: "Emma", price: 1995, id: 11, img: [require('./assets/productImages/emma.jpg'), require('./assets/productImages/emma2.jpg')], description: 'The polyester material provides a durable and lint-free carpet. Emma is an elegant and durable polyester mat. The carpet has the ability to frame and give a homely and homely feel to the room. Feel free to buy a carpet underlay and corner guard to keep the carpet securely in place on the floor. 160x230cm', category: 'carpets' },
    { name: "Emerson", price: 4695, id: 12, img: [require('./assets/productImages/emerson.jpg'), require('./assets/productImages/emerson2.jpg')], description: 'The viscose material provides a soft surface with luster, Handmade, each carpet is unique. 200x300cm', category: 'carpets' },
    { name: "Richmond", price: 1495, id: 25, img: [require('./assets/productImages/richmond.jpg'), require('./assets/productImages/richmond2.jpg')], description: 'Richmond is a soft and cozy rug that has a long pile with matte finish. The mat is tufted in durable polyester and has canvas back. Feel free to buy rugs and corner guards that keep the rug in place. 100x200cm', category: 'carpets' },
    { name: "Zebra", price: 5495, id: 26, img: [require('./assets/productImages/zebra.jpg'), require('./assets/productImages/zebra2.jpg')], description: '100% viscose with zebra pattern, silver / black, width 200x230cm', category: 'carpets' },
    { name: "Samira", price: 3295, id: 27, img: [require('./assets/productImages/samira.jpg'), require('./assets/productImages/samira2.jpg')], description: 'The viscose material provides a soft surface with luster, 200x290cm', category: 'carpets' },


    // //pillows

    { name: "Velvet", price: 89, id: 13, img: [require('./assets/productImages/20.jpg'), require('./assets/productImages/parna2.jpg')], description: '100% polyester fabric with bored sand. Soft and comfortable velvet becomes an exclusive feature for your sofa. Velvet cushion cover in the velvet gives fantastic shine and luster. The pillow case has a decorative cushion that makes that little extra. 60 x 60', category: 'pillows' },
    { name: "Elefant", price: 129, id: 14, img: [require('./assets/productImages/21.jpg'), require('./assets/productImages/elefant2.jpg')], description: 'Elephant is a decorative pillow case with nice pattern picture. It is 100% cotton, Oeko-Tex certified and can be washed in 40 ° C machine wash. Feel free to buy one of our inner cushions in fiber or feather. 60 x 60', category: 'pillows' },
    { name: "Zeb", price: 129, id: 15, img: [require('./assets/productImages/22.jpg'), require('./assets/productImages/sam2.jpg')], description: 'Zeb is a decorative pillow case with a fine pattern image. It is 100% cotton, Oeko-Tex certified and can be washed in 40 ° C machine wash. Feel free to buy one of our inner cushions in fiber or feather. 60 x 60', category: 'pillows' },
    { name: "Rosso", price: 149, id: 28, img: [require('./assets/productImages/40.jpg')], description: 'Rossö is a colorful pillow in cotton blend with fine stripes. Dare to mix and match designs with a single color to add your personal touch to the décor. Contains an inner pad of fiber. 30 x 40', category: 'pillows' },
    { name: "Marrakesh", price: 199, id: 29, img: [require('./assets/productImages/marrakesh.jpg'), require('./assets/productImages/marrakesh2.jpg')], description: 'Marrakesh is a beautiful pillow with macrame-knit 100% cotton case. In order to keep the case nice, we recommend that it be dry cleaned. Fiber inner pillow included. fiber-cushion included 30 x 40', category: 'pillows' },
    { name: "Sam", price: 239, id: 30, img: [require('./assets/productImages/sam.jpg'), require('./assets/productImages/sam2.jpg')], description: 'Knitted pillow with nice structure that is soft and comfortable to rest on. Sam is made of 100% cotton and is washed in 30 ° C machine wash. The pillow includes a fiber inner pillow. fiber cushion included 30 x 40', category: 'pillows' },


]

export default products