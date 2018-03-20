import {Command, flags} from '@oclif/command'
import * as _ from 'lodash'

import * as kaomoji from './kaomoji'

class Kaomoji extends Command {
  static description = 'describe the command here'

  static args = [{
    name: 'search',
    required: true,
    description: 'kaomoji to search',
    default: 'happy',
  }]

  async run() {
    const {args} = this.parse(Kaomoji)

    if (kaomoji[args.search]) {
      this.log(kaomoji[args.search])
    } else {
      this.log(`Hmmm, couldn't find what you're looking for, but how about: ${_.sample(kaomoji)}`)
    }
  }
}

export = Kaomoji
