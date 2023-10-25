
const GrandChild = (props) => {
  console.log("props ->", props)
  const birthYear = 2023 - props.age

return (
  <div>
    I'm GrandKid {props.firstName} and I was born in {birthYear} {props.pet}
  </div>
)
}

function ChildComponent() {
  
  return (
    <div>
    <h2>Hi I'm a child</h2>
    
    <GrandChild firstName={"Michael"}  age={1} pet={"🐊"} />
    <GrandChild firstName={"John"} age={50} pet={"🦍"} />
    <GrandChild firstName={"Sean"}  age={7} pet={"🦖"} />
    <GrandChild firstName={"Jason"} age={5} pet={"🐍"} />
    </div>
  )
}
export default ChildComponent