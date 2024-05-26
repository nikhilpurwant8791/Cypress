
describe('API Testing', () => {
    let storeData;
    beforeEach(() => {
        cy.viewport(1440, 1168);
        cy.fixture('apiTesting').then((data) => {
            storeData = data;
        })
    })

    it('Verify GET call using Fixture and API call', () => {
        cy.request('https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).to.equal(200);
            //Explicite Assertion

            // Validate complete response using "to.deep.qual"
            expect(response.body).to.deep.equal(storeData);

            // Validate complete response using "to.deep.qual"
            expect(response.body.data[1]).to.deep.equal(storeData.data[1]);

            // Identify the length of dataset and run the for loop to validate each dataSet
            const dataLength = Object.keys(response.body.data).length;
            for (let i = 0; i < dataLength; i++) {
                expect(response.body.data[i]).to.deep.equal(storeData.data[i]);
            }

            // validating Single response value
            for (let i = 0; i < dataLength; i++) {
                expect(response.body.data[i].id).to.equal(storeData.data[i].id);
                expect(response.body.data[i].email).to.equal(storeData.data[i].email);
                expect(response.body.data[i].first_name).to.equal(storeData.data[i].first_name);
                expect(response.body.data[i].last_name).to.equal(storeData.data[i].last_name);
                expect(response.body.data[i].avatar).to.equal(storeData.data[i].avatar);
            }
        })
    })

    it('Verify POST call using Fixture and API call', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                job: "tester",
                name: "Max"
            }
        }).then((response) => {
            expect(response.status).to.equal(201);

            //Storing the response
            cy.writeFile('cypress/fixtures/creatUser.json', response.body);
            expect(response.body).to.have.property('name', 'Max');
        })
        // Verify newly created object
        cy.fixture('creatUser').then((data) => {
            expect(data).to.have.property('name', 'Max');
            expect(data).to.have.property('job', 'tester');
        })
    })

    it.only('Verify DELETE request', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
        }).as('deleteRequest');
        
        //Another approach - Used Alias to execute the call
        cy.get('@deleteRequest')
            .then((response) => {
                expect(response.status).to.equal(204);
            })
    })

    it('Verify the Intercept method', () => {
        cy.intercept('https://api.demoblaze.com/entries').as('interceptWait');
        cy.visit('https://www.demoblaze.com/');
        cy.wait('@interceptWait');
        cy.contains('Phones').should('be.visible');
    })
})