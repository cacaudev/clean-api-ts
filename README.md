[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/cacaudev/koa-api-template-ts)

# Koa API Template in Typescript

Typescript version of repo koa-api-template (REST API template
to be used on personal projects and for learning purposes)

🚀 UNDER CONSTRUCTION 🚀

## Guide

Use principle of separation of concerns to move the business logic away from the API routes.

### Prerequisites

- NodeJS > 10.0

### Installation

OBS: Add .env file on the config folder using the keys from the example on the same paste
before running the commands to create and populate database.

- Install Dependencies

```
$ npm install
```

## Roadmap

- [x] Koa Configuration
- [x] Typescript Configuration
- [x] Babel Configuration
- [x] TSLint Configuration
- [ ] Logging 'Layer' (Koa-morgan, Winston)
- [ ] Response Formatter 'Layer'
- [ ] Errors Emitter 'Layer'
- [ ] Sequelize Layer (Db acess and model implementation)
- [ ] Middleware Layer examples
- [ ] API Validation layer (Joi)
- [ ] Service Layer examples
- [ ] i18n Support (i18next) for Content Translation
- [ ] Timezone configuration
- [ ] Pagination support
- [ ] Email Service
- [ ] Bcrypt Authorization and Protection
- [ ] JWT Authentication Layer
- [ ] JSDoc/Swagger/ESDoc Documentation
- [ ] Unit tests (Jest and SuperTest)
- [ ] Add features with socket.io
