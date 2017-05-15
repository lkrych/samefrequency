## Component Hierarchy

#### AuthFormContainer
* AuthForm

#### Channel View Container
* Channel View

#### Chat Container
* Chat bar/input
* Chat messages

#### User Profile Banner Container
* User profile info

#### Friend View Container
* Friend View

## Routes

| Path     |  Component           |
|----------|----------------------|
|"/sign-up"|"AuthFormComponent"   |
|"/sign-in"|"AuthFormComponent"   |
|"/"       |"ChannelViewContainer"|
|"/"       |"ChannelView"         |
|"/channel"|"ChatContainer"       |
|"/channel"|"ChatBar"             |
|"/channel"|"ChatMessage"         |
|"/channel"|"ChannelViewContainer"|
|"/channel"|"ChannelView"         |
|"/user"   |"UserProfileContainer"|
|"/user"   |"FriendViewContainer" |
|"/user"   |"FriendView"          |
|"/user"   |"ChannelViewContainer"|
|"/user"   |"ChannelView"         |
