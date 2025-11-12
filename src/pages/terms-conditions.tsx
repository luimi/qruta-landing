import { ArrowLeft } from 'lucide-react';
import React, { FC } from 'react'

interface TermsConditions {
  
}

const TermsConditions: FC<TermsConditions> = ({  }) => {
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
                        <h1 className="ml-8 text-2xl font-bold text-primary">Términos y condiciones de uso</h1>
                    </div>
                </div>
            </div>

            <main className="py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow rounded-lg p-8 space-y-6">
                        <p className="leading-relaxed">Términos y condiciones del uso de Q’ruta</p>

                        <p className="leading-relaxed">Al hacer uso de Q’ruta, el usuario acepta la totalidad de los términos y condiciones que se especifican en el presente documento, liberando de cualquier tipo de responsabilidad legal a los desarrolladores y/o propietarios de la aplicación y aceptando, de igual manera, sus advertencias y los avisos legales.</p>

                        <h2 className="text-lg font-semibold">Descripción del servicio</h2>
                        <p className="leading-relaxed">Q’ruta es una aplicación cuyo objetivo es facilitar el uso de transporte público urbano, poniendo a disposición del usuario herramientas que le permitan tomar una decisión acertada y conforme con su necesidad de movilización para llegar de un lugar determinado a otro, dentro de la ciudad.</p>

                        <p className="leading-relaxed">La información contenida en la aplicación es una recopilación a partir de diversas fuentes y no constituye información oficial del sistema de transporte público urbano de la ciudad, por lo que pueden presentarse inconsistencias que, en ningún caso, son responsabilidad de los desarrolladores y/o propietarios de la aplicación. La responsabilidad de la fidelidad de la información sólo puede estar en cabeza de las empresas que prestan el servicio y de las condiciones particulares de cada momento en particular, ya que existen contingencias (obras públicas o privadas que obliguen a cambiar recorridos, condiciones climáticas que dificulten la movilización, etc.) que no pueden ser previstas.</p>

                        <p className="leading-relaxed">Cabe aclarar que Q’ruta no provee servicios de transporte público urbano. Solamente le da al usuario herramientas que le faciliten su uso, con información de las empresas -legalmente constituidas y debidamente autorizadas por las autoridades competentes- para la prestación de este tipo de servicio. En consecuencia, los desarrolladores y/o propietarios de la aplicación no son responsables por la calidad del servicio de transporte público urbano, ya que no mantiene ningún tipo de relación o de acuerdo con ninguna de las partes responsables de dicho servicio.</p>

                        <p className="leading-relaxed">Por otra parte, Q’ruta puede ser susceptible a violaciones de sistemas de seguridad que pongan en riesgo su funcionamiento o el de los dispositivos terminales en los que pueda ser usada (virus, intrusos informáticos, etc.), hecho que es ajeno a la voluntad y al objetivo de los desarrolladores y/o propietarios de la aplicación, por lo que el usuario de Q’ruta los exonera de toda culpa y de cualquier responsabilidad por hechos que se deriven directa o indirectamente del mencionado riesgo.</p>

                        <p className="leading-relaxed">Es importante aclarar que la aplicación está hecha para el uso personal del usuario, por lo tanto éste no puede usarla con fines comerciales o con destinación diferente a la que ha sido definida en el presente documento.</p>

                        <h2 className="text-lg font-semibold">Obligaciones de los desarrolladores y/o propietarios de Q’ruta</h2>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>Garantizar la reserva y el secreto de las comunicaciones, reservándose el derecho a rectificación de informaciones falsas, ilícitas, fraudulentas o que contravengan la moral y las buenas costumbres.</li>
                            <li>Respetar el derecho a la intimidad y privacidad del usuario.</li>
                            <li>Adecuar continuamente la aplicación, con el fin de prestar un servicio eficiente; sin perjuicio de lo anterior, sin embargo, podrá suspender temporalmente -en cualquier momento y sin previo aviso- la accesibilidad a la aplicación, para efectos de mantenimiento, reparación, actualización o mejora del servicio.</li>
                            <li>Velar por que la información que provenga del usuario, catalogada como personal, sea guardada con absoluta confidencialidad, garantizando de esta forma los derechos de acceso, rectificación y cancelación de los datos personales a instancias del interesado y bajo sus directas instrucciones.</li>
                            <li>Procurar por el uso legal de la aplicación, evitando cualquier clase de actuaciones que resulten claramente violatorias de la Ley y de los derechos de los usuarios.</li>
                        </ol>

                        <h2 className="text-lg font-semibold">Obligaciones del usuario de Q’ruta</h2>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>Conocer los términos y condiciones de uso de la aplicación antes de descargarla y de usarla.</li>
                            <li>Realizar el uso lícito de la aplicación.</li>
                            <li>Abstenerse de efectuar cualquier tipo de manipulación informática que altere la aplicación.</li>
                            <li>No pretender ni inducir a que se publique información incorrecta, falsa, fraudulenta o que contravenga derechos fundamentales de los desarrolladores y/o propietarios de la aplicación, del resto de los usuarios o de la población en general.</li>
                            <li>No hacer enlaces (links) de la aplicación a terceros.</li>
                            <li>No desarmar la aplicación en sus componentes (“reverse engineering”) para entender su funcionamiento, incluso con fines académicos y/o sin ánimo de lucro.</li>
                        </ol>

                        <h2 className="text-lg font-semibold">Derechos de los desarrolladores y/o propietarios de Q’ruta</h2>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>A publicar información publicitaria propia o de terceros, nacionales o extranjeros, en formatos soportados por la aplicación y por las terminales en donde se use, sin afectar su funcionalidad.</li>
                            <li>A usar, de forma legal -manteniendo la reserva y confidencialidad establecidas por la Constitución y las Leyes- las estadísticas y los datos resultantes del uso de la aplicación.</li>
                        </ol>

                        <h2 className="text-lg font-semibold">Derechos del usuario de Q’ruta</h2>
                        <p className="leading-relaxed">A que se respete su privacidad, confidencialidad e integridad de acuerdo con los parámetros establecidos en la Constitución y en las Leyes.</p>

                        <h2 className="text-lg font-semibold">Propiedad intelectual</h2>
                        <p className="leading-relaxed">El diseño, imágenes, marcas, gráficos, banners, software, códigos fuente, objeto, y -en general- todos los elementos integradores de la aplicación, son propiedad legítima de los desarrolladores y/o los propietarios de Q’ruta que, en este momento, son Diseño y desarrollo JLSAS, persona jurídica debidamente constituida, que posee legalmente los derechos exclusivos para su explotación y uso.</p>

                        <p className="leading-relaxed">En tal virtud, el usuario de Q’ruta no puede imitar, asimilar, transformar o registrar en ningún lugar o ante alguna entidad cualquiera de las partes integrantes de la aplicación; no podrá tampoco reproducir, distribuir, transmitir, publicitar, licenciar, ceder o ejercer derechos de titularidad (directamente o por intermedio de terceros) de cualquiera de las partes integrantes de la aplicación; no podrá tampoco crear nuevos productos o servicios derivados de la información y de los elementos contenidos en cualquiera de las partes integrantes de la aplicación, sin el permiso previo escrito expreso de los desarrolladores y propietarios de la aplicación.</p>

                        <p className="leading-relaxed">La aplicación puede contener información y contenido de terceros, que de igual forma es protegida por derechos de autor y por la normatividad vigente referente al copyright. En caso de presentarse alguna inconformidad o inquietud, se debe contactar a los desarrolladores y/o propietarios de Q’ruta por medio de la dirección de correo electrónico <a className="text-primary hover:underline" href="mailto:queruta@gmail.com">queruta@gmail.com</a>, con el fin de conocer el caso para hacer su análisis y aplicar los ajustes y correctivos a que haya lugar.</p>

                        <p className="leading-relaxed">El usuario que no esté de acuerdo con lo expuesto en alguna de las partes del presente documento, debe abstenerse de descargar y de usar la aplicación, ya que al descargarla y/o usarla, se aceptan integralmente sus términos y sus condiciones.</p>

                        <p className="leading-relaxed">Los desarrolladores y/o propietarios se reservan el derecho de modificar los términos y las condiciones de uso de la aplicación sin necesidad de dar previo aviso al usuario. Dichas modificaciones surtirán efecto una vez sean publicadas.</p>
                    </div>
                </div>
            </main>
        </div>
  )
}

export default TermsConditions;