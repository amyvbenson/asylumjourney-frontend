# asylumjourney-frontend-kirkless

Fork of the Asylum Journey for Kirlees Council https://github.com/Sheffugees/asylumjourney-frontend

## Dependencies

- Node, https://nodejs.org/en/download/
- Gulp, https://gulpjs.com/

## Getting Started

```
npm install
````

## Running locally

```
npm start
```

## Testing the production build locally

```
npm run build
npm run serve:dist
```

## Deployment

You will need to have access to the Firebase projects and install the CLI `npm install -g firebase-tools` to deploy.

### Deploying to production

In the **master branch**

```
npm run deploy-production
```

### Deploying to staging

In the **develop branch**

```
npm run deploy-staging
```

## Running tests

```
npm test
````

## Browser support

IE10+