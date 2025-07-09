
class VictorianFurnitureFactory extends FurnitureFactory {

    createChair(): Chair {
        return new VictorianChair()
    }

    createTable(): Table {
        return new VictorianTable()
    }
}