![npm](https://img.shields.io/npm/v/r3f-pack) ![npm](https://img.shields.io/npm/dw/r3f-pack)

# R3F-Pack

A simplified and maintained `react-scripts` alternative.

![R3F-Pack Logo](./img/r3f-pack-logo-1024x512.png)

`react-scripts` is deprecated, but it was good while it lasted.

It now has many out of date dependencies and working with it sometimes requires quite a few manual band-aids.

So I created this `R3F-Pack`. I wrote it for my [R3F examples](https://sbcode.net/react-three-fiber/examples/), and it may work with your existing React code also.

`R3F-Pack` runs very similar to how `react-scripts` works, and your project structure remains the same.

- It serves the dev version on port 3000
- It auto opens the browser at address `http://localhost:3000`
- It enables Hot Module Reloading (HMR)
- It serves the development version from the `./public` folder
- `npm run build` builds a production quality version of your app, and will copy all static files & folders under `./public` to the `./build` folder ready for deployment
- Production `bundle.js` contains a hash in its name to prevent caching
- It indicates 0 vulnerabilities when running `npm install`, at the time of writing this message

![Zero vulnerabilities](./img/0vulnerabilities.jpg)

## Install

First uninstall `react-scripts`

```bash
npm uninstall react-scripts
```

Next, install `r3f-pack`

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

Visit http://127.0.0.1:3000

## Production

To build production

```bash
npm run build
```

A production quality `bundle.js` will be compiled and all static files and folders under `./public` will be copied to the `./build` folder ready for deployment.

Upload or deploy the contents of the `./build` folder to the location served by your web server.

To test your production build locally you can use `http-server`

Install it if you don't already have it.

```bash
npm install --global http-server
```

Start it

```bash
http-server .\build\
```

or if using PowerShell

```bash
http-server.cmd .\build\
```

Visit http://127.0.0.1:8080

## Troubleshooting

This is quite a minimal project, and only mimics the functionality of `react-scripts` that I actually used. If it is missing something that you need, I may be able to add it, or if you know how to do it yourself, then you can make a pull request.

### babel-loader doesn't exist

`r3f-pack` and `react-scripts` share some dependencies. However, you can uninstall `react-scripts` before you install `r3f-pack` if you want to keep your code and dependencies neater.

If you uninstall `react-scripts` <u>after</u> you've installed `r3f-pack`, then you will have also uninstalled some dependencies also required of `r3f-pack`

So, first uninstall `react-scripts`

```bash
npm uninstall react-scripts
```

and then install `r3f-pack`

```bash
npm install r3f-pack --save-dev
```

Regards

Sean
