import React, { useState } from 'react';
import styled from 'styled-components';
import {
	Button,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from '@chakra-ui/core';
import { navigate } from '@reach/router';

const toShortFormat = date => {
	const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
	const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
	const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

	return `${da}th ${mo} ${ye}`;
};

const ApplyContainer = styled.div<{ primary: boolean }>`
	display: grid;

	grid-template-columns: 1fr;=
	grid-template-rows: 72px 1fr;
	grid-gap: 20px;
	@media (min-width: 1253px) {
		margin-left: ${props => (props.primary ? '0px' : '-180px')};
	}

	grid-template-areas:
		'title'
		'form';
`;

const TitleContainer = styled.p`
	grid-area: title;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
`;
const Title = styled.div`
font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 40px;pp
color: #131313;
`;

const MainFormContainer = styled.div`
	grid-area: form;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20px;
`;

const FormContainer = styled.div`
	justify-items: center;
	display: grid;
	width: 80%;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto auto auto;
	grid-gap: 30px;

	grid-template-areas:
		'amount'
		'upload'
		'total'
		'tandc';
`;

const TermsContainer = styled.div`
	grid-area: tandc;
	display grid;
	align-items: center;
	justify-content: center
	grid-template-columns: 10px 1fr;
	grid-template-rows: 50px 1fr;
	grid-gap: 30px;

	grid-template-areas:
		'box text'
		'button button';
	
`;
const BoxContainer = styled.div`
	grid-area: box;
	display: flex;
	align-items: center;
`;

const TextContainer = styled(BoxContainer)`
	grid-area: text;
`;

const ButtonContainer = styled(BoxContainer)`
	grid-area: button;
	justify-content: center;
`;

const Terms = styled.p`
	font-family: Nunito Sans;
	text-align: center;
	font-style: normal;
	font-weight: bold;
	font-size: 13px;
	line-height: 15px;
	color: #000000e3;
`;

const SliderSub = styled.div`
	grid-area: amount;

	border: 1px solid #c4c4c4;
	border-radius: 5px;

	justify-content: center;
	height: auto;
	width: 50%;
	padding: 10px;
	display: grid;

	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;

	justify-content: space-between;

	grid-template-areas:
		'amount title'
		'slider slider'
		'min max';
	@media screen and (max-width: 800px) {
		width: 90%;
	}
`;

const TotalContainer = styled(SliderSub)`
	grid-area: total;
	display: grid;

	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;

	margin-top: 10px;

	justify-content: space-between;

	grid-template-areas:
		'ltitle lamount'
		'interest iamount'
		'total tamount';
`;

const UploadContainer = styled(SliderSub)`
	grid-area: upload;
	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: 30px 1fr 1fr;

	justify-content: space-between;

	grid-template-areas:
		'title'
		'input'
		'upload';
`;

const InputContainer = styled.div`
	grid-area: input;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SliderContainer = styled.div`
	grid-area: slider;
	display: flex;
	align-items: center;
`;

const AmountText = styled.p`
	grid-area: amount;
	display: flex;
	justify-content: flex-start;
	font-family: Nunito Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 13px;
	line-height: 18px;
	color: #000000e3;
`;

const LoanTitle = styled(AmountText)`
	grid-area: ltitle;
`;

const InterestTitle = styled(AmountText)`
	grid-area: interest;
`;

const TotalTitle = styled(AmountText)`
	grid-area: total;
`;

const MinAmount = styled(AmountText)`
	grid-area: min;
`;

const SliderText = styled(AmountText)`
	grid-area: title;
	display: flex;
	justify-content: flex-end;
	margin-right: 5px;
`;

const LoanAmount = styled(SliderText)`
	grid-area: lamount;
`;

const InteretAmount = styled(SliderText)`
	grid-area: iamount;
`;

const TotalAmount = styled(SliderText)`
	grid-area: tamount;
`;

const UploadTitle = styled(SliderText)`
	grid-area: title;
	display: flex;
	justify-content: flex-end;
	margin-right: 5px;
`;

const Upload = styled.div`
	grid-area: upload;
	margin: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const UploadText = styled.p`
	margin-left: 12px;
	font-family: Nunito Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 18px;
`;

const MaxAmount = styled(SliderText)`
	grid-area: max;
`;

const BoxLessSlider = styled(Slider)`
	border: none;
`;

const Input = styled.input`
	width: 50%;
`;

const Icon = styled.svg`
	width: 30px;
	height: 30px;
`;

const Apply = ({ navState, setTableData }) => {
	const min = 500;
	const max = 2500;
	const [amount, setAmount] = useState(min);
	const [checked, setChecked] = useState(false);
	const [loading, setLoading] = useState<boolean>(false);
	const handleCheck = e => {
		setChecked(e.target.checked);
	};
	const applyClick = () => {
		setTableData({
			amount: `$ ${amount}`,
			applicationDate: toShortFormat(new Date()),
			status: 'Pending',
			paymentStatus: 'N/A',
		});
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			navigate('/dashboard/transactions');
		}, 3000);
	};
	return (
		<ApplyContainer primary={navState}>
			<TitleContainer>
				<Title>Request for Loan</Title>
			</TitleContainer>
			<MainFormContainer>
				<FormContainer>
					<UploadContainer>
						<UploadTitle>Upload Bank Statement</UploadTitle>
						<InputContainer>
							<Input type="file" />
						</InputContainer>
						<Upload>
							<Icon viewBox="0 0 30 30">
								<g clipPath="url(#clip0)">
									<path
										d="M26.7982 9.74901C26.8886 9.26463 26.9344 8.77297 26.935 8.28022C26.9294 3.70378 23.2151 -0.00167202 18.6386 0.00379021C15.1548 0.00797792 12.0457 2.19074 10.8584 5.46596C8.73239 4.61968 6.32288 5.65701 5.47654 7.78297C5.40329 7.96699 5.34332 8.15598 5.29714 8.34856C1.90254 8.85624 -0.437718 12.0197 0.0699657 15.4143C0.525273 18.4587 3.14071 20.7111 6.21898 20.7098H11.398C11.97 20.7098 12.4338 20.2461 12.4338 19.674C12.4338 19.1019 11.97 18.6382 11.398 18.6382H6.21898C3.93073 18.6382 2.07576 16.7832 2.07576 14.495C2.07576 12.2067 3.93073 10.3517 6.21898 10.3517C6.79106 10.3517 7.2548 9.88799 7.2548 9.31592C7.25668 8.17182 8.18568 7.24585 9.32978 7.24774C9.87084 7.24865 10.3901 7.46119 10.7765 7.8399C11.1839 8.24144 11.8397 8.23664 12.2413 7.82922C12.392 7.67622 12.4915 7.48018 12.5259 7.26813C13.0882 3.88561 16.286 1.59937 19.6685 2.16161C23.051 2.72386 25.3373 5.92169 24.775 9.3042C24.7415 9.50588 24.698 9.7058 24.6448 9.90317C24.5257 10.3355 24.6984 10.7954 25.0726 11.0425C26.9793 12.3076 27.4993 14.879 26.2342 16.7856C25.4684 17.9397 24.1767 18.6348 22.7917 18.6381H19.6843C19.1123 18.6381 18.6485 19.1018 18.6485 19.6739C18.6485 20.246 19.1123 20.7097 19.6843 20.7097H22.7917C26.2241 20.7065 29.0039 17.9214 29.0007 14.489C28.999 12.6622 28.1935 10.9285 26.7982 9.74901Z"
										fill="black"
									/>
									<path
										d="M21.4517 14.7985L16.2728 9.61953C16.1763 9.52285 16.0615 9.44644 15.9351 9.39479C15.6817 9.29003 15.3971 9.29003 15.1437 9.39479C15.0173 9.4465 14.9025 9.52291 14.806 9.61953L9.62705 14.7985C9.22964 15.21 9.24105 15.8657 9.65254 16.2631C10.054 16.6507 10.6903 16.6507 11.0917 16.2631L14.5046 12.8522V27.9604C14.5046 28.5324 14.9684 28.9962 15.5405 28.9962C16.1125 28.9962 16.5763 28.5324 16.5763 27.9604V12.8523L19.9872 16.2632C20.3987 16.6606 21.0544 16.6492 21.4518 16.2377C21.8394 15.8363 21.8394 15.1999 21.4517 14.7985Z"
										fill="black"
									/>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect
											width="29"
											height="29"
											fill="white"
										/>
									</clipPath>
								</defs>
							</Icon>
							<UploadText>
								your bank statement for the last 3 months
							</UploadText>
						</Upload>
					</UploadContainer>
					<SliderSub>
						<AmountText>$ {amount}</AmountText>
						<SliderText>Loan Amount</SliderText>
						<MinAmount>$ {min}</MinAmount>
						<MaxAmount>$ {max}</MaxAmount>
						<SliderContainer>
							<BoxLessSlider
								color="teal"
								min={min}
								max={max}
								defaultValue={amount}
								onChange={setAmount}
							>
								<SliderTrack />
								<SliderFilledTrack />
								<SliderThumb />
							</BoxLessSlider>
						</SliderContainer>
					</SliderSub>
					<TotalContainer>
						<LoanTitle>Loan Amount</LoanTitle>
						<LoanAmount>$ {amount}</LoanAmount>
						<InterestTitle>Interest</InterestTitle>
						<InteretAmount>
							$ {(amount * 0.6).toFixed(2)}
						</InteretAmount>
						<TotalTitle>Repay Amount</TotalTitle>
						<TotalAmount>$ {(amount * 1.6).toFixed(2)}</TotalAmount>
					</TotalContainer>
					<TermsContainer>
						<BoxContainer>
							<input type="checkbox" onChange={handleCheck} />
						</BoxContainer>
						<TextContainer>
							<Terms>
								I have read and agree to the Terms and
								conditions of this Loan
							</Terms>
						</TextContainer>
						<ButtonContainer>
							<Button
								variantColor="teal"
								size="md"
								isDisabled={!checked}
								onClick={applyClick}
								isLoading={loading}
							>
								Apply
							</Button>
						</ButtonContainer>
					</TermsContainer>
				</FormContainer>
			</MainFormContainer>
		</ApplyContainer>
	);
};

export default Apply;
