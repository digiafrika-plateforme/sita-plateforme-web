import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useLocation, NavLink, Link, useActionData, useNavigation, Form } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const stylesheet = "/assets/app-CruH3Uz0.css";
const links = () => [{
  rel: "icon",
  href: "/favicon.svg",
  type: "image/svg+xml"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "fr",
    "data-theme": "sita",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("meta", {
        name: "description",
        content: "Salon International du Textile Africain - La vitrine de la mode et du textile africain"
      }), /* @__PURE__ */ jsx("meta", {
        name: "keywords",
        content: "textile africain, mode africaine, SITA, salon textile, pagne, Faso Dan Fani, mode éthique"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "Une erreur inattendue est survenue.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Erreur";
    details = error.status === 404 ? "La page demandée est introuvable." : error.statusText || details;
  }
  return /* @__PURE__ */ jsx("main", {
    className: "min-h-screen flex items-center justify-center bg-base-100",
    children: /* @__PURE__ */ jsxs("div", {
      className: "text-center p-8",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-6xl font-bold text-primary mb-4",
        children: message
      }), /* @__PURE__ */ jsx("p", {
        className: "text-xl text-base-content/70 mb-8",
        children: details
      }), stack, /* @__PURE__ */ jsx("a", {
        href: "/",
        className: "btn btn-primary mt-4",
        children: "Retour à l'accueil"
      })]
    })
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const navLinks = [
  { to: "/", label: "Accueil", exact: true },
  { to: "/le-sita", label: "Le SITA" },
  { to: "/editions", label: "Éditions" },
  { to: "/exposants", label: "Exposants" },
  { to: "/formations", label: "Formations" },
  { to: "/presse", label: "Presse & Blog" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navClass = isHome ? scrolled ? "navbar fixed top-0 z-50 bg-neutral text-neutral-content shadow-lg transition-all duration-300" : "navbar fixed top-0 z-50 bg-transparent text-white transition-all duration-300" : "navbar sticky top-0 z-50 bg-neutral text-neutral-content shadow-lg";
  return /* @__PURE__ */ jsxs("nav", { className: navClass, "aria-label": "Navigation principale", children: [
    /* @__PURE__ */ jsx("div", { className: "pan-african-bar absolute top-0 left-0 right-0" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 pt-1 w-full flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "navbar-start", children: /* @__PURE__ */ jsxs(NavLink, { to: "/", className: "flex items-center gap-3 group", "aria-label": "SITA - Accueil", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold text-lg border-2 border-secondary group-hover:scale-105 transition-transform", children: "SITA" }),
        /* @__PURE__ */ jsxs("div", { className: "hidden sm:block", children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold text-sm leading-tight", style: { fontFamily: "var(--font-heading)" }, children: "Salon International" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs opacity-80 leading-tight", children: "du Textile Africain" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "navbar-center hidden lg:flex", children: /* @__PURE__ */ jsx("ul", { className: "menu menu-horizontal gap-1 p-0", children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        NavLink,
        {
          to: link.to,
          end: link.exact,
          className: ({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? "bg-primary text-primary-content" : "hover:bg-white/10 hover:text-secondary"}`,
          children: link.label
        }
      ) }, link.to)) }) }),
      /* @__PURE__ */ jsxs("div", { className: "navbar-end gap-2", children: [
        /* @__PURE__ */ jsx(
          NavLink,
          {
            to: "/exposants",
            className: "btn btn-primary btn-sm hidden md:flex",
            children: "S'inscrire"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "dropdown dropdown-end", children: [
          /* @__PURE__ */ jsxs("button", { tabIndex: 0, className: "btn btn-ghost btn-sm gap-1", children: [
            /* @__PURE__ */ jsx("span", { children: "🌍" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs", children: "FR" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { tabIndex: 0, className: "dropdown-content menu bg-base-100 text-base-content rounded-box z-50 w-28 p-2 shadow-lg", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { className: "text-sm font-medium text-primary", children: "Français" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { className: "text-sm", children: "English" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { className: "text-sm", children: "Español" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "dropdown dropdown-end lg:hidden", children: [
          /* @__PURE__ */ jsx("button", { tabIndex: 0, className: "btn btn-ghost btn-square", "aria-label": "Menu mobile", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) }) }),
          /* @__PURE__ */ jsxs("ul", { tabIndex: 0, className: "dropdown-content menu bg-neutral text-neutral-content rounded-box z-50 w-56 p-2 shadow-xl mt-2", children: [
            navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              NavLink,
              {
                to: link.to,
                end: link.exact,
                className: ({ isActive }) => isActive ? "active bg-primary text-primary-content" : "",
                children: link.label
              }
            ) }, link.to)),
            /* @__PURE__ */ jsx("div", { className: "divider my-1" }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/exposants", className: "btn btn-primary btn-sm justify-center", children: "S'inscrire" }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const footerLinks = {
  "Le SITA": [
    { to: "/le-sita", label: "À propos" },
    { to: "/le-sita#vision", label: "Vision & Mission" },
    { to: "/le-sita#historique", label: "Historique" },
    { to: "/le-sita#commissaire", label: "Mot du Commissaire" }
  ],
  "Éditions": [
    { to: "/editions/conakry-2023", label: "Conakry 2023" },
    { to: "/editions/lome-2022", label: "Lomé 2022" },
    { to: "/editions/djibouti-2021", label: "Djibouti 2021" },
    { to: "/editions/malabo-2020", label: "Malabo 2020" }
  ],
  "Participer": [
    { to: "/exposants", label: "Espace Exposants" },
    { to: "/formations", label: "Académie & Formations" },
    { to: "/contact", label: "Partenariats" }
  ],
  "Informations": [
    { to: "/presse", label: "Presse & Blog" },
    { to: "/contact", label: "Contact" }
  ]
};
const partners = ["EBOMAF", "Union Africaine", "CEDEAO", "OIF", "UNESCO"];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-neutral text-neutral-content", children: [
    /* @__PURE__ */ jsx("div", { className: "pan-african-bar" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold text-xl border-2 border-secondary", children: "SITA" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-content/70 leading-relaxed mb-4", children: "Le Salon International du Textile Africain — vitrine de la créativité, de l'industrie et du patrimoine textile du continent africain." }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("a", { href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer", className: "btn btn-ghost btn-sm btn-circle hover:bg-primary/20", "aria-label": "Facebook", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) }) }),
            /* @__PURE__ */ jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", className: "btn btn-ghost btn-sm btn-circle hover:bg-primary/20", "aria-label": "Twitter / X", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }) }),
            /* @__PURE__ */ jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", className: "btn btn-ghost btn-sm btn-circle hover:bg-primary/20", "aria-label": "Instagram", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }) }) }),
            /* @__PURE__ */ jsx("a", { href: "https://youtube.com", target: "_blank", rel: "noopener noreferrer", className: "btn btn-ghost btn-sm btn-circle hover:bg-accent/20", "aria-label": "YouTube - SITA TV", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) }) })
          ] })
        ] }),
        Object.entries(footerLinks).map(([section, links2]) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-secondary mb-4 uppercase tracking-wider text-sm", children: section }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: links2.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            NavLink,
            {
              to: link.to,
              className: "text-sm text-neutral-content/70 hover:text-secondary transition-colors",
              children: link.label
            }
          ) }, link.to)) })
        ] }, section))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 mt-12 pt-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-neutral-content/50 mb-4 uppercase tracking-widest", children: "Partenaires & Institutions" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-6", children: partners.map((partner) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "px-4 py-2 border border-white/20 rounded-lg text-sm text-neutral-content/60 hover:border-secondary hover:text-secondary transition-colors cursor-pointer",
            children: partner
          },
          partner
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-black/30 py-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-content/50", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2026 SITA — Salon International du Textile Africain. Tous droits réservés." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-secondary transition-colors", children: "Mentions légales" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-secondary transition-colors", children: "Politique de confidentialité" })
      ] })
    ] }) })
  ] });
}
const _layout = UNSAFE_withComponentProps(function Layout2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx("main", {
      className: "flex-1",
      children: /* @__PURE__ */ jsx(Outlet, {})
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _layout
}, Symbol.toStringTag, { value: "Module" }));
function calculateTimeLeft(targetDate) {
  const difference = targetDate.getTime() - Date.now();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
    hours: Math.floor(difference / (1e3 * 60 * 60) % 24),
    minutes: Math.floor(difference / 1e3 / 60 % 60),
    seconds: Math.floor(difference / 1e3 % 60)
  };
}
function CountdownTimer({ targetDate, eventName }) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1e3);
    return () => clearInterval(timer);
  }, [targetDate]);
  const units = [
    { label: "Jours", value: timeLeft.days },
    { label: "Heures", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Secondes", value: timeLeft.seconds }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    eventName && /* @__PURE__ */ jsx("p", { className: "text-secondary font-medium uppercase tracking-widest text-sm mb-4", children: eventName }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 sm:gap-4", children: units.map(({ label, value }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-neutral text-neutral-content rounded-xl w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold border border-primary/30 shadow-lg", children: String(value).padStart(2, "0") }),
      /* @__PURE__ */ jsx("span", { className: "text-xs mt-2 text-neutral-content/70 uppercase tracking-wider", children: label })
    ] }, label)) })
  ] });
}
const meta$a = () => [{
  title: "SITA — Salon International du Textile Africain"
}, {
  name: "description",
  content: "Bienvenue sur le portail officiel du Salon International du Textile Africain. Découvrez les éditions passées, les exposants, les formations et bien plus."
}];
const nextEditionDate = /* @__PURE__ */ new Date("2026-11-15T09:00:00");
const actualites = [{
  id: 1,
  date: "12 Mai 2026",
  category: "Annonce",
  title: "La 5ème édition du SITA bientôt annoncée",
  excerpt: "Le Commissaire Général du SITA dévoilera prochainement la ville hôte de la 5ème édition ainsi que les thématiques retenues pour cette nouvelle rencontre continentale.",
  image: "https://images.unsplash.com/photo-1589156188157-6a8a688e1388?w=600&q=80",
  tag: "Prochaine édition",
  tagColor: "badge-primary"
}, {
  id: 2,
  date: "28 Avril 2026",
  category: "Textile",
  title: "Le coton africain s'impose sur la scène internationale",
  excerpt: "Les producteurs de coton d'Afrique de l'Ouest enregistrent une hausse significative de la demande internationale, boostée par la montée en puissance de la mode éthique.",
  image: "https://images.unsplash.com/photo-1566150905458-1bf049841f92?w=600&q=80",
  tag: "Industrie",
  tagColor: "badge-secondary"
}, {
  id: 3,
  date: "10 Avril 2026",
  category: "Formation",
  title: "Lancement du programme E-commerce Textile Africain",
  excerpt: "L'Académie SITA ouvre les inscriptions pour sa nouvelle promotion de formation au commerce électronique dédiée aux artisans et stylistes africains.",
  image: "https://images.unsplash.com/photo-1604514628550-37a73ea686e2?w=600&q=80",
  tag: "Académie",
  tagColor: "badge-accent"
}];
const editions$1 = [{
  ville: "Conakry",
  pays: "Guinée",
  annee: "2023",
  to: "/editions/conakry-2023",
  flag: "🇬🇳",
  color: "bg-primary"
}, {
  ville: "Lomé",
  pays: "Togo",
  annee: "2022",
  to: "/editions/lome-2022",
  flag: "🇹🇬",
  color: "bg-secondary"
}, {
  ville: "Djibouti",
  pays: "Djibouti",
  annee: "2021",
  to: "/editions/djibouti-2021",
  flag: "🇩🇯",
  color: "bg-accent"
}, {
  ville: "Malabo",
  pays: "Guinée Équatoriale",
  annee: "2020",
  to: "/editions/malabo-2020",
  flag: "🇬🇶",
  color: "bg-neutral"
}];
const chiffres = [{
  value: "4",
  label: "Éditions",
  sublabel: "depuis 2020"
}, {
  value: "20+",
  label: "Pays",
  sublabel: "représentés"
}, {
  value: "500+",
  label: "Exposants",
  sublabel: "par édition"
}, {
  value: "10k+",
  label: "Visiteurs",
  sublabel: "par an"
}];
const home = UNSAFE_withComponentProps(function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("section", {
      className: "relative min-h-screen flex items-center justify-center overflow-hidden kente-pattern",
      "aria-label": "Présentation principale",
      children: [/* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 hero-gradient"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute top-20 right-10 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative z-10 container mx-auto px-4 text-center text-white",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8",
          children: [/* @__PURE__ */ jsx("span", {
            className: "w-2 h-2 rounded-full bg-secondary animate-pulse"
          }), /* @__PURE__ */ jsx("span", {
            className: "text-sm font-medium tracking-wide",
            children: "5ème Édition — Bientôt"
          })]
        }), /* @__PURE__ */ jsxs("h1", {
          className: "text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight",
          style: {
            fontFamily: "var(--font-heading)"
          },
          children: ["Salon International", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("span", {
            className: "text-secondary",
            children: "du Textile"
          }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("span", {
            className: "text-primary-content",
            children: "Africain"
          })]
        }), /* @__PURE__ */ jsx("p", {
          className: "text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed",
          children: "La vitrine continentale de la créativité, de l'industrie et du patrimoine textile africain. Mode, innovation et culture au rendez-vous."
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center mb-16",
          children: [/* @__PURE__ */ jsxs(Link, {
            to: "/editions",
            className: "btn btn-secondary btn-lg gap-2 shadow-lg hover:shadow-secondary/30",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              })
            }), "Voir les éditions"]
          }), /* @__PURE__ */ jsxs(Link, {
            to: "/exposants",
            className: "btn btn-outline btn-lg text-white border-white/40 hover:bg-white hover:text-neutral gap-2",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              })
            }), "S'inscrire comme exposant"]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 inline-block",
          children: /* @__PURE__ */ jsx(CountdownTimer, {
            targetDate: nextEditionDate,
            eventName: "Prochaine édition dans"
          })
        })]
      }), /* @__PURE__ */ jsx("a", {
        href: "#actualites",
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce",
        "aria-label": "Scroll vers le bas",
        children: /* @__PURE__ */ jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-8 w-8",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 9l-7 7-7-7"
          })
        })
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "bg-primary py-12",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-6 text-primary-content text-center",
          children: chiffres.map((c) => /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-4xl font-black",
              style: {
                fontFamily: "var(--font-heading)"
              },
              children: c.value
            }), /* @__PURE__ */ jsx("div", {
              className: "font-semibold text-lg",
              children: c.label
            }), /* @__PURE__ */ jsx("div", {
              className: "text-primary-content/70 text-sm",
              children: c.sublabel
            })]
          }, c.label))
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      id: "actualites",
      className: "py-20 bg-base-100",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-14",
          children: [/* @__PURE__ */ jsx("span", {
            className: "text-primary font-semibold uppercase tracking-widest text-sm",
            children: "Dernières nouvelles"
          }), /* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-base-content mt-2",
            style: {
              fontFamily: "var(--font-heading)"
            },
            children: "Actualités & Informations"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex justify-center gap-1 mt-4",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-accent"
            }), /* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-secondary"
            }), /* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-primary"
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: actualites.map((actu) => /* @__PURE__ */ jsxs("article", {
            className: "card bg-base-100 shadow-md card-cultural border border-base-200 overflow-hidden",
            children: [/* @__PURE__ */ jsxs("figure", {
              className: "relative h-48 overflow-hidden",
              children: [/* @__PURE__ */ jsx("img", {
                src: actu.image,
                alt: actu.title,
                className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500",
                loading: "lazy"
              }), /* @__PURE__ */ jsx("div", {
                className: `badge ${actu.tagColor} absolute top-3 left-3 font-medium`,
                children: actu.tag
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "card-body p-5",
              children: [/* @__PURE__ */ jsxs("p", {
                className: "text-xs text-base-content/50 uppercase tracking-wider mb-1",
                children: [actu.date, " · ", actu.category]
              }), /* @__PURE__ */ jsx("h3", {
                className: "card-title text-lg leading-tight mb-2",
                style: {
                  fontFamily: "var(--font-heading)"
                },
                children: actu.title
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm text-base-content/70 leading-relaxed",
                children: actu.excerpt
              }), /* @__PURE__ */ jsx("div", {
                className: "card-actions mt-4",
                children: /* @__PURE__ */ jsx(Link, {
                  to: "/presse",
                  className: "btn btn-ghost btn-sm text-primary p-0 hover:bg-transparent hover:underline",
                  children: "Lire la suite →"
                })
              })]
            })]
          }, actu.id))
        }), /* @__PURE__ */ jsx("div", {
          className: "text-center mt-10",
          children: /* @__PURE__ */ jsx(Link, {
            to: "/presse",
            className: "btn btn-outline btn-primary btn-lg",
            children: "Voir toutes les actualités"
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20 bg-base-200 kente-pattern",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-14",
          children: [/* @__PURE__ */ jsx("span", {
            className: "text-accent font-semibold uppercase tracking-widest text-sm",
            children: "Depuis 2020"
          }), /* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-base-content mt-2",
            style: {
              fontFamily: "var(--font-heading)"
            },
            children: "Nos Éditions Passées"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex justify-center gap-1 mt-4",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-accent"
            }), /* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-secondary"
            }), /* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-primary"
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-5",
          children: editions$1.map((ed) => /* @__PURE__ */ jsxs(Link, {
            to: ed.to,
            className: "group card card-cultural bg-base-100 shadow-md border border-base-300 overflow-hidden",
            children: [/* @__PURE__ */ jsx("div", {
              className: `${ed.color} h-2 w-full`
            }), /* @__PURE__ */ jsxs("div", {
              className: "card-body items-center text-center p-6",
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-4xl mb-3",
                children: ed.flag
              }), /* @__PURE__ */ jsx("h3", {
                className: "font-bold text-xl",
                style: {
                  fontFamily: "var(--font-heading)"
                },
                children: ed.ville
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm text-base-content/60",
                children: ed.pays
              }), /* @__PURE__ */ jsx("div", {
                className: "badge badge-outline mt-2",
                children: ed.annee
              }), /* @__PURE__ */ jsx("span", {
                className: "text-primary text-sm mt-3 group-hover:underline",
                children: "Découvrir →"
              })]
            })]
          }, ed.to))
        }), /* @__PURE__ */ jsx("div", {
          className: "text-center mt-10",
          children: /* @__PURE__ */ jsx(Link, {
            to: "/editions",
            className: "btn btn-primary btn-lg",
            children: "Toutes les éditions"
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20 bg-neutral text-neutral-content",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col lg:flex-row items-center gap-12",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex-1 text-center lg:text-left",
            children: [/* @__PURE__ */ jsx("span", {
              className: "text-secondary font-semibold uppercase tracking-widest text-sm",
              children: "Multimédia"
            }), /* @__PURE__ */ jsxs("h2", {
              className: "text-4xl font-bold mt-2 mb-4",
              style: {
                fontFamily: "var(--font-heading)"
              },
              children: ["SITA TV — Revivez", /* @__PURE__ */ jsx("br", {}), "les temps forts"]
            }), /* @__PURE__ */ jsx("p", {
              className: "text-neutral-content/70 leading-relaxed mb-6 max-w-lg",
              children: "Retrouvez tous les reportages, défilés, conférences et moments marquants des éditions passées sur notre chaîne YouTube officielle."
            }), /* @__PURE__ */ jsxs("a", {
              href: "https://youtube.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn btn-accent gap-2",
              children: [/* @__PURE__ */ jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx("path", {
                  d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                })
              }), "Visiter SITA TV"]
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "flex-1 w-full",
            children: /* @__PURE__ */ jsx("div", {
              className: "relative rounded-2xl overflow-hidden bg-black/50 aspect-video flex items-center justify-center border border-white/10 shadow-2xl",
              children: /* @__PURE__ */ jsxs("div", {
                className: "text-center",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-accent/40 transition-colors",
                  children: /* @__PURE__ */ jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-8 w-8 text-accent ml-1",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx("path", {
                      d: "M8 5v14l11-7z"
                    })
                  })
                }), /* @__PURE__ */ jsx("p", {
                  className: "text-neutral-content/70 text-sm",
                  children: "Temps forts SITA Conakry 2023"
                })]
              })
            })
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary/80 text-primary-content",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl sm:text-5xl font-black mb-4",
          style: {
            fontFamily: "var(--font-heading)"
          },
          children: "Participez à la 5ème édition"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-primary-content/80 text-lg max-w-xl mx-auto mb-8",
          children: "Réservez votre stand, soumettez votre candidature de styliste ou de mannequin. Les inscriptions ouvrent bientôt."
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [/* @__PURE__ */ jsx(Link, {
            to: "/exposants",
            className: "btn bg-white text-primary hover:bg-white/90 btn-lg font-bold gap-2",
            children: "Je m'inscris comme exposant"
          }), /* @__PURE__ */ jsx(Link, {
            to: "/contact",
            className: "btn btn-outline border-white text-white hover:bg-white/10 btn-lg gap-2",
            children: "Nous contacter"
          })]
        })]
      })
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$a
}, Symbol.toStringTag, { value: "Module" }));
const meta$9 = () => [{
  title: "Le SITA — Vision, Mission & Histoire | SITA"
}, {
  name: "description",
  content: "Découvrez la vision, la mission et l'histoire du Salon International du Textile Africain — un projet panafricain d'industrialisation et de valorisation du textile."
}];
const valeurs = [{
  icon: "🌍",
  titre: "Panafricanisme",
  description: "Réunir les acteurs du textile de tous les horizons africains pour créer des synergies continentales durables."
}, {
  icon: "⚙️",
  titre: "Industrialisation",
  description: "Promouvoir la transformation locale des matières premières pour créer de la valeur ajoutée sur le continent."
}, {
  icon: "💡",
  titre: "Innovation",
  description: "Encourager la digitalisation, les nouvelles techniques de teinture et l'intégration du e-commerce dans le secteur."
}, {
  icon: "🎓",
  titre: "Formation",
  description: "Développer les compétences des artisans, stylistes et industriels à travers l'Académie SITA."
}];
const historique = [{
  annee: "2019",
  titre: "Genèse du SITA",
  description: "L'idée d'un salon panafricain dédié au textile émerge lors d'un sommet de coopération économique. Un groupe d'industriels et de stylistes africains décide de porter ce projet.",
  icon: "💡"
}, {
  annee: "2020",
  titre: "1ère Édition — Malabo",
  description: "La Guinée Équatoriale accueille la première édition du SITA. Malgré la pandémie mondiale, le salon réunit plus de 200 exposants de 12 pays africains.",
  icon: "🇬🇶",
  to: "/editions/malabo-2020"
}, {
  annee: "2021",
  titre: "2ème Édition — Djibouti",
  description: "Djibouti, carrefour stratégique entre l'Afrique et l'Asie, accueille la 2ème édition avec un focus sur le coton bio et les tissus de la Corne de l'Afrique.",
  icon: "🇩🇯",
  to: "/editions/djibouti-2021"
}, {
  annee: "2022",
  titre: "3ème Édition — Lomé",
  description: "Le Togo, hub économique de la CEDEAO, ouvre ses portes pour la 3ème édition. Le thème central : « Tisser l'Afrique de demain ».",
  icon: "🇹🇬",
  to: "/editions/lome-2022"
}, {
  annee: "2023",
  titre: "4ème Édition — Conakry",
  description: "La Guinée accueille une édition record avec plus de 500 exposants, des conférences sur la digitalisation et le lancement de l'Académie SITA.",
  icon: "🇬🇳",
  to: "/editions/conakry-2023"
}, {
  annee: "2026",
  titre: "5ème Édition — À venir",
  description: "La 5ème édition sera annoncée prochainement. Inscrivez-vous à notre newsletter pour être les premiers informés.",
  icon: "🌟"
}];
const leSita = UNSAFE_withComponentProps(function LeSitaPage() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("section", {
      className: "relative py-24 bg-neutral text-neutral-content overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "pan-african-bar absolute top-0 left-0 right-0"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 kente-pattern opacity-30"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("span", {
          className: "text-secondary font-semibold uppercase tracking-widest text-sm",
          children: "Notre identité"
        }), /* @__PURE__ */ jsx("h1", {
          className: "text-5xl lg:text-6xl font-black mt-3 mb-6",
          style: {
            fontFamily: "var(--font-heading)"
          },
          children: "Le SITA"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-neutral-content/75 max-w-2xl mx-auto leading-relaxed",
          children: "Plus qu'un salon, le SITA est un mouvement continental pour la valorisation, l'industrialisation et la promotion du textile africain dans toute sa richesse."
        })]
      })]
    }), /* @__PURE__ */ jsx("section", {
      id: "vision",
      className: "py-20 bg-base-100",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("span", {
              className: "text-primary font-semibold uppercase tracking-widest text-sm",
              children: "Notre boussole"
            }), /* @__PURE__ */ jsx("h2", {
              className: "text-4xl font-bold text-base-content mt-2 mb-6",
              style: {
                fontFamily: "var(--font-heading)"
              },
              children: "Vision & Mission"
            }), /* @__PURE__ */ jsxs("div", {
              className: "space-y-6",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex gap-4",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl",
                  children: "🔭"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: "font-bold text-lg mb-1",
                    style: {
                      fontFamily: "var(--font-heading)"
                    },
                    children: "Notre Vision"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-base-content/70 leading-relaxed",
                    children: "Faire du textile africain une industrie compétitive, durable et reconnue mondialement, en valorisant les savoir-faire artisanaux et en intégrant les technologies modernes de production."
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex gap-4",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xl",
                  children: "🎯"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: "font-bold text-lg mb-1",
                    style: {
                      fontFamily: "var(--font-heading)"
                    },
                    children: "Notre Mission"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-base-content/70 leading-relaxed",
                    children: "Créer une plateforme continentale pour connecter artisans, industriels, investisseurs et institutions autour d'un secteur textile africain structuré, digitalisé et industrialisé."
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex gap-4",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl",
                  children: "🌱"
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: "font-bold text-lg mb-1",
                    style: {
                      fontFamily: "var(--font-heading)"
                    },
                    children: "Notre Engagement"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-base-content/70 leading-relaxed",
                    children: "Promouvoir une mode éthique et durable, respectueuse des traditions africaines, avec des labels de qualité et des circuits courts de production favorisant les économies locales."
                  })]
                })]
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "relative",
            children: [/* @__PURE__ */ jsx("div", {
              className: "rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-base-200 flex items-center justify-center",
              children: /* @__PURE__ */ jsx("img", {
                src: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
                alt: "Tissu africain traditionnel",
                className: "w-full h-full object-cover",
                loading: "lazy"
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "absolute -bottom-6 -left-6 bg-primary text-primary-content rounded-2xl p-4 shadow-xl",
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-3xl font-black",
                style: {
                  fontFamily: "var(--font-heading)"
                },
                children: "5+"
              }), /* @__PURE__ */ jsx("div", {
                className: "text-sm font-medium opacity-90",
                children: "ans d'existence"
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20 bg-base-200",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-14",
          children: [/* @__PURE__ */ jsx("span", {
            className: "text-secondary font-semibold uppercase tracking-widest text-sm",
            children: "Ce qui nous guide"
          }), /* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-base-content mt-2",
            style: {
              fontFamily: "var(--font-heading)"
            },
            children: "Nos Valeurs Fondamentales"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex justify-center gap-1 mt-4",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-accent"
            }), /* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-secondary"
            }), /* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-primary"
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
          children: valeurs.map((v) => /* @__PURE__ */ jsx("div", {
            className: "card bg-base-100 shadow-sm border border-base-300 card-cultural",
            children: /* @__PURE__ */ jsxs("div", {
              className: "card-body items-center text-center p-6",
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-4xl mb-3",
                children: v.icon
              }), /* @__PURE__ */ jsx("h3", {
                className: "card-title text-lg",
                style: {
                  fontFamily: "var(--font-heading)"
                },
                children: v.titre
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm text-base-content/70 leading-relaxed",
                children: v.description
              })]
            })
          }, v.titre))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      id: "commissaire",
      className: "py-20 bg-primary text-primary-content",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "text-center mb-12",
            children: [/* @__PURE__ */ jsx("span", {
              className: "text-secondary font-semibold uppercase tracking-widest text-sm",
              children: "Message officiel"
            }), /* @__PURE__ */ jsx("h2", {
              className: "text-4xl font-bold mt-2",
              style: {
                fontFamily: "var(--font-heading)"
              },
              children: "Mot du Commissaire Général"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col lg:flex-row gap-10 items-center",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex-shrink-0",
              children: /* @__PURE__ */ jsx("div", {
                className: "w-40 h-40 rounded-full bg-primary-content/20 border-4 border-secondary flex items-center justify-center text-6xl shadow-xl",
                children: "👔"
              })
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("blockquote", {
                className: "text-xl leading-relaxed italic text-primary-content/90 mb-6",
                children: `"Le SITA est né d'une conviction profonde : l'Afrique possède tous les atouts pour devenir une puissance textile mondiale. Nos tissus, nos teintures, nos motifs racontent des millénaires d'histoire et de savoir-faire. Notre devoir est de transformer cet héritage en opportunités économiques concrètes pour nos artisans, nos jeunes et nos communautés."`
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "font-bold text-lg text-secondary",
                  children: "Commissaire Général du SITA"
                }), /* @__PURE__ */ jsx("div", {
                  className: "text-primary-content/70 text-sm",
                  children: "Salon International du Textile Africain"
                })]
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      id: "historique",
      className: "py-20 bg-base-100",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-14",
          children: [/* @__PURE__ */ jsx("span", {
            className: "text-accent font-semibold uppercase tracking-widest text-sm",
            children: "Notre parcours"
          }), /* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-base-content mt-2",
            style: {
              fontFamily: "var(--font-heading)"
            },
            children: "Historique du SITA"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex justify-center gap-1 mt-4",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-accent"
            }), /* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-secondary"
            }), /* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-primary"
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "max-w-3xl mx-auto",
          children: /* @__PURE__ */ jsx("ul", {
            className: "timeline timeline-vertical timeline-snap-icon max-md:timeline-compact",
            children: historique.map((item, i) => /* @__PURE__ */ jsxs("li", {
              children: [i !== 0 && /* @__PURE__ */ jsx("hr", {
                className: "bg-primary/30"
              }), /* @__PURE__ */ jsx("div", {
                className: `timeline-${i % 2 === 0 ? "start" : "end"} md:text-${i % 2 === 0 ? "end" : "start"} mb-10`,
                children: /* @__PURE__ */ jsx("time", {
                  className: "font-bold text-primary text-xl",
                  children: item.annee
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "timeline-middle",
                children: /* @__PURE__ */ jsx("div", {
                  className: "w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center text-lg border-4 border-base-100 shadow",
                  children: item.icon
                })
              }), /* @__PURE__ */ jsx("div", {
                className: `timeline-${i % 2 === 0 ? "end" : "start"} mb-10`,
                children: /* @__PURE__ */ jsxs("div", {
                  className: "card bg-base-100 border border-base-200 shadow-sm p-5",
                  children: [/* @__PURE__ */ jsx("h3", {
                    className: "font-bold text-lg mb-2",
                    style: {
                      fontFamily: "var(--font-heading)"
                    },
                    children: item.titre
                  }), /* @__PURE__ */ jsx("p", {
                    className: "text-sm text-base-content/70 leading-relaxed",
                    children: item.description
                  }), item.to && /* @__PURE__ */ jsx(Link, {
                    to: item.to,
                    className: "btn btn-ghost btn-xs text-primary mt-3 p-0 hover:bg-transparent hover:underline",
                    children: "Voir l'édition →"
                  })]
                })
              }), i !== historique.length - 1 && /* @__PURE__ */ jsx("hr", {
                className: "bg-primary/30"
              })]
            }, item.annee))
          })
        })]
      })
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: leSita,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
const meta$8 = () => [{
  title: "Éditions — Archives | SITA"
}, {
  name: "description",
  content: "Retrouvez toutes les éditions passées du Salon International du Textile Africain : galeries photos, vidéos, palmarès et résolutions."
}];
const editions = [{
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
  edition: "4ème"
}, {
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
  edition: "3ème"
}, {
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
  edition: "2ème"
}, {
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
  edition: "1ère"
}];
const index = UNSAFE_withComponentProps(function EditionsPage() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("section", {
      className: "relative py-24 bg-neutral text-neutral-content overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "pan-african-bar absolute top-0 left-0 right-0"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 kente-pattern opacity-20"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute bottom-0 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("span", {
          className: "text-secondary font-semibold uppercase tracking-widest text-sm",
          children: "Depuis 2020"
        }), /* @__PURE__ */ jsx("h1", {
          className: "text-5xl lg:text-6xl font-black mt-3 mb-4",
          style: {
            fontFamily: "var(--font-heading)"
          },
          children: "Nos Éditions"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-neutral-content/75 max-w-xl mx-auto",
          children: "Quatre éditions, quatre villes, un seul objectif : promouvoir le textile africain sur la scène continentale et internationale."
        })]
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20 bg-base-100",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: editions.map((ed) => /* @__PURE__ */ jsxs(Link, {
            to: ed.to,
            className: `group card bg-base-100 shadow-md border-l-4 ${ed.color} card-cultural overflow-hidden`,
            children: [/* @__PURE__ */ jsxs("figure", {
              className: "relative h-56 overflow-hidden",
              children: [/* @__PURE__ */ jsx("img", {
                src: ed.image,
                alt: `Édition ${ed.ville} ${ed.annee}`,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                loading: "lazy"
              }), /* @__PURE__ */ jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              }), /* @__PURE__ */ jsxs("div", {
                className: "absolute bottom-4 left-4 flex items-center gap-2",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "text-3xl",
                  children: ed.flag
                }), /* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "text-white font-bold text-xl",
                    style: {
                      fontFamily: "var(--font-heading)"
                    },
                    children: [ed.ville, ", ", ed.pays]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "text-white/70 text-sm",
                    children: [ed.edition, " édition — ", ed.annee]
                  })]
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: `badge ${ed.badge} absolute top-3 right-3`,
                children: ed.annee
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "card-body p-6",
              children: [/* @__PURE__ */ jsxs("p", {
                className: "text-primary font-medium italic mb-3",
                children: ['"', ed.theme, '"']
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex gap-6",
                children: [/* @__PURE__ */ jsxs("div", {
                  className: "text-center",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "text-2xl font-bold text-base-content",
                    style: {
                      fontFamily: "var(--font-heading)"
                    },
                    children: [ed.exposants, "+"]
                  }), /* @__PURE__ */ jsx("div", {
                    className: "text-xs text-base-content/60",
                    children: "Exposants"
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "divider divider-horizontal"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "text-center",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "text-2xl font-bold text-base-content",
                    style: {
                      fontFamily: "var(--font-heading)"
                    },
                    children: ed.pays_representes
                  }), /* @__PURE__ */ jsx("div", {
                    className: "text-xs text-base-content/60",
                    children: "Pays représentés"
                  })]
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: "card-actions mt-4",
                children: /* @__PURE__ */ jsx("span", {
                  className: "btn btn-ghost btn-sm text-primary p-0 group-hover:underline",
                  children: "Voir la galerie & les résolutions →"
                })
              })]
            })]
          }, ed.to))
        })
      })
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
function EditionDetail({ edition: edition2 }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 bg-neutral text-neutral-content overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "pan-african-bar absolute top-0 left-0 right-0" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center opacity-20",
          style: { backgroundImage: `url(${edition2.image})` }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-neutral/80 via-neutral/90 to-neutral" }),
      /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto px-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/editions",
            className: "inline-flex items-center gap-2 text-secondary hover:text-white transition-colors mb-8 text-sm",
            children: "← Toutes les éditions"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-5xl", children: edition2.flag }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("span", { className: "text-secondary font-semibold uppercase tracking-widest text-sm", children: [
              edition2.numero,
              " édition du SITA"
            ] }),
            /* @__PURE__ */ jsxs(
              "h1",
              {
                className: "text-5xl lg:text-6xl font-black mt-1",
                style: { fontFamily: "var(--font-heading)" },
                children: [
                  edition2.ville,
                  " ",
                  edition2.annee
                ]
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "text-neutral-content/70 mt-2", children: [
              edition2.dates,
              " — ",
              edition2.pays
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-secondary italic mt-2 text-lg", children: [
              '"',
              edition2.theme,
              '"'
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-10 text-primary-content", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black", style: { fontFamily: "var(--font-heading)" }, children: [
          edition2.exposants,
          "+"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm opacity-80", children: "Exposants" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-black", style: { fontFamily: "var(--font-heading)" }, children: edition2.paysRepresentes }),
        /* @__PURE__ */ jsx("div", { className: "text-sm opacity-80", children: "Pays représentés" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-black", style: { fontFamily: "var(--font-heading)" }, children: edition2.visiteurs }),
        /* @__PURE__ */ jsx("div", { className: "text-sm opacity-80", children: "Visiteurs" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-base-100", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-4xl", children: /* @__PURE__ */ jsx("p", { className: "text-lg text-base-content/80 leading-relaxed", children: edition2.description }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-base-200", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-center", style: { fontFamily: "var(--font-heading)" }, children: "Galerie Photos" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: edition2.galerie.map((img, i) => /* @__PURE__ */ jsx("div", { className: "rounded-xl overflow-hidden aspect-square bg-base-300 shadow-sm", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: img,
          alt: `${edition2.ville} ${edition2.annee} - Photo ${i + 1}`,
          className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
          loading: "lazy"
        }
      ) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-base-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", style: { fontFamily: "var(--font-heading)" }, children: "🏆 Palmarès" }),
        /* @__PURE__ */ jsxs("p", { className: "text-base-content/60 mt-2", children: [
          "Les lauréats de l'édition ",
          edition2.annee
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: edition2.prix.map((prix, i) => /* @__PURE__ */ jsx("div", { className: "card bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 card-cultural", children: /* @__PURE__ */ jsxs("div", { className: "card-body items-center text-center p-5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl mb-2", children: i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉" }),
        /* @__PURE__ */ jsx("div", { className: "badge badge-secondary badge-sm mb-2", children: prix.categorie }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-base-content", style: { fontFamily: "var(--font-heading)" }, children: prix.laureate }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-base-content/60", children: prix.pays })
      ] }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-neutral text-neutral-content", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", style: { fontFamily: "var(--font-heading)" }, children: "Conférences & Résolutions" }),
        /* @__PURE__ */ jsxs("p", { className: "text-neutral-content/60 mt-2", children: [
          "Les grands engagements pris lors de l'édition ",
          edition2.annee
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-5", children: edition2.conferences.map((conf, i) => /* @__PURE__ */ jsxs("div", { className: "border border-white/10 rounded-xl p-5 bg-white/5", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-secondary mb-2", style: { fontFamily: "var(--font-heading)" }, children: conf.titre }),
        /* @__PURE__ */ jsxs("p", { className: "text-neutral-content/70 text-sm leading-relaxed", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold", children: "Résolution : " }),
          conf.resolution
        ] })
      ] }, i)) })
    ] }) })
  ] });
}
const meta$7 = () => [{
  title: "SITA Malabo 2020 — 1ère Édition | SITA"
}, {
  name: "description",
  content: "Revivez la 1ère édition fondatrice du SITA à Malabo, Guinée Équatoriale — 2020."
}];
const edition$3 = {
  numero: "1ère",
  annee: "2020",
  ville: "Malabo",
  pays: "Guinée Équatoriale",
  flag: "🇬🇶",
  dates: "5 – 10 Novembre 2020",
  theme: "Renaissance du Textile Africain",
  description: "La première édition du SITA a été organisée à Malabo, capitale de la Guinée Équatoriale, dans un contexte mondial difficile marqué par la pandémie de COVID-19. Malgré les contraintes sanitaires, 200 exposants de 12 pays africains ont répondu présent pour cette édition fondatrice. L'événement a posé les bases du mouvement SITA : valoriser le patrimoine textile africain, créer des liens entre artisans et industriels, et porter la voix de la mode africaine sur la scène internationale. Ce premier rendez-vous a établi les prix SITA devenus depuis une référence continentale.",
  exposants: 200,
  paysRepresentes: 12,
  visiteurs: "4 500",
  image: "https://images.unsplash.com/photo-1590414174649-cad31a917b1d?w=1200&q=80",
  galerie: ["https://images.unsplash.com/photo-1590414174649-cad31a917b1d?w=600&q=80", "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=600&q=80", "https://images.unsplash.com/photo-1549887534-f3a748b0cd5c?w=600&q=80", "https://images.unsplash.com/photo-1589156188157-6a8a688e1388?w=600&q=80", "https://images.unsplash.com/photo-1604514628550-37a73ea686e2?w=600&q=80", "https://images.unsplash.com/photo-1566150905458-1bf049841f92?w=600&q=80"],
  prix: [{
    categorie: "Meilleur Styliste",
    laureate: "Dolores Mba Nsue",
    pays: "Guinée Équatoriale"
  }, {
    categorie: "Meilleur Mannequin",
    laureate: "Grâce Eyenga",
    pays: "Cameroun"
  }, {
    categorie: "Meilleur Stand",
    laureate: "Faso Dan Fani Premium",
    pays: "Burkina Faso"
  }],
  conferences: [{
    titre: "Acte Fondateur : Charte du SITA",
    resolution: "Adoption de la Charte fondatrice du SITA et création du Comité Panafricain du Textile, organe de gouvernance chargé d'assurer la pérennité et le développement du salon."
  }, {
    titre: "Textile Africain sur la scène mondiale",
    resolution: "Engagement des participants à promouvoir le textile africain dans les grandes foires internationales (Paris, Milan, New York) et à créer une délégation commune."
  }, {
    titre: "Financement de l'Artisanat Textile",
    resolution: "Plaidoyer auprès des institutions financières africaines (BAD, Afreximbank) pour la création de lignes de crédit spécifiques aux PME textiles africaines."
  }]
};
const malabo2020 = UNSAFE_withComponentProps(function MalaboPage() {
  return /* @__PURE__ */ jsx(EditionDetail, {
    edition: edition$3
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: malabo2020,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const meta$6 = () => [{
  title: "SITA Djibouti 2021 — 2ème Édition | SITA"
}, {
  name: "description",
  content: "Revivez la 2ème édition du SITA à Djibouti — 2021."
}];
const edition$2 = {
  numero: "2ème",
  annee: "2021",
  ville: "Djibouti",
  pays: "République de Djibouti",
  flag: "🇩🇯",
  dates: "12 – 17 Novembre 2021",
  theme: "Coton Bio & Développement Durable",
  description: "La 2ème édition du SITA à Djibouti a mis la durabilité et l'agriculture biologique au cœur des débats. Carrefour stratégique entre l'Afrique, l'Asie et le Moyen-Orient, Djibouti a offert une plateforme unique pour explorer les synergies entre les producteurs de coton africain et les marchés asiatiques. 310 exposants de 15 pays ont participé à cet événement marqué par le premier concours panafricain de teinture naturelle et une grande exposition sur les fibres végétales traditionnelles.",
  exposants: 310,
  paysRepresentes: 15,
  visiteurs: "7 200",
  image: "https://images.unsplash.com/photo-1615123820032-f3f7bb34a000?w=1200&q=80",
  galerie: ["https://images.unsplash.com/photo-1615123820032-f3f7bb34a000?w=600&q=80", "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=600&q=80", "https://images.unsplash.com/photo-1549887534-f3a748b0cd5c?w=600&q=80", "https://images.unsplash.com/photo-1589156188157-6a8a688e1388?w=600&q=80", "https://images.unsplash.com/photo-1604514628550-37a73ea686e2?w=600&q=80", "https://images.unsplash.com/photo-1566150905458-1bf049841f92?w=600&q=80"],
  prix: [{
    categorie: "Meilleur Styliste",
    laureate: "Hodan Farah",
    pays: "Djibouti"
  }, {
    categorie: "Meilleur Mannequin",
    laureate: "Safia Ibrahim",
    pays: "Éthiopie"
  }, {
    categorie: "Meilleur Stand",
    laureate: "Coton du Nil",
    pays: "Égypte"
  }],
  conferences: [{
    titre: "Agriculture Biologique et Coton Africain",
    resolution: "Adoption d'une feuille de route pour la conversion de 30% des surfaces cotonnières africaines en agriculture biologique certifiée d'ici 2030."
  }, {
    titre: "Partenariats Afrique-Asie dans le Textile",
    resolution: "Signature de 5 accords de partenariat entre associations textiles africaines et manufacturiers asiatiques pour des transferts de technologie équitables."
  }, {
    titre: "Teinture Naturelle et Savoir-faire Ancestraux",
    resolution: "Création d'un programme de préservation et de transmission des techniques de teinture naturelle africaine, inscrit à l'UNESCO."
  }]
};
const djibouti2021 = UNSAFE_withComponentProps(function DjiboutiPage() {
  return /* @__PURE__ */ jsx(EditionDetail, {
    edition: edition$2
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: djibouti2021,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const meta$5 = () => [{
  title: "SITA Lomé 2022 — 3ème Édition | SITA"
}, {
  name: "description",
  content: "Revivez la 3ème édition du SITA à Lomé, Togo — 2022."
}];
const edition$1 = {
  numero: "3ème",
  annee: "2022",
  ville: "Lomé",
  pays: "République Togolaise",
  flag: "🇹🇬",
  dates: "10 – 15 Novembre 2022",
  theme: "Tisser l'Afrique de Demain",
  description: "La 3ème édition du SITA s'est tenue à Lomé, hub économique et culturel de l'Afrique de l'Ouest. La capitale togolaise a accueilli 420 exposants représentant 18 nationalités. Cette édition a mis en avant les stylistes émergents et les techniques ancestrales de tissage, avec une grande exposition sur le Kente ghanéen et le bogolan malien. Le Forum des Investisseurs, organisé en marge du salon, a permis de mobiliser des engagements d'investissement de plus de 50 millions de dollars dans le secteur textile africain.",
  exposants: 420,
  paysRepresentes: 18,
  visiteurs: "9 500",
  image: "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=1200&q=80",
  galerie: ["https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=600&q=80", "https://images.unsplash.com/photo-1549887534-f3a748b0cd5c?w=600&q=80", "https://images.unsplash.com/photo-1578821590362-fe5a911cf123?w=600&q=80", "https://images.unsplash.com/photo-1589156188157-6a8a688e1388?w=600&q=80", "https://images.unsplash.com/photo-1604514628550-37a73ea686e2?w=600&q=80", "https://images.unsplash.com/photo-1566150905458-1bf049841f92?w=600&q=80"],
  prix: [{
    categorie: "Meilleur Styliste",
    laureate: "Kodjo Mensah",
    pays: "Togo"
  }, {
    categorie: "Meilleur Mannequin",
    laureate: "Abena Asante",
    pays: "Ghana"
  }, {
    categorie: "Meilleur Stand",
    laureate: "Tissus Kénédougou",
    pays: "Burkina Faso"
  }],
  conferences: [{
    titre: "Forum des Investisseurs Textile Africain",
    resolution: "Mobilisation de 50 millions USD d'engagements d'investissement pour le développement d'infrastructures textiles en Afrique de l'Ouest."
  }, {
    titre: "Valorisation du Patrimoine Textile Traditionnel",
    resolution: "Création d'une base de données numérique des motifs et techniques textiles africains, accessible à tous les créateurs du continent."
  }, {
    titre: "Mode Éthique et Commerce Équitable",
    resolution: "Engagement des exposants SITA à respecter des standards de commerce équitable garantissant une juste rémunération aux artisans."
  }]
};
const lome2022 = UNSAFE_withComponentProps(function LomePage() {
  return /* @__PURE__ */ jsx(EditionDetail, {
    edition: edition$1
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lome2022,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const meta$4 = () => [{
  title: "SITA Conakry 2023 — 4ème Édition | SITA"
}, {
  name: "description",
  content: "Revivez la 4ème édition du SITA à Conakry, Guinée — 2023. Galeries, palmarès et résolutions de conférences."
}];
const edition = {
  numero: "4ème",
  annee: "2023",
  ville: "Conakry",
  pays: "République de Guinée",
  flag: "🇬🇳",
  dates: "15 – 20 Novembre 2023",
  theme: "Digitalisation & Industrialisation du Textile Africain",
  description: "La 4ème édition du SITA à Conakry a marqué un tournant historique pour le salon. Plus de 500 exposants venus de 22 pays africains se sont réunis au Palais du Peuple de Conakry pour célébrer l'excellence du textile africain. Cette édition a été caractérisée par le lancement officiel de l'Académie SITA, un programme de formation dédié aux artisans et entrepreneurs du secteur textile. Les défilés de mode ont réuni les plus grands stylistes du continent, mettant en valeur le wax, le bogolan, le kente et d'autres tissus emblématiques.",
  exposants: 500,
  paysRepresentes: 22,
  visiteurs: "12 000",
  image: "https://images.unsplash.com/photo-1549887534-f3a748b0cd5c?w=1200&q=80",
  galerie: ["https://images.unsplash.com/photo-1549887534-f3a748b0cd5c?w=600&q=80", "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=600&q=80", "https://images.unsplash.com/photo-1578821590362-fe5a911cf123?w=600&q=80", "https://images.unsplash.com/photo-1589156188157-6a8a688e1388?w=600&q=80", "https://images.unsplash.com/photo-1604514628550-37a73ea686e2?w=600&q=80", "https://images.unsplash.com/photo-1566150905458-1bf049841f92?w=600&q=80"],
  prix: [{
    categorie: "Meilleur Styliste",
    laureate: "Aminata Kouyaté",
    pays: "Guinée"
  }, {
    categorie: "Meilleur Mannequin",
    laureate: "Fatoumata Diallo",
    pays: "Sénégal"
  }, {
    categorie: "Meilleur Stand",
    laureate: "Maison Kente d'Or",
    pays: "Ghana"
  }],
  conferences: [{
    titre: "Textile Africain à l'ère du Numérique",
    resolution: "Les États membres s'engagent à financer des plateformes de vente en ligne pour les artisans textiles africains et à former 10 000 artisans au commerce électronique d'ici 2025."
  }, {
    titre: "Industrialisation de la filière coton",
    resolution: "Création d'un fonds panafricain pour soutenir la transformation locale du coton brut, visant à tripler la valeur ajoutée produite sur le continent d'ici 2030."
  }, {
    titre: "Label Qualité Textile Africain",
    resolution: "Adoption d'une charte commune de certification de qualité pour les produits textiles labellisés SITA, garantissant l'authenticité et le respect des savoir-faire traditionnels."
  }]
};
const conakry2023 = UNSAFE_withComponentProps(function ConakryPage() {
  return /* @__PURE__ */ jsx(EditionDetail, {
    edition
  });
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: conakry2023,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const meta$3 = () => [{
  title: "Espace Exposants — Inscription | SITA"
}, {
  name: "description",
  content: "Inscrivez-vous comme exposant, styliste ou mannequin au Salon International du Textile Africain. Découvrez les critères et formulaires d'inscription."
}];
async function action$1({
  request
}) {
  const formData = await request.formData();
  const nom = String(formData.get("nom") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telephone = String(formData.get("telephone") ?? "").trim();
  const pays = String(formData.get("pays") ?? "").trim();
  const categorie = String(formData.get("categorie") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const errors = {};
  if (!nom || nom.length < 2) errors.nom = "Le nom est requis (minimum 2 caractères).";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Adresse email invalide.";
  if (!telephone || telephone.length < 8) errors.telephone = "Numéro de téléphone requis.";
  if (!pays) errors.pays = "Veuillez sélectionner votre pays.";
  if (!categorie) errors.categorie = "Veuillez choisir une catégorie.";
  if (!description || description.length < 20) errors.description = "Décrivez votre activité (minimum 20 caractères).";
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors
    };
  }
  return {
    success: true,
    message: `Merci ${nom} ! Votre demande d'inscription a été reçue. Notre équipe vous contactera dans les 48h.`
  };
}
const categories = [{
  value: "stand_artisan",
  label: "Stand Artisan / Créateur"
}, {
  value: "stand_industriel",
  label: "Stand Industriel / Manufacturier"
}, {
  value: "stand_institution",
  label: "Stand Institutionnel / Gouvernemental"
}, {
  value: "styliste",
  label: "Candidature Styliste (Concours)"
}, {
  value: "mannequin",
  label: "Candidature Mannequin (Concours)"
}, {
  value: "media",
  label: "Accréditation Presse / Média"
}];
const criteres = [{
  titre: "Exposants & Stands",
  items: ["Être un acteur du secteur textile africain (artisan, industriel, designer, institution)", "Présenter des produits ou services liés au textile, à la mode ou à l'artisanat africain", "Remplir le formulaire d'inscription et régler les frais de participation", "Respecter la charte éthique et culturelle du SITA"]
}, {
  titre: "Candidats Stylistes",
  items: ["Être ressortissant d'un pays africain ou de la diaspora africaine", "Présenter une collection de minimum 10 pièces originales", "Valoriser au minimum 60% de matières premières africaines dans la collection", "Soumettre un book de créations avec un dossier artistique"]
}, {
  titre: "Candidats Mannequins",
  items: ["Être âgé(e) de 18 à 35 ans", "Mesurer au minimum 1m72 (femmes) ou 1m80 (hommes)", "Posséder une expérience professionnelle ou un portfolio solide", "Maîtriser le défilé et répondre aux critères esthétiques du concours"]
}];
const exposants = UNSAFE_withComponentProps(function ExposantsPage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [activeTab, setActiveTab] = useState(0);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("section", {
      className: "relative py-24 bg-neutral text-neutral-content overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "pan-african-bar absolute top-0 left-0 right-0"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 kente-pattern opacity-20"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("span", {
          className: "text-secondary font-semibold uppercase tracking-widest text-sm",
          children: "Rejoignez-nous"
        }), /* @__PURE__ */ jsx("h1", {
          className: "text-5xl lg:text-6xl font-black mt-3 mb-4",
          style: {
            fontFamily: "var(--font-heading)"
          },
          children: "Espace Exposants"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-neutral-content/75 max-w-xl mx-auto",
          children: "Réservez votre stand, soumettez votre candidature et faites partie de l'aventure SITA."
        })]
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-base-200",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-center mb-12",
          children: /* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold",
            style: {
              fontFamily: "var(--font-heading)"
            },
            children: "Critères de Participation"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "tabs tabs-box justify-center mb-8",
          role: "tablist",
          children: criteres.map((c, i) => /* @__PURE__ */ jsx("button", {
            role: "tab",
            className: `tab ${activeTab === i ? "tab-active" : ""}`,
            onClick: () => setActiveTab(i),
            children: c.titre
          }, c.titre))
        }), /* @__PURE__ */ jsx("div", {
          className: "max-w-2xl mx-auto",
          children: /* @__PURE__ */ jsx("div", {
            className: "card bg-base-100 shadow-sm border border-base-300",
            children: /* @__PURE__ */ jsxs("div", {
              className: "card-body p-6",
              children: [/* @__PURE__ */ jsx("h3", {
                className: "font-bold text-xl mb-4 text-primary",
                style: {
                  fontFamily: "var(--font-heading)"
                },
                children: criteres[activeTab].titre
              }), /* @__PURE__ */ jsx("ul", {
                className: "space-y-3",
                children: criteres[activeTab].items.map((item, i) => /* @__PURE__ */ jsxs("li", {
                  className: "flex items-start gap-3",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5",
                    children: /* @__PURE__ */ jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-3.5 w-3.5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 3,
                        d: "M5 13l4 4L19 7"
                      })
                    })
                  }), /* @__PURE__ */ jsx("span", {
                    className: "text-base-content/80 text-sm leading-relaxed",
                    children: item
                  })]
                }, i))
              })]
            })
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-base-100",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 max-w-2xl",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-10",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold",
            style: {
              fontFamily: "var(--font-heading)"
            },
            children: "Formulaire d'Inscription"
          }), /* @__PURE__ */ jsx("p", {
            className: "text-base-content/60 mt-2",
            children: "Remplissez ce formulaire pour exprimer votre intérêt. Notre équipe vous contactera pour confirmer votre participation."
          })]
        }), (actionData == null ? void 0 : actionData.success) ? /* @__PURE__ */ jsxs("div", {
          className: "alert alert-success shadow-lg",
          children: [/* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6 flex-shrink-0",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          }), /* @__PURE__ */ jsx("span", {
            children: actionData.message
          })]
        }) : /* @__PURE__ */ jsx(Form, {
          method: "post",
          noValidate: true,
          className: "card bg-base-100 shadow-md border border-base-200",
          children: /* @__PURE__ */ jsxs("div", {
            className: "card-body p-8 space-y-5",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "form-control",
              children: [/* @__PURE__ */ jsx("label", {
                className: "label",
                htmlFor: "nom",
                children: /* @__PURE__ */ jsxs("span", {
                  className: "label-text font-semibold",
                  children: ["Nom complet / Organisation ", /* @__PURE__ */ jsx("span", {
                    className: "text-error",
                    children: "*"
                  })]
                })
              }), /* @__PURE__ */ jsx("input", {
                id: "nom",
                name: "nom",
                type: "text",
                autoComplete: "name",
                className: `input input-bordered w-full ${((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.nom) ? "input-error" : ""}`,
                placeholder: "Ex: Maison Kente d'Or",
                required: true,
                maxLength: 100
              }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.nom) && /* @__PURE__ */ jsx("label", {
                className: "label",
                children: /* @__PURE__ */ jsx("span", {
                  className: "label-text-alt text-error",
                  children: actionData.errors.nom
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "form-control",
              children: [/* @__PURE__ */ jsx("label", {
                className: "label",
                htmlFor: "email",
                children: /* @__PURE__ */ jsxs("span", {
                  className: "label-text font-semibold",
                  children: ["Adresse email ", /* @__PURE__ */ jsx("span", {
                    className: "text-error",
                    children: "*"
                  })]
                })
              }), /* @__PURE__ */ jsx("input", {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                className: `input input-bordered w-full ${((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.email) ? "input-error" : ""}`,
                placeholder: "contact@exemple.com",
                required: true
              }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.email) && /* @__PURE__ */ jsx("label", {
                className: "label",
                children: /* @__PURE__ */ jsx("span", {
                  className: "label-text-alt text-error",
                  children: actionData.errors.email
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "form-control",
                children: [/* @__PURE__ */ jsx("label", {
                  className: "label",
                  htmlFor: "telephone",
                  children: /* @__PURE__ */ jsxs("span", {
                    className: "label-text font-semibold",
                    children: ["Téléphone ", /* @__PURE__ */ jsx("span", {
                      className: "text-error",
                      children: "*"
                    })]
                  })
                }), /* @__PURE__ */ jsx("input", {
                  id: "telephone",
                  name: "telephone",
                  type: "tel",
                  autoComplete: "tel",
                  className: `input input-bordered w-full ${((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.telephone) ? "input-error" : ""}`,
                  placeholder: "+224 6XX XXX XXX",
                  required: true
                }), ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.telephone) && /* @__PURE__ */ jsx("label", {
                  className: "label",
                  children: /* @__PURE__ */ jsx("span", {
                    className: "label-text-alt text-error",
                    children: actionData.errors.telephone
                  })
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "form-control",
                children: [/* @__PURE__ */ jsx("label", {
                  className: "label",
                  htmlFor: "pays",
                  children: /* @__PURE__ */ jsxs("span", {
                    className: "label-text font-semibold",
                    children: ["Pays ", /* @__PURE__ */ jsx("span", {
                      className: "text-error",
                      children: "*"
                    })]
                  })
                }), /* @__PURE__ */ jsxs("select", {
                  id: "pays",
                  name: "pays",
                  className: `select select-bordered w-full ${((_g = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _g.pays) ? "select-error" : ""}`,
                  required: true,
                  defaultValue: "",
                  children: [/* @__PURE__ */ jsx("option", {
                    value: "",
                    disabled: true,
                    children: "Sélectionner..."
                  }), ["Bénin", "Burkina Faso", "Cameroun", "Cap-Vert", "Côte d'Ivoire", "Djibouti", "Éthiopie", "Ghana", "Guinée", "Guinée-Bissau", "Guinée Équatoriale", "Kenya", "Madagascar", "Mali", "Maroc", "Mauritanie", "Mozambique", "Niger", "Nigeria", "RD Congo", "République du Congo", "Rwanda", "Sénégal", "Sierra Leone", "Tanzanie", "Togo", "Tunisie", "Ouganda", "Zambie", "Zimbabwe", "Autre"].map((p) => /* @__PURE__ */ jsx("option", {
                    value: p,
                    children: p
                  }, p))]
                }), ((_h = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _h.pays) && /* @__PURE__ */ jsx("label", {
                  className: "label",
                  children: /* @__PURE__ */ jsx("span", {
                    className: "label-text-alt text-error",
                    children: actionData.errors.pays
                  })
                })]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "form-control",
              children: [/* @__PURE__ */ jsx("label", {
                className: "label",
                htmlFor: "categorie",
                children: /* @__PURE__ */ jsxs("span", {
                  className: "label-text font-semibold",
                  children: ["Type de participation ", /* @__PURE__ */ jsx("span", {
                    className: "text-error",
                    children: "*"
                  })]
                })
              }), /* @__PURE__ */ jsxs("select", {
                id: "categorie",
                name: "categorie",
                className: `select select-bordered w-full ${((_i = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _i.categorie) ? "select-error" : ""}`,
                required: true,
                defaultValue: "",
                children: [/* @__PURE__ */ jsx("option", {
                  value: "",
                  disabled: true,
                  children: "Choisir une catégorie..."
                }), categories.map((c) => /* @__PURE__ */ jsx("option", {
                  value: c.value,
                  children: c.label
                }, c.value))]
              }), ((_j = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _j.categorie) && /* @__PURE__ */ jsx("label", {
                className: "label",
                children: /* @__PURE__ */ jsx("span", {
                  className: "label-text-alt text-error",
                  children: actionData.errors.categorie
                })
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "form-control",
              children: [/* @__PURE__ */ jsx("label", {
                className: "label",
                htmlFor: "description",
                children: /* @__PURE__ */ jsxs("span", {
                  className: "label-text font-semibold",
                  children: ["Décrivez votre activité / projet ", /* @__PURE__ */ jsx("span", {
                    className: "text-error",
                    children: "*"
                  })]
                })
              }), /* @__PURE__ */ jsx("textarea", {
                id: "description",
                name: "description",
                rows: 4,
                className: `textarea textarea-bordered w-full resize-none ${((_k = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _k.description) ? "textarea-error" : ""}`,
                placeholder: "Présentez votre activité, vos produits, votre collection...",
                required: true,
                maxLength: 1e3
              }), ((_l = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _l.description) && /* @__PURE__ */ jsx("label", {
                className: "label",
                children: /* @__PURE__ */ jsx("span", {
                  className: "label-text-alt text-error",
                  children: actionData.errors.description
                })
              })]
            }), /* @__PURE__ */ jsx("button", {
              type: "submit",
              disabled: isSubmitting,
              className: "btn btn-primary w-full btn-lg mt-2",
              children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, {
                children: [/* @__PURE__ */ jsx("span", {
                  className: "loading loading-spinner loading-sm"
                }), "Envoi en cours..."]
              }) : "Soumettre ma candidature"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-xs text-center text-base-content/50",
              children: "Vos données sont traitées de manière confidentielle et ne seront pas cédées à des tiers."
            })]
          })
        })]
      })
    })]
  });
});
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  default: exposants,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const ShoppingCart = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }) });
const Needle = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" }),
  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h.01M15 12h.01" })
] });
const Leaf = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }),
  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 3v5a2 2 0 002 2h5" })
] });
const Scissors = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14.121 4.379l2.7-2.7a2 2 0 012.828 2.828l-2.7 2.7m0 0l2.122 2.121a2 2 0 11-2.828 2.829L13.293 9.93m0 0L9.707 6.343a2 2 0 10-2.828 2.829l3.585 3.586" }),
  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 17H7a2 2 0 01-2-2v-6a2 2 0 012-2h2" })
] });
const BarChart = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) });
const Smartphone = ({ className = "w-6 h-6" }) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" }) });
const meta$2 = () => [{
  title: "Formations & Académie SITA | SITA"
}, {
  name: "description",
  content: "Découvrez les programmes de formation de l'Académie SITA : E-commerce, Tissage, Teinture, Stylisme et bien plus."
}];
const modules = [{
  icon: /* @__PURE__ */ jsx(ShoppingCart, {
    className: "w-8 h-8 text-primary"
  }),
  titre: "E-commerce & Vente en ligne",
  duree: "6 semaines",
  niveau: "Débutant à Intermédiaire",
  description: "Apprenez à créer votre boutique en ligne, à photographier vos créations, à gérer les paiements et à atteindre une clientèle internationale avec vos tissus et créations.",
  competences: ["Création de boutique Shopify/WooCommerce", "Photographie produit professionnelle", "Marketing des réseaux sociaux (Instagram, TikTok)", "Gestion des livraisons internationales"],
  badge: "badge-primary",
  color: "border-primary"
}, {
  icon: /* @__PURE__ */ jsx(Needle, {
    className: "w-8 h-8 text-secondary"
  }),
  titre: "Techniques de Tissage Traditionnel",
  duree: "8 semaines",
  niveau: "Tous niveaux",
  description: "Maîtrisez les techniques ancestrales du Kente, du Faso Dan Fani et du tissage à main africain. Apprenez à moderniser ces savoir-faire pour répondre à la demande contemporaine.",
  competences: ["Tissage sur métier à main", "Motifs traditionnels Kente, Bogolan", "Colorimétrie et harmonie des tons", "Développement de nouvelles collections"],
  badge: "badge-secondary",
  color: "border-secondary"
}, {
  icon: /* @__PURE__ */ jsx(Leaf, {
    className: "w-8 h-8 text-accent"
  }),
  titre: "Teinture Naturelle & Bio",
  duree: "4 semaines",
  niveau: "Intermédiaire",
  description: "Redécouvrez les teintures végétales africaines (indigo, henné, rocou) et apprenez à les intégrer dans une production respectueuse de l'environnement et certifiée bio.",
  competences: ["Extraction de pigments naturels", "Techniques de batik et tie-dye", "Certification produits bio", "Développement durable et économie circulaire"],
  badge: "badge-accent",
  color: "border-accent"
}, {
  icon: /* @__PURE__ */ jsx(Scissors, {
    className: "w-8 h-8 text-neutral"
  }),
  titre: "Stylisme & Création de Mode",
  duree: "12 semaines",
  niveau: "Intermédiaire à Avancé",
  description: "Développez votre identité créative en combinant l'héritage textile africain avec les tendances de la mode contemporaine. De l'esquisse au défilé.",
  competences: ["Dessin de mode et sketching", "Construction de patrons", "Direction artistique", "Organisation d'un défilé"],
  badge: "badge-neutral",
  color: "border-neutral"
}, {
  icon: /* @__PURE__ */ jsx(BarChart, {
    className: "w-8 h-8 text-primary"
  }),
  titre: "Gestion d'Entreprise Textile",
  duree: "5 semaines",
  niveau: "Tous niveaux",
  description: "Transformez votre passion en entreprise viable. Business plan, comptabilité, financement, et stratégie de croissance pour les PME textiles africaines.",
  competences: ["Business plan et pitch deck", "Accès aux financements (BAD, BCEAO)", "Gestion des stocks et approvisionnement", "Export et commerce international"],
  badge: "badge-primary",
  color: "border-primary"
}, {
  icon: /* @__PURE__ */ jsx(Smartphone, {
    className: "w-8 h-8 text-secondary"
  }),
  titre: "Communication Digitale pour Créateurs",
  duree: "3 semaines",
  niveau: "Débutant",
  description: "Construisez votre marque personnelle sur les réseaux sociaux. Créez du contenu engageant pour promouvoir vos créations et fidéliser votre communauté.",
  competences: ["Identité de marque et logo", "Shooting photo et vidéo Reels", "Community management", "Publicité Facebook/Meta"],
  badge: "badge-secondary",
  color: "border-secondary"
}];
const temoignages = [{
  nom: "Aïcha Traoré",
  pays: "Mali",
  formation: "E-commerce",
  texte: "Grâce à la formation SITA, j'ai multiplié mes ventes par 5 en 3 mois. Mes bogolans sont maintenant vendus jusqu'en Europe et aux États-Unis.",
  avatar: "👩🏿‍💼"
}, {
  nom: "Kofi Mensah",
  pays: "Ghana",
  formation: "Tissage Traditionnel",
  texte: "J'ai appris à documenter et à transmettre les motifs Kente de mon village. Le programme m'a ouvert les yeux sur la valeur de notre patrimoine.",
  avatar: "👨🏿‍🎨"
}, {
  nom: "Fatimata Bah",
  pays: "Guinée",
  formation: "Stylisme",
  texte: "Lauréate du prix Meilleur Styliste à Conakry 2023, je dois beaucoup à l'Académie SITA qui a structuré ma créativité et ma vision artistique.",
  avatar: "👩🏾‍🎓"
}];
const formations = UNSAFE_withComponentProps(function FormationsPage() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("section", {
      className: "relative py-24 bg-neutral text-neutral-content overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "pan-african-bar absolute top-0 left-0 right-0"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 kente-pattern opacity-20"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("span", {
          className: "text-secondary font-semibold uppercase tracking-widest text-sm",
          children: "Académie SITA"
        }), /* @__PURE__ */ jsx("h1", {
          className: "text-5xl lg:text-6xl font-black mt-3 mb-4",
          style: {
            fontFamily: "var(--font-heading)"
          },
          children: "Formations & Académie"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-neutral-content/75 max-w-2xl mx-auto",
          children: "Développez vos compétences avec des formateurs experts du textile africain. Des programmes conçus pour l'artisan d'aujourd'hui et l'entrepreneur de demain."
        })]
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20 bg-base-100",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-14",
          children: [/* @__PURE__ */ jsx("span", {
            className: "text-primary font-semibold uppercase tracking-widest text-sm",
            children: "Nos programmes"
          }), /* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-bold text-base-content mt-2",
            style: {
              fontFamily: "var(--font-heading)"
            },
            children: "Modules de Formation"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex justify-center gap-1 mt-4",
            children: [/* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-accent"
            }), /* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-secondary"
            }), /* @__PURE__ */ jsx("div", {
              className: "w-8 h-1 rounded-full bg-primary"
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7",
          children: modules.map((mod) => /* @__PURE__ */ jsx("div", {
            className: `card bg-base-100 shadow-sm border-t-4 ${mod.color} border border-base-200 card-cultural`,
            children: /* @__PURE__ */ jsxs("div", {
              className: "card-body p-6",
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-4xl mb-3",
                children: mod.icon
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-2 mb-2",
                children: [/* @__PURE__ */ jsx("span", {
                  className: `badge ${mod.badge} badge-sm`,
                  children: mod.niveau
                }), /* @__PURE__ */ jsxs("span", {
                  className: "text-xs text-base-content/50",
                  children: ["⏱ ", mod.duree]
                })]
              }), /* @__PURE__ */ jsx("h3", {
                className: "font-bold text-lg leading-tight mb-2",
                style: {
                  fontFamily: "var(--font-heading)"
                },
                children: mod.titre
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm text-base-content/70 leading-relaxed mb-4",
                children: mod.description
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("p", {
                  className: "text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-2",
                  children: "Compétences acquises :"
                }), /* @__PURE__ */ jsx("ul", {
                  className: "space-y-1.5",
                  children: mod.competences.map((comp) => /* @__PURE__ */ jsxs("li", {
                    className: "flex items-start gap-2 text-xs text-base-content/70",
                    children: [/* @__PURE__ */ jsx("span", {
                      className: "text-primary mt-0.5",
                      children: "✓"
                    }), comp]
                  }, comp))
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: "card-actions mt-4",
                children: /* @__PURE__ */ jsx("button", {
                  className: "btn btn-primary btn-sm w-full",
                  children: "S'inscrire à ce module"
                })
              })]
            })
          }, mod.titre))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20 bg-base-200",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */ jsx("span", {
            className: "text-secondary font-semibold uppercase tracking-widest text-sm",
            children: "Ils témoignent"
          }), /* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold mt-2",
            style: {
              fontFamily: "var(--font-heading)"
            },
            children: "Nos Diplômés Racontent"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-7",
          children: temoignages.map((t) => /* @__PURE__ */ jsx("div", {
            className: "card bg-base-100 shadow-sm border border-base-300",
            children: /* @__PURE__ */ jsxs("div", {
              className: "card-body p-6",
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-4xl mb-3",
                children: t.avatar
              }), /* @__PURE__ */ jsxs("blockquote", {
                className: "text-sm text-base-content/75 leading-relaxed italic mb-4",
                children: ['"', t.texte, '"']
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "font-bold text-base-content",
                  children: t.nom
                }), /* @__PURE__ */ jsxs("div", {
                  className: "text-xs text-base-content/50",
                  children: [t.pays, " · Formation ", t.formation]
                })]
              })]
            })
          }, t.nom))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-primary text-primary-content text-center",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-bold mb-4",
          style: {
            fontFamily: "var(--font-heading)"
          },
          children: "Prêt(e) à développer vos compétences ?"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-primary-content/80 mb-8 max-w-lg mx-auto",
          children: "Les inscriptions pour la prochaine promotion de l'Académie SITA sont ouvertes. Places limitées."
        }), /* @__PURE__ */ jsx("button", {
          className: "btn bg-white text-primary hover:bg-white/90 btn-lg font-bold",
          children: "M'inscrire à l'Académie SITA"
        })]
      })
    })]
  });
});
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: formations,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const meta$1 = () => [{
  title: "Presse & Blog — Actualités Textile Africain | SITA"
}, {
  name: "description",
  content: "Communiqués de presse, revue de presse et articles sur l'industrie du textile en Afrique."
}];
const articles = [{
  id: 1,
  type: "article",
  date: "12 Mai 2026",
  category: "Annonce",
  titre: "La 5ème édition du SITA bientôt annoncée",
  extrait: "Le Commissaire Général du SITA dévoilera prochainement la ville hôte et les thématiques de la 5ème édition du salon panafricain du textile.",
  image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
  badge: "badge-primary",
  badgeLabel: "Annonce Officielle"
}, {
  id: 2,
  type: "article",
  date: "28 Avril 2026",
  category: "Marché",
  titre: "Le coton africain s'impose sur la scène internationale",
  extrait: "La demande internationale pour le coton africain bio connaît une croissance de 35% portée par les tendances de mode éthique et durable dans les marchés occidentaux.",
  image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
  badge: "badge-secondary",
  badgeLabel: "Industrie"
}, {
  id: 3,
  type: "article",
  date: "10 Avril 2026",
  category: "Formation",
  titre: "Lancement du programme E-commerce Textile Africain",
  extrait: "L'Académie SITA ouvre les inscriptions pour sa nouvelle promotion. 200 places disponibles pour des artisans et stylistes africains désireux de conquérir les marchés en ligne.",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  badge: "badge-accent",
  badgeLabel: "Académie"
}, {
  id: 4,
  type: "communique",
  date: "5 Mars 2026",
  category: "Presse",
  titre: "Communiqué : Bilan de l'édition SITA Conakry 2023",
  extrait: "Le Comité Organisateur du SITA publie le bilan officiel de la 4ème édition : chiffres de fréquentation, montants des contrats signés et résolutions adoptées.",
  image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
  badge: "badge-neutral",
  badgeLabel: "Communiqué Officiel"
}, {
  id: 5,
  type: "article",
  date: "20 Février 2026",
  category: "Mode",
  titre: "Les créateurs africains à la Fashion Week de Paris",
  extrait: "Cinq stylistes labellisés SITA ont participé à la Fashion Week de Paris printemps 2026, portant haut les couleurs du textile africain devant la presse internationale.",
  image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
  badge: "badge-primary",
  badgeLabel: "Mode Africaine"
}, {
  id: 6,
  type: "revue",
  date: "10 Février 2026",
  category: "Revue de presse",
  titre: "Revue de Presse — Textile Africain Janvier 2026",
  extrait: "Sélection des meilleurs articles publiés par la presse internationale sur le textile africain, la mode éthique et le développement du secteur en janvier 2026.",
  image: "https://images.unsplash.com/photo-1617638924567-92f374d4c81f?w=600&q=80",
  badge: "badge-secondary",
  badgeLabel: "Revue de Presse"
}];
const mediaPartners = ["RFI Afrique", "Jeune Afrique", "African Business", "Africa Fashion", "Le Monde Afrique", "VOA Afrique"];
const presse = UNSAFE_withComponentProps(function PressePage() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("section", {
      className: "relative py-24 bg-neutral text-neutral-content overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "pan-african-bar absolute top-0 left-0 right-0"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 kente-pattern opacity-20"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("span", {
          className: "text-secondary font-semibold uppercase tracking-widest text-sm",
          children: "Médias & Communication"
        }), /* @__PURE__ */ jsx("h1", {
          className: "text-5xl lg:text-6xl font-black mt-3 mb-4",
          style: {
            fontFamily: "var(--font-heading)"
          },
          children: "Presse & Blog"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-neutral-content/75 max-w-xl mx-auto",
          children: "Actualités, communiqués officiels et articles sur le textile africain et l'écosystème SITA."
        })]
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20 bg-base-100",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("div", {
          className: "mb-12",
          children: /* @__PURE__ */ jsxs("div", {
            className: "card lg:card-side bg-base-100 shadow-md border border-base-200 overflow-hidden card-cultural",
            children: [/* @__PURE__ */ jsx("figure", {
              className: "lg:w-2/5 h-56 lg:h-auto overflow-hidden flex-shrink-0",
              children: /* @__PURE__ */ jsx("img", {
                src: articles[0].image,
                alt: articles[0].titre,
                className: "w-full h-full object-cover",
                loading: "eager"
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "card-body p-8",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-2 mb-2",
                children: [/* @__PURE__ */ jsx("span", {
                  className: `badge ${articles[0].badge}`,
                  children: articles[0].badgeLabel
                }), /* @__PURE__ */ jsx("span", {
                  className: "text-sm text-base-content/50",
                  children: "À la une"
                })]
              }), /* @__PURE__ */ jsx("p", {
                className: "text-xs text-base-content/50 uppercase tracking-wider mb-1",
                children: articles[0].date
              }), /* @__PURE__ */ jsx("h2", {
                className: "text-2xl font-bold mb-3",
                style: {
                  fontFamily: "var(--font-heading)"
                },
                children: articles[0].titre
              }), /* @__PURE__ */ jsx("p", {
                className: "text-base-content/70 leading-relaxed mb-6",
                children: articles[0].extrait
              }), /* @__PURE__ */ jsx("div", {
                className: "card-actions",
                children: /* @__PURE__ */ jsx("button", {
                  className: "btn btn-primary",
                  children: "Lire l'article complet"
                })
              })]
            })]
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7",
          children: articles.slice(1).map((art) => /* @__PURE__ */ jsxs("article", {
            className: "card bg-base-100 shadow-sm border border-base-200 card-cultural overflow-hidden",
            children: [/* @__PURE__ */ jsxs("figure", {
              className: "relative h-44 overflow-hidden",
              children: [/* @__PURE__ */ jsx("img", {
                src: art.image,
                alt: art.titre,
                className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                loading: "lazy"
              }), /* @__PURE__ */ jsx("div", {
                className: `badge ${art.badge} absolute top-3 left-3`,
                children: art.badgeLabel
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "card-body p-5",
              children: [/* @__PURE__ */ jsxs("p", {
                className: "text-xs text-base-content/50 uppercase tracking-wider mb-1",
                children: [art.date, " · ", art.category]
              }), /* @__PURE__ */ jsx("h3", {
                className: "font-bold text-base leading-tight mb-2",
                style: {
                  fontFamily: "var(--font-heading)"
                },
                children: art.titre
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm text-base-content/70 leading-relaxed line-clamp-3",
                children: art.extrait
              }), /* @__PURE__ */ jsx("div", {
                className: "card-actions mt-3",
                children: /* @__PURE__ */ jsx("button", {
                  className: "btn btn-ghost btn-sm text-primary p-0 hover:bg-transparent hover:underline",
                  children: "Lire la suite →"
                })
              })]
            })]
          }, art.id))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-14 bg-base-200",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-sm text-base-content/50 uppercase tracking-widest mb-6 font-semibold",
          children: "Ils parlent de nous"
        }), /* @__PURE__ */ jsx("div", {
          className: "flex flex-wrap justify-center gap-4",
          children: mediaPartners.map((media) => /* @__PURE__ */ jsx("div", {
            className: "px-5 py-2.5 bg-base-100 border border-base-300 rounded-full text-sm font-medium text-base-content/70 hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm",
            children: media
          }, media))
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-primary text-primary-content text-center",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-bold mb-4",
          style: {
            fontFamily: "var(--font-heading)"
          },
          children: "Demande d'Accréditation Presse"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-primary-content/80 mb-8 max-w-lg mx-auto",
          children: "Vous êtes journaliste ou blogueur spécialisé ? Demandez votre badge d'accréditation SITA."
        }), /* @__PURE__ */ jsx(Link, {
          to: "/contact",
          className: "btn bg-white text-primary hover:bg-white/90 btn-lg font-bold",
          children: "Demander une accréditation"
        })]
      })
    })]
  });
});
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: presse,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => [{
  title: "Contact & Partenariats | SITA"
}, {
  name: "description",
  content: "Contactez le Salon International du Textile Africain pour des informations sur les partenariats, la participation ou toute autre demande."
}];
async function action({
  request
}) {
  const formData = await request.formData();
  const nom = String(formData.get("nom") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const sujet = String(formData.get("sujet") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const errors = {};
  if (!nom || nom.length < 2) errors.nom = "Le nom est requis.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Email invalide.";
  if (!sujet) errors.sujet = "Veuillez choisir un sujet.";
  if (!message || message.length < 10) errors.message = "Le message doit contenir au moins 10 caractères.";
  if (Object.keys(errors).length > 0) return {
    success: false,
    errors
  };
  return {
    success: true,
    message: `Merci ${nom} ! Votre message a été envoyé. Notre équipe vous répondra sous 48h.`
  };
}
const sujets = ["Demande d'information générale", "Partenariat institutionnel", "Partenariat médias / presse", "Sponsoring & mécénat", "Accréditation presse", "Inscription exposant", "Formation & Académie", "Autre"];
const contacts = [{
  icon: "📍",
  titre: "Adresse",
  ligne1: "Secrétariat Général du SITA",
  ligne2: "Conakry, République de Guinée"
}, {
  icon: "📞",
  titre: "Téléphone",
  ligne1: "+224 620 000 000",
  ligne2: "Lun-Ven, 8h-17h (GMT)"
}, {
  icon: "✉️",
  titre: "Email",
  ligne1: "contact@sita-afrique.org",
  ligne2: "Réponse sous 48h"
}];
const partenaires = [{
  nom: "EBOMAF",
  categorie: "Partenaire Principal",
  emoji: "🏗️"
}, {
  nom: "Union Africaine",
  categorie: "Institution",
  emoji: "🌍"
}, {
  nom: "CEDEAO",
  categorie: "Institution Régionale",
  emoji: "🤝"
}, {
  nom: "OIF",
  categorie: "Partenaire Culturel",
  emoji: "🇫🇷"
}, {
  nom: "BAD",
  categorie: "Partenaire Financier",
  emoji: "💰"
}, {
  nom: "UNESCO",
  categorie: "Partenaire Culturel",
  emoji: "🎭"
}];
const contact = UNSAFE_withComponentProps(function ContactPage() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("section", {
      className: "relative py-24 bg-neutral text-neutral-content overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "pan-african-bar absolute top-0 left-0 right-0"
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 kente-pattern opacity-20"
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative container mx-auto px-4 text-center",
        children: [/* @__PURE__ */ jsx("span", {
          className: "text-secondary font-semibold uppercase tracking-widest text-sm",
          children: "Nous rejoindre"
        }), /* @__PURE__ */ jsx("h1", {
          className: "text-5xl lg:text-6xl font-black mt-3 mb-4",
          style: {
            fontFamily: "var(--font-heading)"
          },
          children: "Contact & Partenariats"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-neutral-content/75 max-w-xl mx-auto",
          children: "Une question, un projet de partenariat ou une demande de participation ? Notre équipe est à votre écoute."
        })]
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "py-20 bg-base-100",
      children: /* @__PURE__ */ jsx("div", {
        className: "container mx-auto px-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-5 gap-10",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "lg:col-span-2 space-y-6",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-2xl font-bold",
              style: {
                fontFamily: "var(--font-heading)"
              },
              children: "Nos Coordonnées"
            }), contacts.map((c) => /* @__PURE__ */ jsxs("div", {
              className: "flex gap-4",
              children: [/* @__PURE__ */ jsx("div", {
                className: "flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl",
                children: c.icon
              }), /* @__PURE__ */ jsxs("div", {
                children: [/* @__PURE__ */ jsx("div", {
                  className: "font-semibold text-base-content",
                  children: c.titre
                }), /* @__PURE__ */ jsx("div", {
                  className: "text-sm text-base-content/70",
                  children: c.ligne1
                }), /* @__PURE__ */ jsx("div", {
                  className: "text-xs text-base-content/50",
                  children: c.ligne2
                })]
              })]
            }, c.titre)), /* @__PURE__ */ jsx("div", {
              className: "divider"
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("h3", {
                className: "font-bold text-lg mb-4",
                style: {
                  fontFamily: "var(--font-heading)"
                },
                children: "Suivez-nous"
              }), /* @__PURE__ */ jsx("div", {
                className: "flex gap-3",
                children: ["Facebook", "Twitter/X", "Instagram", "YouTube"].map((s) => /* @__PURE__ */ jsx("button", {
                  className: "btn btn-ghost btn-sm border border-base-300 hover:border-primary hover:text-primary",
                  "aria-label": s,
                  children: s === "Facebook" ? "f" : s === "Twitter/X" ? "𝕏" : s === "Instagram" ? "📸" : "▶️"
                }, s))
              })]
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "lg:col-span-3",
            children: (actionData == null ? void 0 : actionData.success) ? /* @__PURE__ */ jsxs("div", {
              className: "alert alert-success shadow-lg",
              children: [/* @__PURE__ */ jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6 flex-shrink-0",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                })
              }), /* @__PURE__ */ jsx("span", {
                children: actionData.message
              })]
            }) : /* @__PURE__ */ jsx(Form, {
              method: "post",
              noValidate: true,
              className: "card bg-base-100 shadow-md border border-base-200",
              children: /* @__PURE__ */ jsxs("div", {
                className: "card-body p-8 space-y-5",
                children: [/* @__PURE__ */ jsx("h2", {
                  className: "text-2xl font-bold",
                  style: {
                    fontFamily: "var(--font-heading)"
                  },
                  children: "Envoyer un message"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                  children: [/* @__PURE__ */ jsxs("div", {
                    className: "form-control",
                    children: [/* @__PURE__ */ jsx("label", {
                      className: "label",
                      htmlFor: "nom",
                      children: /* @__PURE__ */ jsxs("span", {
                        className: "label-text font-semibold",
                        children: ["Nom complet ", /* @__PURE__ */ jsx("span", {
                          className: "text-error",
                          children: "*"
                        })]
                      })
                    }), /* @__PURE__ */ jsx("input", {
                      id: "nom",
                      name: "nom",
                      type: "text",
                      autoComplete: "name",
                      className: `input input-bordered w-full ${((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.nom) ? "input-error" : ""}`,
                      placeholder: "Votre nom",
                      required: true,
                      maxLength: 100
                    }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.nom) && /* @__PURE__ */ jsx("label", {
                      className: "label",
                      children: /* @__PURE__ */ jsx("span", {
                        className: "label-text-alt text-error",
                        children: actionData.errors.nom
                      })
                    })]
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "form-control",
                    children: [/* @__PURE__ */ jsx("label", {
                      className: "label",
                      htmlFor: "email",
                      children: /* @__PURE__ */ jsxs("span", {
                        className: "label-text font-semibold",
                        children: ["Email ", /* @__PURE__ */ jsx("span", {
                          className: "text-error",
                          children: "*"
                        })]
                      })
                    }), /* @__PURE__ */ jsx("input", {
                      id: "email",
                      name: "email",
                      type: "email",
                      autoComplete: "email",
                      className: `input input-bordered w-full ${((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.email) ? "input-error" : ""}`,
                      placeholder: "vous@exemple.com",
                      required: true
                    }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.email) && /* @__PURE__ */ jsx("label", {
                      className: "label",
                      children: /* @__PURE__ */ jsx("span", {
                        className: "label-text-alt text-error",
                        children: actionData.errors.email
                      })
                    })]
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  className: "form-control",
                  children: [/* @__PURE__ */ jsx("label", {
                    className: "label",
                    htmlFor: "sujet",
                    children: /* @__PURE__ */ jsxs("span", {
                      className: "label-text font-semibold",
                      children: ["Sujet ", /* @__PURE__ */ jsx("span", {
                        className: "text-error",
                        children: "*"
                      })]
                    })
                  }), /* @__PURE__ */ jsxs("select", {
                    id: "sujet",
                    name: "sujet",
                    className: `select select-bordered w-full ${((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.sujet) ? "select-error" : ""}`,
                    required: true,
                    defaultValue: "",
                    children: [/* @__PURE__ */ jsx("option", {
                      value: "",
                      disabled: true,
                      children: "Choisir un sujet..."
                    }), sujets.map((s) => /* @__PURE__ */ jsx("option", {
                      value: s,
                      children: s
                    }, s))]
                  }), ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.sujet) && /* @__PURE__ */ jsx("label", {
                    className: "label",
                    children: /* @__PURE__ */ jsx("span", {
                      className: "label-text-alt text-error",
                      children: actionData.errors.sujet
                    })
                  })]
                }), /* @__PURE__ */ jsxs("div", {
                  className: "form-control",
                  children: [/* @__PURE__ */ jsx("label", {
                    className: "label",
                    htmlFor: "message",
                    children: /* @__PURE__ */ jsxs("span", {
                      className: "label-text font-semibold",
                      children: ["Message ", /* @__PURE__ */ jsx("span", {
                        className: "text-error",
                        children: "*"
                      })]
                    })
                  }), /* @__PURE__ */ jsx("textarea", {
                    id: "message",
                    name: "message",
                    rows: 5,
                    className: `textarea textarea-bordered w-full resize-none ${((_g = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _g.message) ? "textarea-error" : ""}`,
                    placeholder: "Décrivez votre demande...",
                    required: true,
                    maxLength: 2e3
                  }), ((_h = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _h.message) && /* @__PURE__ */ jsx("label", {
                    className: "label",
                    children: /* @__PURE__ */ jsx("span", {
                      className: "label-text-alt text-error",
                      children: actionData.errors.message
                    })
                  })]
                }), /* @__PURE__ */ jsx("button", {
                  type: "submit",
                  disabled: isSubmitting,
                  className: "btn btn-primary w-full btn-lg",
                  children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, {
                    children: [/* @__PURE__ */ jsx("span", {
                      className: "loading loading-spinner loading-sm"
                    }), "Envoi..."]
                  }) : "Envoyer le message"
                })]
              })
            })
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-16 bg-base-200",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto px-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-center mb-10",
          children: [/* @__PURE__ */ jsx("span", {
            className: "text-primary font-semibold uppercase tracking-widest text-sm",
            children: "Ils nous font confiance"
          }), /* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold mt-2",
            style: {
              fontFamily: "var(--font-heading)"
            },
            children: "Nos Partenaires"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5",
          children: partenaires.map((p) => /* @__PURE__ */ jsx("div", {
            className: "card bg-base-100 shadow-sm border border-base-300 card-cultural",
            children: /* @__PURE__ */ jsxs("div", {
              className: "card-body items-center text-center p-4",
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-3xl mb-2",
                children: p.emoji
              }), /* @__PURE__ */ jsx("div", {
                className: "font-bold text-sm",
                children: p.nom
              }), /* @__PURE__ */ jsx("div", {
                className: "text-xs text-base-content/50",
                children: p.categorie
              })]
            })
          }, p.nom))
        })]
      })
    })]
  });
});
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: contact,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BV4wO6U-.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": true, "module": "/assets/root-BDu3G0ZR.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/_layout": { "id": "routes/_layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/_layout-DI2w-Prw.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "routes/_layout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/home-B6gfIGRq.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/le-sita": { "id": "routes/le-sita", "parentId": "routes/_layout", "path": "le-sita", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/le-sita-BWcuQ2ub.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/editions/index": { "id": "routes/editions/index", "parentId": "routes/_layout", "path": "editions", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/index-y6P__kkD.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/editions/malabo-2020": { "id": "routes/editions/malabo-2020", "parentId": "routes/_layout", "path": "editions/malabo-2020", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/malabo-2020-CScIyB-F.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js", "/assets/EditionDetail-BfULo4ao.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/editions/djibouti-2021": { "id": "routes/editions/djibouti-2021", "parentId": "routes/_layout", "path": "editions/djibouti-2021", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/djibouti-2021-CpPhfQ4D.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js", "/assets/EditionDetail-BfULo4ao.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/editions/lome-2022": { "id": "routes/editions/lome-2022", "parentId": "routes/_layout", "path": "editions/lome-2022", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/lome-2022-CDfaqUPU.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js", "/assets/EditionDetail-BfULo4ao.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/editions/conakry-2023": { "id": "routes/editions/conakry-2023", "parentId": "routes/_layout", "path": "editions/conakry-2023", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/conakry-2023-D-l-MUan.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js", "/assets/EditionDetail-BfULo4ao.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/exposants": { "id": "routes/exposants", "parentId": "routes/_layout", "path": "exposants", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/exposants-rL0NUEsv.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/formations": { "id": "routes/formations", "parentId": "routes/_layout", "path": "formations", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/formations-B2AN2hN2.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/presse": { "id": "routes/presse", "parentId": "routes/_layout", "path": "presse", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/presse-BYx6PTEj.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "routes/_layout", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/contact-BR5NluXP.js", "imports": ["/assets/chunk-5KNZJZUH-Bf8iUGtw.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-73c16c37.js", "version": "73c16c37", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "v8_passThroughRequests": false, "unstable_trailingSlashAwareDataRequests": false, "unstable_previewServerPrerendering": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home": {
    id: "routes/home",
    parentId: "routes/_layout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/le-sita": {
    id: "routes/le-sita",
    parentId: "routes/_layout",
    path: "le-sita",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/editions/index": {
    id: "routes/editions/index",
    parentId: "routes/_layout",
    path: "editions",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/editions/malabo-2020": {
    id: "routes/editions/malabo-2020",
    parentId: "routes/_layout",
    path: "editions/malabo-2020",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/editions/djibouti-2021": {
    id: "routes/editions/djibouti-2021",
    parentId: "routes/_layout",
    path: "editions/djibouti-2021",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/editions/lome-2022": {
    id: "routes/editions/lome-2022",
    parentId: "routes/_layout",
    path: "editions/lome-2022",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/editions/conakry-2023": {
    id: "routes/editions/conakry-2023",
    parentId: "routes/_layout",
    path: "editions/conakry-2023",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/exposants": {
    id: "routes/exposants",
    parentId: "routes/_layout",
    path: "exposants",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/formations": {
    id: "routes/formations",
    parentId: "routes/_layout",
    path: "formations",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/presse": {
    id: "routes/presse",
    parentId: "routes/_layout",
    path: "presse",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "routes/_layout",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
