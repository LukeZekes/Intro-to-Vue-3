app.component('product-details', {
    props: {
        details: {
            type: String
        }
    },
    template:
    /*html*/
    `
    <p>{{details}}
    `
})