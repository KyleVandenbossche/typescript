import { Students } from './classExample';

describe('class of student', () => {
    test('sets correct values on call', () =>{
        const newStudent = new Students ('Henry', 18, 12); // need to add a newstudent first before testing
        expect(newStudent.name).toEqual('Henry');
        expect(newStudent.age).toEqual(18);
        expect(newStudent.grade).toEqual(12);
    })
})

test("classGrades is set ")