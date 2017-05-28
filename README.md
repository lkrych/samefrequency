# Same Frequency


[Same Frequency Live](samefrequency.io)

Same Frequency is a web application inspired by plug.dj, a web service that enables people from across the world to groove to music together. Same Frequency is a spin on this application that encourages people to listen to the radio together.


![Stations](https://res.cloudinary.com/heab4q3lg/image/upload/v1495840141/stations.png)

Same Frequency utilizes Ruby on Rails on the backend, a PostgreSQL database, and React with Redux framework on the frontend.

## Features

* Chat - using websockets
* Music Streaming - using the SHOUTcast API
* Stations - corresponding to different chatrooms
* User Profiles
* Hosting on Heroku
* New account creation, login, and guest/demo login

### Live Chat

![Live Chat](https://res.cloudinary.com/heab4q3lg/image/upload/v1495840141/live_chat.png)

When a user chooses a station, a websocket is opened up between their browser and the server. This socket is used to broadcast any messages sent by users that are also listening to the station. 

One of the more interesting problems I ran into while developing Same Frequency is that I needed to figure out a way to display changes to username and profile image during a live chat. I implemented this feature by normalizing the members of a chatroom in my redux state. Whenever a user changes their info and sends a message, the chat window rerenders with their new information.

```
import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/chat_actions';
import { selectAllMessages} from '../util/chat_util';
import merge from 'lodash/merge';

// parseforusers not shown!

const mergeUsers = (message, state) => {
  const author = selectAllMessages(message).map(newMessage => newMessage.author)[0];
  return merge({}, state, { [author.id]: author } );
};


const chatRoomUserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_MESSAGES:
      return parseForUsers(action.messages);
    case RECEIVE_MESSAGE:
      return mergeUsers(action.message, state);
    default:
      return state;
  }
};

export default chatRoomUserReducer;
```
The Chatroom Users Reducer updates state everytime a message is broadcasted through the websocket for the chatroom. It maintains a normalized state by calling the mergeUsers function which updates the information for the user who sent the message through the websocket.

### Streaming

Streaming from the SHOUTcast API is somewhat of a headache. The main reason being that the primary identifying id for each station changes every day. This means that it is difficult to maintain information about the state of a chatroom for more than 24 hours. One design decision that I had to make was to initiate a recurring job on my server every day to re-initialize chatroom objects and message objects in the Postgres database. 

Another reason that streaming is a pain is that the streams are served through the API in different formats. This means that I need to parse the streams by type in my StationsController. I used regex and built in URI parser to solve this problem. 

```
  def stream
    response = HTTParty.get("http://yp.shoutcast.com/sbin/tunein-station.pls?id=#{params[:id].to_i}").parsed_response
    begin
    uri = URI.extract(response).first
    matched = /^http:\/\/(?<stream>.*)/.match(uri)
      if IPAddress.valid? matched["stream"].split(":").first
        stream_uri = uri + "/;"
      elsif uri.include? "mp3"
        stream_uri = uri
      elsif matched["stream"].split(":").length > 1
        stream_uri = uri + "/;"
      else
        stream_uri = uri
      end

      render :json => stream_uri.to_json

    rescue
      render :json => ["Sorry! We couldn't find that stream."], status: 404
    end
  end
```

#### Resources used
<a href='http://www.freepik.com/free-photo/vintage-radio_1011596.htm'>Designed by Freepik</a>
<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>_"

![SHOUTcast logo](https://res.cloudinary.com/heab4q3lg/image/upload/v1496005167/shoutcast.png)

[Stations page frontend design inspiration](https://codepen.io/trungk18/pen/MepYXj)
