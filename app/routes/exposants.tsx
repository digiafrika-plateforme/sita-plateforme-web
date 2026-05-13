import { useState } from "react";
import type { MetaFunction, ActionFunctionArgs } from "react-router";
import { Form, useActionData, useNavigation } from "react-router";

export const meta: MetaFunction = () => [
    { title: "Espace Exposants — Inscription | SITA" },
    {
        name: "description",
        content:
            "Inscrivez-vous comme exposant, styliste ou mannequin au Salon International du Textile Africain. Découvrez les critères et formulaires d'inscription.",
    },
];

interface ActionResult {
    success: boolean;
    errors?: Record<string, string>;
    message?: string;
}

export async function action({ request }: ActionFunctionArgs): Promise<ActionResult> {
    const formData = await request.formData();

    const nom = String(formData.get("nom") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const telephone = String(formData.get("telephone") ?? "").trim();
    const pays = String(formData.get("pays") ?? "").trim();
    const categorie = String(formData.get("categorie") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();

    const errors: Record<string, string> = {};

    if (!nom || nom.length < 2) errors.nom = "Le nom est requis (minimum 2 caractères).";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Adresse email invalide.";
    if (!telephone || telephone.length < 8) errors.telephone = "Numéro de téléphone requis.";
    if (!pays) errors.pays = "Veuillez sélectionner votre pays.";
    if (!categorie) errors.categorie = "Veuillez choisir une catégorie.";
    if (!description || description.length < 20) errors.description = "Décrivez votre activité (minimum 20 caractères).";

    if (Object.keys(errors).length > 0) {
        return { success: false, errors };
    }

    // TODO: Envoyer les données à un service backend sécurisé
    return {
        success: true,
        message: `Merci ${nom} ! Votre demande d'inscription a été reçue. Notre équipe vous contactera dans les 48h.`,
    };
}

const categories = [
    { value: "stand_artisan", label: "Stand Artisan / Créateur" },
    { value: "stand_industriel", label: "Stand Industriel / Manufacturier" },
    { value: "stand_institution", label: "Stand Institutionnel / Gouvernemental" },
    { value: "styliste", label: "Candidature Styliste (Concours)" },
    { value: "mannequin", label: "Candidature Mannequin (Concours)" },
    { value: "media", label: "Accréditation Presse / Média" },
];

const criteres = [
    {
        titre: "Exposants & Stands",
        items: [
            "Être un acteur du secteur textile africain (artisan, industriel, designer, institution)",
            "Présenter des produits ou services liés au textile, à la mode ou à l'artisanat africain",
            "Remplir le formulaire d'inscription et régler les frais de participation",
            "Respecter la charte éthique et culturelle du SITA",
        ],
    },
    {
        titre: "Candidats Stylistes",
        items: [
            "Être ressortissant d'un pays africain ou de la diaspora africaine",
            "Présenter une collection de minimum 10 pièces originales",
            "Valoriser au minimum 60% de matières premières africaines dans la collection",
            "Soumettre un book de créations avec un dossier artistique",
        ],
    },
    {
        titre: "Candidats Mannequins",
        items: [
            "Être âgé(e) de 18 à 35 ans",
            "Mesurer au minimum 1m72 (femmes) ou 1m80 (hommes)",
            "Posséder une expérience professionnelle ou un portfolio solide",
            "Maîtriser le défilé et répondre aux critères esthétiques du concours",
        ],
    },
];

export default function ExposantsPage() {
    const actionData = useActionData<ActionResult>();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            {/* Hero */}
            <section className="relative py-24 bg-neutral text-neutral-content overflow-hidden">
                <div className="pan-african-bar absolute top-0 left-0 right-0" />
                <div className="absolute inset-0 kente-pattern opacity-20" />
                <div className="relative container mx-auto px-4 text-center">
                    <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                        Rejoignez-nous
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-black mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        Espace Exposants
                    </h1>
                    <p className="text-xl text-neutral-content/75 max-w-xl mx-auto">
                        Réservez votre stand, soumettez votre candidature et faites partie de l'aventure SITA.
                    </p>
                </div>
            </section>

            {/* Critères */}
            <section className="py-16 bg-base-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                            Critères de Participation
                        </h2>
                    </div>

                    <div className="tabs tabs-box justify-center mb-8" role="tablist">
                        {criteres.map((c, i) => (
                            <button
                                key={c.titre}
                                role="tab"
                                className={`tab ${activeTab === i ? "tab-active" : ""}`}
                                onClick={() => setActiveTab(i)}
                            >
                                {c.titre}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="card bg-base-100 shadow-sm border border-base-300">
                            <div className="card-body p-6">
                                <h3 className="font-bold text-xl mb-4 text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                                    {criteres[activeTab].titre}
                                </h3>
                                <ul className="space-y-3">
                                    {criteres[activeTab].items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-base-content/80 text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formulaire d'inscription */}
            <section className="py-16 bg-base-100">
                <div className="container mx-auto px-4 max-w-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                            Formulaire d'Inscription
                        </h2>
                        <p className="text-base-content/60 mt-2">
                            Remplissez ce formulaire pour exprimer votre intérêt. Notre équipe vous contactera pour confirmer votre participation.
                        </p>
                    </div>

                    {actionData?.success ? (
                        <div className="alert alert-success shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{actionData.message}</span>
                        </div>
                    ) : (
                        <Form method="post" noValidate className="card bg-base-100 shadow-md border border-base-200">
                            <div className="card-body p-8 space-y-5">
                                {/* Nom complet */}
                                <div className="form-control">
                                    <label className="label" htmlFor="nom">
                                        <span className="label-text font-semibold">
                                            Nom complet / Organisation <span className="text-error">*</span>
                                        </span>
                                    </label>
                                    <input
                                        id="nom"
                                        name="nom"
                                        type="text"
                                        autoComplete="name"
                                        className={`input input-bordered w-full ${actionData?.errors?.nom ? "input-error" : ""}`}
                                        placeholder="Ex: Maison Kente d'Or"
                                        required
                                        maxLength={100}
                                    />
                                    {actionData?.errors?.nom && (
                                        <label className="label">
                                            <span className="label-text-alt text-error">{actionData.errors.nom}</span>
                                        </label>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="form-control">
                                    <label className="label" htmlFor="email">
                                        <span className="label-text font-semibold">
                                            Adresse email <span className="text-error">*</span>
                                        </span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className={`input input-bordered w-full ${actionData?.errors?.email ? "input-error" : ""}`}
                                        placeholder="contact@exemple.com"
                                        required
                                    />
                                    {actionData?.errors?.email && (
                                        <label className="label">
                                            <span className="label-text-alt text-error">{actionData.errors.email}</span>
                                        </label>
                                    )}
                                </div>

                                {/* Téléphone + Pays */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="form-control">
                                        <label className="label" htmlFor="telephone">
                                            <span className="label-text font-semibold">
                                                Téléphone <span className="text-error">*</span>
                                            </span>
                                        </label>
                                        <input
                                            id="telephone"
                                            name="telephone"
                                            type="tel"
                                            autoComplete="tel"
                                            className={`input input-bordered w-full ${actionData?.errors?.telephone ? "input-error" : ""}`}
                                            placeholder="+224 6XX XXX XXX"
                                            required
                                        />
                                        {actionData?.errors?.telephone && (
                                            <label className="label">
                                                <span className="label-text-alt text-error">{actionData.errors.telephone}</span>
                                            </label>
                                        )}
                                    </div>

                                    <div className="form-control">
                                        <label className="label" htmlFor="pays">
                                            <span className="label-text font-semibold">
                                                Pays <span className="text-error">*</span>
                                            </span>
                                        </label>
                                        <select
                                            id="pays"
                                            name="pays"
                                            className={`select select-bordered w-full ${actionData?.errors?.pays ? "select-error" : ""}`}
                                            required
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Sélectionner...</option>
                                            {[
                                                "Bénin", "Burkina Faso", "Cameroun", "Cap-Vert", "Côte d'Ivoire",
                                                "Djibouti", "Éthiopie", "Ghana", "Guinée", "Guinée-Bissau",
                                                "Guinée Équatoriale", "Kenya", "Madagascar", "Mali", "Maroc",
                                                "Mauritanie", "Mozambique", "Niger", "Nigeria", "RD Congo",
                                                "République du Congo", "Rwanda", "Sénégal", "Sierra Leone",
                                                "Tanzanie", "Togo", "Tunisie", "Ouganda", "Zambie", "Zimbabwe",
                                                "Autre",
                                            ].map((p) => (
                                                <option key={p} value={p}>{p}</option>
                                            ))}
                                        </select>
                                        {actionData?.errors?.pays && (
                                            <label className="label">
                                                <span className="label-text-alt text-error">{actionData.errors.pays}</span>
                                            </label>
                                        )}
                                    </div>
                                </div>

                                {/* Catégorie */}
                                <div className="form-control">
                                    <label className="label" htmlFor="categorie">
                                        <span className="label-text font-semibold">
                                            Type de participation <span className="text-error">*</span>
                                        </span>
                                    </label>
                                    <select
                                        id="categorie"
                                        name="categorie"
                                        className={`select select-bordered w-full ${actionData?.errors?.categorie ? "select-error" : ""}`}
                                        required
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Choisir une catégorie...</option>
                                        {categories.map((c) => (
                                            <option key={c.value} value={c.value}>{c.label}</option>
                                        ))}
                                    </select>
                                    {actionData?.errors?.categorie && (
                                        <label className="label">
                                            <span className="label-text-alt text-error">{actionData.errors.categorie}</span>
                                        </label>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="form-control">
                                    <label className="label" htmlFor="description">
                                        <span className="label-text font-semibold">
                                            Décrivez votre activité / projet <span className="text-error">*</span>
                                        </span>
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={4}
                                        className={`textarea textarea-bordered w-full resize-none ${actionData?.errors?.description ? "textarea-error" : ""}`}
                                        placeholder="Présentez votre activité, vos produits, votre collection..."
                                        required
                                        maxLength={1000}
                                    />
                                    {actionData?.errors?.description && (
                                        <label className="label">
                                            <span className="label-text-alt text-error">{actionData.errors.description}</span>
                                        </label>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full btn-lg mt-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="loading loading-spinner loading-sm" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        "Soumettre ma candidature"
                                    )}
                                </button>

                                <p className="text-xs text-center text-base-content/50">
                                    Vos données sont traitées de manière confidentielle et ne seront pas cédées à des tiers.
                                </p>
                            </div>
                        </Form>
                    )}
                </div>
            </section>
        </>
    );
}
