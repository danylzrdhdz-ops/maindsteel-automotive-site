import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, LogIn, AlertCircle } from 'lucide-react';
import { authService } from '../services/store';
import { AuthUser } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: AuthUser | null;
  onLoginSuccess: (user: AuthUser) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess,
  onLogout
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const user = await authService.login(email, password);
      onLoginSuccess(user);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Por favor completa todos los campos requeridos.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const user = await authService.register(name, email, password);
      onLoginSuccess(user);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Error al registrar usuario');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemo = (roleEmail: string, roleName: string) => {
    setEmail(roleEmail);
    setPassword('DemoPass123!');
    setName(roleName);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      id="auth-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#12141a] border border-[#d4af37]/60 rounded-lg shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden"
        id="auth-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#996515] via-[#d4af37] to-[#f5d47a]" />

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-[#d4af37]/10 text-[#d4af37]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                {currentUser ? 'Perfil de Usuario' : 'Portal de Clientes y Proveedores'}
              </h3>
              <p className="text-xs text-zinc-400">
                {currentUser ? 'Sesión activa en Maindsteel' : 'Acceso seguro al sistema de manufactura'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors"
            id="auth-modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {currentUser ? (
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-[#181b22] border border-zinc-700">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37] font-bold text-lg">
                {currentUser.displayName.charAt(0)}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{currentUser.displayName}</h4>
                <p className="text-xs text-zinc-400">{currentUser.email}</p>
                <div className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-[#d4af37]/20 text-[#f5d47a] border border-[#d4af37]/40">
                  Rol: {currentUser.role}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Autenticación Activa</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Almacenamiento local seguro activo. Tus cotizaciones y mensajes quedan vinculados a tu sesión.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white"
                id="auth-profile-close-btn"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="px-5 py-2 bg-red-950/70 border border-red-800/80 hover:bg-red-900 text-red-200 text-xs font-bold uppercase tracking-wider rounded transition-colors"
                id="auth-logout-btn"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            {/* Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#181b22] rounded-md mb-5 border border-zinc-800">
              <button
                type="button"
                onClick={() => {
                  setTab('login');
                  setError(null);
                }}
                className={`py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                  tab === 'login'
                    ? 'bg-[#b8860b] text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                id="tab-login-btn"
              >
                Iniciar Sesión
              </button>
              <button
                type="button"
                onClick={() => {
                  setTab('register');
                  setError(null);
                }}
                className={`py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                  tab === 'register'
                    ? 'bg-[#b8860b] text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                id="tab-register-btn"
              >
                Registrarse
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded bg-red-950/50 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {tab === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-4" id="form-login">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ingenieria@empresa.com"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-[#181b22] border border-zinc-700 rounded text-white focus:outline-none focus:border-[#d4af37]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-[#181b22] border border-zinc-700 rounded text-white focus:outline-none focus:border-[#d4af37]"
                      required
                    />
                  </div>
                </div>

                {/* Quick Auto-Fill Buttons for testing */}
                <div className="p-3 bg-zinc-900/80 rounded border border-zinc-800">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5">
                    Acceso rápido de demostración:
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickDemo('admin.ingenieria@maindsteel.mx', 'Ing. Gabriel Ramos')}
                      className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-[11px] text-zinc-200"
                    >
                      Ingeniería
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickDemo('compras@automotive.mx', 'Lic. Sofía Alarcón')}
                      className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-[11px] text-zinc-200"
                    >
                      Cliente Tier 1
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 bg-[#b8860b] hover:bg-[#d4af37] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-[0_4px_12px_rgba(184,134,11,0.35)] flex items-center justify-center gap-2"
                  id="auth-submit-login-btn"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{isLoading ? 'Ingresando...' : 'Iniciar Sesión'}</span>
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4" id="form-register">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    Nombre Completo
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ing. Carlos Morales"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-[#181b22] border border-zinc-700 rounded text-white focus:outline-none focus:border-[#d4af37]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    Correo Corporativo
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-[#181b22] border border-zinc-700 rounded text-white focus:outline-none focus:border-[#d4af37]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mínimo 6 caracteres"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-[#181b22] border border-zinc-700 rounded text-white focus:outline-none focus:border-[#d4af37]"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 bg-[#b8860b] hover:bg-[#d4af37] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-[0_4px_12px_rgba(184,134,11,0.35)] flex items-center justify-center gap-2"
                  id="auth-submit-register-btn"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isLoading ? 'Registrando...' : 'Crear Cuenta'}</span>
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
