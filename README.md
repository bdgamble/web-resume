# &lt;web-resume&gt;

A Polymer element for online resume

## Usage

1. Install bower

   ```sh
   $ npm install -g bower
   ```

2. Install web-resume using bower

   ```sh
   $ bower install web-resume
   ```

3. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

4. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/web-resume/web-resume.html">
    ```

5. Start using it!

    ```html
    <web-resume></web-resume>
    ```

## Demo

To see how to use, see demo files (`demo.html`).

In order to run it locally you can use python's `SimpleHTTPServer` or using `node` to start `demo.js` file 

```sh
# using python
$ python -m SimpleHTTPServer

# using node
$ npm install
$ node demo.js
```

Open http://localhost:8000/demo.html in your browser!

## Elements

- [WIP] Summary (`&lt;resume-summary&gt;`)
- Personal info (`&lt;resume-personal&gt;`)
- Work experiences (`&lt;resume-experience&gt;`)
- Education history (`&lt;resume-experience&gt;`)
- [WIP] Skills (`&lt;resume-skill&gt;`)
- [WIP] Projects (`&lt;resume-project&gt;`)

## License

MIT
