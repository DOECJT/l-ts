const { Robot, Humanoid } = require('./index')

const log = (console.log = jest.fn())

beforeEach(() => {
  log.mockClear()
})

describe(Robot, () => {
  describe('announce', () => {
    test('announce name and abilities', () => {
      const name = 'Jack'
      const abilities = ['xixi', 'haha']

      const robot = new Robot(name, abilities)

      robot.announce()

      expect(log).toHaveBeenCalledWith(`Greetings. I am ${name}.`)
      for (const ability of abilities)
        expect(log).toHaveBeenCalledWith(`I am able to ${ability}.`)
    })
  })

  describe('charge', () => {
    test('does not recharge if power is already at 20', () => {
      const name = 'Jack'
      const abilities = ['xixi', 'haha']

      const robot = new Robot(name, abilities)

      robot.charge()

      expect(robot.power).toBe(100)
      expect(log).not.toHaveBeenCalledWith(`Recharged power supplies to ${robot.power}.`)
      expect(log).toHaveBeenCalledWith('I am at optimal operational capacity.')
    })

    test('recharges by the amount if it would no increase to 100', () => {
      const robot = new Robot('', [])

      robot.move(20)
      robot.charge(10)

      expect(robot.power).toBe(90)
      expect(log).toHaveBeenCalledWith('Recharged power supplies to 90.')
      expect(log).not.toHaveBeenCalledWith('I am at optimal operational capacity.')
    })

    test('increase to 100 amount if it would increase beyond 100', () => {
      const robot = new Robot('', [])

      robot.move(10)
      robot.charge(20)

      expect(robot.power).toBe(100)
      expect(log).toHaveBeenCalledWith('Recharged power supplies to 100.')
      expect(log).toHaveBeenCalledWith('I am at optimal operational capacity.')
    })
  })

  describe('move', () => {
    test('does not move without enough power', () => {
      const robot = new Robot('', [])

      robot.move(120)

      expect(robot.power).toBe(100)
      expect(log).toHaveBeenCalledWith('I do not have enough power to move 120 units.')
      expect(log).not.toHaveBeenCalledWith('Moving 120 units.')
    })

    test('move distance', () => {
      const name = 'Jack'
      const abilities = ['xixi', 'haha']

      const robot = new Robot(name, abilities)

      const distance = 20
      robot.move(distance)

      expect(robot.power).toBe(80)
      expect(log).not.toHaveBeenCalledWith(`I do not have enough power to move ${distance} units.`)
      expect(log).toHaveBeenCalledWith(`Moving ${distance} units.`)
    })
  })
})

describe(Humanoid, () => {
  describe('announce', () => {
    test('announce name abilities and catchphrase', () => {
      const name = 'Jack'
      const abilities = ['xixi', 'haha']
      const catchphrase = 'lala'
      const humanoid = new Humanoid(name, abilities, catchphrase)

      humanoid.announce()

      expect(log).toHaveBeenCalledWith(`Greetings. I am ${name}.`)
      for (const ability of abilities)
        expect(log).toHaveBeenCalledWith(`I am able to ${ability}.`)
      expect(log).toHaveBeenCalledWith(` > ${catchphrase} <`)
    })
  })

  describe('charge', () => {
    test('does not recharge if the power is already at 100', () => {
      const humanoid = new Humanoid('', [], '')

      humanoid.charge(100)

      expect(humanoid.power).toBe(100)
      expect(log).not.toBeCalledWith('Recharged power supplies to 100.')
      expect(log).toBeCalledWith('I am at optimal operational capacity.')
    })
  })
})
