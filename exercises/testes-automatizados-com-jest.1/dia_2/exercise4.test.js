const fetch = require('node-fetch');

const getRepos = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then((data) => {
            return data.map((repo) => repo.name);
        });
};

describe('find projects', () => {
    it('get list', async () => {
        const apiProjects = 'https://api.github.com/orgs/tryber/repos';
        const apiRepo = await getRepos(apiProjects);
        expect(apiRepo).toContain('sd-01-week4-5-project-todo-list');
        expect(apiRepo).toContain('sd-01-week4-5-project-meme-generator');
    });
});
