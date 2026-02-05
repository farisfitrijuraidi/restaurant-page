# Restaurant Page

[Live Demo](https://farisfitrijuraidi.github.io/restaurant-page/)

This is a dynamically rendered restaurant homepage built to practice modern JavaScript bundling and module organization. This project was created as part of The Odin Project's JavaScript curriculum.

The primary goal was to move away from writing static HTML and instead use **Webpack** to bundle JavaScript modules, CSS, and assets, generating the entire DOM structure programmatically.

---

## Features

* **Webpack Bundling**: A custom-configured build environment that compiles JavaScript modules, CSS styles, images, and font files into a production-ready `dist` folder.
* **Tabbed Browsing Logic**: Implements a Single Page Application (SPA) architecture where content switches seamlessly between "Home", "Menu", and "Contact" views without reloading the browser.
* **Dynamic DOM Manipulation**: The entire user interface is constructed via JavaScript (using `document.createElement` and `appendChild`), demonstrating complete control over the DOM without relying on hard-coded HTML.
* **Asset Management**: Images and custom fonts are imported directly into JavaScript modules, allowing Webpack to process them as dependencies rather than static files.

---

## What I Learned

This project marked my transition from writing simple scripts to engineering a structured application.

Key takeaways include:
* **Webpack Configuration**: I learned to manually configure `webpack.config.js`, setting up Loaders (`css-loader`, `style-loader`, `html-loader`) and Plugins (`HtmlWebpackPlugin`) to handle non-JavaScript files.
* **ES6 Modules**: I practiced the "Separation of Concerns" principle by splitting code into logical modules (`home.js`, `menu.js`, `contact.js`) and exporting them to a central "switchboard" (`index.js`).
* **The "Asset Pipeline"**: I learned that images and fonts can be treated as modules. Importing them (e.g., `import image from './file.png'`) allows the bundler to optimize and manage file paths automatically.
* **SPA Architecture**: I built the foundational logic of modern frameworks: clearing a container (`div#content`) and re-rendering new components dynamically based on user interaction.
* **Advanced Deployment**: I mastered the `git subtree` command to deploy a specific build folder (`dist`) to a separate `gh-pages` branch, ensuring the live site runs the bundled code while the main branch keeps the source code clean.

---

## Acknowledgements

* This project is based on the [Restaurant Page assignment](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) from The Odin Project.
* **Theme**: Inspired by traditional Malaysian breakfast culture ("All Food Breakfast").
* **Assets**:
    * Fonts: 'Roboto', 'Delius', and 'Quintessential' via Google Fonts (hosted locally).