import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Ticket, Users, Globe, Target, Monitor, Palette, Settings } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-300 to-emerald-400 opacity-20" />
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <img src="/images/golmania-logo.png" alt="GOLMANIA Logo" className="mx-auto h-32 w-auto mb-6" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-foreground mb-6 text-balance">
            {"¡Únete a la Aventura!"}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Vive la experiencia única de un joven futbolista que sueña con asistir a la final del Mundial. Colecciona
            los pedazos del ticket dorado en países llenos de historia futbolística.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Jugar Ahora
            </Button>
            <Link href="/objetivos">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Ver Objetivos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Game Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Historia del Videojuego
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  El protagonista es un joven y apasionado futbolista que sueña con la experiencia única de asistir a la
                  final del Mundial. Un día, un misterioso mensajero le entrega un{" "}
                  <span className="font-semibold text-accent">ticket dorado</span>, una reliquia que concede acceso al
                  gran evento.
                </p>
                <p className="text-muted-foreground">
                  Pero justo cuando está por tomarlo, un fuerte viento mágico lo rompe en pedazos y los esparce por
                  distintos países del mundo, cada uno con una rica historia futbolística.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/tematica">
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <Globe className="w-4 h-4" />
                    <span>Conoce más sobre la temática</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/game-story.png"
                alt="Historia del juego GOLMANIA"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Protagonist Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/protagonist.png"
                alt="Protagonista de GOLMANIA"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                <Users className="w-4 h-4 mr-2" />
                Protagonista
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Un Soñador Determinado
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Un joven apasionado por el fútbol, ágil y con un talento natural. No es un superhéroe, sino un soñador
                determinado que está dispuesto a recorrer el mundo para cumplir su sueño de asistir a la final del
                Mundial.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline">Apasionado</Badge>
                <Badge variant="outline">Ágil</Badge>
                <Badge variant="outline">Determinado</Badge>
                <Badge variant="outline">Talentoso</Badge>
              </div>
              <Link href="/mecanicas">
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <Settings className="w-4 h-4" />
                  <span>Descubre las mecánicas</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Locations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Explora Países Increíbles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Cada destino ofrece una experiencia única llena de cultura, historia y desafíos futbolísticos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mexico */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <img
                  src="/images/mexico-plaza.png"
                  alt="México - Plaza Colorida"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    Disponible Ahora
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">México - Plaza Colorida</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un nivel abierto y vibrante. El jugador explorará una plaza llena de puestos de comida, papel picado,
                  y una cancha de barrio rodeada de grafitis y murales.
                </p>
              </CardContent>
            </Card>

            {/* Neo-Japan */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <img
                  src="/images/neo-japan.png"
                  alt="Neo-Japón"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    <Globe className="w-4 h-4 mr-2" />
                    Próximamente
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">Neo-Japón</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un nivel de impactantes contrastes que fusiona el Japón de neón y rascacielos con la serenidad de sus
                  templos y jardines ancestrales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Características del Juego
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Ticket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Colecciona Pedazos del Ticket</h3>
              <p className="text-muted-foreground leading-relaxed">
                Encuentra y reúne todos los fragmentos del ticket dorado dispersos por el mundo.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Explora Países Únicos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Viaja por diferentes países, cada uno con su propia cultura y desafíos únicos.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Historia Emotiva</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vive una aventura llena de pasión por el fútbol y la determinación de un soñador.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Documentation Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Documentación del Juego
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explora todos los aspectos de GOLMANIA en detalle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/objetivos" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <Target className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Objetivos</h3>
                  <p className="text-sm text-muted-foreground">Descubre las metas principales del juego</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/interfaz" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                    <Monitor className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Interfaz</h3>
                  <p className="text-sm text-muted-foreground">Explora el diseño del menú principal</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/moodboard" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Palette className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Estilo Visual</h3>
                  <p className="text-sm text-muted-foreground">Conoce las inspiraciones visuales</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/mecanicas" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Settings className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Mecánicas</h3>
                  <p className="text-sm text-muted-foreground">Aprende cómo se juega GOLMANIA</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">¿Listo para la Aventura?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Únete a la búsqueda del ticket dorado y vive la experiencia futbolística más emocionante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Descargar Juego
            </Button>
            <Link href="/tematica">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Conocer Temática
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src="/images/golmania-logo.png" alt="GOLMANIA" className="h-12 w-auto" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">© 2024 GOLMANIA. Todos los derechos reservados.</p>
              <p className="text-sm text-muted-foreground mt-2">Creado con pasión por el fútbol y la aventura.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
