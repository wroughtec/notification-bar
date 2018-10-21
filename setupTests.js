import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const fetchPolifill = require('whatwg-fetch');

global.fetch = fetchPolifill.fetch;
global.Request = fetchPolifill.Request;
global.Headers = fetchPolifill.Headers;
global.Response = fetchPolifill.Respons;

configure({ adapter: new Adapter() });
