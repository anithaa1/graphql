const { gql } = require('apollo-server');

module.exports = gql`
    type Student {
        Name: String
        Department: String
        Age: Int
        _id: String
    }

    input StudentInput {
        Name: String
        Department: String
        Age: Int
    }

    type EditStudentInput {
        Name: String
    }

    type Query {
        student(ID: ID!): Student!
        getStudents(count: Int): [Student]
    }

    type Mutation {
        createStudent(studentInput: StudentInput): Student!
        deleteStudent(ID: ID!): Boolean
        editStudent(ID: ID!, editStudentInput: StudentInput): Boolean
    }
`