
# Speed Tests

## Hotness List
http://bgg-json.azurewebsites.net/hot         40ms
http://bgg-api.herokuapp.com/a pi/v1/hotness   50ms
https://www.boardgamegeek.com/xmlapi2/hot    700ms

## Item Details
http://bgg-api.herokuapp.com/api/v1/thing?id=167791  40ms     status code 404
https://boardgamegeek.com/xmlapi2/thing?id=167791    80ms   works manually, not from server
http://bgg-json.azurewebsites.net/thing/31260   doesn't have all data, but reliable

## Collection
http://bgg-json.azurewebsites.net/collection/nathantbaker 50ms
https://boardgamegeek.com/xmlapi2/collection?username=nathantbaker 80ms

