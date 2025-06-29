Basic MERN Stack website for mood and energy checkup

## setup instructions
- make sure you have NODEJS, npm and typescript preinstalled globally on your device
- git clone https://github.com/ALI-KHALED-13/health-tt.git
- `cd` to project folder
- `npm install` at the root folder
- `cd` to client subfolder
-  `npm install` at 'client' subfolder to install frontend packages
- `cd` back to root folder

### Runnning the project. 2 modes:
* Production Mode
- at root folder run `npm run build`
- after build start server with `npm run start`
- use the website at http://localhost:3000 as the backend will be serving the built, production-ready and minimized frontend

* Alternatively, Dev Mode
- go to client/index.html and uncomment `<!-- if development -->` scripts, comment out `<!-- if production -->` script
- prepare two terminals open at the root folder
- at one run `npm run start` to run the backend
- at another run `npm run client` to run the frontend
- use the website at http://localhost:5173



## stack used
### backend
- Nodejs
- ExpressJS & TS

### Frontend
- Reactjs + TS
- Styled.components for styling
- Vite as a bundler

## Implementation approach
- setting a basic express server for handling the single post request, also making the backend server serve the frontend
- setting frontend with vite for fast bundling and build customization
- setting global styles and theme/colors with styled.components
- using the help of phosphore react icons that is tree-shakable for minimal bundle size
- building 4 useful and reusable general React components
- setting up the check-in form and wiring it with the backend

## design decisions
* building useAsync and useAsyncFunc for asynchronous request
- these are 2 custom hooks that I built over my carear years which I use whenever building smth simple that doesn't require the overkill of state managment options with caching like react query or RTK query, yet provides useful loading and error states
- useAsync is for GET requests that are to be fired immediatly
- useAsyncFunc is for async functions that are to be called on demand (GET, POST.. etc)

* building the slider
- there are many ways to build a slider, but I chose to go with what seems most semantic HTML-wise to me, using the native `<meter>` element with radio inputs as step points

## one thing I'd improve if given more time
- testing the slider component more and making it support dragging (mouse or with touch) as I built this on the fly really
