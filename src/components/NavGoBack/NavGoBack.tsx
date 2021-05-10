import React from 'react';
import bindStyles from 'classnames/bind';
import styles from './NavGoBack.module.css';
import { IconButton, Button, ButtonLabel } from '../../components';
import { useHistory, Link } from 'react-router-dom';

const styleNames = bindStyles.bind(styles);

type NavGoBackProps = {
	title: string;
	to?: string;
	idLabel?: string;
};

export const NavGoBack: React.FC<NavGoBackProps> = ({ title, to, idLabel }) => {
	const history = useHistory();
	const historyGoBack = () => history.goBack();
	return (
		<div className={styleNames('root')}>
			<IconButton
				icon='arrowLeft'
				variant='satin'
				onClick={historyGoBack}
				className={styleNames('icon')}
			/>

			{to ? (
				<>
					<Link to={to} className={styleNames('link')}>
						<Button variant='geraldine' labelClassName={styleNames('btn')}>
							{title}
						</Button>
					</Link>
					<ButtonLabel
						variant='geraldine'
						labelClassName={styleNames('idLabel')}
						active>
						{idLabel}
					</ButtonLabel>
				</>
			) : (
				<Button
					variant='geraldine'
					labelClassName={styleNames('btn', 'marginRight')}
					active>
					{title}
				</Button>
			)}
		</div>
	);
};
