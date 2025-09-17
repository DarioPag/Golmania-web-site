import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, ImageIcon, Brush, Sparkles } from "lucide-react"

export default function MoodboardPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-300/20 to-orange-400/20" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Palette className="w-4 h-4 mr-2" />
              Estilo Visual
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 text-balance">Moodboard</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Explora las referencias visuales e inspiraciones que dan forma al mundo vibrante de GOLMANIA
            </p>
          </div>
        </div>
      </section>

      {/* Main Moodboard Image */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ImageIcon src="/images/moodboard.png" alt="Moodboard visual de GOLMANIA" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Visual Elements */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Elementos Visuales Clave</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cada imagen representa un aspecto fundamental del diseño visual del juego
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                  <Brush className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Street Art</h3>
                <p className="text-sm text-muted-foreground">
                  Grafitis vibrantes y arte urbano que definen la estética del juego
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <ImageIcon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Espacios Urbanos</h3>
                <p className="text-sm text-muted-foreground">
                  Plazas coloridas y canchas de barrio llenas de vida y cultura
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Neón y Tecnología</h3>
                <p className="text-sm text-muted-foreground">
                  Elementos cyberpunk y futuristas para los niveles de Neo-Japón
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Palette className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Cultura Tradicional</h3>
                <p className="text-sm text-muted-foreground">Templos, jardines y elementos culturales auténticos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Inspiration */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Inspiración de Diseño</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Fusión de Estilos</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Arte Urbano:</strong> Grafitis coloridos y murales que reflejan
                    la pasión futbolística de cada región
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Arquitectura Diversa:</strong> Desde plazas mexicanas hasta
                    rascacielos japoneses
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Contrastes Visuales:</strong> Tradición y modernidad conviviendo
                    en cada escenario
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Paleta Vibrante:</strong> Colores intensos que transmiten
                    energía y emoción
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <h4 className="text-xl font-bold text-foreground mb-4">Objetivo Visual</h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Crear un mundo semi-realista que celebre la diversidad cultural del fútbol global, donde cada
                  ubicación tenga su propia personalidad visual distintiva pero mantenga la coherencia estética del
                  universo GOLMANIA.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vibrante</Badge>
                  <Badge variant="outline">Cultural</Badge>
                  <Badge variant="outline">Urbano</Badge>
                  <Badge variant="outline">Auténtico</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Paleta de Colores</h2>
          <p className="text-lg text-muted-foreground mb-12">Los colores que definen la identidad visual de GOLMANIA</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-full h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-3 shadow-lg"></div>
              <p className="text-sm font-medium text-foreground">Azul Vibrante</p>
              <p className="text-xs text-muted-foreground">Cielos y agua</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-3 shadow-lg"></div>
              <p className="text-sm font-medium text-foreground">Verde Energético</p>
              <p className="text-xs text-muted-foreground">Campos y naturaleza</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-3 shadow-lg"></div>
              <p className="text-sm font-medium text-foreground">Naranja Cálido</p>
              <p className="text-xs text-muted-foreground">Atardeceres y pasión</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-3 shadow-lg"></div>
              <p className="text-sm font-medium text-foreground">Púrpura Neón</p>
              <p className="text-xs text-muted-foreground">Tecnología y futuro</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg mb-3 shadow-lg"></div>
              <p className="text-sm font-medium text-foreground">Amarillo Solar</p>
              <p className="text-xs text-muted-foreground">Alegría y celebración</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
