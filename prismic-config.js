import Prismic from '@prismicio/client';

const apiEndpoint = 'https://fantasypotionsstore.prismic.io/api/v2';

const accessToken = '';

// Client method to query documents from the Prismic repo
export const Client = (req = null) => Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
	const reqOption = req ? { req } : {};
	const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
	return {
		...reqOption,
		...accessTokenOption,
	};
};
