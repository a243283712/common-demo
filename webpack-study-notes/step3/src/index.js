import { text0 } from './text-0.js'
import { text1 } from './text-1.js'
import './index.less'
import './index.css'
const textFun = (text1, text0) => {
  let result = text1 + text0
  var obj = Object.assign({}, { result })
  let P = document.createElement('p')
  P.innerHTML = [1,2,3].join(' ')
  var arr = Array.from(new Set([1, 2, 3, 2]))
  var promise = new Promise((resolve, reject) => {
    if (
      arr.findIndex(n => {
        return n > 1
      })
    ) {
      resolve(123)
    }
  })
  promise.then(res => {
    console.log(res)
  })
  return obj
}
textFun(text1, text0)