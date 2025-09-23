
function randColor(){
  const colorArr = ['gray', 'red', 'yellow', 'blue', 'green', 'indigo', 'purple', 'pink']
  const randIndex = Math.floor(Math.random() * colorArr.length)

  return colorArr[randIndex]
}

export default function Badge ({children, edge="square", color=''}){

  color = color? color: randColor()
  const styleClass = `${edge} ${color}`

  return (
    <div className={styleClass}>
      {children}
    </div>
    )
}