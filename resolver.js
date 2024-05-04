const Student = require('../GraphQL/model/student.model');

module.exports = {
    Query: {
        async student(_, {ID}) {
            return await Student.findById(ID);
        },
        async getStudents(_, {count}) {
            return await Student.find()
        }
    },
    Mutation: {
        async createStudent(_, {studentInput: {Name, Department, Age}}) {
            // console.log(Name, Department, Age);
            const createdStudent = new Student({
                Name: Name,
                Department: Department,
                Age: Age
                // ...data
            })
        const res = await createdStudent.save();
        console.log(res);
        return {
            id: res.id,
            ...res._doc
            }
        },
        async deleteStudent(_, {ID}) {
            const isDeleted = await Student.deleteOne({_id: ID}).deletedCount;
            return isDeleted; //return 0 or 1
        },
        async editStudent(_, {ID, studentInput: {Name, Department, Age}}) {
            const isEdited = (await Student.updateOne({_id: ID}, {name: Name, department: Department, age: Age})).upsertedCount;
            return isEdited; //return 0 or 1
        }
    }
}