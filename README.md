# Helo

## Front

- axios
- react-router-dom
- redux
- react-redux
- http-proxy-middleware

### Components
- App.js
- Dashboard.js
- Auth.js
- Form.js
- Post.js
- Nav.js

### routing

- Home - /
- Profile - /profile
- Crayon - /crayon

### redux state

INITIAL_STATE = {
    user,
    crayons
}

## Backend

- Express
- Massive
- body-parser
- express-session
- dotenv
- axios
-- Auth0

### Routing
- /auth
- /api/user-data
    - get {
        id,
        name,
        image,
    }
- /api/user-collection
    - get {
        user_id
        item_id,
        user_image,
        user_name,
        color,
        image,
        value,
        used
    }
    - post {
        color,
        image,
        value,
        user_id,
        used
    }
- /api/crayon-data
    - get {
        id,
        color,
        image,
        value,
        used
    }
- /api/crayon/id

## DB

users
- user_id SERIAL PRIMARY KEY
- auth0_id varchar not null
- email varchar not null
- profile_name text not null
- picture text not null

crayon box
- crayon_id SERIAL PRIMARY KEY
- user_id integer references users (user_id)
- color text not null
- image text not null
- value integer
- used float

## icebox
- media queries (responsiveness)
- decrement usage and value
- crayon api