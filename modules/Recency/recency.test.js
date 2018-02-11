var recency = require('./recency');

describe('posts with various intervals of recency', function() {
  var currentDate = new Date();
  var twoMonthsAgo = new Date().setMonth(currentDate.getMonth() - 2);
  var oneMonthAgo = new Date().setMonth(currentDate.getMonth() - 1);
  var tenDaysAgo = new Date().setDate(new Date().getDate() - 10);
  var twoDaysAgo = new Date().setDate(new Date().getDate() - 2);
  var oneDayAgo = new Date().setDate(new Date().getDate() - 1);
  var fourHoursAgo = new Date().setHours(new Date().getHours() - 4);
  var oneHourAgo = new Date().setHours(new Date().getHours() - 1);
  var fifteenMinutesAgo = new Date().setMinutes(new Date().getMinutes() - 15);
  var oneMinuteAgo = new Date().setMinutes(new Date().getMinutes() - 1);
  var fifteenSecondsAgo = new Date().setSeconds(new Date().getSeconds() - 15);
  var oneSecondAgo = new Date().setSeconds(new Date().getSeconds() - 1);

  test('posted various intervals ago', function() {
    expect(recency(twoMonthsAgo, currentDate)).toBe("2 months ago")
    expect(recency(oneMonthAgo, currentDate)).toBe("1 month ago")
    expect(recency(tenDaysAgo, currentDate)).toBe("10 days ago")
    expect(recency(twoDaysAgo, currentDate)).toBe("2 days ago")
    expect(recency(oneDayAgo, currentDate)).toBe("1 day ago")
    expect(recency(fourHoursAgo, currentDate)).toBe("4 hours ago")
    expect(recency(oneHourAgo, currentDate)).toBe("1 hour ago")
    expect(recency(fifteenMinutesAgo, currentDate)).toBe("15 minutes ago")
    expect(recency(oneMinuteAgo, currentDate)).toBe("1 minute ago")
    expect(recency(fifteenSecondsAgo, currentDate)).toBe("15 seconds ago")
    expect(recency(oneSecondAgo, currentDate)).toBe("1 second ago")
  })

})
