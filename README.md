You may also view this app online at: https://tamahelpchi.herokuapp.com/
This app was developed with a mobile UI in mind. For the best viewing experience, kindly go to your browsers developers tools (F12 in Chrome) and change to a mobile viewport (Ctrl-Shift-M in Chrome), preferably iPhone 6/7/8 Plus

## Running Locally

Because this app is made of two npm projects, there are two places to run `npm` commands:

1. **Node API server** at the root `./`
1. **React UI** in `react-ui/` directory.

### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```
