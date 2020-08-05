import React from 'react';
import styled from 'styled-components';
import { Table } from 'rsuite';
import { data } from '../constants';

const { Column, HeaderCell, Cell } = Table;

const TransactionContainer = styled.div<{ primary: boolean }>`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 40px 1fr;
	grid-template-areas:
		'title'
		'table';
	width: 65%;
	@media (max-width: 800px) {
		width: 80%;
	}
	@media (min-width: 1253px) {
		margin-left: ${props => (props.primary ? '0px' : '-180px')};
	}
`;

const Center = styled.div`
	display: flex;
	justify-content: center;
`;

const Title = styled.div`
	grid-area: title;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const TitleText = styled.p`
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 19px;
	line-height: 24px;
	letter-spacing: 0.4px;
	color: #252733;
	margin-left: 10px;
`;
const TableContainer = styled(Title)`
	grid-area: table;
	display: block;
	padding-right: 50px;
`;

const Transaction = ({ navState, newData }) => {
	return (
		<Center>
			<TransactionContainer primary={navState}>
				<Title>
					<TitleText>Loan History</TitleText>
				</Title>
				<TableContainer>
					<Table autoHeight data={[...data, newData]}>
						<Column width={200} align="center" resizable fixed>
							<HeaderCell>Amount</HeaderCell>
							<Cell dataKey="amount" />
						</Column>

						<Column width={200} resizable>
							<HeaderCell>Application Date</HeaderCell>
							<Cell dataKey="applicationDate" />
						</Column>

						<Column width={200} resizable>
							<HeaderCell>Status</HeaderCell>
							<Cell dataKey="status" />
						</Column>

						<Column width={200} resizable>
							<HeaderCell>Payment Status</HeaderCell>
							<Cell dataKey="paymentStatus" />
						</Column>
					</Table>
				</TableContainer>
			</TransactionContainer>
		</Center>
	);
};

export default Transaction;
