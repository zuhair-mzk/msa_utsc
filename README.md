# UTSC MSA Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

This repository contains the source code for the University of Toronto Scarborough's Muslim Students' Association (UTSC MSA) website. The website is built using React and is hosted on Vercel. It serves as a hub for all MSA-related activities, events, and resources.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Deployment

The website is hosted on Vercel, which automates the deployment process through integration with GitHub. Follow these steps to deploy:

1. Push changes to the GitHub repository.
2. Vercel will automatically detect the changes and trigger a new deployment.
3. Monitor the deployment status on the Vercel dashboard.

### Domain Setup

The custom domain `utscmsa.com` is managed through Namecheap. To configure the domain:

1. Add the custom domain in the Vercel dashboard.
2. Update the DNS settings in Namecheap to point to Vercel.

## Search Engine Analytics 
https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Autscmsa.com

## Project Structure

- `node_modules`: Contains all the project dependencies.
- `public`: Contains static assets like the favicon and `index.html` file.
  - `favicon.ico`: The favicon for the website.
  - `index.html`: The main HTML file for the website.
  - `manifest.json`: Configuration file for the web app manifest.
  - `prayer_times.csv`: CSV file containing prayer times data.
- `src`: Contains all the source code for the website.
  - `components`: Directory containing React components.
  - `images`: Directory for storing image assets.
  - `styles`: Directory for CSS files used for styling the website.
  - `App.js`: Main React component that sets up the application.
  - `index.js`: Entry point for the React application.
  - `package.json`: Lists the project's dependencies and scripts.

## Development

To develop and test the website locally, follow these steps:

1. Clone the GitHub repository to your local machine.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Make changes to the code and see them reflected in real time.
5. Commit and push changes to the GitHub repository. Vercel will automatically deploy the updates.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Additional Resources

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
