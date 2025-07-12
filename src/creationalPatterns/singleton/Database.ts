
export class Database {
    
    private static instance: Database

    private constructor() {
    }

    public static getInstance(): Database {

        if (!Database.instance) {

            console.log('Creating a single database.')
            Database.instance = new Database()
        } else {
            
            console.log('Database has already been created')
        }

        return Database.instance
    }
}