![PhotoBooth Logo](src/assets/brand/PhotoBooth.svg)

In the continuity of [Immich](https://immich.app), and [Google Photo links](https://photos.google.com/),
PhotoBooth hopes to create a familiar experience for photos that are expected to be published on Events'
website. It is supposed to be an alternative to existing applications such as [Piwigo](https://piwigo.org/),
but without a dedicated CMS.

**Javascript requirements:** While making use of Javascript, this project tries to respect users that do not want to enable Javascript 
just to browse a photo gallery. As such, most functionalities are available even when Javascript is not present,
nonetheless a better experience (animation, page transitions, additional metadata, better mobile support) is achieved 
when it is present.

**Online demo:** Since this project generates a entirely static website in the end, we can provide a demo using GitHub Pages: 
[https://fusetim.github.io/photobooth](https://fusetim.github.io/photobooth).

## Features

***TODO***

Roadmap in issue [#1](https://github.com/fusetim/photobooth/issues/1).

## Building & Deploying

It is a bit early to deploy this app in production, and the building steps
are evolving quickly. That said, it is based on standard dependencies for such
web applications.

PhotoBooth makes use of [NPM](https://npmjs.com), [AstroJS](https://astro.build) and [SolidJS](https://www.solidjs.com/).

* Install the dependencies

```bash
npm install
```

* Run the dev server

```bash
npm run dev
```

* Build the app (and its content) for deployment

```bash
npm run build
```

## Contributing

This project is not actively looking for contributors, nonetheless,
the current maintainer is open to contributions or help.

## Licensing

(2025) FuseTim - All right reserved.

No license has been discussed for the moment, but if you do want to make use of it, or contribute to the project, please make yourself heard in an issue.