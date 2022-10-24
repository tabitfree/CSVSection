import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}
	body {
		background: #fff;
		font-family: 'GroteskRegular', sans-serif;
		margin: 0;
		padding: 0;
	}
	.content-container {
		margin: 0 83px;
	}
	a {
		text-decoration: none;
		color: inherit;
		transition: all .3s ease;
	}
	p {
		margin: 0;
	}
	h1, h2 {
		font-size: 64px;
		font-style: normal;
		line-height: 1.1;
		font-weight: 400;
		margin: 0;
	}
	h3 {
		font-size: 32px;
		line-height: 1.1;
		margin: 0;
	}
	.s {
		font-size: 12px;
		line-height: 13.24px;
	}
	.m {
		font-size: 16px;
		line-height: 27px;
	}
	.xm {
		font-size: 18px;
		line-height: 1.1;
	}
	.l {
		font-size: 21px;
		line-height: 1.1;
	}
	.xl {
		font-size: 24px;
		line-height: 1.1;
	}
	.xxl {
		font-size: 32px;
		line-height: 1.1;
	}
`

export default GlobalStyle
