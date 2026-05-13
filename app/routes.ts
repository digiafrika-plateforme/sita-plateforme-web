import {
    type RouteConfig,
    index,
    route,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        index("routes/home.tsx"),
        route("le-sita", "routes/le-sita.tsx"),
        route("editions", "routes/editions/index.tsx"),
        route("editions/malabo-2020", "routes/editions/malabo-2020.tsx"),
        route("editions/djibouti-2021", "routes/editions/djibouti-2021.tsx"),
        route("editions/lome-2022", "routes/editions/lome-2022.tsx"),
        route("editions/conakry-2023", "routes/editions/conakry-2023.tsx"),
        route("exposants", "routes/exposants.tsx"),
        route("formations", "routes/formations.tsx"),
        route("presse", "routes/presse.tsx"),
        route("contact", "routes/contact.tsx"),
    ]),
] satisfies RouteConfig;
