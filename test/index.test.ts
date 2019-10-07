import {expect, test} from '@oclif/test'

import cmd = require('../src')

describe('kaomoji', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs with no arguments', ctx => {
    expect(ctx.stdout).to.contain('ᕕ( ᐛ )ᕗ')
  })

  test
  .stdout()
  .do(() => cmd.run(['sad']))
  .it('runs with argument specifying kaomoji', ctx => {
    expect(ctx.stdout).to.contain('ε(´סּ︵סּ`)з')
  })
})
