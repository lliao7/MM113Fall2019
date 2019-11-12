console.log(tweets)

const tweet1 = () => {
    document.querySelector('#tweet3 .message').innerHTML = tweets.statuses[0].text;
    document.querySelector('#tweet3 .username').innerHTML = tweets.statuses[0].user.screen_name;
    document.querySelector('#tweet3 .date').innerHTML = tweets.statuses[0].created_at;
}

const tweet2 = () => {
    document.querySelector('#tweet2 .message').innerHTML = tweets.statuses[1].text;
    document.querySelector('#tweet2 .username').innerHTML = tweets.statuses[1].user.screen_name;
    document.querySelector('#tweet2 .date').innerHTML = tweets.statuses[1].created_at;
}

const tweet3 = () => {
    document.querySelector('#tweet1 .message').innerHTML = tweets.statuses[2].text;
    document.querySelector('#tweet1 .username').innerHTML = tweets.statuses[2].user.screen_name;
    document.querySelector('#tweet1 .date').innerHTML = tweets.statuses[2].created_at;
}

const showAll = () => {
    var arrayLength = tweets.statuses.length;
    console.log(arrayLength);
    for (var i = 0; i < arrayLength; i++) {
      newDiv = document.createElement('div');
      newDiv.className = "twitterClassOne";
      var textWrapper = document.createElement('div');
      textWrapper.className = "textClass";
      var textObject = document.createTextNode(tweets.statuses[i].text);
      textWrapper.appendChild(textObject);

      var userWrapper = document.createElement('div');
      userWrapper.className = "UserClass";
      var userObject = document.createTextNode(tweets.statuses[i].user.screen_name);
      userWrapper.appendChild(userObject);

     newDiv.appendChild(userWrapper);
     newDiv.appendChild(textWrapper);
    document.getElementById('all').appendChild(newDiv);

    }

}


