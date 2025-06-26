import React, { useEffect, useState } from 'react';
import { ArrowLeft, Code, Copy, Eye } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Parse from 'parse';
import { connect } from '@/lib/server';

const Routes = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [embeddedCode, setEmbeddedCode] = useState('');
    const [cities, setCities] = useState<{name: string, id: string}[]>([]);
    const [companies, setCompanies] = useState<{name: string, id: string}[]>([]);

    useEffect(() => {
        if(cities.length === 0) initialize();
        if(selectedCity !== '' ) getCompanies();
    }, [selectedCity]);

    const initialize = async () => {
        await connect()
        getCities();
    }

    const generateCode = () => {
        if (selectedCity && selectedCompany) {
            const url = `https://routes.queruta.com/?city=${encodeURIComponent(selectedCity)}&company=${encodeURIComponent(selectedCompany)}`;
            setGeneratedUrl(url);

            const code = `<iframe src="${url}" width="400" height="500" frameborder="0" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"></iframe>`;
            setEmbeddedCode(code);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    const getCities = async () => {
        let result = await new Parse.Query('City').ascending('name').equalTo("status", true).find();
        setCities(result.map((city: any) => ({ name: city.get('name'), id: city.id })));
    }
    const getCompanies = async () => {
        const city = new Parse.Object('City');
        city.id = selectedCity;
        let result = await new Parse.Query('Company').equalTo('city', city).equalTo("status", true).ascending('name').find();
        setCompanies(result.map((company: any) => ({ name: company.get('name'), id: company.id })));
    }
    return (
        <div className="min-h-screen bg-gray-50 font-nunito">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        <a href="/" className="flex items-center text-primary hover:text-primary-light transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            <span className="font-medium">Volver a Q'ruta</span>
                        </a>
                        <h1 className="ml-8 text-2xl font-bold text-primary">Rutas Por Empresa</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Panel - Form */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-primary mb-6 flex items-center">
                            <Code className="w-5 h-5 mr-2" />
                            Configuración del Widget
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <Label htmlFor="city">Ciudad</Label>
                                <Select value={selectedCity} onValueChange={setSelectedCity}>
                                    <SelectTrigger className="w-full mt-1">
                                        <SelectValue placeholder="Selecciona una ciudad" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {cities.map((city) => (
                                            <SelectItem key={city.id} value={city.id}>
                                                {city.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {selectedCity && (
                                <div>
                                    <Label htmlFor="company">Empresa</Label>
                                    <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                                        <SelectTrigger className="w-full mt-1">
                                            <SelectValue placeholder="Selecciona una empresa" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {companies.map((company: any) => (
                                                <SelectItem key={company.id} value={company.id}>
                                                    {company.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}

                            <button
                                onClick={generateCode}
                                disabled={!selectedCity || !selectedCompany}
                                className="w-full bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Generar Código
                            </button>

                            {generatedUrl && (
                                <div className="space-y-4">
                                    <div>
                                        <Label>URL del Widget</Label>
                                        <div className="flex mt-1">
                                            <input
                                                type="text"
                                                value={generatedUrl}
                                                readOnly
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-sm"
                                            />
                                            <button
                                                onClick={() => copyToClipboard(generatedUrl)}
                                                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 border border-l-0 border-gray-300 rounded-r-md transition-colors"
                                            >
                                                <Copy className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <Label>Código HTML para Insertar</Label>
                                        <div className="flex mt-1">
                                            <textarea
                                                value={embeddedCode}
                                                readOnly
                                                rows={3}
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-sm font-mono resize-none"
                                            />
                                            <button
                                                onClick={() => copyToClipboard(embeddedCode)}
                                                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 border border-l-0 border-gray-300 rounded-r-md transition-colors self-start"
                                            >
                                                <Copy className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Panel - Preview */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-primary mb-6 flex items-center">
                            <Eye className="w-5 h-5 mr-2" />
                            Vista Previa
                        </h2>

                        <div className="flex justify-center">
                            {generatedUrl ? (
                                <iframe
                                    src={generatedUrl}
                                    width="400"
                                    height="500"
                                    frameBorder="0"
                                    style={{
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                    }}
                                ></iframe>
                                
                            ) : (
                                <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500" style={{ width: '300px', height: '500px' }}>
                                    <div className="text-center">
                                        <Eye className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                                        <p>Selecciona ciudad y empresa para ver la vista previa</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Routes;