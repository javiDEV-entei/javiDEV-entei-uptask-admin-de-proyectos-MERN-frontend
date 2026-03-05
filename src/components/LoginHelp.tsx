// LoginHelp.tsx
import React from "react";


type LoginHelpProps = {
  testEmail: string;
  testPassword: string;
};

const LoginHelp: React.FC<LoginHelpProps> = ({ testEmail, testPassword }) => {
  return (
    <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-2 text-lg font-semibold text-gray-800">
        Cómo iniciar sesión
      </h2>

      <p className="mb-4 text-sm text-gray-600">
           La creación de cuentas se encuentra temporalmente en mantenimiento. Mientras tanto, puedes probar la aplicación 
           ¡Gracias por tu comprensión!
           <span className="text-fuchsia-500 font-bold"> iniciando sesión con las siguientes credenciales de prueba.</span>
      </p>

      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium text-gray-700">Correo de prueba:</span>{" "}
          <span className="font-mono text-gray-900">{testEmail}</span>
        </div>
        <div>
          <span className="font-medium text-gray-700">
            Contraseña de prueba:
          </span>{" "}
          <span className="font-mono text-gray-900">{testPassword}</span>
        </div>
      </div>
    </div>
  );
};

export default LoginHelp;
