import type { MetaFunction } from "react-router";
import EditionDetail from "~/components/EditionDetail";

export const meta: MetaFunction = () => [
    { title: "SITA Lomé 2022 — 3ème Édition | SITA" },
    { name: "description", content: "Revivez la 3ème édition du SITA à Lomé, Togo — 2022." },
];

const edition = {
    numero: "3ème",
    annee: "2022",
    ville: "Lomé",
    pays: "République Togolaise",
    flag: "🇹🇬",
    dates: "10 – 15 Novembre 2022",
    theme: "Tisser l'Afrique de Demain",
    description:
        "La 3ème édition du SITA s'est tenue à Lomé, hub économique et culturel de l'Afrique de l'Ouest. La capitale togolaise a accueilli 420 exposants représentant 18 nationalités. Cette édition a mis en avant les stylistes émergents et les techniques ancestrales de tissage, avec une grande exposition sur le Kente ghanéen et le bogolan malien. Le Forum des Investisseurs, organisé en marge du salon, a permis de mobiliser des engagements d'investissement de plus de 50 millions de dollars dans le secteur textile africain.",
    exposants: 420,
    paysRepresentes: 18,
    visiteurs: "9 500",
    image: "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=1200&q=80",
    galerie: [
        "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=600&q=80",
        "https://images.unsplash.com/photo-1549887534-f3a748b0cd5c?w=600&q=80",
        "https://images.unsplash.com/photo-1578821590362-fe5a911cf123?w=600&q=80",
        "https://images.unsplash.com/photo-1589156188157-6a8a688e1388?w=600&q=80",
        "https://images.unsplash.com/photo-1604514628550-37a73ea686e2?w=600&q=80",
        "https://images.unsplash.com/photo-1566150905458-1bf049841f92?w=600&q=80",
    ],
    prix: [
        { categorie: "Meilleur Styliste", laureate: "Kodjo Mensah", pays: "Togo" },
        { categorie: "Meilleur Mannequin", laureate: "Abena Asante", pays: "Ghana" },
        { categorie: "Meilleur Stand", laureate: "Tissus Kénédougou", pays: "Burkina Faso" },
    ],
    conferences: [
        {
            titre: "Forum des Investisseurs Textile Africain",
            resolution:
                "Mobilisation de 50 millions USD d'engagements d'investissement pour le développement d'infrastructures textiles en Afrique de l'Ouest.",
        },
        {
            titre: "Valorisation du Patrimoine Textile Traditionnel",
            resolution:
                "Création d'une base de données numérique des motifs et techniques textiles africains, accessible à tous les créateurs du continent.",
        },
        {
            titre: "Mode Éthique et Commerce Équitable",
            resolution:
                "Engagement des exposants SITA à respecter des standards de commerce équitable garantissant une juste rémunération aux artisans.",
        },
    ],
};

export default function LomePage() {
    return <EditionDetail edition={edition} />;
}
