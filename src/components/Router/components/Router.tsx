import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import login from '../../login';
import dashboard from '../../dashboard';

const { Login } = login.components;
const { DashBoardLayout } = dashboard.components;

const RouterPage = (
	props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const AppRouter = () => (
	<Router>
		<RouterPage path="/" pageComponent={<Login />} />
		<RouterPage path="dashboard/*" pageComponent={<DashBoardLayout />} />
	</Router>
);

export default AppRouter;
