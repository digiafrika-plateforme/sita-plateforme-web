import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import CountdownTimer from "~/components/CountdownTimer";

export const meta: MetaFunction = () => [
    { title: "SITA — Salon International du Textile Africain" },
    {
        name: "description",
        content:
            "Bienvenue sur le portail officiel du Salon International du Textile Africain. Découvrez les éditions passées, les exposants, les formations et bien plus.",
    },
];

const nextEditionDate = new Date("2026-11-15T09:00:00");

const actualites = [
    {
        id: 1,
        date: "12 Mai 2026",
        category: "Annonce",
        title: "La 5ème édition du SITA bientôt annoncée",
        excerpt:
            "Le Commissaire Général du SITA dévoilera prochainement la ville hôte de la 5ème édition ainsi que les thématiques retenues pour cette nouvelle rencontre continentale.",
        image: "https://images.unsplash.com/photo-1589156188157-6a8a688e1388?w=600&q=80",
        tag: "Prochaine édition",
        tagColor: "badge-primary",
    },
    {
        id: 2,
        date: "28 Avril 2026",
        category: "Textile",
        title: "Le coton africain s'impose sur la scène internationale",
        excerpt:
            "Les producteurs de coton d'Afrique de l'Ouest enregistrent une hausse significative de la demande internationale, boostée par la montée en puissance de la mode éthique.",
        image: "https://images.unsplash.com/photo-1566150905458-1bf049841f92?w=600&q=80",
        tag: "Industrie",
        tagColor: "badge-secondary",
    },
    {
        id: 3,
        date: "10 Avril 2026",
        category: "Formation",
        title: "Lancement du programme E-commerce Textile Africain",
        excerpt:
            "L'Académie SITA ouvre les inscriptions pour sa nouvelle promotion de formation au commerce électronique dédiée aux artisans et stylistes africains.",
        image: "https://images.unsplash.com/photo-1604514628550-37a73ea686e2?w=600&q=80",
        tag: "Académie",
        tagColor: "badge-accent",
    },
];

const editions = [
    {
        ville: "Conakry",
        pays: "Guinée",
        annee: "2023",
        to: "/editions/conakry-2023",
        flag: "🇬🇳",
        color: "bg-primary",
    },
    {
        ville: "Lomé",
        pays: "Togo",
        annee: "2022",
        to: "/editions/lome-2022",
        flag: "🇹🇬",
        color: "bg-secondary",
    },
    {
        ville: "Djibouti",
        pays: "Djibouti",
        annee: "2021",
        to: "/editions/djibouti-2021",
        flag: "🇩🇯",
        color: "bg-accent",
    },
    {
        ville: "Malabo",
        pays: "Guinée Équatoriale",
        annee: "2020",
        to: "/editions/malabo-2020",
        flag: "🇬🇶",
        color: "bg-neutral",
    },
];

const chiffres = [
    { value: "4", label: "Éditions", sublabel: "depuis 2020" },
    { value: "20+", label: "Pays", sublabel: "représentés" },
    { value: "500+", label: "Exposants", sublabel: "par édition" },
    { value: "10k+", label: "Visiteurs", sublabel: "par an" },
];

export default function HomePage() {
    return (
        <>
            {/* ====== HERO ====== */}
            <section
                className="relative min-h-screen flex items-center justify-center overflow-hidden kente-pattern"
                aria-label="Présentation principale"
            >
                {/* Overlay gradient */}
                <div className="absolute inset-0 hero-gradient" />

                {/* Cercles décoratifs */}
                <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    {/* Badge édition */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-sm font-medium tracking-wide">5ème Édition — Bientôt</span>
                    </div>

                    <h1
                        className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Salon International
                        <br />
                        <span className="text-secondary">du Textile</span>
                        <br />
                        <span className="text-primary-content">Africain</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        La vitrine continentale de la créativité, de l'industrie et du patrimoine
                        textile africain. Mode, innovation et culture au rendez-vous.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link to="/editions" className="btn btn-secondary btn-lg gap-2 shadow-lg hover:shadow-secondary/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Voir les éditions
                        </Link>
                        <Link to="/exposants" className="btn btn-outline btn-lg text-white border-white/40 hover:bg-white hover:text-neutral gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            S'inscrire comme exposant
                        </Link>
                    </div>

                    {/* Countdown */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 inline-block">
                        <CountdownTimer
                            targetDate={nextEditionDate}
                            eventName="Prochaine édition dans"
                        />
                    </div>
                </div>

                {/* Flèche scroll */}
                <a
                    href="#actualites"
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
                    aria-label="Scroll vers le bas"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </a>
            </section>

            {/* ====== CHIFFRES CLÉS ====== */}
            <section className="bg-primary py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-primary-content text-center">
                        {chiffres.map((c) => (
                            <div key={c.label}>
                                <div className="text-4xl font-black" style={{ fontFamily: "var(--font-heading)" }}>
                                    {c.value}
                                </div>
                                <div className="font-semibold text-lg">{c.label}</div>
                                <div className="text-primary-content/70 text-sm">{c.sublabel}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== ACTUALITÉS ====== */}
            <section id="actualites" className="py-20 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                            Dernières nouvelles
                        </span>
                        <h2
                            className="text-4xl font-bold text-base-content mt-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Actualités & Informations
                        </h2>
                        <div className="flex justify-center gap-1 mt-4">
                            <div className="w-8 h-1 rounded-full bg-accent" />
                            <div className="w-8 h-1 rounded-full bg-secondary" />
                            <div className="w-8 h-1 rounded-full bg-primary" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {actualites.map((actu) => (
                            <article key={actu.id} className="card bg-base-100 shadow-md card-cultural border border-base-200 overflow-hidden">
                                <figure className="relative h-48 overflow-hidden">
                                    <img
                                        src={actu.image}
                                        alt={actu.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className={`badge ${actu.tagColor} absolute top-3 left-3 font-medium`}>
                                        {actu.tag}
                                    </div>
                                </figure>
                                <div className="card-body p-5">
                                    <p className="text-xs text-base-content/50 uppercase tracking-wider mb-1">
                                        {actu.date} · {actu.category}
                                    </p>
                                    <h3
                                        className="card-title text-lg leading-tight mb-2"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {actu.title}
                                    </h3>
                                    <p className="text-sm text-base-content/70 leading-relaxed">{actu.excerpt}</p>
                                    <div className="card-actions mt-4">
                                        <Link to="/presse" className="btn btn-ghost btn-sm text-primary p-0 hover:bg-transparent hover:underline">
                                            Lire la suite →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link to="/presse" className="btn btn-outline btn-primary btn-lg">
                            Voir toutes les actualités
                        </Link>
                    </div>
                </div>
            </section>

            {/* ====== ÉDITIONS ====== */}
            <section className="py-20 bg-base-200 kente-pattern">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="text-accent font-semibold uppercase tracking-widest text-sm">
                            Depuis 2020
                        </span>
                        <h2
                            className="text-4xl font-bold text-base-content mt-2"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Nos Éditions Passées
                        </h2>
                        <div className="flex justify-center gap-1 mt-4">
                            <div className="w-8 h-1 rounded-full bg-accent" />
                            <div className="w-8 h-1 rounded-full bg-secondary" />
                            <div className="w-8 h-1 rounded-full bg-primary" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {editions.map((ed) => (
                            <Link
                                key={ed.to}
                                to={ed.to}
                                className="group card card-cultural bg-base-100 shadow-md border border-base-300 overflow-hidden"
                            >
                                <div className={`${ed.color} h-2 w-full`} />
                                <div className="card-body items-center text-center p-6">
                                    <div className="text-4xl mb-3">{ed.flag}</div>
                                    <h3 className="font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                                        {ed.ville}
                                    </h3>
                                    <p className="text-sm text-base-content/60">{ed.pays}</p>
                                    <div className="badge badge-outline mt-2">{ed.annee}</div>
                                    <span className="text-primary text-sm mt-3 group-hover:underline">
                                        Découvrir →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link to="/editions" className="btn btn-primary btn-lg">
                            Toutes les éditions
                        </Link>
                    </div>
                </div>
            </section>

            {/* ====== SITA TV ====== */}
            <section className="py-20 bg-neutral text-neutral-content">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                                Multimédia
                            </span>
                            <h2
                                className="text-4xl font-bold mt-2 mb-4"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                SITA TV — Revivez
                                <br />
                                les temps forts
                            </h2>
                            <p className="text-neutral-content/70 leading-relaxed mb-6 max-w-lg">
                                Retrouvez tous les reportages, défilés, conférences et moments
                                marquants des éditions passées sur notre chaîne YouTube officielle.
                            </p>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-accent gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                Visiter SITA TV
                            </a>
                        </div>

                        {/* Placeholder vidéo */}
                        <div className="flex-1 w-full">
                            <div className="relative rounded-2xl overflow-hidden bg-black/50 aspect-video flex items-center justify-center border border-white/10 shadow-2xl">
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-accent/40 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-neutral-content/70 text-sm">Temps forts SITA Conakry 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== CTA INSCRIPTION ====== */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary/80 text-primary-content">
                <div className="container mx-auto px-4 text-center">
                    <h2
                        className="text-4xl sm:text-5xl font-black mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Participez à la 5ème édition
                    </h2>
                    <p className="text-primary-content/80 text-lg max-w-xl mx-auto mb-8">
                        Réservez votre stand, soumettez votre candidature de styliste ou de
                        mannequin. Les inscriptions ouvrent bientôt.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/exposants" className="btn bg-white text-primary hover:bg-white/90 btn-lg font-bold gap-2">
                            Je m'inscris comme exposant
                        </Link>
                        <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white/10 btn-lg gap-2">
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
