const pizzaPies = [
    { 
      name: "cheese",
      price: 5,
      description: "mozzarella and provolone blend with bazil"
    },
    { 
      name: "meat lovers",
      price: 8,
      description: "sausage, pepperoni, meatballs, canadian bacon"
    },
    { 
      name: "gluten free",
      price: 9,
      description: "cheese pizza made with our gluten free crust"
    },
    { 
      name: "vegetarian",
      price: 7,
      description: "green bell peppers, onions, kalamta olives, and mushrooms"
    },
    { 
      name: "pepperoni",
      price: 6,
      description: "made with old world pepperoni"
    },
    { 
      name: "spicy hawaiian",
      price: 7,
      description: "jalelpenos, pineapple, and canadian bacon"
    },
    { 
      name: "sasuage",
      price: 6,
      description: "mozzarella and sausage"
    }
  ]
  
  
  //Using JavaScript only:
  //Task 1: Use some form of array iteration to **list** **each** pizza (object in the array above) to the given container.
  
  
  
  
  //Task 2: create a button for each pizza that logs 'Pizza has been ordered'!

 //write a function for the array with forEach

  pizzaPies.forEach(pizza => {
    //create headers and such
    const pizzaName = document.createElement("h2")
    const pizzaPrice = document.createElement("p")
    const pizzaDesc = document.createElement("p")
    
    //set text of headers and such
    pizzaName.innerText = pizza.name
    pizzaPrice.innerText = pizza.price
    pizzaDesc.innerText = pizza.description
  
    // //make buttons for each pizza
    const pizzaBtn = document.createElement("button")
    pizzaBtn.innerText = "Order"
    pizzaBtn.addEventListener("click", () => {
    console.log("Pizza has been ordered!")
    });
  
  const container = document.getElementById("pizza-container") 
  container.append(pizzaName, pizzaPrice, pizzaDesc, pizzaBtn) //console.log(pizzaName, pizzaPrice, pizzaDesc)
  });
      
  
  
  
  //appended twice, did not use variable name, extra curly and parentheses
  
  
  
    
  