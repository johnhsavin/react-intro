function SingleCoffee(props) {
  return(
    <p>{props.title} -- {props.description}</p>
  )
}

function CoffeeComponent(){
  const coffeesArray = [
    {title: "Americano", description: "dark tasty yummy coffee"},
    {title: "Cortadito", description: "small tasty yummy coffee"},
    {title: "Cafecito", description: "tiny tasty yummy coffee"},
    {title: "Capuccino", description: "milky tasty yummy coffee"},
    {title: "Black", description: "black yummy coffee"},
    {title: "Cubano", description: "sweet tasty yummy coffee"},  
  ]

  
  return (
    <div>
      <h2>Coffees component here</h2>
      {coffeesArray.map((oneCoffee) => {
        console.log(oneCoffee)
        return (
      <SingleCoffee  title={oneCoffee.title} description={oneCoffee.description}/>
          
        )
      })}  
    </div>

  )
}

export default CoffeeComponent