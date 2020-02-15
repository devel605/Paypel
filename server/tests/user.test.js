import { assert } from 'chai'
import User from '../models/user.model'

describe('User defaults', () => {
    let user
    before(() => {
        user = new User({ 
            email: 'wes@dfsd.com', 
            username: 'shama', 
            first: 'cfdsgfd', 
            last: 'Ma', 
            accNum: 562, 
            accType: 'savings' 
        })
    })
    describe('Signing up', () => {
        it('has a valid email', ()=>{
            assert(user.emailIsValid(), 'valid email is missing')
        })
        it('has a valid first name', ()=>{
            assert(user.isfirstValid(), 'valid first name is missing')
        })
        it('has a valid last name', ()=>{
            assert(user.islastValid(), 'valid last name is missing')
        })
        it('has a valid account number', ()=>{
            assert(user.isAccNumValid(), 'valid account number is missing')
        })
        it('has a valid account type', ()=>{
            assert(user.isAccTypeValid(), 'valid account type is missing')
        })
        it('has a valid username', ()=>{
            assert(user.isUsernameValid(), 'valid username is missing')
        })
        it('is valid', ()=>{
            assert(user.isValid(), 'Something is missing')
        })
    })
})
