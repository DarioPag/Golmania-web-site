import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Plane, MapPin, Heart } from "lucide-react"

export default function TematicaPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 via-orange-300/20 to-yellow-400/20" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Globe className="w-4 h-4 mr-2" />
              Temática del Videojuego
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 text-balance">Un Viaje Global</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Descubre la rica temática que convierte GOLMANIA en una celebración mundial del fútbol
            </p>
          </div>
        </div>
      </section>

      {/* Main Theme Image */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="/images/game-theme.png" alt="Temática del Videojuego GOLMANIA" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Core Theme */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Aventura y Deportes en 3D</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              GOLMANIA es un videojuego de aventura y deportes en 3D que se desarrolla en un mundo vibrante y
              semi-realista. Combina mecánicas de plataformas, exploración y minijuegos de habilidad, llevando al
              jugador a un viaje global para celebrar la cultura del fútbol.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/20 transition-colors">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Aventura en 3D</h3>
              <p className="text-sm text-muted-foreground">Exploración inmersiva en entornos tridimensionales</p>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Globe className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Deportes / Minijuegos</h3>
              <p className="text-sm text-muted-foreground">Desafíos futbolísticos únicos en cada país</p>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                <MapPin className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Exploración Cultural</h3>
              <p className="text-sm text-muted-foreground">Descubre la riqueza cultural de cada destino</p>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Plane className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Plataformas</h3>
              <p className="text-sm text-muted-foreground">Mecánicas de salto y navegación fluidas</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultural Journey */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Un Viaje Cultural Auténtico</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Diversidad Cultural</h3>
                    <p className="text-muted-foreground">
                      Cada país visitado presenta su propia identidad cultural única, desde las coloridas plazas
                      mexicanas hasta los contrastantes paisajes de Neo-Japón.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Pasión Futbolística</h3>
                    <p className="text-muted-foreground">
                      El fútbol actúa como el hilo conductor que une todas las culturas, mostrando cómo este deporte
                      trasciende fronteras y conecta corazones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Mundo Semi-Realista</h3>
                    <p className="text-muted-foreground">
                      Un estilo visual que combina realismo con elementos fantásticos, creando un mundo creíble pero
                      mágico donde todo es posible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="text-2xl font-bold text-foreground mb-6">Elementos Temáticos Clave</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-primary text-primary-foreground">Viaje</Badge>
                    <span className="text-muted-foreground">Exploración de diferentes países y culturas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-secondary text-secondary-foreground">Sueños</Badge>
                    <span className="text-muted-foreground">La búsqueda de un objetivo personal significativo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-accent text-accent-foreground">Fútbol</Badge>
                    <span className="text-muted-foreground">El deporte como lenguaje universal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline">Aventura</Badge>
                    <span className="text-muted-foreground">Desafíos emocionantes en cada destino</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline">Crecimiento</Badge>
                    <span className="text-muted-foreground">Desarrollo personal a través del viaje</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Style */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Estilo Visual y Narrativo</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4">Mundo Vibrante</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cada ubicación está diseñada con colores intensos y detalles culturales auténticos que reflejan la
                personalidad única de cada país visitado.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Colorido</Badge>
                <Badge variant="outline">Auténtico</Badge>
                <Badge variant="outline">Detallado</Badge>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4">Narrativa Emotiva</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La historia se centra en temas universales como la perseverancia, los sueños y la conexión humana a
                través del deporte más popular del mundo.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Inspiradora</Badge>
                <Badge variant="outline">Universal</Badge>
                <Badge variant="outline">Emotiva</Badge>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4">Mecánicas Integradas</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los elementos de juego están perfectamente integrados con la narrativa, donde cada desafío tiene sentido
                dentro del contexto cultural del país.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Coherente</Badge>
                <Badge variant="outline">Contextual</Badge>
                <Badge variant="outline">Inmersivo</Badge>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-4">Experiencia Global</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GOLMANIA ofrece una ventana a diferentes culturas del mundo, promoviendo la comprensión y apreciación de
                la diversidad global.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Educativo</Badge>
                <Badge variant="outline">Inclusivo</Badge>
                <Badge variant="outline">Diverso</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
            Una Aventura que Trasciende Fronteras
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            GOLMANIA no es solo un juego sobre fútbol, es una celebración de la diversidad cultural, los sueños
            compartidos y el poder unificador del deporte más amado del mundo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="text-sm px-4 py-2">Aventura Global</Badge>
            <Badge className="text-sm px-4 py-2">Cultura Auténtica</Badge>
            <Badge className="text-sm px-4 py-2">Sueños Realizados</Badge>
            <Badge className="text-sm px-4 py-2">Fútbol Universal</Badge>
          </div>
        </div>
      </section>
    </div>
  )
}
