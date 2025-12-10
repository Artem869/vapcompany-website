'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import {
  FaFileContract,
  FaShip,
  FaCode,
  FaGraduationCap
} from 'react-icons/fa';
import {
  prefersReducedMotion,
  fadeInVariants,
  slideUpVariants,
  optimizedViewport
} from '@/lib/animationUtils';

const services = [
  {
    icon: FaFileContract,
    title: 'Тендеры',
    description: 'Профессиональное сопровождение участия в государственных и коммерческих тендерах',
    color: 'from-blue-500 to-blue-600',
    link: '/services/tenders',
  },
  {
    icon: FaShip,
    title: 'Импорт из Китая',
    description: 'Полный цикл поставок товаров из Китая с гарантией качества и сроков',
    color: 'from-purple-500 to-purple-600',
    link: '/services/import',
  },
  {
    icon: FaCode,
    title: 'Веб-разработка',
    description: 'Создание современных сайтов и веб-приложений под ключ',
    color: 'from-green-500 to-green-600',
    link: '/services/web',
  },
  {
    icon: FaGraduationCap,
    title: 'Обучение',
    description: 'Курсы по тендерам и импорту из Китая от практиков с реальным опытом',
    color: 'from-orange-500 to-orange-600',
    link: '/education',
  },
];

const stats = [
  { value: '500+', label: 'Выполненных проектов' },
  { value: '2+', label: 'Лет на рынке' },
  { value: '95%', label: 'Процент побед в тендерах' },
  { value: '24/7', label: 'Поддержка клиентов' },
];

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 -z-10" />

        {/* Animated circles - отключаются при reduce motion */}
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-30 -z-10"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30 -z-10"
            />
          </>
        )}

        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 px-4">
                <span className="block">Профессиональные</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  бизнес-решения
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto px-4">
                Vap Company — ваш надежный партнер в области тендеров, импорта с Китая, веб-разработки и автоматизации бизнеса
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={() => setIsContactModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-2xl shadow-blue-600/50 flex items-center space-x-2"
              >
                <span>Начать сотрудничество</span>
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors shadow-lg"
              >
                Наши услуги
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Комплексные решения для развития вашего бизнеса
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={slideUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={optimizedViewport}
                  transition={{ delay: index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -8 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300"
                    >
                      <span>Подробнее</span>
                      <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Мы создаем долгосрочные партнерские отношения, основанные на доверии и профессионализме
              </p>
              <div className="space-y-4">
                {[
                  'Индивидуальный подход к каждому клиенту',
                  'Гарантия качества и соблюдение сроков',
                  'Прозрачная система ценообразования',
                  'Постоянная поддержка 24/7',
                  'Команда профессионалов с большим практическим опытом',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <HiCheckCircle className="w-6 h-6 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square w-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/logomain2.png"
                    alt="VAP Company логотип - профессиональные IT решения для бизнеса в Казахстане"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Свяжитесь с нами сегодня и получите бесплатную консультацию
          </p>
          <motion.button
            onClick={() => setIsContactModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-shadow"
          >
            Связаться с нами
          </motion.button>
        </motion.div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
