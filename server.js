const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();


app.use(express.json());

const createUser=() => {
    return{
        password : faker.internet.password(),
        email : faker.internet.email(),
        
        phoneNumber : faker.internet.phoneNumber(),
       // lastName: faker.name.lastName(),
       // firstName: faker.name.firstName(),
        //_id:faker.datatype.uuid(),
    } 
}


const createCompany = (company) => {
    return{
        _id:faker.datatype.uuid(),
        name: faker.company.companyName(),
        address:faker.address.streetAddress(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
       zipCode: faker.address.zipCode(),
       country: faker.address.country(),
        
    }
}

app.get('/api/companies/new',(req, res) =>{
    const newCompany = createCompany();
    console.log(newCompany);
    res.json(newCompany);
})

app.get('api/user/company',(req,res)=>{
    const newUser = createUser();
    const newCompany= createCompany();
    res.json({user:newUser, company:newCompany});
})

app.listen(5000, () => {
    console.log('listening on port 3000');
});