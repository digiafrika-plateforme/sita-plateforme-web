import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
    { title: "Presse & Blog — Actualités Textile Africain | SITA" },
    {
        name: "description",
        content:
            "Communiqués de presse, revue de presse et articles sur l'industrie du textile en Afrique.",
    },
];

const articles = [
    {
        id: 1,
        type: "article",
        date: "12 Mai 2026",
        category: "Annonce",
        titre: "La 5ème édition du SITA bientôt annoncée",
        extrait:
            "Le Commissaire Général du SITA dévoilera prochainement la ville hôte et les thématiques de la 5ème édition du salon panafricain du textile.",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
        badge: "badge-primary",
        badgeLabel: "Annonce Officielle",
    },
    {
        id: 2,
        type: "article",
        date: "28 Avril 2026",
        category: "Marché",
        titre: "Le coton africain s'impose sur la scène internationale",
        extrait:
            "La demande internationale pour le coton africain bio connaît une croissance de 35% portée par les tendances de mode éthique et durable dans les marchés occidentaux.",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
        badge: "badge-secondary",
        badgeLabel: "Industrie",
    },
    {
        id: 3,
        type: "article",
        date: "10 Avril 2026",
        category: "Formation",
        titre: "Lancement du programme E-commerce Textile Africain",
        extrait:
            "L'Académie SITA ouvre les inscriptions pour sa nouvelle promotion. 200 places disponibles pour des artisans et stylistes africains désireux de conquérir les marchés en ligne.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        badge: "badge-accent",
        badgeLabel: "Académie",
    },
    {
        id: 4,
        type: "communique",
        date: "5 Mars 2026",
        category: "Presse",
        titre: "Communiqué : Bilan de l'édition SITA Conakry 2023",
        extrait:
            "Le Comité Organisateur du SITA publie le bilan officiel de la 4ème édition : chiffres de fréquentation, montants des contrats signés et résolutions adoptées.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
        badge: "badge-neutral",
        badgeLabel: "Communiqué Officiel",
    },
    {
        id: 5,
        type: "article",
        date: "20 Février 2026",
        category: "Mode",
        titre: "Les créateurs africains à la Fashion Week de Paris",
        extrait:
            "Cinq stylistes labellisés SITA ont participé à la Fashion Week de Paris printemps 2026, portant haut les couleurs du textile africain devant la presse internationale.",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
        badge: "badge-primary",
        badgeLabel: "Mode Africaine",
    },
    {
        id: 6,
        type: "revue",
        date: "10 Février 2026",
        category: "Revue de presse",
        titre: "Revue de Presse — Textile Africain Janvier 2026",
        extrait:
            "Sélection des meilleurs articles publiés par la presse internationale sur le textile africain, la mode éthique et le développement du secteur en janvier 2026.",
        image: "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=600&q=80",
        badge: "badge-secondary",
        badgeLabel: "Revue de Presse",
    },
];

const mediaPartners = [
    "RFI Afrique",
    "Jeune Afrique",
    "African Business",
    "Africa Fashion",
    "Le Monde Afrique",
    "VOA Afrique",
];

export default function PressePage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 bg-neutral text-neutral-content overflow-hidden">
                <div className="pan-african-bar absolute top-0 left-0 right-0" />
                <div className="absolute inset-0 kente-pattern opacity-20" />
                <div className="relative container mx-auto px-4 text-center">
                    <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                        Médias & Communication
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-black mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        Presse & Blog
                    </h1>
                    <p className="text-xl text-neutral-content/75 max-w-xl mx-auto">
                        Actualités, communiqués officiels et articles sur le textile africain et l'écosystème SITA.
                    </p>
                </div>
            </section>

            {/* Articles */}
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4">
                    {/* Article à la une */}
                    <div className="mb-12">
                        <div className="card lg:card-side bg-base-100 shadow-md border border-base-200 overflow-hidden card-cultural">
                            <figure className="lg:w-2/5 h-56 lg:h-auto overflow-hidden flex-shrink-0">
                                <img
                                    src={articles[0].image}
                                    alt={articles[0].titre}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            </figure>
                            <div className="card-body p-8">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`badge ${articles[0].badge}`}>{articles[0].badgeLabel}</span>
                                    <span className="text-sm text-base-content/50">À la une</span>
                                </div>
                                <p className="text-xs text-base-content/50 uppercase tracking-wider mb-1">
                                    {articles[0].date}
                                </p>
                                <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                                    {articles[0].titre}
                                </h2>
                                <p className="text-base-content/70 leading-relaxed mb-6">{articles[0].extrait}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Lire l'article complet</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grille des autres articles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {articles.slice(1).map((art) => (
                            <article key={art.id} className="card bg-base-100 shadow-sm border border-base-200 card-cultural overflow-hidden">
                                <figure className="relative h-44 overflow-hidden">
                                    <img
                                        src={art.image}
                                        alt={art.titre}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                    <div className={`badge ${art.badge} absolute top-3 left-3`}>{art.badgeLabel}</div>
                                </figure>
                                <div className="card-body p-5">
                                    <p className="text-xs text-base-content/50 uppercase tracking-wider mb-1">
                                        {art.date} · {art.category}
                                    </p>
                                    <h3 className="font-bold text-base leading-tight mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                                        {art.titre}
                                    </h3>
                                    <p className="text-sm text-base-content/70 leading-relaxed line-clamp-3">{art.extrait}</p>
                                    <div className="card-actions mt-3">
                                        <button className="btn btn-ghost btn-sm text-primary p-0 hover:bg-transparent hover:underline">
                                            Lire la suite →
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partenaires médias */}
            <section className="py-14 bg-base-200">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-base-content/50 uppercase tracking-widest mb-6 font-semibold">
                        Ils parlent de nous
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {mediaPartners.map((media) => (
                            <div
                                key={media}
                                className="px-5 py-2.5 bg-base-100 border border-base-300 rounded-full text-sm font-medium text-base-content/70 hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm"
                            >
                                {media}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accréditation presse */}
            <section className="py-16 bg-primary text-primary-content text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        Demande d'Accréditation Presse
                    </h2>
                    <p className="text-primary-content/80 mb-8 max-w-lg mx-auto">
                        Vous êtes journaliste ou blogueur spécialisé ? Demandez votre badge d'accréditation SITA.
                    </p>
                    <Link to="/contact" className="btn bg-white text-primary hover:bg-white/90 btn-lg font-bold">
                        Demander une accréditation
                    </Link>
                </div>
            </section>
        </>
    );
}
