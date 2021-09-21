import { createGlobalStyle, ThemeProvider } from 'styled-components';

// import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />;
			</ThemeProvider>
		</>
	);
}

const GlobalStyle = createGlobalStyle`
      :root {
	--main-bg-color: #e1e1e1;
	--secondary-bg-color: #eff0f1;
	--tertiary-bg-color: #212121;
	--main-font-color: #212121;
	--secondary-font-color: #16db93;
	--tertiary-font-color: #6f6f6f;
}

@font-face {
	font-family: 'Post No Bills Jaffna';
	src: url('/fonts/Post No Bills Jaffna ExtraBold 800.ttf');
	font-style: bold;
	font-weight: 800;
	font-display: swap;
}

html,
body {
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
		sans-serif, pPost No Bills Jaffna;

	background-color: var(--main-bg-color);
	color: #212121;
	font-size: 32px;
	overflow-x: hidden;
}

:focus {
	outline-style: none;
}

a {
	color: inherit;
	text-decoration: none;
}

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

h1 {
	font-size: 0.5rem;
}

img {
	cursor: pointer;
}

button {
	cursor: pointer;
	outline-style: none;
	border: none;
}

main {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}

    `;

const theme = {
	colors: {
		primary: '#0070f3',
	},
};
