import React, { useState } from 'react';
import styled from 'styled-components';
import grace from '../../../assets/images/grace.jpg';

const HeaderContainer = styled.div<{ primary: boolean }>`
	display: flex;
	grid-area: head;
	border-bottom: 0.5px solid #dfe0eb;
	background-color: #fff;
	align-items: center;
	justify-content: space-between;
	color: #545454;
	margin-left: ${props => (props.primary ? '10px' : '-180px')};
	padding: 10px;
	@media (max-width: 1253px) {
		width: 97%;
		position: fixed;
		margin-left: 10px;
	}
`;

const RightNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const UserName = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 18px;
	font-weight: 600;
	margin-right: 10px;
	letterspacing: 0.2px @media (max-width: 375px) {
		display: none;
	}
`;

const Icon = styled.svg`
	width: 40px;
	height: 40px;
	padding-top: 15px;
`;

const MenuImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;

const Header = ({ navClick, navState }) => {
	return (
		<HeaderContainer primary={navState}>
			<div onClick={navClick}>
				<Icon viewBox="0 0 40 40">
					<line
						y1="1"
						x2="34"
						y2="1"
						stroke="#323232"
						strokeWidth="2"
					/>
					<line
						y1="9.5"
						x2="34"
						y2="9.5"
						stroke="#323232"
						strokeWidth="2"
					/>
					<line
						y1="18"
						x2="34"
						y2="18"
						stroke="#323232"
						strokeWidth="2"
					/>
				</Icon>
			</div>
			<RightNav>
				<Icon viewBox="0 0 40 40">
					<path
						d="M8.00002 19C9.10377 19 9.99908 18.1047 9.99908 17H6.00096C6.00096 18.1047 6.89627 19 8.00002 19ZM14.731 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.9994 4.65125V4C8.9994 3.44781 8.5519 3 8.00002 3C7.44815 3 7.00065 3.44781 7.00065 4V4.65125C4.70502 5.12812 3.00252 7.07188 3.00252 9.5C3.00252 12.6969 1.87283 13.6728 1.26908 14.3216C1.08158 14.5231 0.998459 14.7641 1.00002 15C1.00346 15.5125 1.40565 16 2.00315 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9185 14.5228 14.731 14.3216Z"
						fill="#C5C7CD"
					/>
					<circle
						cx="13"
						cy="5"
						r="3.75"
						fill="#FF1111"
						stroke="#F7F8FC"
						strokeWidth="1.5"
					/>
				</Icon>
				<UserName>Grace Omojola</UserName>
				<MenuImage src={grace} />
			</RightNav>
		</HeaderContainer>
	);
};

export default Header;
