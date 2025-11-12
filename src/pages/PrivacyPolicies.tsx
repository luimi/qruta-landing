import { ArrowLeft } from 'lucide-react';
import React, { FC } from 'react'

interface PrivacyPoliciesProps {}

const PrivacyPolicies: FC<PrivacyPoliciesProps> = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-nunito text-slate-800">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        <a href="/" className="flex items-center text-primary hover:text-primary-light transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            <span className="font-medium">Volver a Q'ruta</span>
                        </a>
                        <h1 className="ml-8 text-2xl font-bold text-primary">Políticas de privacidad</h1>
                    </div>
                </div>
            </div>

            <main className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow rounded-lg p-8">
                        <p className="text-sm text-slate-500">Fecha de última actualización: 11 de noviembre de 2025</p>

                        <p className="mt-4">En Q'ruta, valoramos y respetamos su privacidad. Esta política describe cómo recopilamos, utilizamos y protegemos la información personal que usted proporciona al usar nuestra aplicación.</p>

                        <h2 className="mt-6 text-xl font-semibold">1. Información que Recopilamos</h2>
                        <p className="mt-2">Para garantizar su identificación única y el acceso a los servicios de la aplicación, Q'ruta recopila la siguiente información personal directamente del usuario:</p>
                        <ul className="list-disc list-inside mt-2">
                            <li><strong>Nombre completo:</strong> Para personalizar su experiencia dentro de la aplicación.</li>
                            <li><strong>Dirección de correo electrónico:</strong> Se utiliza como identificador único de su cuenta y para propósitos de recuperación de acceso, si es necesario.</li>
                        </ul>

                        <h2 className="mt-6 text-xl font-semibold">2. Finalidad de la Recopilación de Datos</h2>
                        <p className="mt-2">La información recopilada tiene como único propósito:</p>
                        <ul className="list-disc list-inside mt-2">
                            <li><strong>Identificación del Usuario:</strong> Permitir que el usuario inicie sesión, utilice las funcionalidades de la aplicación y sea reconocido de manera única dentro de la plataforma Q'ruta.</li>
                            <li><strong>Gestión de la Cuenta:</strong> Administrar su cuenta de usuario y garantizar la seguridad del acceso.</li>
                        </ul>

                        <h2 className="mt-6 text-xl font-semibold">3. Uso y Almacenamiento de la Información</h2>
                        <ul className="list-disc list-inside mt-2">
                            <li><strong>Uso Limitado:</strong> Sus datos personales (nombre y correo electrónico) no se utilizan para ningún otro propósito diferente a la identificación y gestión de su cuenta dentro de la aplicación Q'ruta.</li>
                            <li><strong>Seguridad:</strong> Implementamos medidas de seguridad técnicas y organizativas razonables para proteger su información contra el acceso no autorizado, la divulgación, la alteración y la destrucción.</li>
                        </ul>

                        <h2 className="mt-6 text-xl font-semibold">4. No Compartición con Terceros</h2>
                        <p className="mt-2">Q'ruta garantiza de forma estricta que su nombre completo y dirección de correo electrónico no serán vendidos, alquilados, compartidos, divulgados ni transferidos a terceros, ya sean empresas, socios comerciales o cualquier otra entidad externa, bajo ninguna circunstancia. Mantenemos la confidencialidad de sus datos como un compromiso fundamental.</p>

                        <h2 className="mt-6 text-xl font-semibold">5. Derechos del Usuario</h2>
                        <p className="mt-2">Usted tiene el derecho de acceder, rectificar o solicitar la eliminación de sus datos personales almacenados por Q'ruta. Si desea ejercer estos derechos o tiene preguntas sobre esta Política de Privacidad, por favor, póngase en contacto con nosotros a través de la sección de soporte de la aplicación.</p>

                        <h2 className="mt-6 text-xl font-semibold">6. Consentimiento</h2>
                        <p className="mt-2">Al utilizar la aplicación Q'ruta, usted acepta las condiciones de esta Política de Privacidad y consiente la recopilación de su nombre y correo electrónico con los fines estrictamente definidos en el numeral 2.</p>

                        <p className="mt-6">Para cualquier duda o inquietud sobre nuestra Política de Privacidad, por favor, contacte a nuestro equipo de soporte.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PrivacyPolicies;