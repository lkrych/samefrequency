# Schema Information

| key |    longhand      |
|-----|------------------|
| nn  | not null         |
| idx | has index        |
| pk  | primary key      |
| u   | unique           |


### users
| column name | data type | details  |
|-------------|-----------|----------|
|id           | integer   | nn,pk    |
|username     | string    | nn,idx,u |
|email        | string    | nn,idx,u |
|password_dig | string    | nn       |
|session_token| string    | nn,idx,u |

user has_many: friends
user has_many: favorite_channels

### channels

| column name | data type | details  |
|-------------|-----------|----------|
|id           | integer   | nn,pk    |
|title        | string    | nn,idx,u |
|genre        | string    | nn       |
|stream_url   | string    | nn, u    |
