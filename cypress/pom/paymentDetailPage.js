class PaymentDetailPage{
    title = '[data-test="title"]'
    finish ='[data-test="finish"]'

    checkTitle(){return cy.get(this.title);}
    clickFinish(){return cy.get(this.finish)}
}
export default new PaymentDetailPage;