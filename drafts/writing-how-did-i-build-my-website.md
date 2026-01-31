---
title: How Did I Build My Website?
lang: en
...

Published on March 25, 2025. Last updated on December 28, 2025.

## Motivation

In the past, I built some portfolios to mainly showcase my small projects
when I was learning programming and job hunting. These portfolios were unnecessarily
complex, as they were built with [React.js](https://react.dev) or [Next.js](https://nextjs.org).
After landing my first programming job, I neglected the portfolio, neither
updating it nor writing any blog posts. At the beginning of 2025, I decided to
make a "fresh start" by rebuilding my website with a simpler UI and without
any JavaScript front-end frameworks or libraries.

As I have grown in my programming career, I have become more interested in
understanding how technologies work under the hood and sharing my thoughts on
topics that intrigue me. This new website will become a space for exploration,
experiment and writing.

The source code of my new website can be found at [namvnn/namn](https://github.com/namvnn/namn).

## Tech stack

Here are the major technologies I have used to build my website:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) defines the website's
structure and content.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) specifies the website's
styling.
- [GNU Bash](https://www.gnu.org/software/bash) defines scripts for building
the website, deploying the website and updating repeated HTML blocks across pages.
- [GNU Make](https://www.gnu.org/software/make) defines custom commands and
automates repeated tasks such as running a development server, building the website,
deploying the website, and cleaning up.
- [GNU sed](https://www.gnu.org/software/sed) updates repeated HTML blocks.
- [Pandoc](https://pandoc.org) converts Markdown to HTML.
- [GitHub Pages](https://pages.github.com) hosts the website.

## Styling

I have been using only pure CSS to style my website.

### CSS methodology

There are many CSS methodologies to architect, manage and maintain a website's
styling, such as BEM, OOCSS, SMACSS, Atomic CSS, ITCSS or CUBE CSS. Eventually,
I chose [CUBE CSS](https://cube.fyi). CUBE stands for Composition Utility Block
Exception, and obviously, CSS stands for Cascading Style Sheets. I knew this
methodology thanks to Kevin Powell amazing video,
[A look at the CUBE CSS methodology in action](https://youtu.be/NanhQvnvbR8).

The reason why I chose CUBE CSS is because its website mentions:

- _"CUBE CSS is a CSS methodology that's orientated towards simplicity,
pragmatism and consistency."_
- _"This differs somewhat to other popular methodologies like BEM, which are
very good in their own right, but also run against the grain of CSS."_

Those made me want to explore and experiment it.

It turns out that using  CUBE CSS has been a fun experience, even though I
initially had a hard time to understand what Block is and when Block should be
used.

I am not entirely confident that I am applying CUBE CSS correctly, but at least
I find it fun to work with.

### CSS Reset

I referenced Josh Comeau's [CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset).
His CSS reset is solid, simple, and sufficient in most cases. If you get a
chance, I highly recommend checking it out. He explains it in great detail.

### Code syntax highlighting

I copied Pandoc's [code syntax highlighting
style](https://pandoc.org/demos.html#:~:text=Syntax%20highlighting%20of%20delimited%20code%20blocks%3A),
then adjusted it to align with my preferences. My tweaked version of code syntax
highlighting in CSS is available at
[styles/code.css](https://github.com/namvnn/namn/blob/main/src/styles/code.css).
It supports both light and dark mode.

For example:

main.c
```c
#include <stdio.h>

int main(void) {
  printf("Hello world!");
}
```

main.js
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Content

### How is page content managed?

I have been using HTML directly to create and update pages. However, there is
a slight exception when creating a writing page, which will be explained in
more detail in the below section [How is a writing like this created?](#how-is-a-writing-like-this-created).

Writing pages in HTML directly introduces one issue. Some areas in all pages
are identical such as navigation bar and footer. If the number of pages grows
into the hundreds (due to the number of writing pages), keeping these areas
consistent and updated in all pages becomes a daunting and time-consuming task.
Therefore, I created `Block` built on top of [GNU sed](https://www.gnu.org/software/sed)
to solve this issue. A block is similar to a component in popular front-end
frameworks/libraries. It is a reusable group of HTML elements.

`Block` declaration syntax:

block
```html
<!-- block-start: block-name -->
<!-- block-end: block-name -->
```

Let's see `Block` in action with the example below.

1. Create files as the following tree.

files
```
scripts/
└── block.sh
src/
├── blocks/
│   └── header.html
├── home.html
├── index.html
└── projects.html
```

2. Define the `header` block. Note that while the indentation is expected to
be formatted properly when the `header` block is placed in HTML page files,
indentation does not matter in my case as I do not preserve it.

src/blocks/header.html
```html
    <header>
      <nav>
        <a href="/home.html">Home</a>
        <a href="/projects.html">Projects</a>
      </nav>
    </header>
```

3. Define the Home page with `header`'s start and end block tag.

src/home.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Home</title>
  </head>
  <body>
    <!-- block-start: header -->
    <!-- block-end: header -->
  </body>
</html>
```

4. Define the Projects page with `header`'s start and end block tag.

src/projects.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Projects</title>
  </head>
  <body>
    <!-- block-start: header -->
    <!-- block-end: header -->
  </body>
</html>
```

5. Run `scripts/block.sh` with the block name (i.e. `header`). The script can
be found in [scripts/block.sh](https://github.com/namvnn/namn/blob/main/scripts/block.sh).

shell
```sh
./scripts/block.sh header
```

6. As a result, the Home page and the Projects page are updated as follows.

src/home.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Home</title>
  </head>
  <body>
    <!-- block-start: header -->
    <header>
      <nav>
        <a href="/home.html">Home</a>
        <a href="/projects.html">Projects</a>
      </nav>
    </header>
    <!-- block-end: header -->
  </body>
</html>
```

src/projects.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Projects</title>
  </head>
  <body>
    <!-- block-start: header -->
    <header>
      <nav>
        <a href="/home.html">Home</a>
        <a href="/projects.html">Projects</a>
      </nav>
    </header>
    <!-- block-end: header -->
  </body>
</html>
```

7. Whenever `src/blocks/header.html` is updated, simply run the script in the
step 5 to update the `header` block across all pages.

### How is a writing like this created?

A writing is created through the following steps:

1. Create a Markdown file, e.g. `writing.md`.
2. Compose content in `writing.md`.
3. Run the following Pandoc command to convert Markdown to HTML, i.e.
`writing.md` to `writing.html`.

shell
```sh
pandoc writing.md \
       --toc \
       --standalone \
       --wrap=preserve \
       --highlight-style=kate \
       --output=writing.html
```

4. Copy content line by line from `writing.html` to the actual HTML page,
making adjustments to align with my website's styling.

As you can see, writing pages are first written in Markdown and then converted
to HTML. This is the only exception to not using HTML directly to create pages,
which is mentioned in the section [How is page content managed?](#how-is-page-content-managed).

## Interesting points during development

- [GNU sed](https://www.gnu.org/software/sed) is basically similar to Vim, but
non-interactive. It can perform basic text editing operations of an interactive
text editor.
- The more I work with Bash, the more I realize that it is extremely powerful.
- Pandoc is extremely powerful. I highly recommend checking out [Pandoc website](https://pandoc.org)
to behold its "God ability in file format conversion". By the way, it is
written in [Haskell](https://www.haskell.org).
- Living without JavaScript is happy.
- Writing pure CSS is fun.
- Writing pure HTML is fun.

Nam Nguyen
