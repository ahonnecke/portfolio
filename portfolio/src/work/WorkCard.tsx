import { Link } from "react-router-dom";
import type { WorkItem } from "./work.data";

function Face({ item }: { item: WorkItem }): JSX.Element {
	return (
		<span className="csCard" style={{ backgroundImage: item.accent }}>
			<span className="csCardEyebrow">
				{item.eyebrow.map((e) => (
					<span key={e} className="csCardPill">
						{e}
					</span>
				))}
			</span>
			<span className="csCardTitle">{item.title}</span>
			<span className="csCardSummary">{item.blurb}</span>
			{item.footer && <span className="csCardStatus">{item.footer}</span>}
		</span>
	);
}

export function WorkCard({ item }: { item: WorkItem }): JSX.Element {
	if (item.external) {
		return (
			<a href={item.to} target="_blank" rel="noopener noreferrer">
				<Face item={item} />
			</a>
		);
	}
	return <Link to={item.to}>{<Face item={item} />}</Link>;
}
