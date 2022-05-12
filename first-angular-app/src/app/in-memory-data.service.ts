import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './products/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
        { id: 1,
          name: 'Svartpilen 401',
          description:  `La Svartpilen 401 ne renie pas son caractère sauvage. C’est par définition une moto qui se trouve à l’aise en périphérie du centre urbain, là où le bitume est loin d’être parfaitement lisse. Grâce à sa légèreté et son moteur nerveux, elle est parfaitement à l’aise pour filer dans les petites ruelles. Les couleurs et les graphismes de 2022 rehaussent l'apparence époustouflante de la moto et reflètent le mélange progressif de la pensée moderne et du design classique inspiré par l'héritage suédois de la marque.`, 
          imageUrl: 'https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_svartpilen-401-my22-90-right_%23SALL_%23AEPI_%23V1.png', 
          price: 644900 
        },
        { id: 2,
          name: 'NORDEN 901', 
          description: `La Husqvarna Norden 901 est une moto de tourisme d’aventure exceptionnelle. Alimentée par un bicylindre parallèle de 889 cm3, souple et coupleux, avec une sortie de 105 ch et logé dans un cadre treillis en acier léger, la Husqvarna Norden 901 est un véhicule complet pour les voyages à longue distance. La suspension tout-terrain lors des longs trajets t’emmènera sur tous les terrains souhaités, tandis que l’ergonomie confortable fait de chaque voyage une aventure, et non une épreuve. Explore le monde à ta manière grâce à la nouvelle Husqvarna Norden 901.`, 
          imageUrl:'https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_norden901-90-right-my2021_%23SALL_%23AEPI_%23V1.png', 
          price: 1474900 
        },
        { id: 3, 
          name: 'KTM 1290 SUPER DUKE R EVO', 
          description: `Pour rester au top, un superprédateur doit sans cesse évoluer et s’adapter. Or, la KTM 1290 SUPER DUKE R EVO représente le summum de l’évolution. Avec ses suspensions semi-actives (SAT) intuitives, cette BEAST s’adapte au revêtement du sol et aux commandes du pilote pour se muer en chasseuse froide et calculatrice. Elle instille la terreur dans le cœur de tous ses challengers.`, 
          imageUrl: 'https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_1290-sdr-evo-22-wh-90re_%23SALL_%23AEPI_%23V1.png', 
          price: 2074900 
        },
        { id: 4, 
          name: 'KTM 890 ADVENTURE R', 
          description: `La KTM 890 ADVENTURE R est le compagnon idéal des aventuriers en quête de lieux préservés où la nature révèle toute sa beauté. Propulsée par un nouveau moteur plus performant, cette moto offroad se prête parfaitement aux longues excursions hors des sentiers battus. KTM s’est appuyé sur son immense savoir-faire et sa longue expérience en course pour concevoir la baroudeuse idéale pour les explorateurs les plus intrépides.`, 
          imageUrl: 'https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_890-adv-r-21-90re_%23SALL_%23AEPI_%23V2.png', 
          price: 1494900 
        },
        { id: 5, 
          name: 'ROCKET 3 R', 
          description: `Le roadster musclé de référence, un couple imbattable instantanément disponible associé à un contrôle, un confort et des capacités incroyables.`, 
          imageUrl: 'https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/rocket%203/my22/rocket%203%20r/promo%20images/rocket-3-r-my22-korosi-red-rhs-955x537.jpg', 
          price: 2390000 
        },
        { id: 6, 
          name: 'STREET SCRAMBLER SANDSTORM EDITION', 
          description: `Comptant seulement 775 exemplaires dans le monde, cette édition élégante du célèbre Street Scrambler est équipée de série d’accessoires haut de gamme, affiche un coloris Sandstorm custom et est livrée avec un certificat personnalisé.`, 
          imageUrl: 'https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/modern-classics/my21/street%20scrambler/base%20images/sandstorm%20edtion/sandstorm%20and%20matt%20urban%20grey/street-scrambler-sandstorm-smug-rhs-629.png', 
          price: 1190000 }
    ];
    return {products}
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(products => products.id)) + 1 : 11;
  }


  constructor() { }
}
