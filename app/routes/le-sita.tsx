import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => [
    { title: "Le SITA — Vision, Mission & Histoire | SITA" },
    {
        name: "description",
        content:
            "Découvrez la vision, la mission et l'histoire du Salon International du Textile Africain — un projet panafricain d'industrialisation et de valorisation du textile.",
    },
];

const valeurs = [
    {
        icon: "🌍",
        titre: "Panafricanisme",
        description:
            "Réunir les acteurs du textile de tous les horizons africains pour créer des synergies continentales durables.",
    },
    {
        icon: "⚙️",
        titre: "Industrialisation",
        description:
            "Promouvoir la transformation locale des matières premières pour créer de la valeur ajoutée sur le continent.",
    },
    {
        icon: "💡",
        titre: "Innovation",
        description:
            "Encourager la digitalisation, les nouvelles techniques de teinture et l'intégration du e-commerce dans le secteur.",
    },
    {
        icon: "🎓",
        titre: "Formation",
        description:
            "Développer les compétences des artisans, stylistes et industriels à travers l'Académie SITA.",
    },
];

const historique = [
    {
        annee: "2019",
        titre: "Genèse du SITA",
        description:
            "L'idée d'un salon panafricain dédié au textile émerge lors d'un sommet de coopération économique. Un groupe d'industriels et de stylistes africains décide de porter ce projet.",
        icon: "💡",
    },
    {
        annee: "2020",
        titre: "1ère Édition — Malabo",
        description:
            "La Guinée Équatoriale accueille la première édition du SITA. Malgré la pandémie mondiale, le salon réunit plus de 200 exposants de 12 pays africains.",
        icon: "🇬🇶",
        to: "/editions/malabo-2020",
    },
    {
        annee: "2021",
        titre: "2ème Édition — Djibouti",
        description:
            "Djibouti, carrefour stratégique entre l'Afrique et l'Asie, accueille la 2ème édition avec un focus sur le coton bio et les tissus de la Corne de l'Afrique.",
        icon: "🇩🇯",
        to: "/editions/djibouti-2021",
    },
    {
        annee: "2022",
        titre: "3ème Édition — Lomé",
        description:
            "Le Togo, hub économique de la CEDEAO, ouvre ses portes pour la 3ème édition. Le thème central : « Tisser l'Afrique de demain ».",
        icon: "🇹🇬",
        to: "/editions/lome-2022",
    },
    {
        annee: "2023",
        titre: "4ème Édition — Conakry",
        description:
            "La Guinée accueille une édition record avec plus de 500 exposants, des conférences sur la digitalisation et le lancement de l'Académie SITA.",
        icon: "🇬🇳",
        to: "/editions/conakry-2023",
    },
    {
        annee: "2026",
        titre: "5ème Édition — À venir",
        description:
            "La 5ème édition sera annoncée prochainement. Inscrivez-vous à notre newsletter pour être les premiers informés.",
        icon: "🌟",
    },
];

export default function LeSitaPage() {
    return (
        <>
            {/* ====== HERO ====== */}
            <section className="relative py-24 bg-neutral text-neutral-content overflow-hidden">
                <div className="pan-african-bar absolute top-0 left-0 right-0" />
                <div className="absolute inset-0 kente-pattern opacity-30" />
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative container mx-auto px-4 text-center">
                    <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                        Notre identité
                    </span>
                    <h1
                        className="text-5xl lg:text-6xl font-black mt-3 mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Le SITA
                    </h1>
                    <p className="text-xl text-neutral-content/75 max-w-2xl mx-auto leading-relaxed">
                        Plus qu'un salon, le SITA est un mouvement continental pour la valorisation,
                        l'industrialisation et la promotion du textile africain dans toute sa richesse.
                    </p>
                </div>
            </section>

            {/* ====== VISION & MISSION ====== */}
            <section id="vision" className="py-20 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                                Notre boussole
                            </span>
                            <h2
                                className="text-4xl font-bold text-base-content mt-2 mb-6"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Vision & Mission
                            </h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                                        🔭
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                                            Notre Vision
                                        </h3>
                                        <p className="text-base-content/70 leading-relaxed">
                                            Faire du textile africain une industrie compétitive, durable et reconnue
                                            mondialement, en valorisant les savoir-faire artisanaux et en intégrant
                                            les technologies modernes de production.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xl">
                                        🎯
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                                            Notre Mission
                                        </h3>
                                        <p className="text-base-content/70 leading-relaxed">
                                            Créer une plateforme continentale pour connecter artisans, industriels,
                                            investisseurs et institutions autour d'un secteur textile africain
                                            structuré, digitalisé et industrialisé.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl">
                                        🌱
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                                            Notre Engagement
                                        </h3>
                                        <p className="text-base-content/70 leading-relaxed">
                                            Promouvoir une mode éthique et durable, respectueuse des traditions
                                            africaines, avec des labels de qualité et des circuits courts de
                                            production favorisant les économies locales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image décorative */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-base-200 flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"
                                    alt="Tissu africain traditionnel"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            {/* Badge flottant */}
                            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-content rounded-2xl p-4 shadow-xl">
                                <div className="text-3xl font-black" style={{ fontFamily: "var(--font-heading)" }}>
                                    5+
                                </div>
                                <div className="text-sm font-medium opacity-90">ans d'existence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== NOS VALEURS ====== */}
            <section className="py-20 bg-base-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                            Ce qui nous guide
                        </span>
                        <h2
                            className="text-4xl font-bold text-base-content mt-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Nos Valeurs Fondamentales
                        </h2>
                        <div className="flex justify-center gap-1 mt-4">
                            <div className="w-8 h-1 rounded-full bg-accent" />
                            <div className="w-8 h-1 rounded-full bg-secondary" />
                            <div className="w-8 h-1 rounded-full bg-primary" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valeurs.map((v) => (
                            <div
                                key={v.titre}
                                className="card bg-base-100 shadow-sm border border-base-300 card-cultural"
                            >
                                <div className="card-body items-center text-center p-6">
                                    <div className="text-4xl mb-3">{v.icon}</div>
                                    <h3
                                        className="card-title text-lg"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {v.titre}
                                    </h3>
                                    <p className="text-sm text-base-content/70 leading-relaxed">{v.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== MOT DU COMMISSAIRE ====== */}
            <section id="commissaire" className="py-20 bg-primary text-primary-content">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                                Message officiel
                            </span>
                            <h2
                                className="text-4xl font-bold mt-2"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Mot du Commissaire Général
                            </h2>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-10 items-center">
                            <div className="flex-shrink-0">
                                <div className="w-40 h-40 rounded-full bg-primary-content/20 border-4 border-secondary flex items-center justify-center text-6xl shadow-xl">
                                    👔
                                </div>
                            </div>
                            <div>
                                <blockquote className="text-xl leading-relaxed italic text-primary-content/90 mb-6">
                                    "Le SITA est né d'une conviction profonde : l'Afrique possède tous les atouts
                                    pour devenir une puissance textile mondiale. Nos tissus, nos teintures, nos
                                    motifs racontent des millénaires d'histoire et de savoir-faire. Notre devoir
                                    est de transformer cet héritage en opportunités économiques concrètes pour
                                    nos artisans, nos jeunes et nos communautés."
                                </blockquote>
                                <div>
                                    <div className="font-bold text-lg text-secondary">
                                        Commissaire Général du SITA
                                    </div>
                                    <div className="text-primary-content/70 text-sm">
                                        Salon International du Textile Africain
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== HISTORIQUE ====== */}
            <section id="historique" className="py-20 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="text-accent font-semibold uppercase tracking-widest text-sm">
                            Notre parcours
                        </span>
                        <h2
                            className="text-4xl font-bold text-base-content mt-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Historique du SITA
                        </h2>
                        <div className="flex justify-center gap-1 mt-4">
                            <div className="w-8 h-1 rounded-full bg-accent" />
                            <div className="w-8 h-1 rounded-full bg-secondary" />
                            <div className="w-8 h-1 rounded-full bg-primary" />
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="max-w-3xl mx-auto">
                        <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
                            {historique.map((item, i) => (
                                <li key={item.annee}>
                                    {i !== 0 && <hr className="bg-primary/30" />}
                                    <div className={`timeline-${i % 2 === 0 ? "start" : "end"} md:text-${i % 2 === 0 ? "end" : "start"} mb-10`}>
                                        <time className="font-bold text-primary text-xl">
                                            {item.annee}
                                        </time>
                                    </div>
                                    <div className="timeline-middle">
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center text-lg border-4 border-base-100 shadow">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className={`timeline-${i % 2 === 0 ? "end" : "start"} mb-10`}>
                                        <div className="card bg-base-100 border border-base-200 shadow-sm p-5">
                                            <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                                                {item.titre}
                                            </h3>
                                            <p className="text-sm text-base-content/70 leading-relaxed">
                                                {item.description}
                                            </p>
                                            {item.to && (
                                                <Link to={item.to} className="btn btn-ghost btn-xs text-primary mt-3 p-0 hover:bg-transparent hover:underline">
                                                    Voir l'édition →
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    {i !== historique.length - 1 && <hr className="bg-primary/30" />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
