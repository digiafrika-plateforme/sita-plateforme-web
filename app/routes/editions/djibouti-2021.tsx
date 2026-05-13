import type { MetaFunction } from "react-router";
import EditionDetail from "~/components/EditionDetail";

export const meta: MetaFunction = () => [
    { title: "SITA Djibouti 2021 — 2ème Édition | SITA" },
    { name: "description", content: "Revivez la 2ème édition du SITA à Djibouti — 2021." },
];

const edition = {
    numero: "2ème",
    annee: "2021",
    ville: "Djibouti",
    pays: "République de Djibouti",
    flag: "🇩🇯",
    dates: "12 – 17 Novembre 2021",
    theme: "Coton Bio & Développement Durable",
    description:
        "La 2ème édition du SITA à Djibouti a mis la durabilité et l'agriculture biologique au cœur des débats. Carrefour stratégique entre l'Afrique, l'Asie et le Moyen-Orient, Djibouti a offert une plateforme unique pour explorer les synergies entre les producteurs de coton africain et les marchés asiatiques. 310 exposants de 15 pays ont participé à cet événement marqué par le premier concours panafricain de teinture naturelle et une grande exposition sur les fibres végétales traditionnelles.",
    exposants: 310,
    paysRepresentes: 15,
    visiteurs: "7 200",
    image: "https://images.unsplash.com/photo-1615123820032-f3f7bb34a000?w=1200&q=80",
    galerie: [
        "https://images.unsplash.com/photo-1615123820032-f3f7bb34a000?w=600&q=80",
        "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=600&q=80",
        "https://images.unsplash.com/photo-1549887534-f3a748b0cd5c?w=600&q=80",
        "https://images.unsplash.com/photo-1589156188157-6a8a688e1388?w=600&q=80",
        "https://images.unsplash.com/photo-1604514628550-37a73ea686e2?w=600&q=80",
        "https://images.unsplash.com/photo-1566150905458-1bf049841f92?w=600&q=80",
    ],
    prix: [
        { categorie: "Meilleur Styliste", laureate: "Hodan Farah", pays: "Djibouti" },
        { categorie: "Meilleur Mannequin", laureate: "Safia Ibrahim", pays: "Éthiopie" },
        { categorie: "Meilleur Stand", laureate: "Coton du Nil", pays: "Égypte" },
    ],
    conferences: [
        {
            titre: "Agriculture Biologique et Coton Africain",
            resolution:
                "Adoption d'une feuille de route pour la conversion de 30% des surfaces cotonnières africaines en agriculture biologique certifiée d'ici 2030.",
        },
        {
            titre: "Partenariats Afrique-Asie dans le Textile",
            resolution:
                "Signature de 5 accords de partenariat entre associations textiles africaines et manufacturiers asiatiques pour des transferts de technologie équitables.",
        },
        {
            titre: "Teinture Naturelle et Savoir-faire Ancestraux",
            resolution:
                "Création d'un programme de préservation et de transmission des techniques de teinture naturelle africaine, inscrit à l'UNESCO.",
        },
    ],
};

export default function DjiboutiPage() {
    return <EditionDetail edition={edition} />;
}
