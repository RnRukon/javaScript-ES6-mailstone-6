const fish = { id: 58, name: 'king Hilsha', price: 9000, phone: '01755555555', address: 'chandpur', dress: 'silver' };


// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;


// shortcut version-----------------------
const { phone, price, dress, id } = fish;
// console.log(phone);
// console.log(price);
// console.log(dress);
// console.log(id);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        frameWork: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }

    }
}

// const work=company.web.work;
// const frameWork=company.web.frameWork;

// short version
const { work, frameWork, employee, } = company.web;
const { food } = company.ceo;
const { first, second, third } = company.web.tech;

console.log(work, frameWork, employee, food, first, second, third);