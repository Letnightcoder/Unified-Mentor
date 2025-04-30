# Tic Tac Toe Game

A modern, responsive web-based implementation of the classic Tic Tac Toe game built with HTML, CSS and JavaScript.

## Features

- Clean, modern UI with responsive design
- Two player gameplay (X and O)
- Interactive board with hover effects
- Game status display
- Win detection for all winning combinations
- Draw detection
- Easy restart functionality
- Responsive design that works on mobile devices

## Technologies Used

- HTML5 for structure
- CSS3 for styling and animations
- Vanilla JavaScript for game logic

## How to Play

1. Open [index.html](TicTacToe-Game/index.html) in a web browser
2. The game starts with Player X
3. Players take turns clicking empty cells to place their mark (X or O)
4. The game ends when either:
   - A player wins by getting 3 marks in a row (horizontally, vertically, or diagonally)
   - The game ends in a draw when all cells are filled
5. Click the "Restart Game" button to start a new game

## Game Logic

The game tracks:
- Current player (X or O)
- Game state (active/finished)
- Board state
- Winning combinations
- Draw conditions

## File Structure

```
TicTacToe-Game/
├── index.html      # Game structure and layout
├── styles.css      # Game styling and animations
├── script.js       # Game logic and interactions
└── readme.md       # Documentation
```

## Browser Support

Works in all modern browsers including:
- Chrome
- Firefox 
- Safari
- Edge

---