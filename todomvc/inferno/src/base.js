import Inferno from 'inferno';
import { states, pluralize } from './share';

/**
 * Stateless Header component
 */
export function Head(props) {
	return (
		<header id="header">
			<h1>todos</h1>
			<input id="new-todo" autofocus onKeyDown={ props.onEnter }
				autocomplete="off" placeholder="What needs to be done?"
			/>
		</header>
	);
}

export const links = [
	{hash: '#/', name: 'All'},
	{hash: '#/active', name: 'Active'},
	{hash: '#/completed', name: 'Completed'}
];

/**
 * Stateless Footer component
 */
export function Foot(props) {
	return (
		<footer id="footer">
				<span id="todo-count">
					<strong>{ props.left }</strong> { pluralize(props.left, 'item') } left
				</span>
				<ul id="filters">
					{
						links.map(function (link) {
							return (
								<li>
									<a href={ link.hash } className={ link.name.toLowerCase() === props.route ? 'selected' : '' }>{ link.name }</a>
								</li>
							)
						})
					}
				</ul>
				{ props.done > 0 ? (
					<button id="clear-completed" onClick={ props.onClear }>Clear completed</button>
				) : null }
			</footer>
	);
}
