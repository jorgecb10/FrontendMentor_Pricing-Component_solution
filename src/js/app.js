document.addEventListener('DOMContentLoaded', () => {
    console.log('documento listo');

    const cards = document.querySelectorAll('.card')
    const btn = document.getElementById('pricing');
    const labelBtn = btn.parentElement
    btn.checked = false;

    const prices = [
        {
            "title": "Basic",
            "timeframes": {
                "monthly": 19.99,
                "annualy": 199.99
            }
        },
        {
            "title": "Professional",
            "timeframes": {
                "monthly": 24.99,
                "annualy": 249.99
            }
        },
        {
            "title": "Master",
            "timeframes": {
                "monthly": 39.99,
                "annualy": 399.99
            }
        }
    ]

    function actualizarDatos(periodo) {
        cards.forEach(card => {
            const title = card.querySelector('.title').textContent
            const plan = prices.find(item => item.title === title)

            if(plan) {
                const price = plan.timeframes[periodo]

                card.querySelector('.price').textContent = `${price}`
            }
        })
    }

    btn.addEventListener('click', () => {
        labelBtn.classList.toggle('monthly')
        labelBtn.classList.toggle('annualy')
        
        let periodo 

        if(labelBtn.classList.contains('monthly')) periodo = 'monthly'
        else periodo ='annualy'

        actualizarDatos(periodo)
    })
})