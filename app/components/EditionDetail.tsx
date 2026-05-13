import { Link } from "react-router";

interface Prix {
    categorie: string;
    laureate: string;
    pays: string;
}

interface Conference {
    titre: string;
    resolution: string;
}

interface EditionDetailProps {
    edition: {
        numero: string;
        annee: string;
        ville: string;
        pays: string;
        flag: string;
        dates: string;
        theme: string;
        description: string;
        exposants: number;
        paysRepresentes: number;
        visiteurs: string;
        image: string;
        galerie: string[];
        prix: Prix[];
        conferences: Conference[];
    };
}

export default function EditionDetail({ edition }: EditionDetailProps) {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 bg-neutral text-neutral-content overflow-hidden">
                <div className="pan-african-bar absolute top-0 left-0 right-0" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${edition.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral/80 via-neutral/90 to-neutral" />

                <div className="relative container mx-auto px-4">
                    <Link
                        to="/editions"
                        className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors mb-8 text-sm"
                    >
                        ← Toutes les éditions
                    </Link>
                    <div className="flex items-start gap-4">
                        <span className="text-5xl">{edition.flag}</span>
                        <div>
                            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                                {edition.numero} édition du SITA
                            </span>
                            <h1
                                className="text-5xl lg:text-6xl font-black mt-1"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {edition.ville} {edition.annee}
                            </h1>
                            <p className="text-neutral-content/70 mt-2">{edition.dates} — {edition.pays}</p>
                            <p className="text-secondary italic mt-2 text-lg">"{edition.theme}"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-primary py-10 text-primary-content">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-black" style={{ fontFamily: "var(--font-heading)" }}>
                                {edition.exposants}+
                            </div>
                            <div className="text-sm opacity-80">Exposants</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black" style={{ fontFamily: "var(--font-heading)" }}>
                                {edition.paysRepresentes}
                            </div>
                            <div className="text-sm opacity-80">Pays représentés</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black" style={{ fontFamily: "var(--font-heading)" }}>
                                {edition.visiteurs}
                            </div>
                            <div className="text-sm opacity-80">Visiteurs</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="py-16 bg-base-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <p className="text-lg text-base-content/80 leading-relaxed">{edition.description}</p>
                </div>
            </section>

            {/* Galerie */}
            <section className="py-12 bg-base-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
                        Galerie Photos
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {edition.galerie.map((img, i) => (
                            <div key={i} className="rounded-xl overflow-hidden aspect-square bg-base-300 shadow-sm">
                                <img
                                    src={img}
                                    alt={`${edition.ville} ${edition.annee} - Photo ${i + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Palmarès */}
            <section className="py-16 bg-base-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                            🏆 Palmarès
                        </h2>
                        <p className="text-base-content/60 mt-2">Les lauréats de l'édition {edition.annee}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {edition.prix.map((prix, i) => (
                            <div key={i} className="card bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 card-cultural">
                                <div className="card-body items-center text-center p-5">
                                    <div className="text-3xl mb-2">
                                        {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
                                    </div>
                                    <div className="badge badge-secondary badge-sm mb-2">{prix.categorie}</div>
                                    <h3 className="font-bold text-base-content" style={{ fontFamily: "var(--font-heading)" }}>
                                        {prix.laureate}
                                    </h3>
                                    <p className="text-sm text-base-content/60">{prix.pays}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conférences & Résolutions */}
            <section className="py-16 bg-neutral text-neutral-content">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                            Conférences & Résolutions
                        </h2>
                        <p className="text-neutral-content/60 mt-2">
                            Les grands engagements pris lors de l'édition {edition.annee}
                        </p>
                    </div>
                    <div className="space-y-5">
                        {edition.conferences.map((conf, i) => (
                            <div key={i} className="border border-white/10 rounded-xl p-5 bg-white/5">
                                <h3 className="font-bold text-secondary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                                    {conf.titre}
                                </h3>
                                <p className="text-neutral-content/70 text-sm leading-relaxed">
                                    <span className="text-primary font-semibold">Résolution : </span>
                                    {conf.resolution}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
