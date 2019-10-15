
# TODOs:
## PHASE 1
- [ ] Login moves /oauth2/authorization call to service
  - call hawthorn-server/login
- [ ] logout
- [ ] clean up dependencies
- [ ] Initial deploy
## PHASE 2
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
