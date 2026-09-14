"use client";

import { motion } from "framer-motion";

const PARTICLE_COUNT = 120;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
  id: index,

  // Posição horizontal aleatória
  left: `${Math.random() * 100}%`,

  // Apenas círculos pequenos
  size: Math.random() * 8 + 3,

  // Azul ou Verde
  color: Math.random() > 0.5 ? "blue" : "green",

  // Velocidade suave
  duration: Math.random() * 20 + 20,

  // Delay diferente
  delay: Math.random() * 20,

  // Movimento lateral
  xMovement: Math.random() * 60 - 30,
}));

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050816]">
      {particles.map((particle) => {
        const isBlue = particle.color === "blue";

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,

              backgroundColor: isBlue ? "#00A8FF" : "#22C55E",

              boxShadow: isBlue
                ? "0 0 8px rgba(0,168,255,0.7)"
                : "0 0 8px rgba(34,197,94,0.7)",
            }}
            initial={{
              y: "110vh",
              opacity: 0,
            }}
            animate={{
              y: "-10vh",

              opacity: [0, 0.7, 0.7, 0],

              x: [
                0,
                particle.xMovement,
                -particle.xMovement,
                0,
              ],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}