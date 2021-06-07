const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
};
  
const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
            return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
};
  
const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
};


describe('getUserName', () => {
    it('return user', async () => {
        expect.assertions(1);
        const user = await getUserName(5);
        expect(user).toEqual('Paul');
    });

    describe('when user does not exit', () => {
        it('return error', async () => {
            expect.assertions(1);
            try {
                await getUserName(10);
            } catch(error) {
                expect(error).toEqual({ error: 'User with 10 not found.' });
            }
        });
    });
});
