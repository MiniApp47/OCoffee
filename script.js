// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#0d2314");
  tg.setBackgroundColor("#0d2314");

  const progressBar = document.getElementById("myBar");
  const loader = document.getElementById("page-loader");

  // 1. On lance l'animation de la barre après un tout petit délai
  setTimeout(() => {
    if (progressBar) {
      progressBar.style.width = "100%";
    }
  }, 100);

  // 2. On attend la fin de l'animation (2.5 secondes ici) pour cacher le loader
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0"; // Effet de fondu
      loader.style.transition = "opacity 0.5s ease";

      setTimeout(() => {
        loader.style.display = "none";
        loader.classList.remove("active");
        // Affiche la page Home par défaut
        document.getElementById("page-home").classList.add("active");
      }, 500); // Attend la fin du fondu
    }
  }, 2600); // 2600ms = 2.5s d'animation + 0.1s de délai

  // --- CONFIGURATION DES LIENS DE CONTACT ---
  const contactLinks = [
    {
      name: "WHATSAPP 📞",
      url: "",
      id: "whatsapp",
      className: "whatsapp", // Il faudra peut-être ajouter ce CSS (Jaune)
      text: "WHATSAPP 📞",
    },
    {
      name: "CANAL TÉLÉGRAM 💙",
      url: "",
      id: "telegram-main",
      className: "telegram", // Garde le style Bleu Telegram
      text: "CANAL TÉLÉGRAM 💙",
    },
    {
      name: "POTATO / MENU 🥔",
      url: "",
      id: "potato-main",
      className: "potato", // Garde le style Marron/Doré Potato
      text: "CANAL POTATO 🥔",
    },
    {
      name: "INSTAGRAM 📸",
      url: "",
      id: "instagram",
      className: "instagram", // Style dégradé Insta
      text: "INSTAGRAM 📸",
    },
  ];

  // --- DONNÉES DE L'APPLICATION (O'COFFEE) ---
  const appData = [
    // ============================================================
    // CATEGORIE 1 : HOLLANDE 🌿
    // ============================================================
    {
      id: "WeedH",
      name: "WEED HOLLANDE 🇳🇱🌷",
      type: "WeedH",
      quality: "WEED HOLLANDE 🇳🇱🌷",
      image: "CategHo.png", // Ton image de catégorie Weed

      products: [
        {
          id: "🧠🍀AMNESIA CORE CUT 🍀🧠",
          flag: "🇳🇱",
          name: "🧠🍀 AMNESIA CORE CUT 🍀🧠",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductCore.png",
          video: "VideoCore.mp4",
          description:
            "💎🔥 Considérée par de nombreux connaisseurs comme l’une des meilleures expressions de l’Amnesia, la Amnesia Core Cut est une sélection d’élite recherchée pour son profil terpénique puissant et son effet cérébral particulièrement intense. 🔥💎\n\n ✨ Les effets\n\n 🚀 Montée rapide et énergique\n 😄 Euphorie marquée\n 🧠 Stimulation mentale puissante\n 🎨 Créativité et concentration accrues\n 🗣️ Effet social apprécié des amateurs de sativas\n\n 👃 Les arômes\n\n 🍊 Agrumes frais et zestés\n 🌿 Notes Haze classiques\n 🌶️ Légères touches épicées et encensées\n\n 🌱 Pourquoi elle est si recherchée ? \n\n • Sélection réputée pour sa stabilité \n • Profil aromatique particulièrement intense \n • Forte production de résine ✨ \n • Expression fidèle de l’esprit Amnesia « old school » \n • Très appréciée des amateurs de Haze européennes\n\n 🏆 Pour les connaisseurs\n La Core Cut est souvent citée parmi les meilleures coupes d’Amnesia grâce à son équilibre entre puissance, saveurs citronnées explosives et effet mental clair. Beaucoup la considèrent comme une référence lorsqu’on parle de vraie Amnesia de haut niveau.\n\n ⭐ En résumé :\n Une Amnesia premium, ultra citronnée, résineuse et cérébrale, recherchée par les amateurs de Haze authentiques et les passionnés de génétiques européennes. 🔥⚡🧠💎🌿",
          tarifs: [{ weight: "10g", price: 70.0 }],
        },
      ],
    },
    {
      id: "Jaune USA",
      name: "Jaune USA 🇺🇸",
      type: "Jaune USA",
      quality: "Jaune USA 🇺🇸",
      image: "CategJauneUsa.png", // Ton image de catégorie Weed

      products: [
        {
                    id: 'RUNTZ',
                    flag: '🇺🇸',
                    name: 'RUNTZ 🍁',
                    farm: '👹 MONSTER CALI-MOUSSE 👹',
                    promoEligible: true,
                    type: 'JauneUsa',
                    image: 'ProductRun.jpg', 
                                        video: "VideoMS.mov",

                    description: '👹🍁 MONSTER CALI-MOUSSE — RUNTZ 🍁👹\n\nUne mousse jaune inspirée d’une des génétiques les plus connues pour son profil candy, fruité et crémeux. Runtz se distingue par une odeur sucrée très reconnaissable, avec une belle rondeur aromatique et une identité typiquement Cali. 🇺🇸🔥\n\n👃 Profil aromatique :\n🍬 Bonbon sucré et candy\n🍇 Fruits rouges et raisin doux\n🍦 Crème vanillée légère\n🌸 Petite touche florale\n⛽ Fond gazeux discret\n\n👅 Goût :\nEn bouche, Runtz développe une attaque douce et sucrée, avec des saveurs fruitées très gourmandes. Le côté crémeux arrive ensuite pour arrondir le profil, avant une finition légèrement gassy qui apporte du caractère sans casser la douceur. 😮‍💨🍬\n\n💛 Texture & qualité :\n☁️ Mousseuse et homogène\n🤲 Souple et facile à manipuler\n✨ Profil candy très expressif\n🔥 Fumée douce et aromatique\n💎 Finition premium Monster Cali-Mousse\n\n🏆 Le verdict :\nRuntz est une valeur sûre pour les amateurs de profils candy, fruités et crémeux. Une Cali-Mousse douce, gourmande et bien équilibrée, avec une vraie identité moderne. 👹🍁🍬🔥',
                    tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
                    ]
                },
        {
          id: "Papaya",
          flag: "🇺🇸",
          name: "PAPAYA 🥭",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductPA.jpg",
          video: "VideoMS.mov",
          description:
            "👹🥭 MONSTER CALI-MOUSSE — PAPAYA 🥭👹\n\nUne mousse jaune au profil tropical, fruité et gourmand, inspirée des saveurs exotiques de la papaye bien mûre. Papaya développe une identité douce, sucrée et légèrement crémeuse, parfaite pour les amateurs de profils fruités et modernes. 🇺🇸🔥\n\n👃 Profil aromatique :\n🥭 Papaye mûre et fruits tropicaux\n🍑 Notes de pêche et fruits jaunes\n🍬 Douceur candy légère\n🍦 Fond crémeux et rond\n🌿 Petite touche végétale propre\n\n👅 Goût :\nEn bouche, Papaya offre une attaque très fruitée, avec des notes tropicales sucrées et une rondeur crémeuse agréable. La dégustation reste douce, parfumée et équilibrée, avec une finale exotique qui reste bien présente. 😮‍💨🥭\n\n💛 Texture & qualité :\n☁️ Mousseuse et souple\n🤲 Facile à travailler\n✨ Arômes fruités bien marqués\n🔥 Fumée douce et parfumée\n💎 Sélection Monster Cali-Mousse\n\n🏆 Le verdict :\nPapaya est une Cali-Mousse gourmande et exotique, idéale pour ceux qui aiment les profils fruités, sucrés et tropicaux. Une sélection douce, parfumée et très agréable à découvrir. 👹🥭🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
      
         {
                    id: 'White truffle 🍄',
                    flag: '🇺🇸',
                    name: 'White truffle 🍄',
                    farm: '🌾 WEST COAST MOUSSE',
                    promoEligible: true,
                    type: '3xFiltre',
                    image: 'ProductWT.jpg',
                    video:'VideoWT.mp4',
                      description: '🍄🤍 WHITE TRUFFLE — WEST COAST MOUSSE 🤍🍄\n\n Une mousse premium au profil profond, crémeux et raffiné. White Truffle se distingue par son mélange de notes terreuses, boisées et légèrement gazeuses, accompagné d’une douceur gourmande qui apporte beaucoup de rondeur à l’ensemble. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍄 Notes terreuses et boisées\n 🌰 Noisette et fruits à coque\n 🍦 Fond crémeux et vanillé\n 🌿 Légère touche végétale\n ⛽ Finition gazeuse discrète\n\n 👅 Goût :\n En bouche, l’attaque est ronde et crémeuse, avec des saveurs de noisette grillée et de sous-bois. Une douceur légèrement vanillée apparaît ensuite, avant de laisser place à une finale plus profonde, terreuse et gassy qui reste longtemps sur le palais. 😮‍💨🍄\n\n 💛 Texture & qualité :\n ☁️ Mousseuse et homogène\n 🤲 Souple et facile à travailler\n ✨ Profil aromatique riche\n 🔥 Fumée dense et savoureuse\n 💎 Finition premium West Coast\n\n 🏆 Le verdict :\n White Truffle est une sélection élégante et pleine de caractère, idéale pour les amateurs de profils crémeux, terreux et légèrement gazeux. Une mousse raffinée qui change des saveurs fruitées classiques. 🍄🤍⛽🔥',
                      tarifs: [
                        { weight: '10G', price: 60.00 },
                        { weight: '20G', price: 100.00 },
                        { weight: '50G', price: 220.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
          {
                    id: 'ORANGE CREAMPOP 🔥💛',
                    flag: '🇺🇸',
                    name: 'ORANGE CREAMPOP 🔥💛',
                    farm: '🌾 WEST COAST MOUSSE',
                    promoEligible: true,
                    type: 'JauneUsa',
                    image: 'ProductOre.png', 
                    video: 'VideoOre.mov',
                    description: 'Un jaune mousseux ultra gourmand qui frappe direct dès l’ouverture du pochon 🍊💨\n La strain Orange Creampop ramène un profil ultra crémeux et fruité, avec une vraie identité cali premium 🇺🇸✨\n\n 👃 Profil aromatique :\n Une grosse odeur d’orange sucrée type bonbon crémeux, mélangée à des notes vanilla cream et une légère touche gazeuse bien propre 🍦🍊⛽️\n Le mousseux est gras, collant et hyper parfumé.\n\n 👅 Goût :\n En bouche c’est une vraie dinguerie 😮‍💨\n Tu retrouves un mélange parfait entre agrumes sucrés, crème vanillée et une petite finition légèrement candy qui reste longtemps sur le palais 🍬🍊\n Une fumée douce, lourde et ultra savoureuse.\n\n 💥 Effets :\n Bonne grosse défonce relaxante mais propre 🧠🔥\n Ça monte progressivement avec un effet lourd sur le corps tout en gardant un mood chill et agréable. Parfait pour se poser tranquillement le soir 😴💨\n ⭐️ Texture mousseuse\n ⭐️ Goût ultra prononcé\n ⭐️ Cali vibes\n ⭐️ Très gros niveau de qualité',
                    tarifs: [
                        { weight: '10G', price: 60.00 },
                        { weight: '20G', price: 100.00 },
                        { weight: '50G', price: 220.00 },
                        { weight: '100G', price: 400.00 },
                    ]
                },
        {
          id: "🤯🚀 PERMANENT MARKER",
          flag: "🇺🇸",
          name: "🤯🚀 PERMANENT MARKER",
          farm: "🌾 WEST COAST MOUSSE",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductPerm.jpg",
          video: "VideoPerm.mp4",
          description:
            "🔥 Une mousse réputée pour son caractère unique et sa puissance. Son profil est marqué par des notes de gaz, de crème et de marqueur, ce qui lui donne une identité immédiatement reconnaissable.\n\n 💨 Effets recherchés :\n 😌 Détente profonde\n 😊 Sensation de bien-être\n 🧠 Esprit apaisé\n 🛋️ Relaxation physique marquée\n 🌙 Peut devenir très relaxante en fin de session\n\n ⭐ Pourquoi les amateurs l’apprécient ?\n ✔️ Arômes puissants et originaux\n ✔️ Goût qui reste longtemps en bouche\n ✔️ Effets durables\n ✔️ Idéale pour se poser et profiter du moment\n\n 🇺🇸💎 Pour les vrais connaisseurs de mousse US, la Permanent Marker est souvent considérée comme une référence moderne grâce à son profil terpénique atypique, puissant et facilement identifiable. Une variété qui ne passe jamais inaperçue et qui a su se faire une place parmi les génétiques les plus appréciées de ces dernières années.\n 🏆 En bref : Une mousse de caractère, riche en saveurs et en sensations, pensée pour ceux qui recherchent une expérience authentique et typiquement West Coast. 🌊🔥🧱💨",
          tarifs: [
            { weight: "10G", price: 60.0 },
            { weight: "50G", price: 200.0 },
            { weight: "100G", price: 350.0 },
          ],
        },
        {
          id: "GELATO",
          flag: "🇺🇸",
          name: "GELATO 🍦",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductGe.jpg",
                    video: "VideoMS.mov",
          description:
            "👹🍦 MONSTER CALI-MOUSSE — GELATO 🍦👹\n\n Une mousse jaune ultra gourmande qui met en avant tout le caractère crémeux et fruité de la célèbre Gelato. Dès l’ouverture, elle dévoile un parfum riche, sucré et moderne, avec une vraie identité Cali. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍦 Crème glacée et vanille douce\n 🍓 Fruits rouges sucrés\n 🍊 Agrumes légèrement acidulés\n 🍬 Notes de bonbon\n ⛽ Fond gazeux discret\n\n 👅 Goût :\n En bouche, l’attaque est douce et crémeuse, accompagnée de saveurs fruitées rappelant les fruits rouges et les agrumes sucrés. La finale devient légèrement gazeuse et laisse un arrière-goût gourmand façon dessert. 😮‍💨🍦\n\n 💛 Texture :\n ☁️ Mousseuse et aérée\n 🤲 Facile à travailler\n ✨ Parfum intense dès l’ouverture\n 🔥 Combustion régulière\n\n 🏆 Le verdict :\n Une Cali-Mousse gourmande et équilibrée, idéale pour les amateurs de profils crémeux, fruités et légèrement gassy. Une valeur sûre signée Monster Cali-Mousse. 👹🍦🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
        {
          id: "CHERRY PIE",
          flag: "🇺🇸",
          name: "CHERRY PIE 🥧",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductC.jpg",
                    video: "VideoMS.mov",
          description:
            "👹🍒 MONSTER CALI-MOUSSE — CHERRY PIE 🥧👹\n\n Une mousse jaune au profil dessert intense, dominée par la cerise sucrée et les notes pâtissières. Cherry Pie mélange gourmandise fruitée, douceur crémeuse et petite touche gazeuse pour une identité riche et reconnaissable. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍒 Cerise mûre et fruits rouges\n 🥧 Pâte sucrée et biscuit\n 🍦 Crème douce et vanillée\n 🌿 Légère note terreuse\n ⛽ Fond gazeux subtil\n\n 👅 Goût :\n L’attaque rappelle une tarte à la cerise avec une belle douceur fruitée. Elle évolue ensuite vers des notes de pâte sucrée, de crème et de vanille, avant une finition légèrement terreuse et gassy qui reste longtemps en bouche. 😮‍💨🍒\n\n 💛 Texture :\n ☁️ Mousseuse et souple\n 🤲 Facile à effriter\n ✨ Riche en arômes\n 🔥 Fumée dense et savoureuse\n\n 🏆 Le verdict :\n Une Cali-Mousse très gourmande, pensée pour les amateurs de cerise, de profils pâtissiers et de saveurs dessert. Cherry Pie porte parfaitement la signature Monster Cali-Mousse. 👹🍒🥧🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
        {
          id: "TROPICANA CHERRY",
          flag: "🇺🇸",
          name: "TROPICANA CHERRY 🍒",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductTC.jpg",
                    video: "VideoMS.mov",
          description:
            "👹🍊 MONSTER CALI-MOUSSE — TROPICANA CHERRY 🍒👹\n\n Une mousse jaune fruitée et explosive qui combine la douceur de la cerise avec la fraîcheur intense des agrumes. Tropicana Cherry développe un profil coloré, sucré et acidulé, parfaitement adapté aux amateurs de saveurs modernes. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍒 Cerise sucrée et fruits rouges\n 🍊 Orange fraîche et zestée\n 🍋 Agrumes acidulés\n 🍬 Bonbon fruité\n 🌸 Petite touche florale\n\n 👅 Goût :\n En bouche, une vague de cerise et d’orange sucrée arrive dès la première bouffée. Les agrumes apportent ensuite une fraîcheur légèrement acidulée, tandis qu’une douceur candy et florale équilibre parfaitement l’ensemble. 😮‍💨🍊\n\n 💛 Texture :\n ☁️ Mousseuse et légère\n ✨ Profil aromatique très expressif\n 🤲 Facile à travailler\n 🔥 Fumée douce et parfumée\n\n 🏆 Le verdict :\n Une Cali-Mousse vive, fruitée et rafraîchissante, avec un équilibre parfait entre cerise sucrée et agrumes pétillants. Une sélection pleine de caractère signée Monster Cali-Mousse. 👹🍒🍊🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
        {
          id: "PEANUT BUTTER",
          flag: "🇺🇸",
          name: "PEANUT BUTTER 🥜",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductPB.jpg",
                    video: "VideoMS.mov",
          description:
            "👹🥜 MONSTER CALI-MOUSSE — PEANUT BUTTER 🥜👹\n\n Une mousse jaune au profil gourmand et original, inspirée des saveurs riches du beurre de cacahuète. Elle mélange des notes crémeuses, grillées et légèrement salées avec un fond terreux et gazeux typique des grosses sélections US. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🥜 Cacahuète grillée\n 🧈 Beurre crémeux\n 🍪 Biscuit et pâte sucrée\n 🌿 Fond terreux\n ⛽ Légère touche de gaz\n\n 👅 Goût :\n L’attaque est ronde et crémeuse, avec une saveur de cacahuète grillée et de biscuit. Elle évolue progressivement vers des notes plus terreuses et légèrement gazeuses, laissant une finale riche et persistante sur le palais. 😮‍💨🥜\n\n 💛 Texture :\n ☁️ Mousseuse et souple\n 🤲 Facile à travailler\n ✨ Profil gourmand très marqué\n 🔥 Fumée épaisse et savoureuse\n\n 🏆 Le verdict :\n Une Cali-Mousse différente des profils fruités classiques, destinée aux amateurs de saveurs crémeuses, grillées et gassy. Une sélection originale et pleine de caractère. 👹🥜🧈🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
        {
          id: "RS11",
          flag: "🇺🇸",
          name: "RS 11 🏎️",
          farm: "👹 MONSTER CALI-MOUSSE 👹",
          promoEligible: true,
          type: "JauneUsa",
          image: "ProductRS.jpg",
                    video: "VideoMS.mov",
          description:
            "👹🏎️ MONSTER CALI-MOUSSE — RS 11 🏎️👹\n\n Une mousse jaune inspirée de la célèbre RS11, connue pour son profil candy, fruité et crémeux accompagné d’une belle touche gazeuse. Une sélection moderne, riche en arômes et immédiatement reconnaissable. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍬 Bonbon fruité\n 🍓 Fruits rouges et baies\n 🍦 Crème vanillée\n 🌸 Notes florales légères\n ⛽ Fond gazeux et terreux\n\n 👅 Goût :\n En bouche, RS11 commence par une douceur candy très marquée, accompagnée de fruits rouges sucrés. Des notes crémeuses et florales apparaissent ensuite, avant une finale gassy plus profonde qui apporte du relief et une belle longueur en bouche. 😮‍💨🍬\n\n 💛 Texture :\n ☁️ Mousseuse et aérée\n 🤲 Souple et facile à effriter\n ✨ Terpènes riches et expressifs\n 🔥 Fumée dense et parfumée\n\n 🏆 Le verdict :\n Une Cali-Mousse premium au profil candy-gas parfaitement équilibré. RS11 conviendra aux amateurs de saveurs fruitées, crémeuses et puissantes, avec une vraie identité West Coast. 👹🏎️🍬🔥",
          tarifs: [
            { weight: "9G", price: 50.0 },
            { weight: "25G", price: 120.0 },
            { weight: "50G", price: 200.0 },
            {
              weight: "100G",
              price: 350.0,
            },
          ],
        },
      ],
    },
    {
      id: "STATIC",
      name: "STATIC 🇲🇦",
      type: "DoubleStatic",
      quality: "STATIC 🇲🇦",
      image: "CategDouble.png", // Ton image de catégorie Weed

      products: [
        {
          id: "Plasma static",
          flag: "🇺🇸",
          name: "🔮 Plasma static 🔮",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "STATIC",
          image: "ProductPPS.png",
          video: "VideoPPS.mov",
          description:   "🔮🧤 PLASMA STATIC — STATIC SIFT PREMIUM 🧤🔮\n\nUne sélection Static au profil profond, brillant et très aromatique. Plasma Static se distingue par son caractère résineux, sa texture travaillée et une identité premium pensée pour les amateurs de produits propres et puissants en arômes. 🇺🇸🔥\n\n👃 Profil aromatique :\n🔮 Notes résineuses intenses\n🍬 Touche sucrée légèrement candy\n⛽ Fond gassy bien présent\n🌿 Nuances végétales propres\n🔥 Finition profonde et persistante\n\n👅 Goût :\nEn bouche, Plasma Static développe une attaque riche et aromatique, avec un mélange de notes sucrées, gazeuses et résineuses. La dégustation reste longue, propre et bien équilibrée, avec une finale marquée qui donne une vraie impression premium. 😮‍💨🔮\n\n🧤 Texture & qualité :\n💎 Static Sift soigneusement travaillé\n🤲 Texture premium agréable à manipuler\n🌈 Belle conservation des terpènes\n☁️ Fumée dense et savoureuse\n🔥 Profil propre, intense et régulier\n\n🏆 Le verdict :\nUne Static élégante et pleine de caractère, idéale pour ceux qui aiment les profils résineux, gassy et bien travaillés. Plasma Static combine intensité, propreté et finition haut de gamme dans une sélection très solide. 🔮🧤🔥",
          tarifs: [
            { weight: "3G", price: 50.0 },
            { weight: "10G", price: 140.0 },
            { weight: "25G", price: 250.0 },
            { weight: "50G", price: 450.0 },
          ],
        },
        {
          id: "La Bomba x Spriter 💣",
          flag: "🇺🇸",
          name: "La Bomba x Spriter 💣",
          farm: "🌟 By Secret House Smoke Farm 🌟",
          promoEligible: true,
          type: "STATIC",
          image: "ProductKBS.jpg",
          video: "VideoKBS.mov",
          description:
            "💣🧤 LA BOMBA x SPRITER — STATIC SIFT 🧤💣\n\nUne sélection Static au profil explosif, aromatique et ultra travaillé. La Bomba x Spriter mélange une base puissante et résineuse avec une touche fruitée, gazeuse et légèrement sucrée qui lui donne une vraie identité premium. 🇺🇸🔥\n\n👃 Profil aromatique :\n💣 Notes puissantes et résineuses\n🍬 Touche candy légèrement sucrée\n🍋 Agrumes frais et zestés\n⛽ Fond gassy bien présent\n🌿 Finition végétale propre\n\n👅 Goût :\nEn bouche, La Bomba x Spriter développe une attaque intense, avec un mélange de notes fruitées, gazeuses et résineuses. Le profil reste riche et long en bouche, avec une finale propre, lourde et très aromatique. 😮‍💨💣\n\n🧤 Texture & qualité :\n💎 Static Sift soigneusement travaillé\n🤲 Texture premium et agréable à manipuler\n🌈 Belle conservation des terpènes\n☁️ Fumée dense et savoureuse\n🔥 Profil puissant et bien équilibré\n\n🏆 Le verdict :\nUne Static de caractère, pensée pour les amateurs de profils forts, gassy et fruités. La Bomba x Spriter combine intensité, gourmandise et finition premium dans une sélection qui porte bien son nom. 💣🧤🔥",
          tarifs: [
            { weight: "3G", price: 50.0 },
            { weight: "10G", price: 140.0 },
            { weight: "25G", price: 250.0 },
            { weight: "50G", price: 450.0 },
          ],
        },
      ],
    },
    // ============================================================
    // CATEGORIE 1 : CALI 🌿
    // ============================================================
    {
      id: "WEED",
      name: "WEED CALI 🇺🇸 🥦",
      type: "Weed",
      quality: "WEED CALI 🇺🇸 🥦",
      image: "CategWeed.png", // Ton image de catégorie Weed

      products: [
        {
                    id: 'GAS TRUFFLE ⛽',
                    flag: '🇺🇸',
                    name: 'GAS TRUFFLE ⛽',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductGT.png', 
                    video: 'VideoGT.mp4',
                    description:   "⛽🍄 GAS TRUFFLE — CALI PREMIUM 🍄⛽\n\nUne sélection au profil puissant, profond et ultra aromatique. Gas Truffle se distingue par une belle intensité gassy, une rondeur terreuse raffinée et une vraie identité premium pensée pour les amateurs de profils lourds et marqués. 🇺🇸🔥\n\n👃 Profil aromatique :\n⛽ Notes gazeuses bien présentes\n🍄 Touches terreuses et truffées\n🌿 Fond végétal propre\n🍦 Légère rondeur crémeuse\n🔥 Finition résineuse intense\n\n👅 Goût :\nEn bouche, Gas Truffle développe une attaque puissante et aromatique, dominée par des notes gassy et terreuses. Le profil devient ensuite plus rond, avec une légère touche crémeuse qui équilibre parfaitement la finale, longue et bien marquée. 😮‍💨⛽\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Profil profond et expressif\n☁️ Fumée dense et savoureuse\n🔥 Belle longueur en bouche\n🍄 Identité forte et raffinée\n\n🏆 Le verdict :\nUne variété de caractère, idéale pour ceux qui aiment les profils gassy, terreux et résineux. Gas Truffle combine puissance aromatique, profondeur et finition premium dans une sélection qui ne passe pas inaperçue. ⛽🍄🔥",                    
                    tarifs: [
            { weight: "5g", price: 60.0 },
            { weight: "10g", price: 100.0 },
            { weight: "25g", price: 220.0 },
            { weight: "50g", price: 400.0 },
                    ]
                }, 
        {
                    id: 'GRAPPE SODA',
                    flag: '🇺🇸',
                    name: 'GRAPPE SODA',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductGS.png', 
                    video: 'VideoGS.mp4',
                    description:   "🍇🥤 GRAPPE SODA — CALI PREMIUM 🥤🍇\n\nUne sélection fruitée, fraîche et ultra gourmande, pensée pour les amateurs de profils sucrés et modernes. Grappe Soda se distingue par ses notes de raisin, sa douceur candy et sa finition pétillante qui rappelle une boisson fruitée bien fraîche. 🇺🇸🔥\n\n👃 Profil aromatique :\n🍇 Raisin sucré et fruits violets\n🥤 Notes soda fraîches et pétillantes\n🍬 Touche candy bien marquée\n🌸 Légère nuance florale\n🌿 Fond propre et fruité\n\n👅 Goût :\nEn bouche, Grappe Soda développe une attaque douce et sucrée, avec une belle présence de raisin et de bonbon fruité. Le profil reste frais, rond et agréable, avec une finale pétillante et gourmande qui reste longtemps en bouche. 😮‍💨🍇\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Profil fruité très expressif\n☁️ Fumée douce et parfumée\n🔥 Belle gourmandise en bouche\n🥤 Identité originale et moderne\n\n🏆 Le verdict :\nUne variété parfaite pour ceux qui aiment les profils fruités, candy et rafraîchissants. Grappe Soda combine douceur, fraîcheur et vraie personnalité dans une sélection gourmande et efficace. 🍇🥤🔥",                   
                    tarifs: [
            { weight: "5g", price: 60.0 },
            { weight: "10g", price: 100.0 },
            { weight: "25g", price: 220.0 },
            { weight: "50g", price: 400.0 },
                    ]
                }, 
        {
                    id: '🍨🌿 GELATO  🌿🍨',
                    flag: '🇺🇸',
                    name: '🍨🌿 GELATO 🌿🍨',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductGO.png', 
                    video: 'VideoGO.mp4',
                    description: '💎🔥 Une des variétés les plus célèbres de la famille Gelato, réputée pour son équilibre entre puissance, saveurs gourmandes et effets agréables. 🔥💎\n\n ✨ Origines\n Gelato #33 est issue du croisement entre la variété Sunset Sherbet et Thin Mint GSC (Girl Scout Cookies). Cette génétique lui a permis de devenir une référence mondiale dans l’univers du cannabis.  \n\n 🌈 Aspect\n • Têtes denses et compactes 🟣🟢\n • Couleurs vert foncé à violettes ✨\n • Couvertes d’une épaisse couche de résine givrée ❄️\n • Pistils orange vif 🧡  \n\n 👃 Arômes & Saveurs\n 🍦 Crémeux et gourmand\n 🍓 Notes de fruits rouges et d’agrumes\n 🍪 Fond biscuité et légèrement mentholé\n 🍋 Touches sucrées et citronnées  \n\n ⚡ Effets recherchés\n 😄 Euphorie et bonne humeur\n 🧠 Sensation de bien-être mental\n 🎨 Créativité et sociabilité\n 😌 Relaxation corporelle sans forcément être assommante\n 🌙 À dose plus élevée, elle peut devenir très relaxante et favoriser le repos  \n\n 🎯 Profil général\n • Hybride équilibrée (légère dominance indica selon les phénotypes)\n • THC souvent situé entre 20 % et 29 % 🔥\n • Adaptée aussi bien pour se détendre que pour profiter d’une activité calme ou entre amis.  \n\n ⭐ En résumé\n Gelato #33 est souvent appréciée pour son mélange de détente physique et d’euphorie mentale. Elle procure généralement un effet heureux, relaxant et agréable, accompagné d’un profil aromatique crémeux et sucré qui a fait sa réputation. 🍨✨',                    
                    tarifs: [
            { weight: "5g", price: 60.0 },
            { weight: "10g", price: 100.0 },
            { weight: "25g", price: 220.0 },
            { weight: "50g", price: 400.0 },
                    ]
                }, 
        {
          id: "Milk runtz",
          flag: "🇺🇸",
          name: "🥛 Milk runtz 🥛",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductMR.jpg",
          video: "VideoMR.mp4",
          description:
             "🥛🍬 MILK RUNTZ — CALI PREMIUM 🍬🥛\n\nUne sélection au profil doux, crémeux et ultra gourmand. Milk Runtz mélange une base candy fruitée avec une rondeur lactée très agréable, parfaite pour les amateurs de saveurs sucrées et modernes. 🇺🇸🔥\n\n👃 Profil aromatique :\n🥛 Notes lactées et crémeuses\n🍬 Bonbon sucré type candy\n🍓 Fruits rouges doux\n🍦 Vanille légère\n⛽ Petite finition gassy discrète\n\n👅 Goût :\nEn bouche, Milk Runtz développe une attaque douce et sucrée, avec des notes fruitées bien rondes. Le côté crémeux arrive ensuite pour donner une sensation gourmande, presque dessert, avec une finale propre et parfumée. 😮‍💨🥛\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Profil candy/crémeux bien marqué\n☁️ Dégustation douce et aromatique\n🔥 Belle rondeur en bouche\n🥛 Identité gourmande originale\n\n🏆 Le verdict :\nUne variété douce, sucrée et crémeuse, idéale pour ceux qui aiment les profils candy avec une vraie rondeur lactée. Milk Runtz combine gourmandise, fraîcheur et finition premium. 🥛🍬🔥",
          tarifs: [
            { weight: "5g", price: 60.0 },
            { weight: "10g", price: 100.0 },
            { weight: "25g", price: 220.0 },
            { weight: "50g", price: 400.0 },
          ],
        },
        {
          id: "Perm chimera",
          flag: "🇺🇸",
          name: "🎄 Perm chimera 🎄",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductPC.jpg",
          video: "VideoPC.mp4",
          description:
             "🎄⛽ PERM CHIMERA — CALI PREMIUM ⛽🎄\n\nUne sélection au profil puissant en arômes, profond et très expressif. Perm Chimera mélange des notes gassy, crémeuses et légèrement fruitées, avec une identité moderne et bien marquée. 🇺🇸🔥\n\n👃 Profil aromatique :\n⛽ Notes gassy bien présentes\n🍦 Fond crémeux et rond\n🍬 Touche candy discrète\n🌿 Nuances végétales propres\n🔥 Finition résineuse intense\n\n👅 Goût :\nEn bouche, Perm Chimera développe une attaque riche et aromatique, avec une belle présence gassy dès le départ. Le profil devient ensuite plus rond, légèrement sucré et crémeux, avec une finale longue et bien marquée. 😮‍💨🎄\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Arômes profonds et expressifs\n☁️ Dégustation dense et savoureuse\n🔥 Profil moderne et travaillé\n🎄 Belle identité de connaisseur\n\n🏆 Le verdict :\nUne variété de caractère, parfaite pour les amateurs de profils gassy, crémeux et bien marqués. Perm Chimera combine profondeur aromatique, rondeur et finition premium. 🎄⛽🔥",
          tarifs: [
            { weight: "5g", price: 60.0 },
            { weight: "10g", price: 100.0 },
            { weight: "25g", price: 220.0 },
            { weight: "50g", price: 400.0 },
          ],
        },
        {
          id: "Trade",
          flag: "🇺🇸",
          name: "Trade 📊",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductT.png",
          video: "VideoT.mp4",
          description:
            "📊🔥 TRADE — CALI PREMIUM 🔥📊\n\nUne sélection moderne au profil propre, équilibré et bien travaillé. Trade se distingue par une identité aromatique ronde, légèrement sucrée et résineuse, avec une belle présence dès l’ouverture. 🇺🇸💎\n\n👃 Profil aromatique :\n🍬 Notes sucrées légères\n🌿 Fond végétal propre\n⛽ Petite touche gassy\n🍦 Rondeur crémeuse discrète\n🔥 Finition résineuse élégante\n\n👅 Goût :\nEn bouche, Trade développe une attaque douce et aromatique, avec un mélange équilibré entre notes sucrées, résineuses et légèrement crémeuses. La dégustation reste propre, agréable et régulière, avec une finale bien présente. 😮‍💨📊\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Profil aromatique équilibré\n☁️ Fumée douce et dense\n🔥 Bonne régularité\n📊 Produit simple, propre et efficace\n\n🏆 Le verdict :\nUne sélection fiable et équilibrée, parfaite pour ceux qui recherchent un profil propre, doux et légèrement gassy. Trade mise sur la régularité, la qualité et une belle rondeur aromatique. 📊🔥🇺🇸",
          tarifs: [
            { weight: "5g", price: 60.0 },
            { weight: "10g", price: 100.0 },
            { weight: "25g", price: 220.0 },
            { weight: "50g", price: 400.0 },
          ],
        },
        {
          id: "Blueberry 🌀",
          flag: "🇺🇸",
          name: "Blueberry 🌀",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductBB.png",
          video: "VideoBB.mov",
          description:
            "🌀🫐 BLUEBERRY — CALI PREMIUM 🫐🌀\n\nUne sélection fruitée et douce, centrée sur un profil myrtille sucrée, baies mûres et rondeur crémeuse. Blueberry est une valeur sûre pour les amateurs de saveurs fruitées, simples et efficaces. 🇺🇸🔥\n\n👃 Profil aromatique :\n🫐 Myrtille sucrée\n🍓 Fruits rouges mûrs\n🍬 Douceur candy légère\n🍦 Fond crémeux discret\n🌿 Petite touche végétale propre\n\n👅 Goût :\nEn bouche, Blueberry développe une attaque douce et fruitée, avec des notes de myrtille et de fruits rouges bien présentes. La dégustation reste ronde, agréable et parfumée, avec une finale sucrée qui reste longtemps sur le palais. 😮‍💨🫐\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Profil fruité expressif\n☁️ Fumée douce et aromatique\n🔥 Saveur claire et régulière\n🌀 Identité fruitée reconnaissable\n\n🏆 Le verdict :\nUne variété fruitée, douce et efficace, parfaite pour ceux qui aiment les profils berry, sucrés et crémeux. Blueberry combine gourmandise, fraîcheur et simplicité dans une sélection très agréable. 🌀🫐🔥",
          tarifs: [
            { weight: "5g", price: 60.0 },
            { weight: "10g", price: 100.0 },
            { weight: "25g", price: 220.0 },
            { weight: "50g", price: 400.0 },
          ],
        },
      ],
    },
    {
      id: "FROZEN",
      name: "FROZEN 🇲🇦🍯",
      type: "Frozen",
      quality: "FROZEN 🇲🇦🍯",
      image: "CategFrozen.png", // Ton image de catégorie Weed

      products: [
         {
          id: "YellowGaz",
          flag: "🇺🇸",
          name: "YellowGaz 👑",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductYG.png",
          video: "VideoYG.mov",
          description:
              "👑⛽ YELLOWGAZ — CALI PREMIUM ⛽👑\n\nUne sélection au profil jaune, crémeux et gassy, pensée pour les amateurs de saveurs riches et modernes. YellowGaz se distingue par une belle rondeur aromatique, une odeur marquée et une finition propre qui lui donne une vraie identité premium. 🇺🇸🔥\n\n👃 Profil aromatique :\n⛽ Notes gazeuses bien présentes\n🍯 Fond doux et légèrement sucré\n🍦 Rondeur crémeuse\n🍋 Petite touche citronnée\n🌿 Finition végétale propre\n\n👅 Goût :\nEn bouche, YellowGaz développe une attaque douce et crémeuse, rapidement accompagnée par une note gassy plus marquée. Le profil reste rond, savoureux et long en bouche, avec une finale propre et légèrement sucrée. 😮‍💨👑\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n🔥 Profil jaune/gaz bien équilibré\n☁️ Fumée dense et agréable\n✨ Arômes propres et expressifs\n👑 Belle finition haut de gamme\n\n🏆 Le verdict :\nUne valeur sûre pour ceux qui aiment les profils crémeux, jaunes et gassy. YellowGaz combine douceur, puissance aromatique et vraie finition premium dans une sélection très propre. 👑⛽🔥",
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 90.0 },
            { weight: "25G", price: 200.0 },
            { weight: "50G", price: 350.0 },
            { weight: "100G", price: 680.0 },
          ],
        },
        {
          id: "🧊 Frozen 🧊",
          flag: "🇺🇸",
          name: "🧊 Frozen 🧊",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductFro.png",
          video: "VideoFro.mov",
          description:
              "🧊❄️ FROZEN — SÉLECTION PREMIUM ❄️🧊\n\nUne sélection Frozen au profil frais, gourmand et bien travaillé. Cette gamme met en avant deux strains au caractère différent, avec une belle richesse aromatique et une texture soignée pour les amateurs de produits propres et expressifs. 🇺🇸🔥\n\n👃 Strains disponibles :\n🥵 MIMOSA : profil agrumes, orange sucrée, fraîcheur fruitée et petite touche acidulée\n🍑🍯 ICC X LCG : mélange crémeux, fruité et dessert, avec des notes citronnées, cherry et douceur sucrée\n\n👅 Goût :\nEn bouche, Frozen développe une dégustation fraîche et aromatique. MIMOSA apporte un côté fruité, vif et citronné, tandis que ICC X LCG donne une rondeur plus crémeuse, sucrée et gourmande. Le profil reste propre, agréable et bien équilibré. 😮‍💨🧊\n\n❄️ Texture & qualité :\n💎 Sélection premium bien travaillée\n🤲 Texture propre et agréable\n🌈 Deux profils aromatiques différents\n☁️ Fumée douce et parfumée\n🔥 Belle intensité en bouche\n\n🏆 Le verdict :\nUne sélection Frozen polyvalente et gourmande, parfaite pour ceux qui veulent choisir entre fraîcheur fruitée et profil dessert crémeux. Une gamme propre, aromatique et efficace. 🧊❄️🔥",
              // 👇 NOUVELLE STRUCTURE
                         variantTitle: 'Choisis ta strain 🥣 :',
                         jars: [
                             { name: 'MIMOSA', emoji: '🥵', colorClass: 'style-passion' },
                             { name: 'ICC X LCG', emoji: '🍑🍯', colorClass: 'style-orange' }
                         ],
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 90.0 },
            { weight: "25G", price: 200.0 },
            { weight: "50G", price: 350.0 },
            { weight: "100G", price: 680.0 },
          ],
        },
        {
          id: "OLIVE",
          flag: "🇲🇦",
          name: "🍫 OLIVE 🍯🫒",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "FROZEN",
          image: "ProductOLL.png", // ⚠️ A changer
          video: "VideoOLL.mov",
          description:
            "🫒🍯 OLIVE — FROZEN PREMIUM 🍯🫒\n\nUne sélection Frozen originale et gourmande, pensée pour les amateurs de résines riches, fondantes et pleines de caractère. Olive se distingue par son format atypique, sa texture travaillée et son profil aromatique profond, mêlant douceur sucrée, notes résineuses et belle rondeur en bouche. 🇲🇦🔥\n\n👃 Profil aromatique :\n🍫 Notes chocolatées et gourmandes\n🍯 Douceur miellée\n🌰 Touches de fruits à coque\n🌿 Fond végétal et résineux\n🔥 Légère finition terreuse élégante\n\n👅 Goût :\nEn bouche, Olive développe une attaque douce et gourmande, portée par des notes chocolatées et une rondeur sucrée très agréable. Le profil évolue ensuite vers quelque chose de plus résineux et légèrement terreux, avec une finale propre, riche et persistante. 😮‍💨🫒\n\n❄️ Texture & qualité :\n💎 Frozen soigneusement travaillé\n🤲 Texture souple, dense et agréable à manipuler\n🌈 Bonne conservation des arômes\n☁️ Fumée épaisse et savoureuse\n🔥 Profil équilibré et régulier\n\n🏆 Le verdict :\nUne Frozen gourmande et pleine de caractère, idéale pour ceux qui recherchent une résine originale, fondante et bien travaillée. Olive combine douceur, profondeur aromatique et vraie identité premium dans un format qui ne passe pas inaperçu. 🫒🍯🍫🔥",
          tarifs: [{ weight: "1 Olive", price: 120.0 }],
        },

        /*  {
                    id: '🫒❄️🔥 OLIVE 🔥❄️🫒',
                    flag: '🇲🇦',
                    name: '🫒❄️🔥 OLIVE 🔥❄️🫒',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Frozen',
                    image: 'ProductOl.jpg', 
                    video: 'VideoOl.mp4',
                    description: '🫒❄️🔥 SÉLECTION PREMIUM 🔥❄️🫒 \n 💎 Une sélection d’olives de Frozen, Static et Double Static.\n\n 🌿 Variétés disponibles :\n 🍬 Double Static – Profil riche et résineux, très apprécié pour son intensité aromatique.\n 🫐 Gelato Blue – Notes crémeuses et fruitées avec une touche sucrée de baies.\n 🍌 Pink Banana Runtz – Saveurs exotiques de banane et de bonbon fruité.\n 🥷 Ninja Runtz – Profil gourmand, sucré et légèrement crémeux.\n 💜 Purple Kush Cali Connection – Arômes terreux et épicés, avec une touche de raisin.\n 🍒 Lemon Cherry Gelato – Mélange explosif de citron, de cerise et de crème.\n 🌴 Jungle Cookie – Notes sucrées et biscuitées avec une pointe tropicale.\n 🍒🍋 Lemon Cherry Runtz – Alliance parfaite entre agrumes, cerise et bonbon.\n 🍈 Melonade – Saveurs fraîches de melon et d’agrumes.\n 💜 Purple Indica Cali Connection – Profil profond, floral et fruité.\n 🍊 Orange Bud – Arômes d’orange fraîche et d’agrumes sucrés.\n 🍬 Runtz – Référence incontournable aux saveurs de bonbons fruités.\n 🍊 Mandarin Cookie – Mélange gourmand de mandarine et de biscuit sucré.\n 💎 Static Full Melt – Résine d’exception, extrêmement riche en terpènes et à la texture fondante.\n 🍰 Hashringan Ice Cream Cake – Profil crémeux et pâtissier, aux notes de vanille et de dessert gourmand.\n 🥤 Hashringan Fanta Juice – Explosion d’agrumes et de fruits sucrés, avec une touche tropicale rafraîchissante.\n 🍇 Hashringan Grape Juicy – Saveurs intenses de raisin et de fruits rouges, au profil sucré et gourmand.\n 🏁 Fin du Game Purple Kush – Notes profondes de terre, d’épices et de raisin, avec un caractère puissant et authentique.\n\n 💎 Une collection pensée pour les véritables amateurs de résines modernes et de profils terpéniques d’exception. 🫒❄️🔥',
                    
                    // 👇 NOUVELLE STRUCTURE DE VARIANTES
                    variantTitle: 'Choisis ta variété 🫒 :',
                    jars: [
                        { name: 'Double Static', emoji: '🍬', colorClass: 'style-gold' },
                        { name: 'Gelato Blue', emoji: '🫐', colorClass: 'style-blue' },
                        { name: 'Pink Banana Runtz', emoji: '🍌', colorClass: 'style-yellow' },
                        { name: 'Ninja Runtz', emoji: '🥷', colorClass: 'style-glue' },
                        { name: 'Purple Kush CC', emoji: '💜', colorClass: 'style-purple' },
                        { name: 'Lemon Cherry Gelato', emoji: '🍒', colorClass: 'style-cherry' },
                        { name: 'Jungle Cookie', emoji: '🌴', colorClass: 'style-green' },
                        { name: 'Lemon Cherry Runtz', emoji: '🍋', colorClass: 'style-passion' },
                        { name: 'Melonade', emoji: '🍈', colorClass: 'style-melon' },
                        { name: 'Purple Indica CC', emoji: '💜', colorClass: 'style-indigo' },
                        { name: 'Orange Bud', emoji: '🍊', colorClass: 'style-orange' },
                        { name: 'Runtz', emoji: '🍬', colorClass: 'style-pink' },
                        { name: 'Mandarin Cookie', emoji: '🍊', colorClass: 'style-brown' },
                        { name: 'Static Full Melt', emoji: '💎', colorClass: 'style-silver' },
                        { name: 'Hashringan Ice Cream', emoji: '🍰', colorClass: 'style-white' },
                        { name: 'Hashringan Fanta', emoji: '🥤', colorClass: 'style-fanta' },
                        { name: 'Hashringan Grape', emoji: '🍇', colorClass: 'style-grape' },
                        { name: 'Fin du Game Purple', emoji: '🏁', colorClass: 'style-dark' }
                    ],

                    tarifs: [
                        { weight: '1 olive', price: 90.00 },
                    ]
                }, */
      ],
    },
    {
      id: "3xFiltre",
      name: "3X FILTRE PREMIUM 🇲🇦🍫",
      type: "3xFiltre",
      quality: "3X FILTRE PREMIUM 🇲🇦🍫",
      image: "Categ3X.png", // Ton image de catégorie Weed

      products: [
        {
          id: "SPRITZER 🍸",
          flag: "🇲🇦",
          name: "SPRITZER 🍸",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "3xFiltre",
          image: "ProductSP.png",
          video: "VideoSP.mov",
          description:
                "🍸✨ SPRITZER — DRY SIFT ✨🍸\n\nUne sélection 3X Filtre au profil frais, fruité et raffiné. Spritzer se distingue par une belle vivacité aromatique, une touche légèrement sucrée et une identité moderne qui le rend particulièrement agréable pour les amateurs de profils expressifs. 🇲🇦🔥\n\n👃 Profil aromatique :\n🍋 Notes fraîches et zestées\n🍇 Touche fruitée légère\n🍬 Fond sucré discret\n🌿 Nuance végétale propre\n✨ Finition élégante et parfumée\n\n👅 Goût :\nEn bouche, Spritzer développe une attaque fraîche et aromatique, avec une belle présence fruitée et une rondeur légère qui équilibre l’ensemble. Le profil reste propre, vif et agréable, avec une finale douce et parfumée. 😮‍💨🍸\n\n✨ Texture & qualité :\n💎 3X Filtre soigneusement sélectionné\n🤲 Texture souple et homogène\n🌈 Arômes frais bien conservés\n☁️ Dégustation douce et parfumée\n🔥 Profil propre, moderne et régulier\n\n🏆 Le verdict :\nUne 3X Filtre fraîche et élégante, idéale pour ceux qui aiment les profils fruités, légers et bien travaillés. Spritzer combine fraîcheur, gourmandise et finition premium dans une sélection très agréable. 🍸✨🔥",
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 80.0 },
            { weight: "20G", price: 140.0 },
            { weight: "50G", price: 250.0 },
            { weight: "100G", price: 400.0 },
          ],
        },
        {
          id: "Forbiden 🧤",
          flag: "🇲🇦",
          name: "Forbiden 🧤",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "3xFiltre",
          image: "ProductDS.png",
          video: "VideoDS.mp4",
          description:
                "🧤🍯 Forbiden — 3X FILTRE PREMIUM 🍯🧤\n\nUne sélection de filtrer au profil propre, gourmand et bien travaillé. DrySift se distingue par une texture soignée, une belle richesse aromatique et une identité résineuse très agréable, pensée pour les amateurs de profils classiques mais efficaces. 🇲🇦🔥\n\n👃 Profil aromatique :\n🍯 Notes douces et légèrement miellées\n🌿 Fond végétal propre\n🍫 Petite touche gourmande\n🌰 Nuances rondes et résineuses\n🔥 Finition élégante et persistante\n\n👅 Goût :\nEn bouche, Forbiden développe une attaque douce et aromatique, avec une belle rondeur dès les premières notes. Le profil reste propre, équilibré et agréable, avec une finale légèrement gourmande et résineuse qui tient bien en bouche. 😮‍💨🧤\n\n✨ Texture & qualité :\n💎 Sélection soigneusement travaillée\n🤲 Texture souple et agréable à manipuler\n🌈 Arômes bien conservés\n☁️ Dégustation douce et savoureuse\n🔥 Profil propre et régulier\n\n🏆 Le verdict :\nUne valeur sûre pour ceux qui aiment les profils doux, résineux et bien équilibrés. DrySift combine simplicité, qualité et belle rondeur aromatique dans une sélection très propre. 🧤🍯🔥",
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 80.0 },
            { weight: "20G", price: 140.0 },
            { weight: "50G", price: 250.0 },
            { weight: "100G", price: 400.0 },
          ],
        },
        {
          id: "Yellow Chem",
          flag: "🇲🇦",
          name: "Yellow Chem 🍯",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "3xFiltre",
          image: "ProductYC.png",
          video: "VideoYC.mp4",
          description:
              "🍯⚡ YELLOW CHEM — 3X FILTRE PREMIUM ⚡🍯\n\nUne sélection 3X Filtre au profil jaune, résineux et légèrement gassy. Yellow Chem se distingue par une belle texture, une rondeur aromatique propre et une identité à la fois douce, terreuse et puissante en goût. 🇲🇦🔥\n\n👃 Profil aromatique :\n🍯 Notes jaunes et miellées\n⛽ Fond gassy bien présent\n🌿 Touches végétales propres\n🍋 Petite fraîcheur citronnée\n🔥 Finition résineuse persistante\n\n👅 Goût :\nEn bouche, Yellow Chem développe une attaque douce et aromatique, avec une rondeur légèrement sucrée. Le côté chem/gassy arrive ensuite pour donner plus de caractère, avec une finale propre, résineuse et longue. 😮‍💨🍯\n\n✨ Texture & qualité :\n💎 3X Filtre soigneusement travaillé\n🤲 Texture souple et homogène\n🌈 Arômes bien conservés\n☁️ Dégustation riche et parfumée\n🔥 Profil jaune/gaz bien équilibré\n\n🏆 Le verdict :\nUne 3X Filtre propre et bien équilibrée, idéale pour ceux qui aiment les profils jaunes, gassy et légèrement sucrés. Yellow Chem combine rondeur, caractère et finition premium. 🍯⚡🔥",
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 80.0 },
            { weight: "20G", price: 140.0 },
            { weight: "50G", price: 250.0 },
            { weight: "100G", price: 400.0 },
          ],
        },
        {
          id: "Dolce",
          flag: "🇲🇦",
          name: "Dolce 🍰",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "3xFiltre",
          image: "ProductDO.png",
          video: "VideoDO.mp4",
          description:
              "🍰🍫 DOLCE — 3X FILTRE PREMIUM 🍫🍰\n\nUne sélection 3X Filtre au profil dessert, doux et très gourmand. Dolce mise sur une belle rondeur aromatique, avec des notes sucrées, crémeuses et pâtissières qui donnent une identité élégante et agréable. 🇲🇦🔥\n\n👃 Profil aromatique :\n🍰 Notes de gâteau sucré\n🍦 Crème vanillée\n🍫 Petite touche chocolatée\n🍯 Douceur miellée\n🌿 Fond végétal propre\n\n👅 Goût :\nEn bouche, Dolce développe une attaque douce et gourmande, avec des notes de crème, de gâteau et une légère touche sucrée. Le profil reste rond, propre et équilibré, avec une finale dessert très agréable. 😮‍💨🍰\n\n✨ Texture & qualité :\n💎 3X Filtre premium\n🤲 Texture souple et facile à travailler\n🌈 Profil gourmand bien présent\n☁️ Dégustation douce et aromatique\n🔥 Finition propre et régulière\n\n🏆 Le verdict :\nUne 3X Filtre parfaite pour les amateurs de profils sucrés, crémeux et pâtissiers. Dolce combine gourmandise, douceur et qualité dans une sélection très propre. 🍰🍫🔥",
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 80.0 },
            { weight: "20G", price: 140.0 },
            { weight: "50G", price: 250.0 },
            { weight: "100G", price: 400.0 },
          ],
        },
         {
          id: "Mentos",
          flag: "🇲🇦",
          name: "Mentos 🍬",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "3xFiltre",
          image: "ProductMS.png",
          video: "VideoMSS.mov",
          description:
                  "🍬🍫 MENTOS — 3X FILTRE PREMIUM 🍫🍬\n\nUne sélection 3X Filtre au profil frais, sucré et gourmand. Mentos se distingue par une belle douceur aromatique, une texture propre et une identité candy/fraîche qui change des profils classiques. 🇲🇦🔥\n\n👃 Profil aromatique :\n🍬 Notes bonbon sucrées\n🌬️ Fraîcheur légère type mentholée\n🍯 Fond doux et rond\n🌿 Petite touche végétale propre\n🔥 Finition résineuse élégante\n\n👅 Goût :\nEn bouche, Mentos développe une attaque douce et fraîche, avec des notes candy bien présentes et une légère rondeur sucrée. La dégustation reste propre, agréable et équilibrée, avec une finale fraîche et gourmande. 😮‍💨🍬\n\n✨ Texture & qualité :\n💎 3X Filtre soigneusement travaillé\n🤲 Texture souple et agréable\n🌈 Arômes frais et sucrés\n☁️ Fumée douce et parfumée\n🔥 Profil propre et régulier\n\n🏆 Le verdict :\nUne 3X Filtre originale et gourmande, idéale pour les amateurs de profils sucrés, frais et candy. Mentos combine fraîcheur, douceur et qualité dans une sélection simple mais très efficace. 🍬🍫🔥",
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 80.0 },
            { weight: "20G", price: 140.0 },
            { weight: "50G", price: 250.0 },
            { weight: "100G", price: 400.0 },
          ],
        },
        {
          id: "FILTRED ⚡",
          flag: "🇲🇦",
          name: "FILTRED ⚡",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "3xFiltre",
          image: "ProductF.png",
          video: "VideoF.mov",
          description:
              "⚡❄️ FILTRED — SÉLECTION PREMIUM ❄️⚡\n\nUne sélection filtrée au profil gourmand, propre et bien travaillé. FILTRED se distingue par une texture souple, une belle intensité aromatique et plusieurs saveurs bien marquées pour varier les plaisirs. 🇲🇦🔥\n\n👃 Saveurs disponibles : \n🍫 Nutella : profil cacao, noisette et rondeur gourmande \n\n👅 Goût :\nEn bouche, FILTRED développe une attaque douce et aromatique, avec une belle rondeur selon la saveur choisie. Le profil reste propre, agréable et bien équilibré, avec une finale gourmande qui reste présente. 😮‍💨⚡\n\n✨ Texture & qualité :\n💎 Filtré soigneusement sélectionné\n🤲 Texture souple et facile à travailler\n🌈 Saveurs bien distinctes\n☁️ Fumée douce et parfumée\n🔥 Profil propre, régulier et gourmand\n\n🏆 Le verdict :\nUne sélection filtrée efficace et gourmande, parfaite pour ceux qui aiment choisir entre plusieurs profils aromatiques. FILTRED combine qualité, variété et finition propre dans une gamme simple et bien maîtrisée. ⚡❄️🔥",
          variantTitle: "Saveurs Filtrer ❄️ :",
          jars: [
            { name: "Super Caramelo", emoji: "🍮", colorClass: "style-brown" },
            { name: "Nutella", emoji: "🍫", colorClass: "style-red" },
            { name: "Fanta", emoji: "🌸", colorClass: "style-yellow" },
          ],
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "10G", price: 80.0 },
            { weight: "20G", price: 140.0 },
            { weight: "50G", price: 250.0 },
            { weight: "100G", price: 400.0 },
          ],
        },
      ],
    },
    {
      id: "HASH",
      name: "HASH 🌰",
      type: "HASH",
      quality: "HASH 🌰",
      image: "CategHash.png", // Ton image de catégorie Weed

      products: [
         {
          id: "AZILA",
          flag: "🇲🇦",
          name: "AZILA ⚽",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductAZ.jpg",
          video: "",
          description:
  "⚽🍯 AZILA — JAUNE CRÉMEUX PREMIUM 🍯⚽\n\nUne sélection jaune crémeuse au profil doux, gourmand et bien travaillé. AZILA se distingue par une texture mousseuse, une belle rondeur aromatique et une identité propre, pensée pour les amateurs de produits simples, efficaces et agréables à découvrir. 🇲🇦🔥\n\n👃 Profil aromatique :\n🍯 Notes douces et légèrement miellées\n🍫 Petite touche chocolatée\n🌰 Fond gourmand et rond\n🌿 Nuance végétale propre\n🔥 Finition résineuse élégante\n\n👅 Goût :\nEn bouche, AZILA développe une attaque douce et crémeuse, avec des notes sucrées et légèrement gourmandes. Le profil reste propre, rond et agréable, avec une finale discrètement résineuse qui reste bien présente. 😮‍💨⚽\n\n💛 Texture & qualité :\n☁️ Jaune mousseux et crémeux\n🤲 Texture souple et facile à travailler\n✨ Arômes bien équilibrés\n🔥 Profil propre et régulier\n💎 Sélection simple mais efficace\n\n🏆 Le verdict :\nUne valeur sûre pour ceux qui aiment les profils jaunes, crémeux et gourmands. AZILA combine douceur, texture propre et belle rondeur aromatique dans une sélection agréable au quotidien. ⚽🍯🔥",          tarifs: [
            { weight: "10g", price: 50.0 },
            { weight: "25g", price: 110.0 },
            { weight: "50g", price: 180.0 },
            { weight: "100g", price: 310.0 },
          ],
        },
         {
          id: "NumberOne",
          flag: "🇲🇦",
          name: "NumberOne 🦈",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductNO.jpg",
          video: "VideoNO.mp4",
          description:
              "🦈 NumberOne — JAUNE CRÉMEUX PREMIUM 🦈\n\nUne sélection jaune crémeuse au profil doux, gourmand et bien travaillé. NumberOne se distingue par une texture mousseuse, une belle rondeur aromatique et une identité propre, pensée pour les amateurs de produits simples, efficaces et agréables à découvrir. 🇲🇦🔥\n\n👃 Profil aromatique :\n🍯 Notes douces et légèrement miellées\n🍫 Petite touche chocolatée\n🌰 Fond gourmand et rond\n🌿 Nuance végétale propre\n🔥 Finition résineuse élégante\n\n👅 Goût :\nEn bouche, NumberOne développe une attaque douce et crémeuse, avec des notes sucrées et légèrement gourmandes. Le profil reste propre, rond et agréable, avec une finale discrètement résineuse qui reste bien présente. 😮‍💨🌊\n\n💛 Texture & qualité :\n☁️ Jaune mousseux et crémeux\n🤲 Texture souple et facile à travailler\n✨ Arômes bien équilibrés\n🔥 Profil propre et régulier\n💎 Sélection simple mais efficace\n\n🏆 Le verdict :\nUne valeur sûre pour ceux qui aiment les profils jaunes, crémeux et gourmands. NUMBER ONE combine douceur, texture propre et belle rondeur aromatique dans une sélection agréable au quotidien. 🌊🍯🔥",          
          tarifs: [
            { weight: "10g", price: 50.0 },
            { weight: "25g", price: 110.0 },
            { weight: "50g", price: 180.0 },
            { weight: "100g", price: 310.0 },
          ],
        },
      ],
    },
    {
      id: "EXTRA",
      name: "EXTRA 🧠",
      type: "EXTRA",
      quality: "EXTRA 🧠",
      image: "CategExtra.png", // Ton image de catégorie Weed
  // 👇 Sous-catégories de EXTRA
      farms: [
        {
          id: "COKE",
          name: "COKE 🥚",
          image: "",
          badgeText: "",
          products: [
            {
              id: "La Colombienne",
              flag: "🇨🇴",
              name: "La Colombienne 🇨🇴",
              farm: "🌾 No Farm 🌾",
              promoEligible: true,
              /* clickable: false, */
              type: "Weed",
              image: "Product777.png",
              video: "Video777.mp4",
              description: "94% de pureter ",
              tarifs: [
                { weight: "1g", price: 60.0 },
                { weight: "2g", price: 100.0 },
                { weight: "5g", price: 200.0 },
                { weight: "10g", price: 370.0 },
              ],
            },
            {
              id: "Fish Scales 🐟",
              flag: "🇱🇧",
              name: "Fish Scales 🐟",
              farm: "🌾 No Farm 🌾",
              promoEligible: true,
              type: "Weed",
              image: "ProductFish.png",
              video: "VideoFish.mp4",
              description: "100% de pureter ",
              tarifs: [
                { weight: "1g", price: 70.0 },
                { weight: "2g", price: 130.0 },
                { weight: "5g", price: 300.0 },
                { weight: "10g", price: 550.0 },
              ],
            },
            {
              id: "Pink Scales 🪸",
              flag: "🇱🇧",
              name: "Pink Scales 🪸",
              farm: "🌾 No Farm 🌾",
              promoEligible: true,
              type: "Weed",
              image: "ProductPink.png",
              video: "VideoPink.mp4",
              description: "100% de pureter ",
              tarifs: [
                { weight: "1g", price: 80.0 },
                { weight: "2g", price: 140.0 },
                { weight: "5g", price: 320.0 },
                { weight: "10g", price: 600.0 },
              ],
            },
          ],
        },

        {
          id: "extasy",
          name: "extasy 🍬",
          image: "",
          badgeText: "",
          products: [
            {
              id: "Rolex 280mg",
              flag: "💎",
              name: "Rolex 280mg ",
              farm: "🌾 No Farm 🌾",
              promoEligible: true,
              type: "Weed",
              image: "ProductRolex.jpg",
              video: "VideoPink.mp4",
              description: "",
              tarifs: [
                { weight: "1", price: 10.0 },
                { weight: "5", price: 30.0 },
                { weight: "10", price: 50.0 },
              ],
            },
          ],
        },
        {
          id: "ketamine",
          name: "ketamine 🔥",
          image: "",
          badgeText: "",
          products: [
            {
              id: "Needles 💠",
              flag: "💎",
              name: "Needles 💠",
              farm: "🌾 No Farm 🌾",
              promoEligible: true,
              type: "Weed",
              image: "ProductNeed.jpg",
              video: "VideoNeed.mp4",
              description: "",
              tarifs: [
                { weight: "1g", price: 20.0 },
                { weight: "2g", price: 30.0 },
                { weight: "5g", price: 50.0 },
                { weight: "10g", price: 90.0 },
              ],
            },
          ],
        },
      ],
    },

    /*      // ============================================================
        // CATEGORIE 2 : HASH 🍫
        // ============================================================
        {
            id: 'HASH',
            name: '🍫 HASH',
            type: 'Hash',
            quality: '🍫 Hashish',
            image: 'CategExctra.png',

            farms: [
                // 1. JAUNE CRÉMEUX 🍯
                {
                    id: 'JAUNE_CREMEUX',
                    name: 'JAUNE CRÉMEUX 🍯',
                    image: '',
                    badgeText: 'Classique',
                    products: [
                        {
                            id: 'Og',
                            flag: '🇪🇸',
                            name: '🧽 OG KUSH & BUBAA KUSH 🧽',
                            farm: '🌾 No Farm 🌾',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductOg.jpg',
                            video: 'VideoOg.mov',
                            description: '🧽Jaune mousseux top crème 🧽⬇️ \n\n - Jaune crémeux comme on aime avec bonne défonce  🚬 \n -super odeur de bonne plante 🌱',
                            tarifs: [
                                { weight: '10g', price: 40.00 },
                                { weight: '25g', price: 100.00 },
                                { weight: '50g', price: 160.00 },
                                { weight: '100g', price: 280.00 },
                            ]
                        }
                    ]
                },

                // 2. CALI MOUSSE 🧬 (Nouvelle entrée distincte)
                {
                    id: 'CALI_MOUSSE_BTN',
                    name: 'CALI MOUSSE 🧬',
                    image: '', // Mets l'image qui correspond au Cali Mousse
                    badgeText: 'Filtré',
                    products: [
                  
                    ]
                },

                // 3. DRY SIFT HASH ⚡️ 
                {
                    id: 'DRY_SIFT',
                    name: 'DRY SIFT HASH ⚡️',
                    image: '',
                    badgeText: '90u',
                    products: [
                        {
                            id: 'feat',
                            flag: '🇲🇦',
                            name: 'Barbara punch 90u⚡️',
                            farm: 'Goat Farmers 🐐🍀',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductFeat.png',
                            video: 'VideoFeat.mov',
                            description: 'Réel collaborations avec La farmz Goat farmers \n ( single source marocain de grande qualité )',
                            tarifs: [
                                { weight: '10g', price: 60.00 },
                                { weight: '25g', price: 150.00 },
                                { weight: '50g', price: 250.00 },
                                { weight: '100g', price: 430.00 },
                            ]
                        }
                       
                    ]
                },

                // 4. 120U PREMIUM (Avec les options de goût qu'on a ajoutées)
                {
                    id: '120U_PREMIUM',
                    name: '120U PREMIUM 🛖',
                    image: '',
                    badgeText: 'Top Qualité',
                    products: [
                        {
                            id: '120u',
                            flag: '🇲🇦',
                            name: '🛖 120u Premium 2026',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductPapaya.png',
                            images: [
                                'ProductGrandDaddy.jpg',
                                'ProductPapaya.jpg',
                            ],
                            video: 'VideoPapaya.mov',
                            description: 'La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'PAPAYA BOMB', emoji: '🥤🧨', colorClass: 'style-red' },
                                { name: 'LA GRANDADDY', emoji: '☔️☔️', colorClass: 'style-purple' }
                            ],

                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'PURPLE',
                            flag: '🇲🇦',
                            name: 'PURPLE CREAM',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductCream.png',
                            video: 'VideoCream.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'BLUE ZUSHI',
                            flag: '🇲🇦',
                            name: 'BLUE ZUSHI',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBlueZ.png',
                            video: 'VideoBlueZ.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'CANDY GANE',
                            flag: '🇲🇦',
                            name: 'CANDY GANE',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductGane.png',
                            video: 'VideoGane.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'HEAD BANGER',
                            flag: '🇲🇦',
                            name: 'HEAD BANGER',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductHead.png',
                            video: 'VideoHead.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                        {
                            id: 'UNICORNZ ÉLITE',
                            flag: '🇲🇦',
                            name: 'UNICORNZ ÉLITE',
                            farm: 'DHF FARMZ ✨',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductUni.png',
                            video: 'VideoUni.mov',
                            description: '🛖 120u Premium 2026 \n\n La maison et connue 🏠🔥\n un super 120u prenium 🤝 \n Sec petant avec un goût assez fruité...',
                            tarifs: [
                                { weight: '10g', price: 70.00 },
                                { weight: '25g', price: 170.00 },
                                { weight: '50g', price: 230.00 },
                                { weight: '100g', price: 450.00 },
                            ]
                        },
                    ]
                },

                // 5. FROZEN PREMIUM ❄️
                {
                    id: 'FROZEN',
                    name: 'FROZEN PREMIUM ❄️',
                    image: '',
                    badgeText: 'Terps',
                    products: [
                        {
                            id: 'Buchettes',
                            flag: '🇲🇦',
                            name: 'Buchettes 🪵',
                            farm: 'Singe Source ♻️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBuchettes.jpg',
                            videos: [
                                'VideoBuch.mov', // Ta 1ère vidéo
                                'VideoBuch2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🎄❄️ Exclu Uniquement chez nous Noël chez PISTACHIO420 🌿🔥\n\n ~ Extraction haut de gamme, arômes ultra frais✨ \n ~ texture propre et qualité premium 🥇 \n\n 🎄😮‍💨 Cette année, la bûche de Noël se déguste aussi en version Fresh Frozen ❄️🔥',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :', 
                            jars: [
                                { name: 'RS11', emoji: '💨💨', colorClass: 'style-purple' },
                                { name: 'I.C.C', emoji: '🍦🍦', colorClass: 'style-brown' },
                            ],

                            tarifs: [
                                { weight: '🪵x1', price: 130.00 },               
                                { weight: '🪵x2', price: 250.00 },
                                { weight: '🪵x4', price: 420.00 },


                            ]
                        },
                        {
                            id: 'Frozensift',
                            flag: '🇲🇦',
                            name: '🫒 Frozen sift ⚡️🏆',
                            farm: '🌾 No Farm 🌾',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSift.jpg',
                            videos: [
                                'VideoSift.mov', // Ta 1ère vidéo
                                'VideoSift2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🏠 No FARMZ incroyable 🏆   \n Vous les connaissait déjà produit plus que satisfaisant 🥇\n  Sec pétante 🫡\n Défonce super présente ces pour les gros pec 🤓\n 130 chez nous 😋😋\n On me chuchote que sa les vend 170 en I.D.F 🤭🤭',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :',
                            jars: [
                                { name: 'POISON', emoji: '💀', colorClass: 'style-purple' },
                                { name: 'ORANGE GROW', emoji: '🍊', colorClass: 'style-orange' },
                                { name: 'OREOZ', emoji: '🍩', colorClass: 'style-brown' },
                                { name: 'PANNACOTA', emoji: '🍮', colorClass: 'style-red' },

                            ],

                            tarifs: [
                                { weight: '🫒x1', price: 130.00 },               
                                { weight: '🫒x3', price: 350.00 },
                                { weight: '🫒x5', price: 500.00 },
                            ]
                        },
                        
                        {
                            id: 'FrozenSource',
                            flag: '⚡️',
                            name: '🇲🇦Frozen Sift Hash ⚡️🌬️',
                            farm: 'LA SOURCE 🥇',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSource.png',
                               images: [
                                'ProductSource.png',
                                'ProductSource2.jpg',
                            ],
                            videos: [
                                'VideoSource.mov', // Ta 1ère vidéo
                                'VideoSource2.mov'  // Ta 2ème vidéo
                            ],
                            description: '~ Saison 2026 🪐 \n La source 🏠 Nous à sortie un ❄️ magnifique 🔥 \n Le goût l’odeur tout et la 🏆 \n Juste les vidéo donne envie 😋',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'Pink passion', emoji: '👛❤️‍🔥', colorClass: 'style-passion' },
                                { name: 'Water melon ', emoji: '🍈 💦', colorClass: 'style-melon' }
                            ],

                            tarifs: [
                                { weight: '10g', price: 130.00 },
                                { weight: '25g', price: 250.00 },
                                { weight: '50g', price: 370.00 },
                            ]
                        }
                    ]
                },

                // 6. STATIC MOROCCO 🇲🇦
                {
                    id: 'STATIC_MOROCCO',
                    name: 'STATIC MOROCCO 🇲🇦',
                    image: '', // Mets une image de Static
                    badgeText: 'Saison 2026',
                    products: [
                        {
                            id: 'Tepo / Gelato',
                            flag: '🇲🇦',
                            name: 'Tepo / Gelato 🦅',
                            farm: '🏠 STATIC NO FARMZ',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductTepo.jpg',
                            video: 'VideoTepo.mov',
                            description: '180/90u 🍁',
                            tarifs: [
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 130.00 },
                            ]
                        },
                        {
                            id: 'Black',
                            flag: '🇲🇦',
                            name: 'Black Cherry 🍒',
                            farm: '🏠 STATIC NO FARMZ',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBlack.jpg',
                            video: 'VideoBlack.mov',
                            description: 'Un static marocain haut de gamme, travaillé avec soin, qui se distingue immédiatement par son profil aromatique intense et profond.🥇⚡️ 🏆 \n Un static marocain de très haut niveau, axé sur une intensité aromatique rare, avec un profil Black Cherry sombre, sucré et profond. Idéal pour ceux qui privilégient l’odeur, le goût et la finesse du filtrage. 🔱',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '20g', price: 250.00 },
                            ]
                        },
                        {
                            id: '220u',
                            flag: '🇲🇦',
                            name: 'K.G.F STATIC 🏆🥇',
                            farm: 'KILO GRAMMES FARMERZ ⚡️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductKgf.png',
                          
                            video: 'VideoKgf.mov',
                            description: 'K.G.F STATIC 🏆🥇 \n Un produit d’exception de la maison KGF 🏆 \n uJamais déçu 🥇 \n Goût plus fumette douce mes en même temp forte 💪\n Une odeur qui se dégage quand tu allume le joint wahouu 🔱🔱🔥 🏠🔥\n\n 190/220u ( Réal no fake )🔥',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'CHEERY CAKE X ORANGE PUNCH', emoji: '🍒🍊', colorClass: 'style-red' },
                                { name: 'LAMPONI', emoji: '✅', colorClass: 'style-brown' }
                            ],

                            tarifs: [
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 160.00 },
                      
                            ]
                        }
                    ]
                },

                // 7. STATIC USA 🇺🇸
                {
                    id: 'STATIC_USA',
                    name: 'STATIC USA 🇺🇸',
                    image: '',
                    badgeText: 'Exclusif',
                    products: [
                        {
                            id: 'StaticUSA',
                            flag: '🇺🇸',
                            name: '🗽 Kevin breats 🇺🇸',
                            farm: 'BLOOD&PRESS 🔱',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductKevin.png',
                            video: 'VideoKevin.mov',
                            description: '~Un hybride premium combinant la gourmandise crémeuse Forbidden et les notes sucrée de son fruit. 🍇   \n ~ En bouche ou à l’odeur on sent que sa était travailler avec amour 😍 🇺🇸\n ~Arômes sucrés, texture résineuse et pétante après mutation légère🌬️💨 et profil terpène riche🔥🧨 \n ~Déjà connue des habituer 🥇🏅🎖️',
                            tarifs: [
                                { weight: '1g', price: 40.00 },
                                { weight: '3g', price: 100.00 },
                                { weight: '10g', price: 320.00 },

                            ]
                        },
                        {
                            id: 'HASHIVAStaticUSA',
                            flag: '🇺🇸',
                            name: '🇺🇸💎 CANDY BEZELS 💎🇺🇸',
                            farm: 'HASHIVA STATIC 💙',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBezels.jpg',
                            video: 'VideoBezels.mov',
                            description: '💎 HASHIVA STATIC USA 💎 \n Straight from USA 🇺🇸, ce static sift d’élite affiche une robe dorée brillante ✨🍯, résultat d’un tri ultra-clean et d’un savoir-faire top-shelf 🧬.\n\n Profil terpènique candy luxury 🍬🍭 : \n 🍓 fruits sucrés \n 🍬 bonbon haut de gamme \n ⛽ touche gazzy crémeuse signature US',
                            tarifs: [
                                { weight: '2g', price: 80.00 },
                                { weight: '5g', price: 180.00 },
                                { weight: '10g', price: 330.00 },

                            ]
                        },
                    ]
                },
                // 8. EXCTRACTION 🇺🇸
                {
                    id: 'ExctraUsa',
                    name: 'EXCTRACTION 🇺🇸',
                    image: '',
                    badgeText: 'Piatella',
                    products: [
                        {
                            id: 'LEMON TREEZ',
                            flag: '🇺🇸',
                            name: '🍋 LEMON TREEZ 🌲',
                            farm: 'PIATELLA ALBINOS 🧉',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductKevin.png',
                            video: 'VideoKevin.mov',
                            description: '159/73u 🎖️',
                            tarifs: [
                                { weight: '1g', price: 50.00 },
                                { weight: '5g', price: 220.00 },
                                { weight: '10g', price: 380.00 },

                            ]
                        }
                    ]
                }
            ]
        },
        // ============================================================
    // CATEGORIE 3 : PACKS DE NOEL 🎄
    // ============================================================
    {
        id: 'PACKS',
        name: '⏳ PACK 2025 ⌛️',
        type: 'Pack',
        quality: '⭐️ Offres Spéciales', // S'affichera dans le filtre "Sélection du chef"
        image: 'CategPack2025.png', // ⚠️ Pense à mettre une image festive ici

        // PAS DE FARMS, DIRECTEMENT LES PRODUITS
        products: [
            {
                id: '🌟 PACK 150 🌟',
                flag: '🎁',
                name: '🌟 PACK 150 🌟',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '5g : Cali Us ( au choix ) 🇺🇸', targetId: 'CALI_USA' },
                    { name: '5g : Frozen Sift Hash ⚡️🌬️ ', targetId: 'FrozenSource' },
                    { name: '5g : 🛖 120u Premium 2026 ( au choix ) ', targetId: '120U_PREMIUM' },
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 150.00 },
                ]
            },
            {
                id: '🔥 PACK 300 🔥',
                flag: '🎁',
                name: '🔥 PACK 300 🔥',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '10g : Cali 🇨🇦💎', targetId: 'PurpleBud' },
                    { name: '10g : Frozen Sift 🫒❄️', targetId: 'Frozensift' },
                    { name: '10g : Fresh Frozen 🪵🧊', targetId: 'Buchettes' },
                    { name: '2g : KGF Static 🇲🇦✨', targetId: '220u' } // usa'ai mis StaticUSA en exemple, mets l'ID de ta Cali
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 300.00 },
                ]
            },
            {
                id: '💥 PACK 600 💥',
                flag: '🎁',
                name: '💥 PACK 600 💥',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '25g : Cali 🇨🇦💎', targetId: 'PurpleBud' },
                    { name: '20g : Frozen Sift 🫒❄️', targetId: 'Frozensift' },
                    { name: '20g : Fresh Frozen 🪵🧊', targetId: 'Buchettes' },
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 300.00 },
                ]
            }
        ]
    } */
  ];

  // --- VARIABLES D'ÉTAT ---
  let cart = [];
  let currentFilters = {
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories"; // 'categories', 'farms', ou 'products'
  let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
  let currentFarmId = null; // Garde en mémoire la farm sélectionnée
  let appliedPromo = null; // Pour suivre le code promo
  let paymentMethod = "Espèce"; // Méthode de paiement par défaut

  // --- DÉFINIS TES CODES PROMO ICI ---
  const validPromoCodes = {
    /*   "": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        },
        "": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        } */
    /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
    // Ajoute d'autres codes ici
    // ADD CUMULABLE FONCTION POUR PLUTARD
  };

  // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");

  const filterContainer = document.querySelector(".filters");

  // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;
  // --- FIN NOUVEAUX SÉLECTEURS ---

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
  function getProductById(productId) {
    for (const category of appData) {
      // 1. Cherche dans les produits directs (Nouveau cas)
      if (category.products) {
        const product = category.products.find((p) => p.id === productId);
        if (product) return product;
      }

      // 2. Cherche dans les farms (Ancien cas)
      if (category.farms) {
        for (const farm of category.farms) {
          const product = farm.products.find((p) => p.id === productId);
          if (product) return product;
        }
      }
    }
    return undefined; // Non trouvé
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
    // 👇 AJOUT STRATÉGIQUE : Coupe toutes les vidéos instantanément au changement de page
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
    });
    pages.forEach((p) => p.classList.remove("active"));
    // S'assure que la page existe avant de l'activer
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info"); // On ajoute l'info
    const contactNav = document.getElementById("nav-contact");
    const avisNav = document.getElementById("nav-avis"); // <-- AJOUT ICI

    // On reset tout
    homeNav.classList.remove("active");
    infoNav.classList.remove("active");
    contactNav.classList.remove("active");
    if (avisNav) avisNav.classList.remove("active"); // <-- AJOUT ICI

    // On active le bon
    if (pageId === "page-contact") {
      contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      infoNav.classList.add("active");
    } else if (pageId === "page-avis") {
      // <-- LA NOUVELLE CONDITION
      if (avisNav) avisNav.classList.add("active");
    } else {
      // Pour page-home, page-produit, panier, etc.
      homeNav.classList.add("active");
    }
  }

  // --- LOGIQUE D'AFFICHAGE ---

  // --- MODIFIÉ : renderHomePage ---

  function renderHomePage() {
    // Toujours afficher le conteneur principal des filtres
    filterContainer.style.display = "flex";

    // On enlève les anciens boutons "retour"
    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();
    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    if (currentView === "categories") {
      renderCategoryList();

      // --- GESTION DES FILTRES (Vue Catégorie) ---
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "flex"; // On montre QUE la qualité

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (currentView === "farms") {
      renderFarmList(currentCategoryId);

      // --- GESTION DES FILTRES (Vue Farms) ---
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none"; // Pas de filtres pour les farms
      qualityFilterWrapper.style.display = "none";

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)"; // 1 colonne pour les farms

      // --- AJOUT BOUTON RETOUR (vers Catégories) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn"; // CLASSE IMPORTANTE
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
      backButton.style.cssText = `
            border: none;
            color: #f6d77d;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(194deg, rgba(20, 107, 72, 0.92), rgba(13, 35, 20, 0.82));
            border-radius: 10px;`;

      filterContainer.prepend(backButton);
    } else if (currentView === "simple_products") {
      updateFarmFilter(currentCategoryId);

      renderProductListSimple(currentCategoryId);

      // --- GESTION DES FILTRES ---
      // 1. On AFFICHE la barre de recherche
      searchFilterWrapper.style.display = "flex";

      // 2. On AFFICHE le filtre Farm
      farmFilterWrapper.style.display = "flex";

      // 3. On CACHE le filtre Qualité ("Sélection du chef")
      qualityFilterWrapper.style.display = "none";

      // --- AJOUT BOUTON RETOUR (vers Catégories) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn";
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;

      backButton.style.cssText = `
            border: none;
            color: #f6d77d;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(194deg, rgba(20, 107, 72, 0.92), rgba(13, 35, 20, 0.82));
            border-radius: 10px;`;

      filterContainer.prepend(backButton);

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    } else if (currentView === "products") {
      updateFarmFilter(currentCategoryId, currentFarmId);

      renderProductList(currentCategoryId, currentFarmId);

      // --- GESTION DES FILTRES (Vue Produit) ---
      searchFilterWrapper.style.display = "flex";
      farmFilterWrapper.style.display = "flex"; // On montre les filtres produits
      qualityFilterWrapper.style.display = "none"; // On cache la qualité

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)"; // 2 colonnes

      // --- AJOUT BOUTON RETOUR (vers Farms) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const farm = category.farms.find((f) => f.id === currentFarmId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-farms-btn"; // CLASSE IMPORTANTE
      backButton.innerHTML = `<svg width="24"
             height="24"
              viewBox="0 0 24 24"
              ><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${farm.name}`;
      backButton.style.cssText = `
            border: none;
            color: white;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(182deg, rgba(20, 107, 72, 0.95), rgba(13, 35, 20, 0.25));
                        border-radius: 10px;`;

      filterContainer.prepend(backButton);
    }
  }

  // --- FONCTION MODIFIÉE : Filtre intelligent par Sous-Catégorie ---
  function updateFarmFilter(categoryId, subCategoryId = null) {
    const category = appData.find((c) => c.id === categoryId);
    const farmFilter = document.getElementById("farm-filter");

    if (!category) return;

    let availableFarms = [];

    // CAS 1 : On est dans une sous-catégorie précise (ex: Cali USA)
    if (subCategoryId && category.farms) {
      const subCategory = category.farms.find((f) => f.id === subCategoryId);
      if (subCategory) {
        subCategory.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }
    // CAS 2 : On est dans une catégorie globale ou simple (ex: Packs Noel ou tout voir)
    else {
      if (category.farms) {
        // Si c'est une catégorie à tiroirs, on prend tout
        category.farms.forEach((sub) => {
          sub.products.forEach((p) => {
            if (p.farm) availableFarms.push(p.farm);
          });
        });
      } else if (category.products) {
        // Si c'est une catégorie simple
        category.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }

    // 2. On enlève les doublons
    const uniqueFarms = ["all", ...new Set(availableFarms)];

    // 3. On génère le HTML
    const currentValue = currentFilters.farm;

    farmFilter.innerHTML = uniqueFarms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. On remet la valeur si elle existe toujours
    if (uniqueFarms.includes(currentValue)) {
      farmFilter.value = currentValue;
    } else {
      farmFilter.value = "all";
      currentFilters.farm = "all";
    }
  }

  // --- MODIFIÉ : renderCategoryList ---
  // Prend en compte le filtre qualité
  function renderCategoryList() {
    const filteredCategories = appData.filter((category) => {
      const searchMatch = category.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // --- AJOUT ---
      const qualityMatch =
        currentFilters.quality === "all" ||
        category.quality === currentFilters.quality;
      return searchMatch && qualityMatch;
      // --- FIN AJOUT ---
    });

    productListContainer.innerHTML = "";
    if (filteredCategories.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
      return;
    }

    filteredCategories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.dataset.categoryId = category.id;

      card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
              
            `;
      productListContainer.appendChild(card);
    });
  }

  // --- NOUVELLE FONCTION ---
  // Affiche la liste des FARMS pour une catégorie
  // --- FONCTION MODIFIÉE : Affichage liste bouton ---
  function renderFarmList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    // On change le style de la grille pour avoir une seule colonne (liste verticale)
    productListContainer.style.gridTemplateColumns = "1fr";
    productListContainer.style.gap = "10px"; // Espacement entre les boutons

    productListContainer.innerHTML = "";
    if (farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune farm trouvée.</p>';
      return;
    }

    farms.forEach((farm) => {
      const btn = document.createElement("div");
      // On change la classe pour ne plus utiliser le style "card"
      btn.className = "farm-list-btn";
      btn.dataset.farmId = farm.id;

      if (farm.clickable === false) {
        btn.classList.add("unclickable");
      }

      const productCount = farm.products.length;
      const countText = productCount > 0 ? `${productCount} prod.` : "";

      // Structure : Icone | Nom + Badge | Flèche
      btn.innerHTML = `
            <div class="farm-btn-left">
                
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${farm.name}</span>
                    <span class="farm-btn-subtitle">${farm.badgeText || countText}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;
      productListContainer.appendChild(btn);
    });
  }

  // Affiche la liste des PRODUITS (Version corrigée : Pleine largeur + Sans image vide)
  function renderProductListSimple(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category || !category.products) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à cette catégorie.</p>';
      return;
    }

    // Mise à jour du filtre farm intelligent
    if (typeof updateFarmFilter === "function") updateFarmFilter(categoryId);

    // On filtre le tableau products
    const filteredProducts = category.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // --- 1. LOGIQUE PLEINE LARGEUR ---
      // Si c'est un Pack, on ajoute la classe spéciale
      if (product.type === "Pack" || product.id === "PackNoel2025") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) card.classList.add("unclickable");

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      // --- 2. LOGIQUE IMAGE (On affiche seulement si elle existe) ---
      let imgHTML = "";
      if (product.image && product.image !== "") {
        imgHTML = `<img src="${product.image}" alt="${product.name}">`;
      }

      card.innerHTML = `
            ${imgHTML}
            <div class="info">
                <div class="name">${product.name} ${flagHTML}</div>
                <div class="farm">${product.farm}</div> 
                <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
            </div>
        `;
      productListContainer.appendChild(card);
    });
  }
  // Affiche la liste des PRODUITS pour une farm
  function renderProductList(categoryId, farmId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }
    const farm = category.farms.find((f) => f.id === farmId);
    if (!farm) {
      productListContainer.innerHTML =
        '<p class="no-results">Farm non trouvée.</p>';
      return;
    }
    const filteredProducts = farm.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // On a supprimé 'qualityMatch'. Le choix de la catégorie suffit.
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;

      return searchMatch && farmMatch; // On retourne sans le qualityMatch
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // Si c'est le Pack de Noël (vérifie bien que l'ID est correct), on met la classe large
      if (product.id === "PackNoel2025" || product.type === "Pack") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) {
        card.classList.add("unclickable");
      }

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
      productListContainer.appendChild(card);
    });
  }

  // Affiche la page de détail d'un produit
  function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    document.getElementById("product-page-title").innerText = product.name;
    const detailsContainer = document.getElementById("product-details-content");

    // --- 1. GESTION INTELLIGENTE DES MÉDIAS ---
    let galleryHTML = "";
    let hasMedia = false;

    // Images
    let mediaItems = [];
    if (product.images && product.images.length > 0) {
      mediaItems = product.images;
    } else if (product.image && product.image !== "") {
      mediaItems = [product.image];
    }

    if (mediaItems.length > 0) {
      hasMedia = true;
      galleryHTML += mediaItems
        .map(
          (imgSrc) => `
                <div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>
            `,
        )
        .join("");
    }

    // Vidéos
    if (product.videos && product.videos.length > 0) {
      hasMedia = true;
      product.videos.forEach((videoSrc) => {
        galleryHTML += `
                    <div class="gallery-item">
                        <video controls playsinline poster="${product.image || ""}">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    </div>`;
      });
    } else if (product.video && product.video !== "") {
      hasMedia = true;
      galleryHTML += `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ""}">
                        <source src="${product.video}" type="video/mp4">
                    </video>
                </div>`;
    }

    // --- 2. LE RESTE (OPTIONS, DESCRIPTION, TARIFS) ---

    // --- GESTION DU CONTENU PACK (Liens internes) ---
    let packLinksHTML = "";
    if (product.packContents && product.packContents.length > 0) {
      const links = product.packContents
        .map(
          (item) => `
            <div class="pack-item-btn" data-target-id="${item.targetId}">
                <span>${item.name}</span>
                <span class="pack-arrow">›</span>
            </div>
        `,
        )
        .join("");

      packLinksHTML = `
            <div class="pack-content-container">
                <div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>
                ${links}
            </div>
        `;
    }
    let variantsHTML = "";
    if (product.jars && product.jars.length > 0) {
      const buttonsHTML = product.jars
        .map(
          (jar, index) => `
                <div class="variant-btn ${index === 0 ? "active " + jar.colorClass : ""}" 
                     data-name="${jar.name} ${jar.emoji}" 
                     data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span>
                    <span class="text">${jar.name}</span>
                </div>
            `,
        )
        .join("");
      variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || "Choisir une option :"}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
    } else if (product.options && product.options.length > 0) {
      variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #123a29; color: #fff8e1; border: 1px solid #d7b75c;">${product.options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}</select></div>`;
    }

    let tarifsHTML = product.tarifs
      .map(
        (tarif) => `
            <div class="tarif-item">
                <div class="box-tarif">
                ${tarif.badge ? `<span class="tarif-badge">${tarif.badge}</span>` : ""} <div class="tarif-wieght">${tarif.weight}</div>
                    <div class="tarif-price">
    ${
      Number.isFinite(tarif.oldPrice) && tarif.oldPrice > tarif.price
        ? `<span class="old-price">${tarif.oldPrice.toFixed(2)}€</span>`
        : ""
    }
    <span class="current-price">${tarif.price.toFixed(2)}€</span>
</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
        `,
      )
      .join("");

    let descriptionHTML = product.description
      ? `<p class="product-description">${product.description.replace(/\n/g, "<br>")}</p>`
      : "";

    const oldVideo = document.querySelector("#page-product .product-video");
    if (oldVideo) oldVideo.style.display = "none";

    // --- 3. INJECTION (On cache la galerie si pas de média) ---
    detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ""}
            ${hasMedia ? `<div class="gallery-counter">Swipe ➡️</div>` : ""}
            
            <div class="name" style="margin-top: ${hasMedia ? "0" : "20px"}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;

    showPage("page-product");

    // Réattache les événements (pour les variantes de couleurs)
    if (product.jars && product.jars.length > 0) {
      const variantBtns = document.querySelectorAll(".variant-btn");
      const cartBtns = document.querySelectorAll(".add-to-cart-btn");
      const updateCartButtonsColor = (colorClass) => {
        cartBtns.forEach((btn) => {
          btn.classList.remove(
            "style-purple",
            "style-red",
            "style-green",
            "style-yellow",
            "style-orange",
            "style-brown",
            "style-passion",
            "style-melon",
            "style-gold",
            "style-cherry",
            "style-glue",
            "style-blue",
            "style-pink",
            "style-indigo",
            "style-silver",
            "style-white",
            "style-grape",
            "style-fanta",
            "style-dark",
          );
          if (colorClass) btn.classList.add(colorClass);
        });
      };
      updateCartButtonsColor(product.jars[0].colorClass);
      variantBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          variantBtns.forEach((b) => {
            b.classList.remove("active");
            const color = b.dataset.colorClass;
            b.classList.remove(color);
          });
          this.classList.add("active");
          this.classList.add(this.dataset.colorClass);
          updateCartButtonsColor(this.dataset.colorClass);
          if (window.Telegram.WebApp.HapticFeedback)
            window.Telegram.WebApp.HapticFeedback.selectionChanged();
        });
      });
    }
  }

  // Met à jour l'affichage du panier (CORRIGÉ : Cache l'image si vide)
  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
                
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `,
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
    updateCartCount();
  }

  // Affiche la page de confirmation (VERSION WHATSAPP DIRECT)
  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- Logique de calcul des prix (inchangée) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // --- Fin calcul ---

    // Mise à jour du résumé
    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    // Liste des articles
    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
         <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}

            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
            </div>
        </div>
    `,
      )
      .join("");

    // UI Promo
    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = "";
    }

    // UI Paiement
    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    // Résumé final
    const summaryContainer = document.getElementById("confirmation-summary");
    let summaryHTML = `
        <div class="summary-line">
            <span>Sous-total:</span>
            <span>${subTotal.toFixed(2)}€</span>
        </div>
    `;
    if (discount > 0) {
      summaryHTML += `
        <div class="summary-line discount">
            <span>Réduction:</span>
            <span>-${discount.toFixed(2)}€</span>
        </div>
        `;
    }
    summaryHTML += `
        <div class="summary-line total">
            <span>💰 Total final:</span>
            <span>${totalPrice.toFixed(2)}€</span>
        </div>
    `;
    summaryContainer.innerHTML = summaryHTML;

    // --- MODIFICATION POUR WHATSAPP DIRECT ---
    const copyBtn = document.getElementById("copy-order-btn");
    const contactBtn = document.getElementById("confirm-order-button");

    // 1. On CACHE le bouton "Copier" car il ne sert plus
    if (copyBtn) copyBtn.style.display = "none";

    // 2. On configure le bouton "Confirmer" pour être actif tout de suite
    if (contactBtn) {
      contactBtn.classList.remove("secondary-action-btn"); // Enlève le gris
      contactBtn.classList.add("main-action-btn"); // Met le rouge (ou couleur principale)
      contactBtn.disabled = false; // Active le clic
      contactBtn.innerHTML = "CONFIRMER SUR WHATSAPP 📞"; // Change le texte
    }

    showPage("page-confirmation");
  }
  // Affiche la page de contact (inchangé)
  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");
    linksContainer.innerHTML = contactLinks
      .map(
        (link) => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        
            <span>${link.text}</span>
        </a>
        `,
      )
      .join("");
  }

  // Met à jour le compteur du panier (inchangé)
  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll(".cart-count");
    cartCountElements.forEach((el) => {
      el.innerText = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  }

  // --- MODIFIÉ : populateFilters ---
  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    // 1. On récupère TOUS les produits de l'app pour trouver toutes les farms
    const allNestedProducts = [];
    appData.forEach((category) => {
      if (category.farms) {
        category.farms.forEach((farm) =>
          allNestedProducts.push(...farm.products),
        );
      } else if (category.products) {
        allNestedProducts.push(...category.products);
      }
    });

    // 2. On remplit le filtre QUALITÉ (Pour la page d'accueil)
    const categoryQualities = appData.map((c) => c.quality).filter(Boolean); // filter Boolean enlève les vides
    const qualities = ["all", ...new Set(categoryQualities)];
    qualityFilter.innerHTML = qualities
      .map(
        (q) =>
          `<option value="${q}">${q === "all" ? "SELECTION DU CHEF" : q}</option>`,
      )
      .join("");

    // 3. On remplit le filtre FARM (Pour la page produits)
    // On récupère la propriété 'farm' de chaque produit
    const productFarms = allNestedProducts.map((p) => p.farm).filter((f) => f); // Garde seulement si une farm est définie
    const farms = ["all", ...new Set(productFarms)];

    farmFilter.innerHTML = farms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. Les écouteurs d'événements
    searchFilter.addEventListener("input", (e) => {
      currentFilters.searchTerm = e.target.value;
      renderHomePage();
    });

    qualityFilter.addEventListener("change", (e) => {
      currentFilters.quality = e.target.value;
      renderHomePage();
    });

    farmFilter.addEventListener("change", (e) => {
      currentFilters.farm = e.target.value;
      renderHomePage();
    });
  }

  // --- NOTIFICATION (inchangé) ---
  let notificationTimeout;
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);
    notification.classList.remove("show");
    void notification.offsetWidth;

    notification.innerText = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  // --- LOGIQUE DU PANIER ---

  // Ajoute le paramètre 'variant' à la fin
  function addToCart(productId, weight, price, variant = null) {
    // L'ID du panier doit inclure la variante pour différencier (ex: 10g Gelato vs 10g Papaya)
    const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, "") : "default"}`;

    const existingItem = cart.find((item) => item.id === cartItemId);
    const product = getProductById(productId);

    // On prépare le nom à afficher (ex: "120u (Papaya Bomb)")
    const displayName = variant
      ? `${product.name} \n👉 ${variant}`
      : product.name;

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    } else {
      cart.push({
        id: cartItemId,
        productId: productId,
        name: displayName, // On utilise le nom avec la variante
        image: product.image,
        weight: weight,
        quantity: 1,
        unitPrice: price,
        totalPrice: price,
        variant: variant, // On garde la variante en mémoire si besoin
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }
  // updateQuantity (inchangé)
  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
    } else {
      item.totalPrice = item.quantity * item.unitPrice;
    }
    renderCart();
  }

  // --- FORMATAGE DU MESSAGE WHATSAPP (STYLE PRO & EMOJIS) ---
  function formatOrderMessage() {
    // --- 1. CALCULS (Inchangés) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    // --- 2. CONSTRUCTION DU MESSAGE (NOUVEAU DESIGN) ---

    // En-tête
    let message = "*🛒 DÉTAIL DE LA COMMANDE:*\n\n";

    // Boucle sur les articles
    cart.forEach((item, index) => {
      // On nettoie le nom (enlève les sauts de ligne techniques si variante)
      // On met en majuscules pour faire comme sur ta capture
      let cleanName = item.name.replace(/\n/g, " ").toUpperCase();

      // Ligne 1 : Numéro + Nom du produit (en Gras *)
      message += `*${index + 1}. ${cleanName}*\n`;

      // Ligne 2 : Quantité
      message += `• Quantité: ${item.quantity}x ${item.weight}\n`;

      // Ligne 3 : Prix unitaire
      message += `• Prix unitaire: ${item.unitPrice.toFixed(2)}€\n`;

      // Ligne 4 : Total de la ligne
      message += `• Total: ${item.totalPrice.toFixed(2)}€\n\n`;
    });

    // Résumé financier
    // Si promo, on affiche le détail, sinon juste le total
    if (discount > 0) {
      message += `Sous-total: ${subTotal.toFixed(2)}€\n`;
      message += `Réduction (${appliedPromo}): -${discount.toFixed(2)}€\n`;
      message += `\n*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    } else {
      message += `*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    }

    // Pied de page
    message += `\n📍 Livraison à convenir\n`;
    message += `💳 Paiement: ${paymentMethod}`;

    return message;
  }

  // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      // API moderne et sécurisée
      navigator.clipboard.writeText(text).then(
        () => {
          showNotification("✅ Commande copiée ! Colle-la dans le chat.");
          tg.HapticFeedback.notificationOccurred("success");
        },
        (err) => {
          showNotification("❌ Erreur en copiant le message");
        },
      );
    } else {
      // Ancien fallback (pour certains navigateurs)
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Hors de l'écran
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        showNotification("✅ Commande copiée ! Colle-la dans le chat.");
        tg.HapticFeedback.notificationOccurred("success");
      } catch (err) {
        showNotification("❌ Erreur en copiant le message");
      }
      document.body.removeChild(textArea);
    }
  }

  // --- GESTION PAGE AVIS ---

  // 1. Bouton vers le canal Potato
  /*     const btnChannel = document.getElementById('btn-open-channel');
    if (btnChannel) {
        btnChannel.addEventListener('click', function() {
            // Remplace par ton vrai lien de canal
            const channelLink = "https://dympt.org/RetourP420"; 
            
            // Ouvre le lien via Telegram
            tg.openLink(channelLink); 
        });
    }
 */
  // 2. (Optionnel) Zoom sur l'image quand on clique dessus
  window.openImage = function (imgElement) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img-in-modal");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    tg.BackButton.show(); // Affiche le bouton retour natif

    // Clic pour fermer
    modal.onclick = function () {
      modal.style.display = "none";
      tg.BackButton.hide(); // Cache le bouton retour
    };

    // Gestion du bouton retour physique/natif Telegram
    tg.onEvent("backButtonClicked", function () {
      modal.style.display = "none";
      tg.BackButton.hide();
    });
  };
  // --- GESTION DES ÉVÉNEMENTS ---

  // Clics sur la barre de navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      // Les lignes gérant la classe 'active' ont été supprimées
      // showPage(pageId) s'en occupe maintenant.

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        // On reset TOUS les filtres
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      showPage(pageId);
    });
  });

  // Clics sur le reste de la page
  document.body.addEventListener("click", async function (e) {
    const target = e.target;

    if (target.closest("#copy-order-btn")) {
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");

      copyToClipboard(message);

      // --- AJOUT : Inverser les styles des boutons ---
      const copyBtn = document.getElementById("copy-order-btn");
      const contactBtn = document.getElementById("confirm-order-button");

      // Copier devient Gris (secondary)
      copyBtn.classList.remove("main-action-btn");
      copyBtn.classList.add("secondary-action-btn");

      // Contacter devient Rouge (main) et est activé
      contactBtn.classList.remove("secondary-action-btn");
      contactBtn.classList.add("main-action-btn");
      contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
      return; // On s'arrête là
    }

    // Gère l'accordéon sur la page contact
    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      // On ferme les autres items
      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      // On ouvre/ferme l'item cliqué
      accordionItem.classList.toggle("active");
      return; // On arrête là pour ne pas déclencher d'autres clics
    }

    // 1. Clic sur une carte CATÉGORIE
    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      const category = appData.find(
        (c) => c.id === categoryCard.dataset.categoryId,
      );

      if (category.products) {
        // Si la catégorie a des produits directement (pas de sous-catégorie)
        currentView = "simple_products"; // <-- NOUVEL ÉTAT
        currentCategoryId = category.id;
      } else if (category.farms) {
        // Si la catégorie a des farms
        currentView = "farms";
        currentCategoryId = category.id;
      } else {
        return; // Ne fait rien si la catégorie est vide
      }

      // On reset les filtres et on lance la page
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }
    // 2. MODIFIÉ : Clic sur un BOUTON FARM (Anciennement "carte farm")
    const farmBtn = target.closest(".farm-list-btn"); // <-- J'ai changé le nom de la classe ici
    if (farmBtn) {
      if (farmBtn.classList.contains("unclickable")) {
        return;
      }

      currentView = "products";
      currentFarmId = farmBtn.dataset.farmId;

      // On reset les filtres
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";

      renderHomePage();
      return;
    }
    // 3. Clic sur une carte PRODUIT
    const productCard = target.closest(".product-item-card");
    if (productCard) {
      if (productCard.classList.contains("unclickable")) {
        return;
      }
      renderProductPage(productCard.dataset.productId);
      return;
    }

    // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // Clic sur "Appliquer" le code promo
    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase(); // Mets en majuscule

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null; // Reset au cas où
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation(); // Met à jour la page de confirmation
    }

    // Clic sur "Supprimer" le code promo
    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation(); // Met à jour la page
    }

    // Clic sur un bouton de paiement
    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      // Pas besoin de rafraîchir toute la page, juste les boutons
      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.method === paymentMethod);
      });
    }

    // Clic sur "Ajouter au panier"
    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");

      let selectedVariant = null;

      // CAS 1 : Nouveau système (Boutons JARs)
      const activeVariantBtn = document.querySelector(".variant-btn.active");
      if (activeVariantBtn) {
        selectedVariant = activeVariantBtn.dataset.name;
      }
      // CAS 2 : Ancien système (Select) - Fallback
      else {
        const variantSelect = document.getElementById("product-variant-select");
        if (variantSelect) {
          selectedVariant = variantSelect.value;
        }
      }

      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
        selectedVariant,
      );
    }

    // Clic sur les boutons de quantité
    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    // Clic sur le bouton "fermer"
    if (target.closest(".close-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur "Continuer les achats"
    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur les boutons "retour" (des pages produits, panier...)
    if (target.closest(".back-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur le bouton du panier
    if (target.closest("#home-cart-button")) {
      renderCart();
      showPage("page-cart");
    }

    // Clic sur "Commander"
    if (target.closest("#checkout-button")) {
      renderConfirmation();
    }

    // Clic sur "Modifier"
    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }

    // Clic sur un produit DANS un Pack
    if (target.closest(".pack-item-btn")) {
      const btn = target.closest(".pack-item-btn");
      const targetId = btn.dataset.targetId;

      // On charge la page du produit ciblé
      renderProductPage(targetId);
      return;
    }
    // Clic sur "Confirmer la commande" (VERSION WHATSAPP DIRECT)
    if (target.closest("#confirm-order-button")) {
      // 1. TON NUMÉRO WHATSAPP (Format international sans le +)
      const myPhoneNumber = "33745907270";

      // 2. On prépare le message
      let message = formatOrderMessage();

      // 3. On encode le message pour qu'il passe dans une URL
      const encodedMessage = encodeURIComponent(message);

      // 4. On crée le lien magique WhatsApp
      const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

      // 5. On ouvre WhatsApp
      tg.openLink(whatsappUrl);
    }
  });

  // --- INITIALISATION DE L'APP ---
  function init() {
    setTimeout(() => {
      populateFilters();
      renderHomePage(); // Affiche les catégories au début
      updateCartCount();
      showPage("page-home");
    }, 1500);
  }

  init();
});
