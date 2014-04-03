## &lt;web-resume&gt;

A Polymer element for online resume

### Demo

My online resume http://pvey.es

### Usage

1. Install bower

   ```sh
   npm install -g bower
   ```

2. Install web-resume using bower

   ```sh
   bower install web-resume
   ```

3. Import Web Components' polyfill:

    ```html
    <script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.2.0/platform.js"></script>
    ```

4. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/web-resume/web-resume.html">
    ```

5. Start using it!

    ```html
    <web-resume></web-resume>
    ```

### Setup

In order to run it locally you'll need a basic server setup, you can use python's SimpleHTTPServer

```sh
python -m SimpleHTTPServer
``` 
	
### Options

It has 10 attributes that will be parsed into layout

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`name`      | *string*                  | `Your Name`               | Your full name
`alias`      | *string*                  | `your-alias`               | Your alias, usually your username
`avatar`      | *string*                  | `null`               | Path to your avatar image (either absolute / relative URL)
`email`      | *string*                  | `example@domain.com`               | Your email address
`phone`      | *string*                  | `+1 234 56789`               | Your phone number
`site`      | *string*                  | `http://example.com`               | Your site URL
`country`      | *string*                  | `Your Country`               | Your Country
`skills`      | *string*                  | `null`               | Path to your `skills.json` file (see samples/skills.json)
`educations`      | *string*                  | `null`               | Path to your `educations.json` file (see samples/educations.json)
`works`      | *string*                  | `null`               | Path to your `works.json` file (see samples/works.json)
