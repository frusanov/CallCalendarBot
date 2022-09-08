import { version, author, homepage } from '../../package.json';
import { NODE_ENV } from '../config/constants';

if (NODE_ENV === 'production') {
  console.log(`
  ─────────────────────────────────────────────────
  ╔═╗┌─┐┬  ┬    ╔═╗┌─┐┬  ┌─┐┌┐┌┌┬┐┌─┐┬─┐  ╔╗ ┌─┐┌┬┐
  ║  ├─┤│  │    ║  ├─┤│  ├┤ │││ ││├─┤├┬┘  ╠╩╗│ │ │ 
  ╚═╝┴ ┴┴─┘┴─┘  ╚═╝┴ ┴┴─┘└─┘┘└┘─┴┘┴ ┴┴└─  ╚═╝└─┘ ┴
  ─────────────────────────────────────────────────
  
  Version: ${version}
  Author: ${author}
  
  More info on:
  ${homepage}
  
  ─────────────────────────────────────────────────
  `);
} else {
  console.clear();
}
