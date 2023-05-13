import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const API_LENS_URL = "https://api.lens.dev";
const API_TALLY_URL = "https://api.tally.xyz/query";

export const lensClient = new ApolloClient({
  uri: API_LENS_URL,
  cache: new InMemoryCache(),
});

export const tallyClient = new ApolloClient({
  uri: API_TALLY_URL,
  cache: new InMemoryCache(),
});

export const GET_DEFAULT_PROFILE_LENS = gql`
  query getDefaultProfileLens($ownedBy: [EthereumAddress!]!) {
    profiles(ownedBy: $ownedBy) {
      id
      handle
      name
      avatarUrl
      bio
      websiteUrl
      twitterUsername
      githubUsername
      linkedinUsername
      whoMirroredPublicationId
    }
  }
`;


export const authenticate = gql`
  mutation Authenticate($address: EthereumAddress!, $signature: Signature!) {
    authenticate(request: { address: $address, signature: $signature }) {
      accessToken
      refreshToken
    }
  }
`