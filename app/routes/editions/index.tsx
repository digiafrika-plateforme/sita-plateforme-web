import { Link } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
    { title: "Éditions — Archives | SITA" },
    {
        name: "description",
        content: "Retrouvez toutes les éditions passées du Salon International du Textile Africain : galeries photos, vidéos, palmarès et résolutions.",
    },
];

const editions = [
    // Ajout de l'édition à venir Canada 2027
    {
        annee: "2027",
        ville: "Canada",
        pays: "Canada",
        flag: "🇨🇦",
        to: "/editions/canada-2027",
        theme: "Innovation, Diversité et Rayonnement international",
        exposants: 0,
        pays_representes: 0,
        image: "/logo-sita-edition-2027-canada.jpg",
        color: "border-primary",
        badge: "badge-primary",
        edition: "5ème (à venir)",
        isUpcoming: true,
    },
    {
        annee: "2023",
        ville: "Conakry",
        pays: "Guinée",
        flag: "🇬🇳",
        to: "/editions/conakry-2023",
        theme: "Digitalisation & Industrialisation",
        exposants: 500,
        pays_representes: 22,
        image: "https://images.unsplash.com/photo-1549887534-f3a748b0cd5c?w=800&q=80",
        color: "border-primary",
        badge: "badge-primary",
        edition: "4ème",
    },
    {
        annee: "2022",
        ville: "Lomé",
        pays: "Togo",
        flag: "🇹🇬",
        to: "/editions/lome-2022",
        theme: "Tisser l'Afrique de demain",
        exposants: 420,
        pays_representes: 18,
        image: "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=800&q=80",
        color: "border-secondary",
        badge: "badge-secondary",
        edition: "3ème",
    },
    {
        annee: "2021",
        ville: "Djibouti",
        pays: "Djibouti",
        flag: "🇩🇯",
        to: "/editions/djibouti-2021",
        theme: "Coton Bio & Développement Durable",
        exposants: 310,
        pays_representes: 15,
        image: "https://images.unsplash.com/photo-1615123820032-f3f7bb34a000?w=800&q=80",
        color: "border-accent",
        badge: "badge-accent",
        edition: "2ème",
    },
    {
        annee: "2020",
        ville: "Malabo",
        pays: "Guinée Équatoriale",
        flag: "🇬🇶",
        to: "/editions/malabo-2020",
        theme: "Renaissance du Textile Africain",
        exposants: 200,
        pays_representes: 12,
        image: "https://images.unsplash.com/photo-1590414174649-cad31a917b1d?w=800&q=80",
        color: "border-neutral",
        badge: "badge-neutral",
        edition: "1ère",
    },
];

export default function EditionsPage() {
    return (
        <>
            {/* Header */}
            <section className="relative py-24 bg-neutral text-neutral-content overflow-hidden">
                <div className="pan-african-bar absolute top-0 left-0 right-0" />
                <div className="absolute inset-0 kente-pattern opacity-20" />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
                <div className="relative container mx-auto px-4 text-center">
                    <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                        Depuis 2020
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-black mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        Nos Éditions
                    </h1>
                    <p className="text-xl text-neutral-content/75 max-w-xl mx-auto">
                        Quatre éditions, quatre villes, un seul objectif : promouvoir le textile africain sur la scène continentale et internationale.
                    </p>
                </div>
            </section>

            {/* Cards éditions */}
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {editions.map((ed) => (
                            <Link
                                key={ed.to}
                                to={ed.to}
                                className={`group card bg-base-100 shadow-md border-l-4 ${ed.color} card-cultural overflow-hidden ${ed.isUpcoming ? 'ring-2 ring-primary/60 scale-105' : ''}`}
                            >
                                <figure className="relative h-56 overflow-hidden flex items-center justify-center bg-white">
                                    {/* Logo spécial pour Lomé */}
                                    {ed.ville === "Lomé" && (
                                        <img
                                            src="/logo-edition-lome.PNG"
                                            alt="Logo SITA Lomé 2022"
                                            className="absolute top-3 left-3 h-12 w-auto rounded-lg shadow border border-secondary bg-white p-1 z-10"
                                            style={{ maxWidth: "60px" }}
                                        />
                                    )}
                                    {/* Logo spécial pour Canada 2027 */}
                                    {ed.isUpcoming ? (
                                        <div className="flex flex-col items-center justify-center w-full h-full">
                                            <img
                                                src="/logo-sita-edition-2027-canada.jpg"
                                                alt="Logo SITA Canada 2027"
                                                className="h-24 w-auto rounded-lg shadow border border-primary bg-white p-2 object-contain"
                                                style={{ maxWidth: "120px" }}
                                            />
                                        </div>
                                    ) : (
                                        <img
                                            src={ed.image}
                                            alt={`Édition ${ed.ville} ${ed.annee}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                                            loading="lazy"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                        <span className="text-3xl">{ed.flag}</span>
                                        <div>
                                            <div className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                                                {ed.ville}, {ed.pays}
                                            </div>
                                            <div className="text-white/70 text-sm">{ed.edition} édition — {ed.annee}</div>
                                        </div>
                                    </div>
                                    <div className={`badge ${ed.badge} absolute top-3 right-3`}>{ed.annee}</div>
                                </figure>
                                <div className="card-body p-6">
                                    <p className="text-primary font-medium italic mb-3">"{ed.theme}"</p>
                                    <div className="flex gap-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-base-content" style={{ fontFamily: "var(--font-heading)" }}>
                                                {ed.exposants > 0 ? `${ed.exposants}+` : '--'}
                                            </div>
                                            <div className="text-xs text-base-content/60">Exposants</div>
                                        </div>
                                        <div className="divider divider-horizontal" />
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-base-content" style={{ fontFamily: "var(--font-heading)" }}>
                                                {ed.pays_representes > 0 ? ed.pays_representes : '--'}
                                            </div>
                                            <div className="text-xs text-base-content/60">Pays représentés</div>
                                        </div>
                                    </div>
                                    <div className="card-actions mt-4">
                                        {ed.isUpcoming ? (
                                            <span className="btn btn-primary btn-sm">À venir en 2027</span>
                                        ) : (
                                            <span className="btn btn-ghost btn-sm text-primary p-0 group-hover:underline">
                                                Voir la galerie & les résolutions →
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
