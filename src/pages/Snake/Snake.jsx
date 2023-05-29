import React, { useState, useEffect, useRef } from "react";


const Snake = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20),
  });
  const [direction, setDirection] = useState("RIGHT");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const interval = setInterval(() => {
      drawSnake(context);
      moveSnake();
      checkCollision();
      checkFood();
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const drawSnake = (context) => {
    context.clearRect(0, 0, 200, 200);
    context.fillStyle = "green";
    snake.forEach((bodyPart) => {
      context.fillRect(bodyPart.x * 10, bodyPart.y * 10, 10, 10);
    });
    context.fillStyle = "red";
    context.fillRect(food.x * 10, food.y * 10, 10, 10);
  };

  const moveSnake = () => {
    const head = {
      x:
        snake[0].x +
        (direction === "RIGHT" ? 1 : direction === "LEFT" ? -1 : 0),
      y: snake[0].y + (direction === "DOWN" ? 1 : direction === "UP" ? -1 : 0),
    };
    setSnake([head, ...snake.slice(0, -1)]);
  };

  const checkCollision = () => {
    if (
      snake[0].x < 0 ||
      snake[0].x > 19 ||
      snake[0].y < 0 ||
      snake[0].y > 19 ||
      snake
        .slice(1)
        .some(
          (bodyPart) => bodyPart.x === snake[0].x && bodyPart.y === snake[0].y
        )
    ) {
      setGameOver(true);
    }
  };

  const checkFood = () => {
    if (snake[0].x === food.x && snake[0].y === food.y) {
      setFood({
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20),
      });
      setScore(score + 1);
      setSnake([...snake, snake[snake.length - 1]]);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 37:
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
      case 38:
        if (direction !== "DOWN") setDirection("UP");
        break;
      case 39:
        if (direction !== "LEFT") setDirection("RIGHT");
        break;
      case 40:
        if (direction !== "UP") setDirection("DOWN");
        break;
      default:
        break;
    }
  };

  return (
    <div className="Snake">
      <h1>Змейка</h1>
      {gameOver ? (
        <h2>Игра окончена! Счет: {score}</h2>
      ) : (
        <h2>Счет: {score}</h2>
      )}
      <canvas
        ref={canvasRef}
        width="200"
        height="200"
        onKeyDown={handleKeyDown}
        tabIndex="0"
      />
      <div className="buttons">
        <button
          onClick={() => setDirection("LEFT")}
          disabled={direction === "RIGHT"}
        >
          ←
        </button>
        <button
          onClick={() => setDirection("UP")}
          disabled={direction === "DOWN"}
        >
          ↑
        </button>
        <button
          onClick={() => setDirection("RIGHT")}
          disabled={direction === "LEFT"}
        >
          →
        </button>
        <button
          onClick={() => setDirection("DOWN")}
          disabled={direction === "UP"}
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default Snake;
