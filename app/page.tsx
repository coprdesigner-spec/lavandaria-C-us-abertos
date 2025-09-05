import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lavandaria%20Ceus%20abertos-W9ky4Di9DqlLed8n2vZPAz8gcRRjUG.png"
              alt="Lavandaria Céus Abertos - A limpeza é o nosso Trabalho"
              className="h-32 mx-auto mb-4"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frescura, <span className="text-cyan-500">Entregue.</span>
          </h1>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            A Lavandaria Céus Abertos oferece serviços de lavanderia de alta qualidade com agendamento fácil. Agende por
            WhatsApp hoje mesmo!
          </p>

          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full">🔄 Agendar Agora</Button>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nossa Missão & <span className="text-cyan-500">Valores</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Desde 2020, oferecemos soluções ecológicas, fáceis e convenientes para famílias ocupadas.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Ecológico</h3>
                <p className="text-gray-600 text-sm">
                  Produtos biodegradáveis e processos que respeitam o meio ambiente e não poluem.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Confiável</h3>
                <p className="text-gray-600 text-sm">
                  Qualidade garantida e cuidado especial com suas roupas mais preciosas.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Conveniente</h3>
                <p className="text-gray-600 text-sm">
                  Agendamento fácil via WhatsApp e entrega rápida para sua comodidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nossos <span className="text-cyan-500">Serviços</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de lavanderia para atender todas as suas necessidades com qualidade
            e praticidade.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Lavagem Completa */}
            <Card className="p-6 border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Lavagem Completa</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Serviço completo de lavagem, incluindo roupas de cama e banho, com produtos de alta qualidade.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <img src="/laundry-clothes.jpg" alt="Roupas" className="rounded" />
                  <img src="/cozy-bed-sheets.png" alt="Lençóis" className="rounded" />
                  <img src="/towels.jpg" alt="Toalhas" className="rounded" />
                  <img src="/shirts.jpg" alt="Camisas" className="rounded" />
                </div>
              </CardContent>
            </Card>

            {/* Limpeza a Seco */}
            <Card className="p-6 border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Limpeza a Seco</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Cuidado especial para roupas delicadas, ternos, vestidos e peças especiais.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <img src="/suit-jacket.png" alt="Terno" className="rounded" />
                  <img src="/classic-dress-shirt.png" alt="Camisa social" className="rounded" />
                  <img src="/elegant-formal-dress.png" alt="Vestido" className="rounded" />
                  <img src="/classic-wool-coat.png" alt="Casaco" className="rounded" />
                </div>
              </CardContent>
            </Card>

            {/* Remoção de Manchas */}
            <Card className="p-6 border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Remoção de Manchas</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tratamento especializado para remoção de manchas com técnicas avançadas de limpeza.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Passadoria */}
            <Card className="p-6 border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 002-2v-3a2 2 0 012-2h8a2 2 0 012 2v3a2 2 0 002 2"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Passadoria</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Suas roupas ficam com uma aparência impecável e pronta para usar.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            {/* Lavagem Ecológica */}
            <Card className="p-6 border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Lavagem Ecológica</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Produtos biodegradáveis e processos sustentáveis que cuidam do meio ambiente.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            {/* Recolha e Entrega */}
            <Card className="p-6 border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Recolha e Entrega ao Domicílio</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Serviço completo de recolha e entrega na sua casa para maior comodidade.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section with Family Image */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/black-family-with-clean-laundry-basket.jpg"
              alt="Família negra feliz com cesto de roupas limpas"
              className="rounded-lg mx-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pronto para começar?</h2>

          <p className="text-gray-600 mb-8">
            Entre em contato connosco para WhatsApp e faça uma reserva hoje mesmo para uma experiência incrível.
          </p>

          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full">
            📱 Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Números que <span className="text-cyan-500">Impressionam</span>
          </h2>
          <p className="text-gray-600 mb-12">Nossa dedicação refletida em resultados concretos</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold text-cyan-500 mb-1">+5.000 kg</div>
              <div className="text-sm text-gray-600">Roupas Processadas</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold text-cyan-500 mb-1">+1.000</div>
              <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold text-cyan-500 mb-1">+300</div>
              <div className="text-sm text-gray-600">Avaliações Positivas</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold text-cyan-500 mb-1">+2.500 kg</div>
              <div className="text-sm text-gray-600">Lavagem por Ano</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Experimentar
            <br />a Diferença?
          </h2>

          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 1.000 famílias que já confiam na Lavandaria Céus Abertos. Agendamento rápido e fácil pelo
            WhatsApp!
          </p>

          <Button className="bg-white text-cyan-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
            📱 Agendar pelo WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Map Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-center mb-4">Nossa Localização</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.123456789!2d-8.123456789!3d40.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA3JzI0LjQiTiA4wrAwNycyNC40Ilc!5e0!3m2!1spt!2spt!4v1234567890123!5m2!1spt!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Lavandaria Céus Abertos"
              />
            </div>
          </div>

          <div className="text-center">
            <div className="text-cyan-400 font-bold text-lg mb-4">Lavandaria Céus Abertos</div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578834145445"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>

            <div className="flex justify-center space-x-4 text-sm text-gray-400">
              <span>A limpeza é o nosso Trabalho</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
