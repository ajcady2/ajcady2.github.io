export const ASCIIArt = () => {
  return (
    <div style={{ perspective: '600px' }} className="flex justify-center mb-6">
      <div className="ascii-3d-rotate text-neon-orange terminal-glow text-center">
        <pre className="text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight">
{`   █████╗         ██╗
  ██╔══██╗        ██║
  ███████║        ██║
  ██╔══██║   ██   ██║
  ██║  ██║   ╚█████╔╝
  ╚═╝  ╚═╝    ╚════╝ `}
        </pre>
      </div>
      <style>{`
        .ascii-3d-rotate {
          display: inline-block;
          animation: rotate3d-aj 3.5s linear infinite;
          transform-style: preserve-3d;
          text-shadow: 0 2px 8px #ff9100, 0 0 2px #fff, 2px 2px 0 #0008;
        }
        @keyframes rotate3d-aj {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(90deg) rotateX(10deg); }
          50% { transform: rotateY(180deg) rotateX(0deg); }
          75% { transform: rotateY(270deg) rotateX(-10deg); }
          100% { transform: rotateY(360deg) rotateX(0deg); }
        }
      `}</style>
    </div>
  );
};
