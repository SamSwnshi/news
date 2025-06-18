
describe('News homepage tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081');
  });

  it('should show the header with nav items', () => {
    // cy.get('header').should('be.visible');
    cy.get('ul.nav-itmes li').should('have.length', 5);
  });

  it('should display the hero section correctly', () => {
    cy.get('.hero-img img').should('be.visible');
    cy.contains('.main-text', 'The Bright Future of Web 3.0?').should('exist');
  });

  it('should display right block news headlines', () => {
    cy.contains('.news1 h3', 'Hydrogen VS Electric Cars').should('exist');
    cy.contains('.news2 h3', 'The Downsides of AI Artistry').should('exist');
    cy.contains('.news3 h3', 'Is VC Funding Drying Up?').should('exist');
  });

  it('should display bottom news cards', () => {
    cy.contains('.second-section .card h3', 'Reviving Retro PCs').should('exist');
    cy.contains('.second-section .card h3', 'Top 10 Laptops of 2022').should('exist');
    cy.contains('.second-section .card h3', 'The Growth of Gaming').should('exist');
  });

  it('should open and close the mobile menu', () => {
    cy.viewport('iphone-6');
    cy.get('#menu-button').click();
    cy.get('nav').should('have.class', 'open');
    cy.get('#menu-close').click();
    cy.get('nav').should('not.have.class', 'open');
  });

  it('should display the logo in the header', () => {
    cy.get('.header img').should('be.visible').and('have.attr', 'src').and('include', 'logo.svg');
  });

  it('should have a functional "Read more" button', () => {
    cy.contains('button', 'Read more').should('be.visible').click();
    // Add assertions based on the expected behavior after clicking "Read more"
  });


  it('should load the correct hero image for mobile view (< 1000px)', () => {
    cy.viewport(500, 800);
    cy.get('.hero-img img').should('have.attr', 'src').and('include', 'image-web-3-mobile.jpg');
  });



  it('should display correct creator and challenge information in the footer', () => {
    cy.get('footer a').first()
      .should('have.attr', 'href', 'https://www.crio.do/');

   
    cy.get('footer a').last().then(($a) => {
      const href = $a.attr('href');
      expect(href).to.match(/^https:\/\/github\.com\/[\w-]+$/);
    });
  });

});

