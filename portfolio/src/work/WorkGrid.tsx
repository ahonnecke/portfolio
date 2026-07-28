import { useSearchParams } from "react-router-dom";
import { WorkCard } from "./WorkCard";
import { FILTER_TAGS, workItems } from "./work.data";

export function WorkGrid(): JSX.Element {
	// The active tag lives in the URL (?tag=Python), so a filtered view is a
	// shareable/bookmarkable link and the back button works.
	const [params, setParams] = useSearchParams();
	const raw = params.get("tag");
	const active = raw && FILTER_TAGS.includes(raw) ? raw : null;

	const setActive = (tag: string | null) => {
		if (tag) {
			setParams({ tag });
		} else {
			setParams({});
		}
	};

	const count = (t: string) =>
		workItems.filter((w) => w.tags.includes(t)).length;
	const chips = FILTER_TAGS.filter((t) => count(t) > 0);
	const shown = active
		? workItems.filter((w) => w.tags.includes(active))
		: workItems;

	return (
		<section className="csSection">
			<h2 className="csSectionHeading">Work</h2>
			<p className="csSectionBlurb">
				Open-source tools, AI/LLM projects, talks, and redacted client case
				studies. Filter by tag.
			</p>

			<div
				className="workFilters"
				role="toolbar"
				aria-label="Filter work by tag"
			>
				<button
					type="button"
					className="workChip"
					aria-pressed={active === null}
					onClick={() => setActive(null)}
				>
					All
				</button>
				{chips.map((t) => (
					<button
						key={t}
						type="button"
						className="workChip"
						aria-pressed={active === t}
						onClick={() => setActive(active === t ? null : t)}
					>
						{t}
						<span className="workChipN">{count(t)}</span>
					</button>
				))}
				<span className="workCount">
					{shown.length} of {workItems.length}
				</span>
			</div>

			<div className="csGrid">
				{shown.map((item) => (
					<WorkCard key={item.to} item={item} />
				))}
			</div>
		</section>
	);
}
