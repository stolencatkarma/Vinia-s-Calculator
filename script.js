document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', calculateProfit);
});

function calculateProfit() {
    // Card Info
    const stackSize = parseFloat(document.getElementById('stack-size').value);
    const rewardQuantity = parseFloat(document.getElementById('reward-quantity').value);

    // Market Prices
    const cardPriceBulk = parseFloat(document.getElementById('card-price-bulk').value);
    const cardQuantityBulk = parseFloat(document.getElementById('card-quantity-bulk').value);
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    // Calculations
    const pricePerCard = cardPriceBulk / cardQuantityBulk;
    const costViaCards = (pricePerCard * stackSize) / rewardQuantity;
    const costViaDirectBuy = itemPrice;

    // Display Results
    const resultText = document.getElementById('result-text');
    let result = `Cost per reward item via cards: ${costViaCards.toFixed(2)} Chaos<br>`;
    result += `Cost per reward item via direct purchase: ${costViaDirectBuy.toFixed(2)} Chaos<br><br>`;

    if (costViaCards < costViaDirectBuy) {
        result += '<strong style="color: #4CAF50;">Buying cards is cheaper.</strong>';
    } else if (costViaCards > costViaDirectBuy) {
        result += '<strong style="color: #F44336;">Buying the item directly is cheaper.</strong>';
    } else {
        result += '<strong>The prices are the same.</strong>';
    }

    resultText.innerHTML = result;
}
