function builderClient() {

    const everythingBurgerBuilder = new BurgerBuilder("Everything")
    const everythingBurger = everythingBurgerBuilder
        .addCheese()
        .addBacon()
        .addLettuce()
        .addTomato()
        .build()
    console.log(everythingBurger.showDetails()) 

    const cheeseBurgerBuilder = new BurgerBuilder("Cheese")
    const cheeseBurger = cheeseBurgerBuilder
        .addCheese()
        .addTomato()
        .build() 
    console.log(cheeseBurger.showDetails())
}

builderClient()