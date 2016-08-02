import { renderToString } from 'react-dom/server';

import { baseReact } from '../../client/entry';

export function renderReact() {
	return async (ctx) => {
		const html = renderToString(
			baseReact()
		);

		ctx.render('base', {
			html,
			initialState: {
				what: "what",
			},
		});
	};
}
