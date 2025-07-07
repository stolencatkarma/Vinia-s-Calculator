// DOM Elements
const elements = {
    cardName: document.getElementById('card-name'),
    totalCost: document.getElementById('total-cost'),
    cardsNeeded: document.getElementById('cards-needed'),
    itemsReceived: document.getElementById('items-received'),
    itemName: document.getElementById('item-name'),
    itemPrice: document.getElementById('item-price'),
    
    // Results elements
    costPerCard: document.getElementById('cost-per-card'),
    totalItems: document.getElementById('total-items'),
    costPerItemCard: document.getElementById('cost-per-item-card'),
    directItems: document.getElementById('direct-items'),
    costPerItemDirect: document.getElementById('cost-per-item-direct'),
    totalDirectCost: document.getElementById('total-direct-cost'),
    recommendationText: document.getElementById('recommendation-text'),
    savings: document.getElementById('savings')
};

// Calculation functions
function formatNumber(num) {
    if (num === null || num === undefined || isNaN(num)) return '-';
    return Number(num).toFixed(2);
}

function calculateProfits() {
    const totalCost = parseFloat(elements.totalCost.value) || 0;
    const cardsNeeded = parseFloat(elements.cardsNeeded.value) || 1;
    const itemsReceived = parseFloat(elements.itemsReceived.value) || 1;
    const itemPrice = parseFloat(elements.itemPrice.value) || 0;

    // Validate inputs
    if (totalCost === 0 || cardsNeeded === 0 || itemsReceived === 0 || itemPrice === 0) {
        resetResults();
        return;
    }

    // Divination card calculations
    const costPerCard = totalCost / cardsNeeded;
    const turninsPossible = 1; // We assume you're buying exactly what you need
    const totalItemsFromCards = itemsReceived;
    const costPerItemFromCards = totalCost / totalItemsFromCards;

    // Direct purchase calculations
    const itemsDirectlyBuyable = Math.floor(totalCost / itemPrice);
    const costToMatchCardItems = totalItemsFromCards * itemPrice;

    // Update results
    elements.costPerCard.textContent = formatNumber(costPerCard);
    elements.totalItems.textContent = totalItemsFromCards;
    elements.costPerItemCard.textContent = formatNumber(costPerItemFromCards);
    elements.directItems.textContent = itemsDirectlyBuyable;
    elements.costPerItemDirect.textContent = formatNumber(itemPrice);
    elements.totalDirectCost.textContent = formatNumber(costToMatchCardItems);

    // Determine recommendation
    updateRecommendation(costPerItemFromCards, itemPrice, totalCost, costToMatchCardItems, totalItemsFromCards, itemsDirectlyBuyable);
}

function updateRecommendation(cardCostPerItem, directCostPerItem, totalBudget, directCostForSameItems, cardItems, directItems) {
    let recommendationText = '';
    let savingsText = '';
    let savingsClass = '';

    const cardAdvantage = directCostPerItem - cardCostPerItem;
    const percentageSavings = ((cardAdvantage / directCostPerItem) * 100);

    if (cardCostPerItem < directCostPerItem) {
        recommendationText = `💰 Buy Divination Cards! It's more profitable.`;
        const totalSavings = directCostForSameItems - totalBudget;
        savingsText = `You save ${formatNumber(totalSavings)} chaos (${formatNumber(percentageSavings)}% cheaper per item)`;
        savingsClass = 'positive';
    } else if (cardCostPerItem > directCostPerItem) {
        recommendationText = `🛒 Buy Items Directly! It's more cost-effective.`;
        const extraCost = totalBudget - directCostForSameItems;
        savingsText = `You lose ${formatNumber(extraCost)} chaos (${formatNumber(-percentageSavings)}% more expensive per item)`;
        savingsClass = 'negative';
    } else {
        recommendationText = `⚖️ Both methods cost the same per item.`;
        savingsText = `No difference in cost efficiency`;
        savingsClass = '';
    }

    // Add additional context
    if (directItems > cardItems) {
        savingsText += ` | Direct purchase gets you ${directItems - cardItems} more items with the same budget`;
    }

    elements.recommendationText.textContent = recommendationText;
    elements.savings.textContent = savingsText;
    elements.savings.className = `savings ${savingsClass}`;
    
    // Add pulse animation to highlight changes
    elements.savings.classList.add('result-highlight');
    setTimeout(() => elements.savings.classList.remove('result-highlight'), 300);
}

function resetResults() {
    Object.keys(elements).forEach(key => {
        if (key.includes('cost') || key.includes('total') || key.includes('direct')) {
            elements[key].textContent = '-';
        }
    });
    elements.recommendationText.textContent = 'Enter values to see recommendation';
    elements.savings.textContent = '';
    elements.savings.className = 'savings';
}

// Preset functions
function loadViniasToken() {
    elements.cardName.value = "Vinia's Token";
    elements.totalCost.value = "50";
    elements.cardsNeeded.value = "5";
    elements.itemsReceived.value = "10";
    elements.itemName.value = "Orb of Regret";
    elements.itemPrice.value = "1.3";
    
    calculateProfits();
}

function loadSevenYearsBadLuck() {
    // Seven Years Bad Luck: 2.2 Divine per card, need 13 cards = 6,051.2 chaos total, gives 1 Mirror Shard
    elements.cardName.value = "Seven Years Bad Luck";
    elements.totalCost.value = "6051.2"; // 13 cards × 2.2 Divine × 212 chaos per divine
    elements.cardsNeeded.value = "13";
    elements.itemsReceived.value = "1";
    elements.itemName.value = "Mirror Shard";
    elements.itemPrice.value = "6400"; // 6.4k chaos from poe.ninja
    
    calculateProfits();
}

function loadTheEnlightened() {
    // The Enlightened: 92 chaos per card, need 6 cards = 552 chaos total, gives 1 level 3 Enlighten Support
    elements.cardName.value = "The Enlightened";
    elements.totalCost.value = "552"; // 6 cards × 92 chaos per card
    elements.cardsNeeded.value = "6";
    elements.itemsReceived.value = "1";
    elements.itemName.value = "Enlighten Support (lvl 3)";
    elements.itemPrice.value = "4494"; // 21.2 Divine × 212 chaos per divine
    
    calculateProfits();
}

function loadBrothersGift() {
    // Brother's Gift: 5.2 Divine per card, need 1 card = 1,102.4 chaos total, gives 1 Divine Orb
    elements.cardName.value = "Brother's Gift";
    elements.totalCost.value = "1102.4"; // 1 card × 5.2 Divine × 212 chaos per divine
    elements.cardsNeeded.value = "1";
    elements.itemsReceived.value = "1";
    elements.itemName.value = "Divine Orb";
    elements.itemPrice.value = "212";
    
    calculateProfits();
}

function loadTheSephirot() {
    // The Sephirot: 180 chaos per card, need 11 cards = 1,980 chaos total, gives 1 Divine Orb
    elements.cardName.value = "The Sephirot";
    elements.totalCost.value = "1980"; // 11 cards × 180 chaos per card
    elements.cardsNeeded.value = "11";
    elements.itemsReceived.value = "1";
    elements.itemName.value = "Divine Orb";
    elements.itemPrice.value = "212";
    
    calculateProfits();
}

function clearAll() {
    Object.values(elements).forEach(element => {
        if (element.tagName === 'INPUT') {
            element.value = '';
        }
    });
    resetResults();
}

// Event listeners for real-time calculation
function addCalculationListeners() {
    const inputElements = [
        elements.totalCost,
        elements.cardsNeeded,
        elements.itemsReceived,
        elements.itemPrice
    ];

    inputElements.forEach(element => {
        element.addEventListener('input', debounce(calculateProfits, 300));
        element.addEventListener('keyup', debounce(calculateProfits, 300));
    });
}

// Debounce function to prevent excessive calculations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    loadViniasToken();
                    break;
                case '2':
                    e.preventDefault();
                    loadSevenYearsBadLuck();
                    break;
                case '3':
                    e.preventDefault();
                    loadTheEnlightened();
                    break;
                case '4':
                    e.preventDefault();
                    loadTheSephirot();
                    break;
                case '5':
                    e.preventDefault();
                    loadBrothersGift();
                    break;
                case 'Backspace':
                    e.preventDefault();
                    clearAll();
                    break;
            }
        }
    });
}

// Enhanced input validation
function addInputValidation() {
    const numberInputs = document.querySelectorAll('input[type="number"]');
    
    numberInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = parseFloat(e.target.value);
            
            // Remove invalid characters and ensure positive numbers
            if (value < 0) {
                e.target.value = 0;
            }
            
            // Limit decimal places to 2
            if (e.target.value.includes('.')) {
                const parts = e.target.value.split('.');
                if (parts[1] && parts[1].length > 2) {
                    e.target.value = parseFloat(e.target.value).toFixed(2);
                }
            }
        });
    });
}

// Initialize the application
function init() {
    addCalculationListeners();
    addKeyboardShortcuts();
    addInputValidation();
    resetResults();
    
    // Load example data on page load for demonstration
    setTimeout(() => {
        loadViniasToken();
    }, 500);
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateProfits,
        loadViniasToken,
        clearAll,
        formatNumber
    };
}
