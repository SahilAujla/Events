import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays"></div>
          {/* We might wanna add overlays here -- since we don't have an index.html file here as in react, we can create divs for overlays like this outside of main content */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

/*

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}


// Default structure of _document.js file

NOTE: We must follow this general structure even if we override the default _document.js file or Create one because it is not there by default.

*/
