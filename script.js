document.addEventListener('DOMContentLoaded', () => {
    populateCardPresets();
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', calculateProfit);

    const cardPreset = document.getElementById('card-preset');
    cardPreset.addEventListener('change', handlePresetChange);
});

const divinationCards = {
    "The Apothecary": { "stack": 5, "reward": "Mageblood" },
    "The Doctor": { "stack": 8, "reward": "Headhunter" },
    "The Fiend": { "stack": 11, "reward": "Headhunter" },
    "The Nurse": { "stack": 8, "reward": "The Doctor" },
    "The House of Mirrors": { "stack": 9, "reward": "Mirror of Kalandra" },
    "The Immortal": { "stack": 10, "reward": "House of Mirrors" },
    "The Saint's Treasure": { "stack": 10, "reward": "2x Exalted Orb" },
    "The Enlightened": { "stack": 6, "reward": "Level 4 Enlighten" },
    "The Dragon's Heart": { "stack": 11, "reward": "Level 4 Empower" },
    "The Risk": { "stack": 4, "reward": "Level 4 Enhance" },
    "A Dab of Ink": { "stack": 9, "reward": "The Poet's Pen" },
    "The Void": { "stack": 1, "reward": "Random divination card" },
    "The Gambler": { "stack": 5, "reward": "Random divination card" },
    "The Scholar": { "stack": 3, "reward": "40x Scroll of Wisdom" },
    "The Gemcutter": { "stack": 3, "reward": "Gemcutter's Prism" },
    "The Artist": { "stack": 11, "reward": "Level 4 Enhance" },
    "The Cartographer": { "stack": 3, "reward": "10x Cartographer's Chisel" },
    "The Surveyor": { "stack": 4, "reward": "5x Vaal Orb" },
    "The Union": { "stack": 12, "reward": "10x Gemcutter's Prism" },
    "The Hoarder": { "stack": 12, "reward": "Exalted Orb" },
    "The Chains that Bind": { "stack": 11, "reward": "6-link Body Armour" },
    "The Celestial Justicar": { "stack": 6, "reward": "6-link Astral Plate" },
    "The Dapper Prodigy": { "stack": 6, "reward": "6-link Body Armour (ilvl 100)" },
    "The Ethereal": { "stack": 7, "reward": "6-link Vaal Regalia" },
    "The Mercenary": { "stack": 8, "reward": "6-link Body Armour" },
    "The Porcupine": { "stack": 6, "reward": "6-link Short Bow" },
    "The Warlord": { "stack": 6, "reward": "6-link Coronal Maul" },
    "The Wind": { "stack": 8, "reward": "6-link bow" },
    "The Brittle Emperor": { "stack": 8, "reward": "Voll's Devotion" },
    "The King's Heart": { "stack": 8, "reward": "Kaom's Heart" },
    "The Last One Standing": { "stack": 1, "reward": "Atziri's Disfavour" },
    "The Offering": { "stack": 8, "reward": "Shavronne's Wrappings" },
    "The Queen": { "stack": 10, "reward": "Atziri's Acuity" },
    "The Samurai's Eye": { "stack": 8, "reward": "Watcher's Eye" },
    "The Throne": { "stack": 3, "reward": "Kaom's Roots" },
    "The Tyrant": { "stack": 8, "reward": "Merciless weapon" },
    "The Vast": { "stack": 8, "reward": "The Poet's Pen" },
    "The Wolven King's Bite": { "stack": 8, "reward": "Rigwald's Quills" },
    "The Wrath": { "stack": 10, "reward": "The King's Heart" },
    "Vinia's Token": { "stack": 5, "reward": "10x Orb of Regret" }
};

function populateCardPresets() {
    const cardPreset = document.getElementById('card-preset');
    for (const cardName in divinationCards) {
        const option = document.createElement('option');
        option.value = cardName;
        option.textContent = cardName;
        cardPreset.appendChild(option);
    }
}

function handlePresetChange() {
    const cardPreset = document.getElementById('card-preset');
    const selectedValue = cardPreset.value;
    if (selectedValue && divinationCards[selectedValue]) {
        const cardData = divinationCards[selectedValue];
        document.getElementById('card-name').value = selectedValue;
        document.getElementById('stack-size').value = cardData.stack;
        // A simple regex to extract the number from the reward string
        const rewardMatch = cardData.reward.match(/^(\d+)/);
        const rewardQuantity = rewardMatch ? parseInt(rewardMatch[1], 10) : 1;
        document.getElementById('reward-quantity').value = rewardQuantity;
    }
}

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
