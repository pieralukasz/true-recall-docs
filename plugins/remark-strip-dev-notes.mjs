import { visit } from 'unist-util-visit';

export function remarkStripDevNotes() {
	const isProd = process.env.NODE_ENV === 'production';
	return (tree) => {
		if (!isProd) return;
		visit(tree, (node, index, parent) => {
			if (
				node.type === 'containerDirective' &&
				node.name === 'caution' &&
				node.children?.[0]?.type === 'paragraph' &&
				node.children[0].children?.[0]?.value === 'My Notes'
			) {
				parent.children.splice(index, 1);
				return index;
			}
		});
	};
}
