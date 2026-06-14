import Reveal from "../dist/reveal.mjs";
import RevealHighlight from "../dist/plugin/highlight.mjs";
import RevealNotes from "../dist/plugin/notes.mjs";
import RevealZoom from "../dist/plugin/zoom.mjs";
import "../dist/reset.css";
import "../dist/reveal.css";
import "../dist/plugin/highlight/monokai.css";
import "./styles.css";

Reveal.initialize({
	hash: true,
	controls: true,
	progress: true,
	slideNumber: "c/t",
	center: true,
	width: 1280,
	height: 720,
	margin: 0.045,
	minScale: 0.2,
	maxScale: 1.35,
	transition: "slide",
	backgroundTransition: "fade",
	plugins: [RevealHighlight, RevealNotes, RevealZoom],
});

document.querySelectorAll("[data-asset]").forEach((frame) => {
	const source = frame.getAttribute("data-asset");
	const image = frame.querySelector("img");

	if (!source || !image) {
		return;
	}

	const probe = new Image();
	probe.onload = () => {
		image.src = source;
		frame.classList.add("has-image");
	};
	probe.src = source;
});
