import React, { useState } from 'react';
import styled from 'styled-components';
import { Router, RouteComponentProps } from '@reach/router';
import SiderMenu from './SiderMenu';
import Header from './Header';
import overview from '../../overview/index';
import apply from '../../apply/index';
import transaction from '../../transaction/index';

const { Apply } = apply.components;
const { Overview } = overview.components;
const { Transaction } = transaction.components;

const RouterPage = (
	props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const DashboardContainer = styled.div`
	background-color: #fff;
	display: grid;

	grid-template-columns: 17em 1fr;
	grid-template-rows: 80px 1fr;

	grid-template-areas:
		'sidebar head head head'
		'sidebar main main main'
		'sidebar main main main'
		'sidebar main main main';

	/* grid-container height = 100% of viewport height */
	height: 100vh;

	@media screen and (max-width: 1253px) {
		grid-template-columns: 72px 1fr;
		grid-template-rows: 72px 1fr;
		grid-template-areas:
			'head head'
			'sidebar main';
	}
	@media screen and (max-width: 600px) {
		grid-template-columns: 70px 1fr;
		grid-template-rows: 72px 1fr;
		grid-template-areas:
			'head head'
			'sidebar main';
	}
`;
const OverviewContainer = styled.div`
	grid-area: main;
	margin-top: 20px;
`;

const DashBoardlayout = () => {
	const [navOpen, setNavOpen] = useState(true);
	const [tableData, setTableData] = useState({});

	const navClick = () => {
		setNavOpen(!navOpen);
	};

	return (
		<DashboardContainer>
			<Header navClick={navClick} navState={navOpen} />
			<SiderMenu navState={navOpen} />
			<OverviewContainer>
				<Router>
					<RouterPage
						path="/"
						pageComponent={<Overview navState={navOpen} />}
					/>
					<RouterPage
						path="/transactions"
						pageComponent={
							<Transaction
								navState={navOpen}
								newData={tableData}
							/>
						}
					/>
					<RouterPage
						path="/loan"
						pageComponent={
							<Apply
								navState={navOpen}
								setTableData={setTableData}
							/>
						}
					/>
				</Router>
			</OverviewContainer>
		</DashboardContainer>
	);
};

export default DashBoardlayout;
