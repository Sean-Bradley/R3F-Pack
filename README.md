# R3F-Pack

A simplified and maintained `react-scripts` alternative.

`react-scripts` is deprecated, but it was good while it lasted.

It now has many out of date packages and working with it sometimes requires quite a few manual band-aids.

So I created this `R3F-Pack`. I wrote it for my R3F examples, but it should work with your existing React code also.

`R3F-Pack` runs very similar to how `react-scripts` works, and your project structure remains the same.

- It serves the dev version on port 3000
- It auto opens the browser at address `http://localhost:3000`
- It enables Hot Module Reloading (HMR)
- It serves the development version from the `./public` folder
- `npm run build` builds a production quality version of your app, and will copy all static files & folders under `./public` to the `./build` folder ready for deployment
- It indicates 0 vulnerabilities when running `npm install`, at the time of writing this message

## Install

```bash
npm install r3f-pack --save-dev
```

And then replace the `start` and `build` commands in your existing `scripts` node in your projects `package.json`

```diff
{
    ...
    "scripts": {
-       "start": "react-scripts start",
+       "start": "r3f-pack start",
-       "build": "react-scripts build",
+       "build": "r3f-pack build"
    },
    ...
}
```

## Development 

To start in development mode,

```bash
npm start
```

A browser should open your React application at `http://localhost:3000`

## Production

To build production

```bash
npm run build
```

A production quality `bundles.js` will be compiled and all static files and folders under `./public` will be copied to the `./build` folder ready for deployment.

Upload or deploy the contents of the `./build` folder to the location served by your web server.
