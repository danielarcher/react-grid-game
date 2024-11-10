# Grid Game 🎮

A dynamic grid-based game built with React, demonstrating modern web development practices and React fundamentals.
Access the live game [here](https://danielarcher.github.io/react-grid-game/).

## 🎯 Overview

This is an engaging 8x8 grid game where players navigate through levels while avoiding enemies. The game showcases
implementation of custom hooks, component architecture, and state management in React.

## ⚡ Features

- 🎮 Interactive 8x8 grid gameplay
- 🏃‍♂️ Smooth player movement (up, down, left, right)
- 👾 Dynamic enemy AI with custom movement patterns
- 🌟 High score tracking
- 🚪 Level progression system
- 📱 Responsive design
- 💾 **Score persistence using Firebase**

## 🛠️ Technical Stack

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **State Management:** Custom hooks
- **Project Structure:** Component-based architecture

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # UI components
│   ├── GameCell.jsx    # Grid cell component
│   ├── GameGrid.jsx    # Main game grid
│   └── GameStatus.jsx  # Game status display
├── hooks/              # Custom React hooks
├── model/              # Game logic and models
├── utils/              # Utility functions
└── constants/          # Game configuration
```

## 🎮 Game Rules

- 🏆 Beat the high score!
- 👾 Colliding with enemies results in game over
- 🌀 Reach the portal to advance to the next level
- ⚡ Each level adds a new, faster enemy
- 🛡️ Safe starting position (enemies won't spawn there)

## 💻 Installation

1. Clone the repository

```bash
git clone [your-repository-url]
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

## 🧪 Technical Highlights

- **Custom Hooks:** Implements separation of concerns with hooks like `usePlayerMovement` and `useEnemyMovement`
- **Component Architecture:** Modular design with reusable components
- **State Management:** Efficient state handling without external libraries
- **Game Logic:** Complex game mechanics implemented in pure JavaScript
- **Performance Optimization:** Careful consideration of render cycles

## 🚀 Future Enhancements

- Add power-ups and special abilities
- Implement different enemy types
- Add sound effects and background music
- Create additional game modes
- Add multiplayer support

## 🤝 Contributing

Feel free to fork the project and submit pull requests!

## 📄 License

MIT License - feel free to use this project for learning and development purposes.