import type { MetaFunction } from "react-router";
import EditionDetail from "~/components/EditionDetail";

export const meta: MetaFunction = () => [
    { title: "SITA Conakry 2023 — 4ème Édition | SITA" },
    { name: "description", content: "Revivez la 4ème édition du SITA à Conakry, Guinée — 2023. Galeries, palmarès et résolutions de conférences." },
];

const edition = {
    numero: "4ème",
    annee: "2023",
    ville: "Conakry",
    pays: "République de Guinée",
    flag: "🇬🇳",
    dates: "15 – 20 Novembre 2023",
    theme: "Digitalisation & Industrialisation du Textile Africain",
    description:
        "La 4ème édition du SITA à Conakry a marqué un tournant historique pour le salon. Plus de 500 exposants venus de 22 pays africains se sont réunis au Palais du Peuple de Conakry pour célébrer l'excellence du textile africain. Cette édition a été caractérisée par le lancement officiel de l'Académie SITA, un programme de formation dédié aux artisans et entrepreneurs du secteur textile. Les défilés de mode ont réuni les plus grands stylistes du continent, mettant en valeur le wax, le bogolan, le kente et d'autres tissus emblématiques.",
    exposants: 500,
    paysRepresentes: 22,
    visiteurs: "12 000",
    image: "https://images.unsplash.com/photo-1549887534-f3a748b0cd5c?w=1200&q=80",
    galerie: [
        "https://images.unsplash.com/photo-1549887534-f3a748b0cd5c?w=600&q=80",
        "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=600&q=80",
        "https://images.unsplash.com/photo-1578821590362-fe5a911cf123?w=600&q=80",
        "https://images.unsplash.com/photo-1589156188157-6a8a688e1388?w=600&q=80",
        "https://images.unsplash.com/photo-1604514628550-37a73ea686e2?w=600&q=80",
        "https://images.unsplash.com/photo-1566150905458-1bf049841f92?w=600&q=80",
    ],
    prix: [
        { categorie: "Meilleur Styliste", laureate: "Aminata Kouyaté", pays: "Guinée" },
        { categorie: "Meilleur Mannequin", laureate: "Fatoumata Diallo", pays: "Sénégal" },
        { categorie: "Meilleur Stand", laureate: "Maison Kente d'Or", pays: "Ghana" },
    ],
    conferences: [
        {
            titre: "Textile Africain à l'ère du Numérique",
            resolution:
                "Les États membres s'engagent à financer des plateformes de vente en ligne pour les artisans textiles africains et à former 10 000 artisans au commerce électronique d'ici 2025.",
        },
        {
            titre: "Industrialisation de la filière coton",
            resolution:
                "Création d'un fonds panafricain pour soutenir la transformation locale du coton brut, visant à tripler la valeur ajoutée produite sur le continent d'ici 2030.",
        },
        {
            titre: "Label Qualité Textile Africain",
            resolution:
                "Adoption d'une charte commune de certification de qualité pour les produits textiles labellisés SITA, garantissant l'authenticité et le respect des savoir-faire traditionnels.",
        },
    ],
};

export default function ConakryPage() {
    return <EditionDetail edition={edition} />;
}
