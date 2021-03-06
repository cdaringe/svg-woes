var html = require('choo/html')

var TITLE = '🚂🚋🚋'

var LOADER = html`
<path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z" />
`

// var LOADER = html`
// <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z">
// <animateTransform attributeType="xml"
//   attributeName="transform"
//   type="rotate"
//   from="0 20 20"
//   to="360 20 20"
//   dur="0.5s"
//   repeatCount="indefinite"/>
// </path>
// `

module.exports = function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <div class="loader loader--style1" title="0">
      <h1>uncomment LOADER in \`views/main.js\`</h1>
      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
        <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" />
        ${LOADER}
      </svg>

      <style>
      body{
        padding: 1em;
        background: #2B3134;
        color: #777;
        text-align: center;
        font-family: "Gill sans", sans-serif;
        width: 80%;
        margin: 0 auto;
      }
      h1{
        margin: 1em 0;
        border-bottom: 1px dashed;
        padding-bottom: 1em;
        font-weight: lighter;
      }
      p{
        font-style: italic;
      }
      .loader{
        margin: 0 0 2em;
        height: 100px;
        width: 20%;
        text-align: center;
        padding: 1em;
        margin: 0 auto 1em;
        display: inline-block;
        vertical-align: top;
      }

      /*
        Set the color of the icon
      */
      svg path,
      svg rect{
        fill: #FF6700;
      }
      </style>
    </div>
  `
}
