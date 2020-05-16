import { list } from '../controllers/employees';
import { apiServer } from '../helpers/test.helpers';
import UID from '../helpers/uid.helpers';

let employeeID = UID.create();

describe('Employee', () => {
    describe('/GET List', () => {

        beforeEach(function(){
            console.log("Before Executed")
        })

        // List Record
        it('should fetch employee list', async () => {
            let res = await apiServer.get('/employee/list');
            // let response = JSON.parse(res.text);
            console.log(res.body.name)
            // expect(response.code).toBe(100);
            expect(res.status).toBe(200);
            
        })

        // it('should fetch employee list with code 200', async () => {
        //     let res = await apiServer.get('/employee/list');
        //     let response = JSON.parse(res.text);
        //     // console.log(JSON.parse(res.text))
        //     // expect(response.status).toBe('success');
        //     expect(response.code).toBe(100);
        // })

        // Inset Record

        // it('should save employee list', async () => {
        //     const body = {
        //         employeeID: employeeID,
        //         name: 'abc'
        //     }
        //     let res = await apiServer.post('/employee/save').send(body);
        //     let response = JSON.parse(res.text);
        //     // console.log(JSON.parse(res.text))
        //     expect(response.status).toBe('success');           
        // })

        // it('should update employee data', async () => {
        //     let res = await apiServer.put('/employee/'+employeeID).send({name:'mmm'}).expect(200);
        // })

        // it('should delete employee', async () => {
        //     let res = await apiServer.delete('/employee/'+employeeID).expect(200);
        // })    
        
        afterEach(function(){
            console.log("After Executed")
        })
    })
}) 