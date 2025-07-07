# Path of Exile - Divination Card Profit Calculator

A web-based calculator to help Path of Exile players determine whether it's more profitable to buy divination cards and turn them in, or to purchase items directly from the market.

## Features

- **Real-time Calculations**: Instantly see profit comparisons as you input values
- **Smart Recommendations**: Clear guidance on which method is more cost-effective
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Quick Presets**: Multiple current market examples loaded with real poe.ninja data
- **Clean UI**: Modern, Path of Exile-themed interface

## How to Use

1. **Divination Card Section**:
   - Enter the card name
   - Input how many cards are available for purchase
   - Enter the total cost for all cards (in Chaos Orbs)
   - Specify how many cards are needed for one turn-in
   - Enter how many items you receive per turn-in

2. **Direct Purchase Section**:
   - Enter the item name
   - Input the market price per item (in Chaos Orbs)

3. **View Results**:
   - See detailed calculations for both methods
   - Get a clear recommendation on which is more profitable
   - View potential savings or losses

## Example Calculations

**Vinia's Token Example**:
- 35 cards available for 50 chaos total
- 5 cards needed per turn-in
- 10 Orbs of Regret per turn-in
- Orbs of Regret cost 1.3 chaos each directly (current market price)
- **Result**: Cards give you ~1.43 chaos per Regret vs 1.3 chaos direct = **10% more expensive via cards**

**Seven Years Bad Luck Example**:
- 13 cards at 2.2 Divine each = 6,051.2 chaos total
- 13 cards = 1 Mirror Shard
- Mirror Shards cost 6,400 chaos each directly
- **Result**: Cards cost ~6,051.2 chaos per Mirror Shard vs 6,400 chaos direct = **5% SAVINGS via cards**

**The Enlightened Example**:
- 6 cards at 92 chaos each = 552 chaos total
- 6 cards = 1 level 3 Enlighten Support gem
- Level 4 Enlighten Support costs 4,494 chaos (21.2 Divine) directly
- **Result**: Cards cost ~552 chaos per Enlighten vs 4,494 chaos direct = **88% SAVINGS via cards!**

**Luminous Trove Example**:
- 7 cards at 2.3 Divine each = 3,412.4 chaos total
- 7 cards = 1 Divine Orb
- Divine Orbs cost 212 chaos each directly
- **Result**: Cards cost ~3,412.4 chaos per Divine vs 212 chaos direct = **1,510% more expensive via cards!**

**The Sephirot Example**:
- 11 cards at 180 chaos each = 1,980 chaos total
- 11 cards = 1 Divine Orb
- Divine Orbs cost 212 chaos each directly
- **Result**: Cards cost ~1,980 chaos per Divine vs 212 chaos direct = **834% more expensive via cards!**

> **Note**: Market prices from poe.ninja as of July 2025. Prices fluctuate regularly.

## Technical Details

- Built with vanilla HTML, CSS, and JavaScript
- No external dependencies required
- Responsive design for all screen sizes
- Real-time input validation and calculations
- Debounced input handling for smooth performance

## Running the Application

Simply open `index.html` in any modern web browser. No server or build process required.

## Keyboard Shortcuts

- `Ctrl+1` (or `Cmd+1`): Load Vinia's Token preset
- `Ctrl+2` (or `Cmd+2`): Load Seven Years Bad Luck preset  
- `Ctrl+3` (or `Cmd+3`): Load The Enlightened preset
- `Ctrl+4` (or `Cmd+4`): Load Luminous Trove preset
- `Ctrl+Backspace` (or `Cmd+Backspace`): Clear all fields

## Contributing

This is an open tool for the Path of Exile community. Feel free to suggest improvements or additional features!

---

*Made for Path of Exile players • Calculate smart, spend wisely*
