
interface SekolabLogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const SekolabLogo = ({ size = 'md', animated = false }: SekolabLogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${animated ? 'animate-glow' : ''}`}>
        <img 
          src="/lovable-uploads/64b26f6e-9487-4af1-991e-c39bb61b2474.png"
          alt="Sekolab Logo"
          className={`${sizeClasses[size]} object-contain`}
        />
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 rounded-full blur-sm"></div>
        )}
      </div>
      <span className={`font-bold gradient-text ${textSizeClasses[size]}`}>
        Sekolab
      </span>
    </div>
  );
};

export default SekolabLogo;
