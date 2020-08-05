import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import 'rsuite/lib/styles/index.less';
import router from './components/router';

const { Router } = router.components;

const App = () => (
	<ThemeProvider>
		<>
			<Router />
		</>
	</ThemeProvider>
);

export default App;
