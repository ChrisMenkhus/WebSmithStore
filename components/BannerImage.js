import styled from 'styled-components';

export function BannerImage(p) {
	return (
		<Style src={p.src}>
			{p.children}
			<div id="img"></div>
		</Style>
	);
}

const Style = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;
	position: relative;

	#img {
		/* min-height: 78px;
		min-width: 397px;
		max-width: 800px;
		max-height: 800px; */
		height: 150px;
		width: 100%;

		background: rgb(255, 183, 0);
		background: linear-gradient(166deg, rgba(245, 100, 169, 1) 0%, rgba(255, 130, 0, 1) 100%);

		-webkit-mask-image: url(${(p) => (p.src ? p.src : '/icons/reader-outline.svg')});
		mask-image: url(${(p) => (p.src ? p.src : '/icons/reader-outline.svg')});
		mask-position: center;
		mask-size: cover;
		mask-size: 70%;
		mask-repeat: no-repeat;

		background: linear-gradient(320deg, #ff8200, #f564a9, #f564a9, #16db93);
		background-size: 600% 600%;

		-webkit-animation: GradientSwipe 20s ease infinite;
		-moz-animation: GradientSwipe 20s ease infinite;
		animation: GradientSwipe 20s ease infinite;

		@-webkit-keyframes GradientSwipe {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@-moz-keyframes GradientSwipe {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
		@keyframes GradientSwipe {
			0% {
				background-position: 0% 50%;
			}
			50% {
				background-position: 100% 50%;
			}
			100% {
				background-position: 0% 50%;
			}
		}
	}

	@media only screen and (max-width: 900px) {
		height: 100px;
	}
	@media only screen and (max-width: 1400px) {
		height: 130px;
	}
	@media only screen and (min-width: 1700px) {
	}
`;
