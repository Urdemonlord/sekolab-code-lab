import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted/50 dark:bg-muted/30 transition-colors duration-200",
        className
      )}
      {...props}
    />
  )
}

// Preset skeleton components
function SkeletonCard() {
  return (
    <div className="glass p-6 rounded-xl space-y-4">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-20 w-full" />
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  );
}

function SkeletonAvatar() {
  return <Skeleton className="h-10 w-10 rounded-full" />;
}

function SkeletonButton() {
  return <Skeleton className="h-10 w-24 rounded-lg" />;
}

function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className={`h-4 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} 
        />
      ))}
    </div>
  );
}

// Loading spinner untuk dark mode
function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary dark:border-accent transition-colors duration-200"></div>
    </div>
  );
}

// Page loading component
function PageLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center transition-colors duration-200">
      <div className="text-center space-y-4">
        <LoadingSpinner />
        <p className="text-muted-foreground">Memuat...</p>
      </div>
    </div>
  );
}

export { 
  Skeleton, 
  SkeletonCard, 
  SkeletonAvatar, 
  SkeletonButton, 
  SkeletonText, 
  LoadingSpinner, 
  PageLoading 
}
