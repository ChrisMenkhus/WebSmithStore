import styled from 'styled-components';

export function FlexWrap(p) {
	return <Style>{p.children}</Style>;
}

const Style = styled.div`
	display: flex;
	flex-wrap: none;
	flex-direction: row;
	justify-content: top;
	align-items: center;

	@media only screen and (max-width: 900px) {
	}
	@media only screen and (max-width: 1700px) {
	}
	@media only screen and (min-width: 1700px) {
	}
`;
