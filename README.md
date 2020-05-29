## Meesterproef minor WebDev 1920

# CMD Digital Playground

[link to live demo]
[screenshot of website]

[deploy status]()


<details>
  <summary><strong>Table of Contents</strong> (click to expand)</summary>

<!-- toc -->

- [✅ To-do](#--to-do)
- [📋 Concept](#---concept)
- [🧐 Instruction manual](#---instruction-manual)
- [⚙️ Installation](#---installation)
    + [Dependencies](#dependencies)
    + [Scripts](#scripts)
- [🧑🏼‍ Actor Diagram](#------actor-diagram)
- [↔️ Interaction diagram](#---interaction-diagram)
- [🌍 Design pattern library](#---design-pattern-library)
- [👍🏽 Best practices](#-----best-practices)
- [🗃 Data](#---data)
  * [🐒 API](#---api)
    + [Properties](#properties)
    + [Rate limiting](#rate-limiting)
  * [💽 Data cleaning](#---data-cleaning)
- [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
- [🏫 Assignment](#---assignment)
  * [Week 1 - title 🐒](#week-1---title---)
    + [Sprint 1](#sprint-1)
  * [Week 2 - title 🛠](#week-2---title---)
    + [Sprint 2](#sprint-2)
  * [Week 3 - title 🎁](#week-3---title---)
    + [Sprint 3](#sprint-3)
  * [Rubric](#rubric)
- [ℹ️ Resources](#---resources)
  * [Credits](#credits)
  * [Inspiration sources](#inspiration-sources)
- [🗺️ License](#----license)

<!-- tocstop -->

</details>

## ✅ To-do
Our to-do list can be viewed inside [issues](https://github.com/kriskuiper/cmd-digital-playground/issues)

## 📋 Concept
_What does your app do, what is the goal? (passing butter)_

This progressive web app allows non-tech-y textwriters, developers, students and other collaborators to contribute to an environment that contains (in-depth) information about Communication and Multimedia Design, reflects CMD's view on Digital Interactive Design and displays their other activities or initiatives such as Battery or Golden Dot Awards.

Content is managed via a headless CMS, which allows for lots of freedom of the contributing developers/designers, whilst still accessible for sole content managers.

## 🧐 Instruction manual
_How to use this webapp?_   
We've described the usage of this webapp, FAQ, guidelines & more in the [wiki](https://github.com/kriskuiper/cmd-digital-playground/wiki) of this repo.

## ⚙️ Installation
Clone this repository to your own device:
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

#### Dependencies
``` json
  "devDependencies": {
    "@11ty/eleventy": "^0.11.0",
    "@rollup/plugin-commonjs": "^11.1.0",
    "@rollup/plugin-node-resolve": "^7.1.3",
    "chokidar-cli": "^2.1.0",
    "cross-env": "^7.0.2",
    "node-sass": "^4.14.1",
    "now": "^19.0.1",
    "npm-run-all": "^4.1.5",
    "rimraf": "^3.0.2",
    "rollup": "^2.10.5",
    "rollup-plugin-terser": "^5.3.0",
    "storyblok-js-client": "^2.5.0"
  }
```

#### Scripts
``` json
  "scripts": {
    "prebuild": "rimraf _site",
    "build": "cross-env ELEVENTY_ENV=production run-s build:*",
    "build:eleventy": "eleventy",
    "build:js": "rollup --config",
    "build:css": "node-sass src/assets/scss/app.scss _site/styles/index.css",
    "predev": "rimraf _site",
    "dev": "cross-env ELEVENTY_ENV=development run-p dev:*",
    "dev:eleventy": "eleventy --serve --watch --port 3031",
    "dev:js": "rollup --config --watch",
    "dev:css": "run-s build:css && chokidar \"src/assets/scss/*.scss\" -c \"npm run build:css\"",
    "now:connect": "now",
    "now:dev": "now dev",
    "now-dev": "run -p now-dev:*",
    "now-dev:eleventy": "eleventy --serve --watch --port $PORT",
    "now-dev:js": "run -s dev:js",
    "now-dev:css": "run -s dev:css"
  }
 ```

## 🧑🏼‍ Actor Diagram
_Which actors are there in your application? (actor diagram)_
![actor diagram]()

## ↔️ Interaction diagram
_How does flowed interaction through the application? (interaction diagram)_
![interaction diagram]()

## 🌍 Design pattern library
![screenshot of overview of components]()
[link to storybook static serve?)

## 🗃 Data & techstack
#### Storyblok (content)
We use Storyblok for content management.
It is an api-based/headless CMS. Developers can define content-types and nested components to receive structured JSON and the editor can use a visual preview completely decoupled from the website itself. Its fields can fully be extended.

#### Storybook (style guide)
We use Storybook to generate and display the Style Guide/Design Pattern Library in this project.
It is an open source tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.

#### Nunjucks (templating)
We use Nunjucks as a language to write our components in.
It is a Rich Powerful language with block inheritance, autoescaping, macros, asynchronous control, and more. Heavily inspired by jinja2. It supports all modern browsers.

#### 11ty (site generator)
We use 11ty to generate/serve a static site.
This is a simpler static site generator. An alternative to Jekyll. Written in JavaScript. Transforms a directory of templates (of varying types) into HTML. Works with HTML, Markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, Haml, Pug, and JavaScript Template Literals.

#### Zeit Now (deployment)
We use Now to host our static website.
It is a cloud platform for serverless deployment. It enables developers to host websites and web services that deploy instantly, scale automatically, and require no supervision, all with minimal configuration.


#### Rate limiting
Luckily, none of our used API's have a rate limiting other than 'unlimited'.

### 💽 Data cleaning
_What has been done with the fetched data?_What has been done with the initial data? Cleaning pattern?

```js
```

outcome:
```json
```

## 👯🏿‍ Features (+ wishlist)
_What would you like to add (feature wishlist / backlog)?_

See our [project board](https://github.com/kriskuiper/cmd-digital-playground/projects)

## 🏫 Assignment
<details>
  <summary></strong> (click to expand)</summary>
In this course we use the skills we learned throughout the past few weeks during the minor Web Development, to solve a problem for an actual client.

### Week 1 - title 🐒

#### Sprint 1
Goal: xxx
(Log)

### Week 2 - title 🛠

#### Sprint 2
Goal: xxx
(Log)

### Week 3 - title 🎁

#### Sprint 3
Goal: xxx
(Log)

</details>

### Rubric

Usually, the rubric by which we are rated for our projects in this minor would be placed here.
Now, this project is focused on our client so a rubric wouldn't be relevant.
More information can be found [here](https://github.com/cmda-minor-web/meesterproef-1920)

## ℹ️ Resources

### Credits

- [Kris Kuiper](https://github.com/kriskuiper)
- [Gijs Laarman](https://github.com/gijslaarman)
- [Deanna Bosschert](https://github.com/deannabosschert)
- Our superamazingteachers at the [minor WebDev @CMD](https://github.com/cmda-minor-web/)

### Inspiration sources

- [Atomic Design](https://paper.dropbox.com/ep/redirect/external-link?url=https%3A%2F%2Fbradfrost.com%2Fblog%2Fpost%2Fatomic-web-design%2F&hmac=bxAQgutWeHnYy7Y6Os64OpW%2FE1%2FEQ7vzPjXBp2UAb6E%3D) by Brad Frost
- second source..

## 🗺️ License
None.
