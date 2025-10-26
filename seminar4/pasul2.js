/*class Robot {
    constructor(name) {
        this.name=name;
    }
    move() {
        console.log(`${this.name} is moving`)
    }
}
const r0=new Robot(`some robot`)
r0.move()

class Weapon {
    constructor (description) {
        this.description=description
    }
    fire() {
        console.log(`${this.description} is firing`)
    }
}

const w0=new Weapon(`pew pew laser`)
w0.fire();

class CombatRobot extends Robot {
    constructor(name) {
        super(name)
        this.Weapons=[]
    }

    addWeapon(w) {
        this.Weapons.push(w)
    }

    fire() {
        console.log(`firing all weapons`)
        for(const w of this.Weapons) {
            w.fire()
        }
    }
}

const rl=new CombatRobot(`some combat robot`)
rl.addWeapon(w0)
rl.fire()

Robot.prototype.fly=function() {
    console.log(`${this.name} is flying`)
}
rl.fly()*/

class Software {
    constructor(name) {
        this.name=name
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

class Plugin{
    constructor(description) {
        this.description=description;
    }

    install( ) {
        console.log(`${this.description} plugin installed`)
    }
}

class Browser extends Software {
    constructor(name) {
        super(name) 
        this.plugins=[]
    }

    addPlugin(plugin) {
        this.plugins.push(plugin)
    }
    installPlugins() {
        console.log(`${this.name} is installing all plugins...`)
        for(const plugin of this.plugins) {
            plugin.install();
        }
    }
}

const chrome=new Browser("Google Chrome")
const adblock=new Plugin("AdBlocker")
const darkmode=new Plugin("Dark Mode")

chrome.addPlugin(adblock)
chrome.addPlugin(darkmode)

chrome.run()
chrome.installPlugins()

