/**
 * Created by out_xu on 17/5/4.
 */

export default {
  mobile: /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/,
  password: /^\w{6,18}$/,
  mail: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  qq: /[1-9][0-9]{4,}/,
  number: /^[0-9]\d*$/,
  postCode: /^\d{6}$/,
  age: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
  chinese:  /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/,
  teamname: /^[\u4E00-\u9FA5\uF900-\uFA2D]{1,16}$/,
  studentId: /^\d{7,8}$/,
  english: /^[A-Za-z0-9]+$/,
  teamname2: /^[\w+\W]{1,16}$/,
  standrad15: /^.{1,20}$/,
  standrad16: /^.{3,20}$/
}