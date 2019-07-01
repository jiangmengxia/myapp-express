export default {
  // countDown(leftTime) {
  //   /*输入的是秒数*/
  //   // leftTime = leftTime * 1000
  //   let d, h, m, s;
  //   if (leftTime > 0) {
  //     d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
  //     h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
  //     m = Math.floor(leftTime / 1000 / 60 % 60);
  //     s = Math.floor(leftTime / 1000 % 60);
  //   }
  //   // console.log(d, ' ', h, ' ', m, ' ', s)
  //   let str = '';
  //   if (d > 0) {
  //     str += d + '天 '
  //   }
  //   // console.log('hour:',h)
  //   if (h >= 0) {
  //     if (h > 9)
  //       str += h + ':'
  //     else str += '0' + h + ':'
  //   }
  //   if (m >= 0) {
  //     if (m > 9)
  //       str += m + ':'
  //     else
  //       str += '0' + m + ':'
  //   }
  //   if (s >= 0) {
  //     if (s > 9)
  //       str += s
  //     else
  //       str += '0' + s
  //   }
  //   return str;
  // },
  // /*复制文本*/
  // copyText(text,cb) {
  //   let input = document.createElement('input')
  //   document.body.appendChild(input);
  //   input.value = text
  //   input.select()
  //   document.execCommand("Copy");
  //   input.remove()
  //   if(cb) cb()
  // }
}
