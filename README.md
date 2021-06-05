# NextJS & GraphQL product filter
The project is based on [create-next-app](https://nextjs.org/docs/api-reference/create-next-app) with some custom webpack config to load SVG's and the Typescript addition.

It was my first time working with the SWR package. It's really easy to use and similar to React Query, which I was already familiar with. Only thing I think SWR is lacking are the build-in devtools. [Furthermore a nice comparison between the libraries over here](https://react-query.tanstack.com/comparison).

The `pages/api` directory is mapped to `/api/*` and makes use of [apollo-micro-server](https://www.apollographql.com/docs/apollo-server/v1/servers/micro/) to supply a GraphQL api of the provided data set.

The components are separated in `Modules` and `Common`. Modules are bundled components which depend on each other. Common components are components that are self-contained and can be used through an entire app.

Please contact me for any technical question or a chat.
