<h1 align="center">@pebblo/logger</h1>
<p align="center">The logger that is used in the @pebblo applications</p>
<div align="center">
  <img src="https://awau.moe/8APmHio.png" width="100%" />
</div>

## Installation 
```bash
$ npm install @pebblo/logger
```
## How to use?
```ts
import Logger from '@pebblo/logger';

/*
* TITLE (Something like DATABASE, INFO)
* MESSAGE
* DATE BOOLEAN (Set to false if you don't want to see the date timestamp)
* COLORS ['red', 'blue'] 
* The first parameter is what the title color will be
* The second color parameter will be the message color
*/

Logger('ERROR', 'Oh no something went wrong!', true, ['red']);
```

## LICENSE
- Published under the MIT LICENSE.
## Credits
- Date function was made by my [friend](https://github.com/auguwu)

## Colors
```
blue
cyan
red
green
yellow
darkblue
magenta
white
black
brightblack
brightred
brightgreen
brifghtyellow
brightblue
brightmagenta
brightcyan
brightwhite
default
````