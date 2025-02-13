# Website sources for Performance Task in Empowerment Technologies 12

This repository contains the sources for our performance task in Empowerment Technologies
involving building a single-page site promoting our senior high school strand for juniors
in Grade 10 using plain HTML and CSS, applying the concepts of layouting from our lessons
there.

You can see the deployed site I built for this activity via Cloudflare Pages at
<https://emtech-html.labs.andreijiroh.dev/>, with help from my activity partner
for idea brainstorming.

## Development

To ease the development of this single-page website lab on your own, I used
[Hono](https://hono.dev) to run a simple server serving static assets at
[`public`](./public/) directory without the need to set up Caddy or NGINX
configurations ahead of the time.

1. Install npm dependencies with `npm install`
2. Run hono-based local server for previews with `npm run start`
3. Point your browser at `http://localhost:${port}`, where port is the value
of `process.env.PORT` or the default `3000`.

## License

MPL-2.0 for the original code unless otherwise specified, excluding third-party content (see credits below).

### Credits

* [`npm:hono`](https://npmjs.com/package/hono) (MIT-licensed) for the preview server on dev
* [Bootstrap](https://getbootstrap.com) CSS framework and examples
