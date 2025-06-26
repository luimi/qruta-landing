import React, { useState } from 'react';
import { ArrowLeft, Code, Copy, Eye, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { connect } from '@/lib/server';
import Parse from 'parse';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useEffect } from 'react';

const NearRoutes = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [title, setTitle] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [showMap, setShowMap] = useState(true);
    const [iconUrl, setIconUrl] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [embeddedCode, setEmbeddedCode] = useState('');
    const [cities, setCities] = useState<{ name: string, id: string }[]>([]);

    useEffect(() => {
        initialize();
    }, []);

    const initialize = async () => {
        await connect()
        getCities();
    }

    const generateCode = () => {
        if (title && latitude && longitude) {
            const params = new URLSearchParams({
                city: selectedCity,
                title: title,
                latitude: latitude,
                longitude: longitude,
                hideMap: (!showMap).toString(),
                ...(iconUrl && { icon: iconUrl })
            });

            const url = `https://near.queruta.com/?${params.toString()}`;
            setGeneratedUrl(url);

            const code = `<iframe src="${url}" width="300" height="500" frameborder="0" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"></iframe>`;
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
                        <h1 className="ml-8 text-2xl font-bold text-primary">Rutas Cercanas</h1>
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
                            <div>
                                <Label htmlFor="title">Título</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Ej: Rutas cerca de mi ubicación"
                                    className="mt-1"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="latitude">Latitud</Label>
                                    <Input
                                        id="latitude"
                                        type="number"
                                        step="any"
                                        value={latitude}
                                        onChange={(e) => setLatitude(e.target.value)}
                                        placeholder="4.6097"
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="longitude">Longitud</Label>
                                    <Input
                                        id="longitude"
                                        type="number"
                                        step="any"
                                        value={longitude}
                                        onChange={(e) => setLongitude(e.target.value)}
                                        placeholder="-74.0817"
                                        className="mt-1"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="showMap"
                                    checked={showMap}
                                    onCheckedChange={(checked) => setShowMap(checked as boolean)}
                                />
                                <Label htmlFor="showMap">Mostrar mapa</Label>
                            </div>

                            <div>
                                <Label htmlFor="iconUrl">URL del ícono (opcional)</Label>
                                <Input
                                    id="iconUrl"
                                    type="url"
                                    value={iconUrl}
                                    onChange={(e) => setIconUrl(e.target.value)}
                                    placeholder="https://ejemplo.com/icono.png"
                                    className="mt-1"
                                />
                            </div>

                            <button
                                onClick={generateCode}
                                disabled={!title || !latitude || !longitude}
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
                                    width="300"
                                    height="500"
                                    frameBorder={0}
                                    style={{
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                    }}
                                ></iframe>
                            ) : (
                                <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500" style={{ width: '300px', height: '500px' }}>
                                    <div className="text-center">
                                        <Eye className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                                        <p>Completa los campos para ver la vista previa</p>
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

export default NearRoutes;