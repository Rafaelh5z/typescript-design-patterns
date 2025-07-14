import { BarkStrategy } from './BarkStrategy'
import { Cat } from './Cat'
import { Context } from './Context'
import { Dog } from './Dog'
import { SpeakStrategy } from './SpeakStrategy'

function strategyClient() {

    const cat = new Cat()
    const dog = new Dog()

    const speakStrategy = new SpeakStrategy(cat)
    const barkStrategy = new BarkStrategy(dog)

    const context = new Context(speakStrategy)
    console.log(context.executeStrategy())

    context.setStrategy(barkStrategy)
    console.log(context.executeStrategy())
}

strategyClient()