import Vue from 'vue'

function catchError(e) {
  console.log('catchError:', e)
  let err = e.data
  if (err) {
    console.error(err)
  } else {
    console.error(err)
  }
}

export default catchError
