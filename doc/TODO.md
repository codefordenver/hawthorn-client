
# TODOs:
## PHASE 1
- [ ] Implement wireframe in components
  - [ ] One prompt per page
  - [ ] Display prompt as head of page
  - [ ] Form to submit a response, below prompt
    - [ ] Show active user's avatar next to input form
    - [ ] List responses to the prompt below Form
    - [ ] Active user's response to prompt always displayed first in list of responses
- [ ] Show navs for authorized pages only
  - [ ] Show /login nav when not logged in
  - [ ] Show /logout nav when logged in
- [ ] clean up dependencies
- [ ] Initial deploy
## PHASE 2
- [ ] Error handling
  - [ ] Handle graphQL networkError
  - [ ] Handle unknown graphQL errors
- [ ] UI to add Prompts
  - what role can add Prompt?
- [ ] Get prettier working, already npm installed
- [ ] Site design
- [ ] Tests
- [ ] Automated Build
- [ ] Display published posts only
- [ ] Add new prompts
- [ ] Publish prompt
- [ ] Use consistent style - semicolons or not? what else is important in JS world? - Research linting
- [ ] Convert to typescript
- [ ] Create group
- [ ] Join group
## DONEs:
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
