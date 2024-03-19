// display content in calcscreen
const displayContent = (content)=>{
  calcScreen.value += content
}
// clear content of clacScreen
const clearContent = ()=>{
  calcScreen.value = ""
  calcScreen.placeholder = "0"
}
// result display in calcscreen
const showResult = ()=>{
  try{
    calcScreen.value = eval(calcScreen.value)
  }catch{
    calcScreen.value = ""
    calcScreen.placeholder = "Invalid Expression"
  }finally{

  }
}
// remove last
const removeLast = ()=>{
  calcScreen.value =  calcScreen.value.slice(0,-1)

}