
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AuthPage = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        navigate("/");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        navigate("/");
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setErrorMsg(error.message);
    } else {
      // Signup
      const redirectUrl = `${window.location.origin}/`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
          emailRedirectTo: redirectUrl, // Penting!
        },
      });
      if (error) setErrorMsg(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md shadow-soft p-2 rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold mb-1">
            {mode === "login" ? "Masuk ke Sekolab" : "Buat Akun Sekolab"}
          </CardTitle>
          <div className="text-center text-sm text-muted-foreground mb-2">
            {mode === "login"
              ? "Belum punya akun? "
              : "Sudah punya akun? "}
            <button
              className="text-primary hover:underline ml-1"
              type="button"
              onClick={() => setMode((m) => (m === "login" ? "signup" : "login"))}
            >
              {mode === "login" ? "Daftar di sini" : "Masuk di sini"}
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleAuth}>
            {mode === "signup" && (
              <Input
                type="text"
                placeholder="Nama Lengkap"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                disabled={loading}
              />
            )}
            <Input
              type="email"
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <Input
              type="password"
              placeholder="Password"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            {errorMsg && (
              <div className="text-red-500 text-sm text-center">{errorMsg}</div>
            )}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 mt-2"
              disabled={loading}
            >
              {loading
                ? mode === "login"
                  ? "Memproses..."
                  : "Membuat akun..."
                : mode === "login"
                  ? "Masuk"
                  : "Daftar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
