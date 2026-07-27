import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE, metaForPath } from "./seo.data";

/** Upsert a <meta> tag by name or property; create it if missing. */
function setMeta(attr: "name" | "property", key: string, content: string): void {
	let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}

function setCanonical(href: string): void {
	let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
	if (!el) {
		el = document.createElement("link");
		el.setAttribute("rel", "canonical");
		document.head.appendChild(el);
	}
	el.setAttribute("href", href);
}

/**
 * Drives per-route <head> metadata. Rendered once inside the Router; runs on
 * every location change. This is an SPA, so search engines that execute JS
 * (Google) get the correct per-page title/description; the static index.html
 * carries strong defaults for crawlers and link-unfurlers that don't run JS.
 */
export function Seo(): null {
	const { pathname } = useLocation();

	useEffect(() => {
		const { title, description } = metaForPath(pathname);
		const url = SITE.url + (pathname === "/" ? "" : pathname.replace(/\/+$/, ""));

		document.title = title;
		setMeta("name", "description", description);
		setCanonical(url);

		setMeta("property", "og:type", pathname === "/" ? "website" : "article");
		setMeta("property", "og:site_name", SITE.name);
		setMeta("property", "og:title", title);
		setMeta("property", "og:description", description);
		setMeta("property", "og:url", url);
		setMeta("property", "og:image", SITE.ogImage);

		setMeta("name", "twitter:card", "summary_large_image");
		setMeta("name", "twitter:title", title);
		setMeta("name", "twitter:description", description);
		setMeta("name", "twitter:image", SITE.ogImage);
	}, [pathname]);

	return null;
}
