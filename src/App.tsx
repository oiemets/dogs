import styles from './App.module.css';
import bindStyles from 'classnames/bind';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Menu, Logotype, Header, Search } from './components';
import {
	Voting,
	Breeds,
	Gallery,
	Favourites,
	Likes,
	Dislikes,
	NotFound,
	SearchResults,
} from './pages';

const styleNames = bindStyles.bind(styles);

function App() {
	const { pathname } = useLocation();
	const isHome = pathname === '/';

	return (
		<div className={styleNames('app', { home: isHome })}>
			<div className={styleNames('left')}>
				<div className={styleNames('main')}>
					<Logotype linkToRoot={!isHome} />
					<Header />
					<Menu />
				</div>
			</div>
			{isHome ? null : (
				<div className={styleNames('right')}>
					<Search />
					<Switch>
						<Route path='/search' component={SearchResults} />
						<Route path='/voting' component={Voting} />
						<Route path='/breeds' component={Breeds} />
						<Route path='/gallery' component={Gallery} />
						<Route path='/favourites' component={Favourites} />
						<Route path='/likes' component={Likes} />
						<Route path='/dislikes' component={Dislikes} />
						<Route component={NotFound} />
					</Switch>
				</div>
			)}
		</div>
	);
}

export default App;
