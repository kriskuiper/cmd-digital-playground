# CMD Digital Playground

This progressive web app allows non-tech-y textwriters, developers, students and other collaborators to contribute to an environment that contains (in-depth) information about Communication and Multimedia Design, reflects CMD's view on Digital Interactive Design and displays their other activities or initiatives such as Battery or Golden Dot Awards.

Content is managed via a headless CMS, which allows for lots of freedom of the contributing developers/designers, whilst still accessible for sole content managers.

## Installation

Use the package manager [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install CMD Digital Playground.

```bash
$ git clone https://github.com/kriskuiper/cmd-digital-playground.git
```

Then, navigate to that folder and run:
```bash
npm install
```

When the dependencies are all set, run the pre-build:

``` bash
npm run build
```

When the build is finished, run project in development environment:

``` bash
npm run dev
```

<details>
  <summary>Dependencies</summary>

  ``` json
  "dependencies": {
    "dayjs": "^1.8.28",
    "dotenv-safe": "^8.2.0",
    "nunjucks": "^3.2.1"
  },
  "devDependencies": {
    "@11ty/eleventy": "^0.11.0",
    "@babel/core": "^7.9.6",
    "@rollup/plugin-commonjs": "^11.1.0",
    "@rollup/plugin-multi-entry": "^3.0.1",
    "@rollup/plugin-node-resolve": "^7.1.3",
    "@storybook/html": "^5.3.18",
    "babel-loader": "^8.1.0",
    "chokidar-cli": "^2.1.0",
    "cross-env": "^7.0.2",
    "node-sass": "^4.14.1",
    "node-sass-glob-importer": "^5.3.2",
    "now": "^19.0.1",
    "npm-run-all": "^4.1.5",
    "rimraf": "^3.0.2",
    "rollup": "^2.10.5",
    "rollup-plugin-terser": "^5.3.0",
    "slugify": "^1.4.0",
    "storyblok-js-client": "^2.5.0"
  }
  ```
</details>

<details>
 <summary>Scripts</summary>

 ```json
 "scripts": {
    "prebuild": "rimraf _site",
    "build": "cross-env ELEVENTY_ENV=production run-s build:*", // Generates static site in _site directory. Used by Netlify & Vercel to build the page.
    "build:eleventy": "eleventy",
    "build:js": "rollup --config",
    "build:css": "node-sass --importer node_modules/node-sass-glob-importer/dist/cli.js src/assets/scss/app.scss _site/styles/index.css",
    "predev": "rimraf _site",
    "dev": "cross-env ELEVENTY_ENV=development run-p dev:*", // Watcher for
    "dev:eleventy": "eleventy --serve --watch --port 3000",
    "dev:js": "rollup --config --watch",
    "dev:css": "run-s build:css && chokidar \"src/assets/scss/*.scss\" \"src/site/_includes/components/**/*.scss\" -c \"npm run build:css\"",
    "now:connect": "now",
    "now:dev": "now dev",
    "now-dev": "run-p now-dev:*",
    "now-dev:eleventy": "eleventy --serve --watch --port $PORT",
    "now-dev:js": "run-s dev:js",
    "now-dev:css": "run-s dev:css",
    "storybook": "run-s build:storybookcss && run-p storybook:*",
    "build:storybookcss": "node-sass --importer node_modules/node-sass-glob-importer/dist/cli.js src/assets/scss/app.scss src/storybook_stories/stories.css",
    "storybook:css": "chokidar \"src/assets/scss/*.scss\" \"src/site/_includes/components/**/*.scss\" -c \"npm run build:storybookcss\"",
    "storybook:dev": "start-storybook"
  }
 ```
</details>

## Usage

Check out the [docs](wiki) on a lot of how to's. Too much to explain in a readme.

Shoot a [Pull Request](pulls) in for new components.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
