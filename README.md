# node-fiftyone

Client library for 51.fi

## Installing

I should put this to npm soon. In the mean time, use it as NodeJS module but copy/paste it...

## Example

    var fty = require('fiftyone');

    fty.Fiftyone().shorten('http://example.com', function(result) {
      console.log(result);
      /* result is JSON, this example returns
      { 
        url: 'http://example.com',
        tinyurl: 'http://51.fi/EP',
        token: 'EP',
        qr: 'http://51.fi/api/v1/qr/EP' 
      }
      */
    });
    
