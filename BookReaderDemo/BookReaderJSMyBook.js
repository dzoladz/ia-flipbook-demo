//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
function instantiateBookReader(selector, extraOptions) {
  selector = selector || '#BookReader';
  extraOptions = extraOptions || {};
  var options = {
    data: [
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/0.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/blank_w.jpg' },
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/1.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/2.jpg' },
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/3.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/4.jpg' },
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/5.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/6.jpg' },
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/7.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/8.jpg' },
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/9.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/10.jpg' },
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/11.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/12.jpg' },
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/13.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/14.jpg' },
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/15.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/16.jpg' },
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/17.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/18.jpg' },
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/19.jpg' },
      ],
      [
        { width: 1185, height: 919,
          uri: '../BookReaderDemo/assets/images/21.jpg' },
      ]
    ],

    // Book title and the URL used for the book title link
    bookTitle: 'BookReader Demo',
    bookUrl: '../index.html',
    bookUrlText: 'Back to Demos',
    bookUrlTitle: 'This is the book URL title',

    // thumbnail is optional, but it is used in the info dialog
    thumbnail: '../BookReaderDemo/assets/images/0.jpg',
    // Metadata is optional, but it is used in the info dialog
    metadata: [
      {label: 'Title', value: 'Lines'},
      {label: 'Illustrations', value: 'Jaden Karras'},
      {label: 'Author', value: 'Derek Zoladz'},
      {label: 'Demo Info', value: 'This demo shows how one could use BookReader with their own content.'},
    ],

    // Override the path used to find UI images
    imagesBaseURL: '../BookReader/images/',

    ui: 'full', // embed, full (responsive)

    el: selector,

    startFullscreen: true,
  };
  $.extend(options, extraOptions);
  var br = new BookReader(options);
  br.init();
}