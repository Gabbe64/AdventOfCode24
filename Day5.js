const fs = require('fs');

fs.readFile('Day5input.txt', 'utf8', (err, data) => {
    const [rules, orders] = data.split('\r\n\r\n');
    const ordersArray = orders.split('\r\n');
    const rulesArray = rules.split('\r\n');

    const rulesMap = new Map();
    for(let rule of rulesArray) {
        let [first, second] = rule.split('|');
        first = parseInt(first);
        second = parseInt(second);
        if(!rulesMap.has(first)) {
            rulesMap.set(first, []);
        }
        rulesMap.get(first).push(second);
    }

    let sum = 0;
    for(let order of ordersArray){
        const o = order.split(',').map(Number);
        if(isOrderValid(o, rulesMap)){
            //sum += o[Math.floor(o.length / 2)];
        }
        else{
            const reorderedOrder = reorderOrder(o, rulesMap);
            sum += reorderedOrder[Math.floor(reorderedOrder.length / 2)];
        }
    }
    console.log(sum);
    
});

function isOrderValid(order, map){
    for(let i = order.length - 1; i >= 0 ; i--){
        const precedents = order.slice(0, i);
        const ruledValues = map.get(order[i]); 
        if (ruledValues && ruledValues.some(precedent => precedents.includes(precedent))) {
            return false;
        }
    }
    return true;
}

function reorderOrder(order, map) {
    for (let i = 0; i < order.length; i++) {
        const precedents = order.slice(0, i);
        const ruledValues = map.get(order[i]);
        if (ruledValues && ruledValues.some(precedent => precedents.includes(precedent))) {
            const indexToSwap = precedents.findIndex(precedent => ruledValues.includes(precedent));
            if (indexToSwap !== -1) {
                [order[i], order[indexToSwap]] = [order[indexToSwap], order[i]];
                i = -1; // Restart the loop to ensure the order is correct
            }
        }
    }
    return order;
}