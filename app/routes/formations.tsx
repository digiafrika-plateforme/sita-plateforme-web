import type { MetaFunction } from "react-router";
import { ShoppingCart, Needle, Leaf, Scissors, BarChart, Smartphone } from "~/components/Icons";

export const meta: MetaFunction = () => [
    { title: "Formations & Académie SITA | SITA" },
    {
        name: "description",
        content:
            "Découvrez les programmes de formation de l'Académie SITA : E-commerce, Tissage, Teinture, Stylisme et bien plus.",
    },
];

const modules = [
    {
        icon: "shopping-cart",
        titre: "E-commerce & Vente en ligne",
        duree: "6 semaines",
        niveau: "Débutant à Intermédiaire",
        description:
            "Apprenez à créer votre boutique en ligne, à photographier vos créations, à gérer les paiements et à atteindre une clientèle internationale avec vos tissus et créations.",
        competences: [
            "Création de boutique Shopify/WooCommerce",
            "Photographie produit professionnelle",
            "Marketing des réseaux sociaux (Instagram, TikTok)",
            "Gestion des livraisons internationales",
        ],
        badge: "badge-primary",
        color: "border-primary",
    },
    {
        icon: "needle",
        titre: "Techniques de Tissage Traditionnel",
        duree: "8 semaines",
        niveau: "Tous niveaux",
        description:
            "Maîtrisez les techniques ancestrales du Kente, du Faso Dan Fani et du tissage à main africain. Apprenez à moderniser ces savoir-faire pour répondre à la demande contemporaine.",
        competences: [
            "Tissage sur métier à main",
            "Motifs traditionnels Kente, Bogolan",
            "Colorimétrie et harmonie des tons",
            "Développement de nouvelles collections",
        ],
        badge: "badge-secondary",
        color: "border-secondary",
    },
    {
        icon: "leaf",
        titre: "Teinture Naturelle & Bio",
        duree: "4 semaines",
        niveau: "Intermédiaire",
        description:
            "Redécouvrez les teintures végétales africaines (indigo, henné, rocou) et apprenez à les intégrer dans une production respectueuse de l'environnement et certifiée bio.",
        competences: [
            "Extraction de pigments naturels",
            "Techniques de batik et tie-dye",
            "Certification produits bio",
            "Développement durable et économie circulaire",
        ],
        badge: "badge-accent",
        color: "border-accent",
    },
    {
        icon: "scissors",
        titre: "Stylisme & Création de Mode",
        duree: "12 semaines",
        niveau: "Intermédiaire à Avancé",
        description:
            "Développez votre identité créative en combinant l'héritage textile africain avec les tendances de la mode contemporaine. De l'esquisse au défilé.",
        competences: [
            "Dessin de mode et sketching",
            "Construction de patrons",
            "Direction artistique",
            "Organisation d'un défilé",
        ],
        badge: "badge-neutral",
        color: "border-neutral",
    },
    {
        icon: "bar-chart",
        titre: "Gestion d'Entreprise Textile",
        duree: "5 semaines",
        niveau: "Tous niveaux",
        description:
            "Transformez votre passion en entreprise viable. Business plan, comptabilité, financement, et stratégie de croissance pour les PME textiles africaines.",
        competences: [
            "Business plan et pitch deck",
            "Accès aux financements (BAD, BCEAO)",
            "Gestion des stocks et approvisionnement",
            "Export et commerce international",
        ],
        badge: "badge-primary",
        color: "border-primary",
    },
    {
        icon: "smartphone",
        titre: "Communication Digitale pour Créateurs",
        duree: "3 semaines",
        niveau: "Débutant",
        description:
            "Construisez votre marque personnelle sur les réseaux sociaux. Créez du contenu engageant pour promouvoir vos créations et fidéliser votre communauté.",
        competences: [
            "Identité de marque et logo",
            "Shooting photo et vidéo Reels",
            "Community management",
            "Publicité Facebook/Meta",
        ],
        badge: "badge-secondary",
        color: "border-secondary",
    },
];

function renderModuleIcon(iconName: string) {
    const primaryColor = "text-primary";
    const secondaryColor = "text-secondary";
    const accentColor = "text-accent";
    const neutralColor = "text-neutral";
    const iconSize = "w-8 h-8";

    switch (iconName) {
        case "shopping-cart":
            return <ShoppingCart className={`${iconSize} ${primaryColor}`} />;
        case "needle":
            return <Needle className={`${iconSize} ${secondaryColor}`} />;
        case "leaf":
            return <Leaf className={`${iconSize} ${accentColor}`} />;
        case "scissors":
            return <Scissors className={`${iconSize} ${neutralColor}`} />;
        case "bar-chart":
            return <BarChart className={`${iconSize} ${primaryColor}`} />;
        case "smartphone":
            return <Smartphone className={`${iconSize} ${secondaryColor}`} />;
        default:
            return null;
    }
}

const temoignages = [
    {
        nom: "Aïcha Traoré",
        pays: "Mali",
        formation: "E-commerce",
        texte:
            "Grâce à la formation SITA, j'ai multiplié mes ventes par 5 en 3 mois. Mes bogolans sont maintenant vendus jusqu'en Europe et aux États-Unis.",
        avatar: "👩🏿‍💼",
    },
    {
        nom: "Kofi Mensah",
        pays: "Ghana",
        formation: "Tissage Traditionnel",
        texte:
            "J'ai appris à documenter et à transmettre les motifs Kente de mon village. Le programme m'a ouvert les yeux sur la valeur de notre patrimoine.",
        avatar: "👨🏿‍🎨",
    },
    {
        nom: "Fatimata Bah",
        pays: "Guinée",
        formation: "Stylisme",
        texte:
            "Lauréate du prix Meilleur Styliste à Conakry 2023, je dois beaucoup à l'Académie SITA qui a structuré ma créativité et ma vision artistique.",
        avatar: "👩🏾‍🎓",
    },
];

export default function FormationsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 bg-neutral text-neutral-content overflow-hidden">
                <div className="pan-african-bar absolute top-0 left-0 right-0" />
                <div className="absolute inset-0 kente-pattern opacity-20" />
                <div className="relative container mx-auto px-4 text-center">
                    <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                        Académie SITA
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-black mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        Formations & Académie
                    </h1>
                    <p className="text-xl text-neutral-content/75 max-w-2xl mx-auto">
                        Développez vos compétences avec des formateurs experts du textile africain. Des programmes conçus pour l'artisan d'aujourd'hui et l'entrepreneur de demain.
                    </p>
                </div>
            </section>

            {/* Modules */}
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="text-primary font-semibold uppercase tracking-widest text-sm">Nos programmes</span>
                        <h2 className="text-4xl font-bold text-base-content mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                            Modules de Formation
                        </h2>
                        <div className="flex justify-center gap-1 mt-4">
                            <div className="w-8 h-1 rounded-full bg-accent" />
                            <div className="w-8 h-1 rounded-full bg-secondary" />
                            <div className="w-8 h-1 rounded-full bg-primary" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {modules.map((mod) => (
                            <div key={mod.titre} className={`card bg-base-100 shadow-sm border-t-4 ${mod.color} border border-base-200 card-cultural`}>
                                <div className="card-body p-6">
                                    <div className="text-4xl mb-3">{renderModuleIcon(mod.icon)}</div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`badge ${mod.badge} badge-sm`}>{mod.niveau}</span>
                                        <span className="text-xs text-base-content/50">⏱ {mod.duree}</span>
                                    </div>
                                    <h3 className="font-bold text-lg leading-tight mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                                        {mod.titre}
                                    </h3>
                                    <p className="text-sm text-base-content/70 leading-relaxed mb-4">{mod.description}</p>
                                    <div>
                                        <p className="text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-2">Compétences acquises :</p>
                                        <ul className="space-y-1.5">
                                            {mod.competences.map((comp) => (
                                                <li key={comp} className="flex items-start gap-2 text-xs text-base-content/70">
                                                    <span className="text-primary mt-0.5">✓</span>
                                                    {comp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="card-actions mt-4">
                                        <button className="btn btn-primary btn-sm w-full">
                                            S'inscrire à ce module
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Témoignages */}
            <section className="py-20 bg-base-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Ils témoignent</span>
                        <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                            Nos Diplômés Racontent
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {temoignages.map((t) => (
                            <div key={t.nom} className="card bg-base-100 shadow-sm border border-base-300">
                                <div className="card-body p-6">
                                    <div className="text-4xl mb-3">{t.avatar}</div>
                                    <blockquote className="text-sm text-base-content/75 leading-relaxed italic mb-4">
                                        "{t.texte}"
                                    </blockquote>
                                    <div>
                                        <div className="font-bold text-base-content">{t.nom}</div>
                                        <div className="text-xs text-base-content/50">{t.pays} · Formation {t.formation}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary text-primary-content text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        Prêt(e) à développer vos compétences ?
                    </h2>
                    <p className="text-primary-content/80 mb-8 max-w-lg mx-auto">
                        Les inscriptions pour la prochaine promotion de l'Académie SITA sont ouvertes. Places limitées.
                    </p>
                    <button className="btn bg-white text-primary hover:bg-white/90 btn-lg font-bold">
                        M'inscrire à l'Académie SITA
                    </button>
                </div>
            </section>
        </>
    );
}
