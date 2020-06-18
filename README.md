# CMD Digital Playground

![Screenshot of the website](/docs/images/banner.png)

This progressive web app allows non-tech-y textwriters, developers, students and other collaborators to contribute to an environment that contains (in-depth) information about Communication and Multimedia Design, reflects CMD's view on Digital Interactive Design and displays their other activities or initiatives such as Battery or Golden Dot Awards.

Content is managed via a headless CMS, which allows for lots of freedom of the contributing developers/designers, whilst still accessible for sole content managers.

## Table of contents
- [Installation](#installation)
  - [Setting up the connection to Storyblok](#setting-up-the-connection-to-storyblok)
- [Usage](#usage)
- [Built with](#built-with)
  - [Rationale](#rationale)
    - [Eleventy](#eleventy)
    - [Nunjucks](#nunjucks)
    - [Storyblok](#storyblok)
    - [Storybook](#storybook)
- [Contributing](#contributing)
  - [To do's/Wishlist](#to-dos--wishlist)
- [License](#license)

## Installation

Use the package manager [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install CMD Digital Playground.

```bash
$ git clone https://github.com/kriskuiper/cmd-digital-playground.git && cd cmd-digital-playground
```
> Don't copy `$`.

Then run:
```bash
npm install
```

To create a distribution folder `_site` run:

``` bash
npm run build
```

To run a development environment & watching for changes run:

``` bash
npm run dev
```

### Setting up the connection to Storyblok
Rename `.env.example` to `.env`.

Fill in the public & preview keys that can be found at `Settings > API-Keys` in Storyblok.

Should look as follows:
```env
STORYBLOK_PREVIEW_KEY={YOUR_PREVIEW_KEY}
STORYBLOK_PUBLIC_KEY={YOUR_PUBLIC_KEY}
```

## Usage
Check out the [docs](https://github.com/kriskuiper/cmd-digital-playground/wiki) on a lot of how to's.

## Built with
- [Eleventy](#eleventy)
- [Nunjucks](#nunjucks)
- [Storyblok](#storyblok)
- _WIP [Storybook](#storybook), a pattern library to test components._

### Rationale

#### Eleventy
A solid framework that distributes the fetched data between the pages for you. Seamless compatibility with deployment tools like [Netlify](//netlify.com) & [Vercel](//vercel.com).

[See more](https://www.11ty.dev/)

#### Nunjucks
A templating language that stays close to HTML. To make treshold for co-creation as low as possible it was best to stay as true to HTML as possible, instead of using a fancy javascript framework.

[See more](https://mozilla.github.io/nunjucks/)

#### Storyblok
A CMS that has a live preview, (see the demo when you register), a big plus compared to other CMS's. It is a bit lackluster in the mental model compartment. Could use with a little less information overload to regular users.

[See more](https://storyblok.com)

> We made the project seperate from the CMS, so if you prefer a different CMS you only need to edit the files in `_data` folder to make a connection to your preferred CMS.

#### Storybook
Since the project will consist of a lot of loose components it would be nice to able to keep track of them in a library. Storybook can help with that.

> It's currently in the project but not linked to the components. A nice todo: link the components folder automatically to the Storybook library.

[See more](https://storybook.js.org/)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

For adding components to the library check the [wiki](/wiki).

### To do's / Wishlist
- [ ] New cool features (Open an issue first).
- [ ] Connection between components & storybook.
- [ ] (Optional) Another CMS, with a better mental model.


## License
[MIT](/LICENSE)
