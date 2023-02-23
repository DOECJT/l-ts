const { Robot, Humanoid } = require('./index')

const log = (console.log = jest.fn())

beforeEach(() => {
  log.mockClear()
})

describe(Robot, () => {
  describe('announce', () => {
    test('case 1', () => {
      const name = 'Jack'
      const abilities = ['xixi', 'haha']

      const robot = new Robot(name, abilities)

      robot.announce()

      expect(log).toHaveBeenCalledWith(`Greetings. I am ${name}.`)
      for (const ability of abilities)
        expect(log).toHaveBeenCalledWith(`I am able to ${ability}.`)
    })
  })
})
