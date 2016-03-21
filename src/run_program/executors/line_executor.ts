import { print } from './commands/print_command';
import { rem } from './commands/rem_command';

export class LineExecutor {
  constructor() {
  }
  
  run(line : string) : void {
    const command : string = line.split(' ')[1];
    const message : string = line.split(/[""]/)[1];
    
    switch (command) {
      case 'PRINT':
        print(message);
        break;
      case 'REM':
        rem(message);
        break;
      default:
        console.log(`Invalid command`);
    }
  }
}