Speech recognition and word detection in react (IMPORTANT: this is only compatible with Chrome and Opera so far: http://caniuse.com/#feat=speech-recognition)
===

## Installation

```sh
npm install react-speech-recognizer
```

## Description

Make a list of elements (array) sortable by drag and drop. Allows to specify a customizable placeholder to be displayed on the drop area.
Allows to customize the style of items at every step (normal, being dragged, placeholder).
The component supports both horizontal and vertical lists. The component uses interact.js for crossbrowser dragging (see [http://interactjs.io](http://interactjs.io/) for more details).
Works with items of variables width (in %)  as well as static width.

SUPPORTS IOS AND TOUCH GESTURES (tested on ipad and safari)

## Demo

[Here](http://experiments.thomschell.com/react-speech-recognizer/build/)

## Usage

Import the component :

```js
import DragSortableList from 'react-drag-sortable'
```

Use the component :
```jsx
<DragSortableList items={list} placeholder={placeholder} onSort={onSort} dropBackTransitionDuration={0.3} type="vertical"/>
<DragSortableList items={list} onSort={onSort} type="horizontal"/>
```

## Full example

Check out the `src/Demo.js` file.

## Tests

These will be added soon. Please do not hesitate to add some !

## About the Author

I am a full-stack Javascript developer based in Lyon, France.

[Check out my website](http://www.thomschell.com)

## License

react-speech-recognizer is dual licensed under the MIT license and GPL.
For more information click [here](https://opensource.org/licenses/MIT).