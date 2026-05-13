import type { MetaFunction, ActionFunctionArgs } from "react-router";
import { Form, useActionData, useNavigation } from "react-router";
import { MapPin, Phone, Mail } from "~/components/Icons";

export const meta: MetaFunction = () => [
    { title: "Contact & Partenariats | SITA" },
    {
        name: "description",
        content:
            "Contactez le Salon International du Textile Africain pour des informations sur les partenariats, la participation ou toute autre demande.",
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
    const sujet = String(formData.get("sujet") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const errors: Record<string, string> = {};

    if (!nom || nom.length < 2) errors.nom = "Le nom est requis.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Email invalide.";
    if (!sujet) errors.sujet = "Veuillez choisir un sujet.";
    if (!message || message.length < 10) errors.message = "Le message doit contenir au moins 10 caractères.";

    if (Object.keys(errors).length > 0) return { success: false, errors };

    // TODO: intégrer l'envoi vers un service mail sécurisé (ex: Resend, SendGrid)
    return {
        success: true,
        message: `Merci ${nom} ! Votre message a été envoyé. Notre équipe vous répondra sous 48h.`,
    };
}

const sujets = [
    "Demande d'information générale",
    "Partenariat institutionnel",
    "Partenariat médias / presse",
    "Sponsoring & mécénat",
    "Accréditation presse",
    "Inscription exposant",
    "Formation & Académie",
    "Autre",
];

const contacts = [
    {
        icon: "map-pin",
        titre: "Adresse",
        ligne1: "Secrétariat Général du SITA",
        ligne2: "Conakry, République de Guinée",
    },
    {
        icon: "phone",
        titre: "Téléphone",
        ligne1: "+224 620 000 000",
        ligne2: "Lun-Ven, 8h-17h (GMT)",
    },
    {
        icon: "mail",
        titre: "Email",
        ligne1: "contact@sita-afrique.org",
        ligne2: "Réponse sous 48h",
    },
];

const partenaires = [
    { nom: "EBOMAF", categorie: "Partenaire Principal", emoji: "🏗️" },
    { nom: "Union Africaine", categorie: "Institution", emoji: "🌍" },
    { nom: "CEDEAO", categorie: "Institution Régionale", emoji: "🤝" },
    { nom: "OIF", categorie: "Partenaire Culturel", emoji: "🇫🇷" },
    { nom: "BAD", categorie: "Partenaire Financier", emoji: "💰" },
    { nom: "UNESCO", categorie: "Partenaire Culturel", emoji: "🎭" },
];

export default function ContactPage() {
    const actionData = useActionData<ActionResult>();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <>
            {/* Hero */}
            <section className="relative py-24 bg-neutral text-neutral-content overflow-hidden">
                <div className="pan-african-bar absolute top-0 left-0 right-0" />
                <div className="absolute inset-0 kente-pattern opacity-20" />
                <div className="relative container mx-auto px-4 text-center">
                    <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
                        Nous rejoindre
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-black mt-3 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                        Contact & Partenariats
                    </h1>
                    <p className="text-xl text-neutral-content/75 max-w-xl mx-auto">
                        Une question, un projet de partenariat ou une demande de participation ? Notre équipe est à votre écoute.
                    </p>
                </div>
            </section>

            {/* Infos + Formulaire */}
            <section className="py-20 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* Informations de contact */}
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                                Nos Coordonnées
                            </h2>

                            {contacts.map((c) => (
                                <div key={c.titre} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                                        {c.icon}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-base-content">{c.titre}</div>
                                        <div className="text-sm text-base-content/70">{c.ligne1}</div>
                                        <div className="text-xs text-base-content/50">{c.ligne2}</div>
                                    </div>
                                </div>
                            ))}

                            <div className="divider" />

                            <div>
                                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                                    Suivez-nous
                                </h3>
                                <div className="flex gap-3">
                                    {["Facebook", "Twitter/X", "Instagram", "YouTube"].map((s) => (
                                        <button key={s} className="btn btn-ghost btn-sm border border-base-300 hover:border-primary hover:text-primary" aria-label={s}>
                                            {s === "Facebook" ? "f" : s === "Twitter/X" ? "𝕏" : s === "Instagram" ? "📸" : "▶️"}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Formulaire */}
                        <div className="lg:col-span-3">
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
                                        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                                            Envoyer un message
                                        </h2>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="form-control">
                                                <label className="label" htmlFor="nom">
                                                    <span className="label-text font-semibold">
                                                        Nom complet <span className="text-error">*</span>
                                                    </span>
                                                </label>
                                                <input
                                                    id="nom"
                                                    name="nom"
                                                    type="text"
                                                    autoComplete="name"
                                                    className={`input input-bordered w-full ${actionData?.errors?.nom ? "input-error" : ""}`}
                                                    placeholder="Votre nom"
                                                    required
                                                    maxLength={100}
                                                />
                                                {actionData?.errors?.nom && (
                                                    <label className="label">
                                                        <span className="label-text-alt text-error">{actionData.errors.nom}</span>
                                                    </label>
                                                )}
                                            </div>

                                            <div className="form-control">
                                                <label className="label" htmlFor="email">
                                                    <span className="label-text font-semibold">
                                                        Email <span className="text-error">*</span>
                                                    </span>
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className={`input input-bordered w-full ${actionData?.errors?.email ? "input-error" : ""}`}
                                                    placeholder="vous@exemple.com"
                                                    required
                                                />
                                                {actionData?.errors?.email && (
                                                    <label className="label">
                                                        <span className="label-text-alt text-error">{actionData.errors.email}</span>
                                                    </label>
                                                )}
                                            </div>
                                        </div>

                                        <div className="form-control">
                                            <label className="label" htmlFor="sujet">
                                                <span className="label-text font-semibold">
                                                    Sujet <span className="text-error">*</span>
                                                </span>
                                            </label>
                                            <select
                                                id="sujet"
                                                name="sujet"
                                                className={`select select-bordered w-full ${actionData?.errors?.sujet ? "select-error" : ""}`}
                                                required
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Choisir un sujet...</option>
                                                {sujets.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                            {actionData?.errors?.sujet && (
                                                <label className="label">
                                                    <span className="label-text-alt text-error">{actionData.errors.sujet}</span>
                                                </label>
                                            )}
                                        </div>

                                        <div className="form-control">
                                            <label className="label" htmlFor="message">
                                                <span className="label-text font-semibold">
                                                    Message <span className="text-error">*</span>
                                                </span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                className={`textarea textarea-bordered w-full resize-none ${actionData?.errors?.message ? "textarea-error" : ""}`}
                                                placeholder="Décrivez votre demande..."
                                                required
                                                maxLength={2000}
                                            />
                                            {actionData?.errors?.message && (
                                                <label className="label">
                                                    <span className="label-text-alt text-error">{actionData.errors.message}</span>
                                                </label>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn btn-primary w-full btn-lg"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="loading loading-spinner loading-sm" />
                                                    Envoi...
                                                </>
                                            ) : (
                                                "Envoyer le message"
                                            )}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partenaires */}
            <section className="py-16 bg-base-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                            Ils nous font confiance
                        </span>
                        <h2 className="text-3xl font-bold mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                            Nos Partenaires
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                        {partenaires.map((p) => (
                            <div
                                key={p.nom}
                                className="card bg-base-100 shadow-sm border border-base-300 card-cultural"
                            >
                                <div className="card-body items-center text-center p-4">
                                    <div className="text-3xl mb-2">{p.emoji}</div>
                                    <div className="font-bold text-sm">{p.nom}</div>
                                    <div className="text-xs text-base-content/50">{p.categorie}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
