const avangers = [{ hero: 'Iron Man', budget: 5000 }, { hero: 'Hulk', budget: 2000 }];

const res = avangers.reduce((acc, item) => {

    acc.TotalBudget += item.budget
    return acc;

}, { TotalBudget: 0 })

console.log(res);
