# Bugs
- [ ] "index.js:1375 Warning: Invalid DOM property `class`. Did you mean `className`?
    in h1 (at Header.js:8)"
- [ ] Frontend fails catastrophically if it cannot reach backend. Can we just show static content?

# TODOs:
- [ ] User can add a new Thread on a Group, "Start a conversation"
- [ ] Update caches on content Post so that it shows up in Thread / Group on submit
- [ ] Contact / feedback form
- [ ] Tests
- [ ] Automated Build
- [ ] Versioning
  - [ ] Release notes
- [ ] Update `/about` with best practice on static pages for react
- [ ] HTTPS
- [ ] Use consistent style - semicolons or not? what else is important in JS world? - Research linting
- [ ] Convert to typescript
- [ ] Handle server connection failure gracefully
  - App does not render anything if it cannot communicate with the backend
- [ ] Error handling
  - Is this done?
  - [ ] Handle graphQL networkError
  - [ ] Handle unknown graphQL errors
- [ ] Get prettier working

- Design
- [ ] Create an app logo for header and favicon
- [ ] Full site design

## DONEs:
- [x] About Page
- [x] Add contributors page
- [x] Add an About / What is this? page
- [x] clean up dependencies
- [x] Proxy application request through nginx or apache
- [x] Custom domain
- [x] Carriage returns not being preserved in posts
- [x] Show prev/next navs only when there are prev/next prompts
- [x] Style interface
- [x] Make graphql server endpoint configurable
- [x] Infinite redirect on /logout
- [x] Error thrown on root URL if no published prompts returned from query
- [x] Initial deploy!!!
- [x] UI to add Prompts
  - what role can add Prompt?
- [x] Add new prompts
- [x] Publish prompt
- [x] Implement wireframe in components
  - [x] One prompt per page
  - [x] Display prompt as head of page
  - [x] Form to submit a response, below prompt
    - [x] List responses to the prompt below Form
- [x] Error handling
  - [x] Handle unauthorized requests
    - [x] Redirect to login on unauthorized
  - [x] Failure to get FusionAuth config
- [x] logout
- [x] Receive and pass back JWT / Refresh token cookie
- [x] Publish post
- [x] Authorization
  - [x] Authorized endpoint / resource example
- [x] OAuth2 Authorization Grant Flow
  - [x] Register user
  - [x] Login user
  - [x] Store session - storing token in localStorage, passing as Bearer token
- [x] Update calls to hawthorn-server to reflect new API design
- [x] Add routing
  - [x] Add react-router  
- [x] Pull components out to `src/components`
