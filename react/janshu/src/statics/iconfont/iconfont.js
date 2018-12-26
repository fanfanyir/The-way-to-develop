import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1545793082401'); /* IE9*/
  src: url('iconfont.eot?t=1545793082401#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('iconfont.ttf?t=1545793082401') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1545793082401#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;






