# API Endpoints

### Root

* `GET /` - Loads Splash page if not signed in/ loads channel view page if signed in.

## JSON API

### Users/User

* `GET /api/user/:id` - user info, like friends and favorite channels
* `POST /api/users` - create a new user
* `PATCH /api/user/:id` - update user info
* `DELETE /api/ser/:id` - remove profile


### Stations/Station

* `GET /api/stations` - retrieve all Channels
* `GET /api/station/:id` - retrieve one channel

#### Chat will be stateless.
