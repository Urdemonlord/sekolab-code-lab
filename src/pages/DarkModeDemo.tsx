import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton, SkeletonCard, LoadingSpinner } from '@/components/ui/skeleton';
import { useDarkMode } from '@/hooks/use-dark-mode';
import { Sun, Moon, Monitor } from 'lucide-react';

const DarkModeDemo = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-gradient-hero p-8 transition-all duration-300">
      <div className="container-responsive space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold gradient-text">
            🌙 Dark Mode Demo
          </h1>
          <p className="text-secondary-content text-lg">
            Sekolab Dark Mode Optimization Showcase
          </p>
        </div>

        {/* Theme Controls */}
        <Card className="glass-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              Theme Controls
            </CardTitle>
          </CardHeader>          <CardContent className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <Button onClick={toggleDarkMode} className="btn-primary">
                Toggle Theme ({isDark ? 'Light' : 'Dark'})
              </Button>
              <Button onClick={toggleDarkMode} className="btn-secondary">
                Switch Mode
              </Button>
            </div>
            <div className="text-sm text-muted-content">
              Current mode: <span className="font-semibold text-primary">{isDark ? 'Dark' : 'Light'}</span>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette Demo */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>🎨 Color Palette</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-16 bg-primary rounded-lg shadow-soft"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-muted-content">Brand Blue</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-accent rounded-lg shadow-soft"></div>
                <p className="text-sm font-medium">Accent</p>
                <p className="text-xs text-muted-content">Brand Gold</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-muted rounded-lg shadow-soft"></div>
                <p className="text-sm font-medium">Muted</p>
                <p className="text-xs text-muted-content">Background</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-card border border-border rounded-lg shadow-soft"></div>
                <p className="text-sm font-medium">Card</p>
                <p className="text-xs text-muted-content">Surface</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography Demo */}  
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>📝 Typography</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-primary-content">Heading 1</h1>
              <h2 className="text-2xl font-bold text-primary-content">Heading 2</h2>
              <h3 className="text-xl font-bold text-primary-content">Heading 3</h3>
            </div>
            <div className="space-y-2">
              <p className="text-primary-content">
                Primary content text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-secondary-content">
                Secondary content text - Sed do eiusmod tempor incididunt ut labore.
              </p>
              <p className="text-muted-content">
                Muted content text - Et dolore magna aliqua.
              </p>
            </div>
            <p className="gradient-text text-lg font-semibold">
              Gradient Text Effect - Sekolab Branding
            </p>
          </CardContent>
        </Card>

        {/* Interactive Elements */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>🎯 Interactive Elements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Buttons */}
            <div className="space-y-3">
              <h4 className="font-semibold text-primary-content">Buttons</h4>
              <div className="flex gap-3 flex-wrap">
                <Button className="btn-primary">Primary Button</Button>
                <Button className="btn-secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>            {/* Status Indicators */}
            <div className="space-y-3">
              <h4 className="font-semibold text-primary-content">Status Indicators</h4>
              <div className="flex gap-3 flex-wrap">
                <div className="status-success">Success</div>
                <div className="status-warning">Warning</div>
                <div className="status-error">Error</div>
                <div className="status-info">Info</div>
              </div>
            </div>

            {/* Form Elements */}
            <div className="space-y-3">
              <h4 className="font-semibold text-primary-content">Form Elements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Enhanced Input" 
                  className="input-enhanced px-3 py-2 rounded-md"
                />
                <select className="input-enhanced px-3 py-2 rounded-md">
                  <option>Select Option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading States */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>⏳ Loading States</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary-content">Skeleton Components</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkeletonCard />
                <div className="space-y-3">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex space-x-2">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-primary-content">Loading Spinner</h4>
              <LoadingSpinner />
            </div>
          </CardContent>
        </Card>

        {/* Glass Morphism Effects */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-xl font-bold text-primary-content mb-4">
            ✨ Glass Morphism Effect
          </h3>
          <p className="text-secondary-content">
            This card demonstrates the glass morphism effect with backdrop blur and transparency.
            It automatically adapts to both light and dark themes.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DarkModeDemo;
