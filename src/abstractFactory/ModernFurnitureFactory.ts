
class ModernFurnitureFactory extends FurnitureFactory {

    createChair(): Chair {
        return new ModernChair()
    }

    createTable(): Table {
        return new ModernTable()
    }
}