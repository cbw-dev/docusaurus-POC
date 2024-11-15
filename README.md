# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

**Note**: Probably don't need "run" after ```npm``` in most of these commands.

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Test Before Deploy

```
$ npm run serve
```

### Deployment

ONLY USE:

```
$ USE_SSH=true npm run deploy
```