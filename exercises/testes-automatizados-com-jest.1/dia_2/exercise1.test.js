const uppercase = (str, callback) => {
    callback(str.toUpperCase());
};


it('upperCase test', () => {
    expect.assertions(1);
    return uppercase('avon', (str) => {
        expect(str).toBe('AVON');
    
    });
});
