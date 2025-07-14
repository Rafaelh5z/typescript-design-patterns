import { Mediator } from '../../src/behavioralPatterns/mediator/Mediator'
import { Package } from '../../src/behavioralPatterns/mediator/Package'
import { PackageManager } from '../../src/behavioralPatterns/mediator/PackageManager'
import { FedExPackage } from '../../src/behavioralPatterns/mediator/FedExPackage'
import { UPSPackage } from '../../src/behavioralPatterns/mediator/UPSPackage'

describe('Mediator Pattern', () => {
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('Mediator (PackageManager)', () => {
        test('should create package manager with packed status', () => {
            const manager = new PackageManager(true)
            
            expect(manager).toBeInstanceOf(PackageManager)
            expect(manager).toBeInstanceOf(Mediator)
            expect(manager.isPackagePacked).toBe(true)
            expect(manager.packages).toEqual([])
        })

        test('should create package manager with unpacked status', () => {
            const manager = new PackageManager(false)
            
            expect(manager.isPackagePacked).toBe(false)
            expect(manager.packages).toEqual([])
        })

        test('should allow shipping when packed', () => {
            const manager = new PackageManager(true)
            const fedexPackage = new FedExPackage(manager)
            
            const canShip = manager.canShip(fedexPackage)
            
            expect(canShip).toBe(true)
            expect(manager.isPackagePacked).toBe(false) // Should be set to false after shipping
            expect(manager.packages).toEqual([])
        })

        test('should not allow shipping when not packed', () => {
            const manager = new PackageManager(false)
            const fedexPackage = new FedExPackage(manager)
            
            const canShip = manager.canShip(fedexPackage)
            
            expect(canShip).toBe(false)
            expect(manager.packages).toContain(fedexPackage)
        })

        test('should queue packages when not ready to ship', () => {
            const manager = new PackageManager(false)
            const fedex1 = new FedExPackage(manager)
            const ups1 = new UPSPackage(manager)
            
            manager.canShip(fedex1)
            manager.canShip(ups1)
            
            expect(manager.packages).toEqual([fedex1, ups1])
            expect(manager.packages).toHaveLength(2)
        })

        test('should notify about delivery and process queue', () => {
            const manager = new PackageManager(false)
            const fedexPackage = new FedExPackage(manager)
            
            // Add package to queue
            manager.canShip(fedexPackage)
            expect(manager.packages).toContain(fedexPackage)
            
            // Notify about delivery
            manager.notifyAboutDelivery()
            
            expect(manager.isPackagePacked).toBe(true)
            expect(manager.packages).toHaveLength(0) // Package should be removed from queue
        })
    })

    describe('ConcreteColleague (FedExPackage)', () => {
        test('should create FedEx package with mediator', () => {
            const manager = new PackageManager(true)
            const fedexPackage = new FedExPackage(manager)
            
            expect(fedexPackage).toBeInstanceOf(FedExPackage)
            expect(fedexPackage).toBeInstanceOf(Package)
            expect(fedexPackage.mediator).toBe(manager)
        })

        test('should ship when mediator allows', () => {
            const manager = new PackageManager(true)
            const fedexPackage = new FedExPackage(manager)
            
            fedexPackage.ship()
            
            // When shipping is allowed, no blocking message should appear
            expect(consoleSpy).not.toHaveBeenCalledWith('FedEx Package Shipping blocked...waiting')
        })

        test('should be blocked when mediator does not allow shipping', () => {
            const manager = new PackageManager(false)
            const fedexPackage = new FedExPackage(manager)
            
            fedexPackage.ship()
            
            expect(consoleSpy).toHaveBeenCalledWith('FedEx Package Shipping blocked...waiting')
        })

        test('should deliver and notify mediator', () => {
            const manager = new PackageManager(true)
            const fedexPackage = new FedExPackage(manager)
            
            fedexPackage.deliver()
            
            expect(consoleSpy).toHaveBeenCalledWith('Delivering FedEx package')
        })

        test('should allow shipping and then ship', () => {
            const manager = new PackageManager(true)
            const fedexPackage = new FedExPackage(manager)
            
            fedexPackage.allowShipping()
            
            expect(consoleSpy).toHaveBeenCalledWith('FedEx Package: Ready to ship')
        })
    })

    describe('ConcreteColleague (UPSPackage)', () => {
        test('should create UPS package with mediator', () => {
            const manager = new PackageManager(true)
            const upsPackage = new UPSPackage(manager)
            
            expect(upsPackage).toBeInstanceOf(UPSPackage)
            expect(upsPackage).toBeInstanceOf(Package)
            expect(upsPackage.mediator).toBe(manager)
        })

        test('should ship when mediator allows', () => {
            const manager = new PackageManager(true)
            const upsPackage = new UPSPackage(manager)
            
            upsPackage.ship()
            
            // When shipping is allowed, no blocking message should appear
            expect(consoleSpy).not.toHaveBeenCalledWith('UPS Package Shipping blocked...waiting')
        })

        test('should be blocked when mediator does not allow shipping', () => {
            const manager = new PackageManager(false)
            const upsPackage = new UPSPackage(manager)
            
            upsPackage.ship()
            
            expect(consoleSpy).toHaveBeenCalledWith('UPS Package Shipping blocked...waiting')
        })

        test('should deliver and notify mediator', () => {
            const manager = new PackageManager(true)
            const upsPackage = new UPSPackage(manager)
            
            upsPackage.deliver()
            
            expect(consoleSpy).toHaveBeenCalledWith('Delivering UPS package')
        })

        test('should allow shipping and then ship', () => {
            const manager = new PackageManager(true)
            const upsPackage = new UPSPackage(manager)
            
            upsPackage.allowShipping()
            
            expect(consoleSpy).toHaveBeenCalledWith('UPS Package: Ready to ship')
        })
    })

    describe('Mediator Pattern Integration', () => {
        test('should coordinate between multiple packages', () => {
            const manager = new PackageManager(false)
            const fedex1 = new FedExPackage(manager)
            const ups1 = new UPSPackage(manager)
            const fedex2 = new FedExPackage(manager)
            
            // All packages should be queued initially
            fedex1.ship()
            ups1.ship()
            fedex2.ship()
            
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenCalledWith('FedEx Package Shipping blocked...waiting')
            expect(consoleSpy).toHaveBeenCalledWith('UPS Package Shipping blocked...waiting')
            expect(manager.packages).toHaveLength(3)
            
            consoleSpy.mockClear()
            
            // Deliver first package to trigger next in queue
            manager.notifyAboutDelivery()
            
            expect(manager.packages).toHaveLength(2)
            expect(consoleSpy).toHaveBeenCalledWith('FedEx Package: Ready to ship')
        })

        test('should process packages in FIFO order', () => {
            const manager = new PackageManager(false)
            const fedex = new FedExPackage(manager)
            const ups = new UPSPackage(manager)
            
            // Queue packages in order
            fedex.ship()
            ups.ship()
            
            expect(manager.packages).toEqual([fedex, ups])
            
            consoleSpy.mockClear()
            
            // First notification should process FedEx (first in queue)
            manager.notifyAboutDelivery()
            expect(consoleSpy).toHaveBeenCalledWith('FedEx Package: Ready to ship')
            expect(manager.packages).toEqual([ups])
            
            consoleSpy.mockClear()
            
            // Second notification should process UPS
            manager.notifyAboutDelivery()
            expect(consoleSpy).toHaveBeenCalledWith('UPS Package: Ready to ship')
            expect(manager.packages).toEqual([])
        })

        test('should handle delivery workflow', () => {
            const manager = new PackageManager(true)
            const fedexPackage = new FedExPackage(manager)
            
            // Complete delivery workflow
            fedexPackage.ship() // Should ship immediately
            fedexPackage.deliver() // Deliver and notify
            
            expect(consoleSpy).toHaveBeenCalledWith('Delivering FedEx package')
            expect(manager.isPackagePacked).toBe(true)
        })

        test('should demonstrate loose coupling between colleagues', () => {
            const manager = new PackageManager(false)
            const fedex = new FedExPackage(manager)
            const ups = new UPSPackage(manager)
            
            // Colleagues don't know about each other, only about mediator
            expect(fedex.mediator).toBe(manager)
            expect(ups.mediator).toBe(manager)
            
            // They communicate through the mediator
            fedex.ship()
            ups.ship()
            
            // Manager coordinates their interactions
            expect(manager.packages).toContain(fedex)
            expect(manager.packages).toContain(ups)
        })

        test('should handle mixed package types in queue', () => {
            const manager = new PackageManager(false)
            const packages = [
                new FedExPackage(manager),
                new UPSPackage(manager),
                new FedExPackage(manager),
                new UPSPackage(manager),
            ]
            
            // Queue all packages
            packages.forEach(pkg => pkg.ship())
            
            expect(manager.packages).toEqual(packages)
            
            consoleSpy.mockClear()
            
            // Process first two packages
            manager.notifyAboutDelivery() // Process FedEx
            expect(consoleSpy).toHaveBeenCalledWith('FedEx Package: Ready to ship')
            
            consoleSpy.mockClear()
            manager.notifyAboutDelivery() // Process UPS
            expect(consoleSpy).toHaveBeenCalledWith('UPS Package: Ready to ship')
            
            expect(manager.packages).toHaveLength(2)
        })
    })

    describe('Mediator Pattern Benefits', () => {
        test('should centralize complex communications', () => {
            const manager = new PackageManager(false)
            const fedex = new FedExPackage(manager)
            const ups = new UPSPackage(manager)
            
            // All communication goes through the mediator
            fedex.ship()
            ups.ship()
            
            // Manager controls the shipping logic
            expect(manager.packages).toHaveLength(2)
            
            // Packages don't need to know about each other's state
            expect(fedex.mediator).toBe(manager)
            expect(ups.mediator).toBe(manager)
        })

        test('should reduce dependencies between colleagues', () => {
            // Packages only depend on the mediator interface, not on each other
            const manager1 = new PackageManager(true)
            const manager2 = new PackageManager(false)
            
            const fedex1 = new FedExPackage(manager1)
            const fedex2 = new FedExPackage(manager2)
            
            // Same package type, different behavior based on mediator
            fedex1.ship() // Should ship immediately
            fedex2.ship() // Should be blocked
            
            expect(consoleSpy).toHaveBeenCalledWith('FedEx Package Shipping blocked...waiting')
        })

        test('should make interaction easier to understand and maintain', () => {
            const manager = new PackageManager(false)
            const packages = [
                new FedExPackage(manager),
                new UPSPackage(manager),
            ]
            
            // Simple interface for all packages
            packages.forEach(pkg => {
                expect(typeof pkg.ship).toBe('function')
                expect(typeof pkg.deliver).toBe('function')
                expect(typeof pkg.allowShipping).toBe('function')
                expect(pkg.mediator).toBe(manager)
            })
            
            // Centralized control logic
            expect(typeof manager.canShip).toBe('function')
            expect(typeof manager.notifyAboutDelivery).toBe('function')
        })
    })
})
