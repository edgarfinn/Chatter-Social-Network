module.exports = function(datePosted, currentDate) {
  var secondsAgo = Math.floor((currentDate - datePosted) / 1000);

  var secondsIn = {
    oneMinute: 60,
    oneHour: 3600,
    oneDay: 86400,
    thirtyDays: 2592000,
    oneYear: 31536000
  }

  var interval = Math.floor(secondsAgo / secondsIn.oneYear)

  if (interval > 1) {
    return interval + " years ago"
  } else if (interval === 1) {
    return interval + " year ago"
  }
  interval = Math.floor(secondsAgo / secondsIn.thirtyDays)
  if (interval > 1) {
    return interval + " months ago"
  } else if (interval === 1) {
    return interval + " month ago"
  }
  interval = Math.floor(secondsAgo / secondsIn.oneDay)
  if (interval > 1) {
    return interval + " days ago"
  } else if (interval === 1) {
    return interval + " day ago"
  }
  interval = Math.floor(secondsAgo / secondsIn.oneHour)
  if (interval > 1) {
    return interval + " hours ago"
  } else if (interval === 1) {
    return interval + " hour ago"
  }
  interval = Math.floor(secondsAgo / secondsIn.oneMinute)
  if (interval > 1) {
    return interval + " minutes ago"
  } else if (interval === 1) {
    return interval + " minute ago"
  }
  if(Math.floor(secondsAgo) > 1) {
    return Math.floor(secondsAgo) + " seconds ago"
  }
  return Math.floor(secondsAgo) + " second ago"
}
