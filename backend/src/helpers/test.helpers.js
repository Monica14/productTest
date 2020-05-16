import supertest from 'supertest';
import { appServer } from '../app';

export const apiServer = supertest(appServer);